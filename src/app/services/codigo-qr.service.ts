import { Injectable } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { IEscaneable } from '../interfaces/IEscaneable';

@Injectable({
  providedIn: 'root'
})
export class CodigoQRService {
  escanerQRref: any;

  constructor(public platform: Platform, private escanerQR: QRScanner) 
  {
    this.platform.backButton.subscribeWithPriority(0,()=>
      {
        document.getElementsByTagName("body")[0].style.opacity = "1";
        this.escanerQRref.unsubscribe();
      });    
  }

  public escanear() 
  {
    console.log("Leer QR");
    
    this.escanerQR.prepare().then((status:QRScannerStatus) => 
    {
      if(status.authorized)
      {
        this.escanerQR.show();
        document.getElementsByTagName("body")[0].style.opacity = "0";

        this.escanerQRref = this.escanerQR.scan().subscribe((scan) =>
        {
          // Información del QR decodificado
          console.log(scan);
          
          this.escanerQR.show();
          document.getElementsByTagName("body")[0].style.opacity = "1";
               
          this.escanerQR.hide();
          this.escanerQRref.unsubscribe();
        },
        (error) => console.log(error));
      }
    })
  }

  public generar(elemento: IEscaneable, id:string)
  {
    // The text to store within the QR code (URL encoded, PHP programmers may use urlencode()).
    let data = `BEGIN:${elemento.constructor.name}ID%3A${id}`;

    elemento.codigoQR = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=66x66&format=svg`;

    console.log(elemento);
  }

  public configurar()
  {
    this.escanerQR.openSettings();
  }
}
