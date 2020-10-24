import { Injectable } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { IEscaneable } from '../interfaces/IEscaneable';

@Injectable({
  providedIn: 'root'
})
export class CodigoQRService
{
  private escanerQRref: any;

  /**
   * Se le adiciona al backbutton la funcion de cancelar el escaneo
   * si se presiona para retornar a la pagina anterior
   * 
   * @param platform Instancia del dispositivo donde se ejecuta el código (Web, Native)
   * @param escanerQR (Instancia del plugin de lector QR)
   */
  constructor(private platform: Platform, private escanerQR: QRScanner) 
  {
    this.platform.backButton.subscribeWithPriority(0, () =>
    {
      document.getElementsByTagName("body")[0].style.opacity = "1";
      this.escanerQRref.unsubscribe();
    });
  }

  /**
   * Método para leer un código QR
   * @returns Data contenida por código QR
   */
  public escanear() 
  {
    console.log("Leer QR");
    let data = "";

    this.escanerQR.prepare().then((status: QRScannerStatus) => 
    {
      if (status.authorized)
      {
        this.escanerQR.show();
        // Transparencia del layout para escaner
        document.getElementsByTagName("body")[0].style.opacity = "0";

        this.escanerQRref = this.escanerQR.scan().subscribe((scan) =>
        {
          // Información del QR decodificado
          console.log(scan);
          data = scan;

          this.escanerQR.show();
          document.getElementsByTagName("body")[0].style.opacity = "1";

          this.escanerQR.hide();
          this.escanerQRref.unsubscribe();
        },
          (error) => console.log(error));
      }
    })
    return data;
  }

  /**
   * Método para generar QR
   * - !Se debe mejorar funcionalidad e integrar con DB -
   * @param elemento Objeto con data para generar QR
   * @param id UID que identificará al objeto
   */
  public generar(elemento: IEscaneable, id: string)
  {
    // The text to store within the QR code (URL encoded, PHP programmers may use urlencode()).
    let data = `BEGIN:${elemento.constructor.name}ID%3A${id}`;

    elemento.codigoQR = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=66x66&format=svg`;

    console.log(elemento);
  }

  /**
   * Método para otorgar permisos a plugin 
   * - !Este método es opcional pero requiere testear en dispositivo
   */
  public configurar()
  {
    this.escanerQR.openSettings();
  }
}
