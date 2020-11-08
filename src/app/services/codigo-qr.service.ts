import { Injectable } from '@angular/core';
import { IEscaneable } from '../interfaces/IEscaneable';
import { ImagenService } from './imagen.service';
import { Imagen } from '../clases/imagen';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx/'


export enum Formato
{
  PDF_417 = "PDF_417", // Formato del DNI
  QR_CODE = "QR_CODE"  // Formato de QR común 
}

@Injectable({
  providedIn: 'root'
})
export class CodigoQRService
{

  constructor(private barcodeScanner: BarcodeScanner, private imagenService: ImagenService)
  { }

  /**
   * Método para leer un código QR
   * @param prompt Mensaje para mostrar al Usuario
   * @param formats Formato de lectura : PDF_417 , QR_CODE
   * @returns Retorna la informacion del QR como string
   */
  public async escanear(prompt, formats): Promise<BarcodeScanResult>
  {
    console.log("Leer QR");
    let scannerOpts: BarcodeScannerOptions = {
      prompt,
      formats,
      showTorchButton: true,
    };

    const scan = await this.barcodeScanner.scan(scannerOpts);

    return scan;
  }

  /**
   * Método para generar QR
   * @param elemento Objeto con data para generar QR
   * @param id UID que identificará al objeto
   */
  public async generar(elemento: IEscaneable, id: string)
  {
    console.log(elemento);

    let data = `BEGIN:${elemento.constructor.name}%3A${id}`;
    let carpeta = elemento.constructor.name.toLowerCase();

    // Se genera el código QR
    const ruta = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=300x300&format=svg`;
    // Se convierte URL del código en string BASE64
    const base64 = await this.convertirUrlABase64(ruta, "image/jpeg");
    // Se crea Imagen y se guarda en Storage
    let imagen = Imagen.CrearImagen(id, base64.slice(23), "_", new Date().toUTCString(), "_");
    const imagenQR = await this.imagenService.guardarImagen(imagen, `qr-${carpeta}`);
    // Se asocia URL del código QR 
    elemento.codigoQR = await imagenQR.ref.getDownloadURL();

  }

  /**
   * Método para convertir URL de imagen en string base64
   * @param url Ruta de la imagen para convertir en base64
   * @param outputFormat Formato de la imagen
   */
  convertirUrlABase64(url, outputFormat)
  {
    return new Promise<string>((resolve, reject) =>
    {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function ()
      {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS');
        let ctx = canvas.getContext('2d');
        let dataURL: string;

        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        //callback(dataURL);
        canvas = null;
        resolve(dataURL);
      };
      img.src = url;
    });
  }

}
