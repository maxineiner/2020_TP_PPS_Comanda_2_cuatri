import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { Usuario } from 'src/app/clases/usuario';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-escanerQR',
  templateUrl: './escaner.component.html',
  styleUrls: ['./escaner.component.scss'],
})
export class EscanerQRComponent implements OnInit
{
  @Input() usuario: Usuario;

  constructor(private escanerQR: CodigoQRService, private router: Router,
    private rolService: RolesService) { }

  ngOnInit() { }

  async escanear()
  {
    // Ya debe existir un usuario logueado
    const scan = await this.escanerQR.escanear("Escanee el código QR", 'QR_CODE');

    this.procesarQR(scan);
  }

  procesarQR(scan: BarcodeScanResult)
  {
    let textoQR = scan.text.split(':');
    let entidad = textoQR[1];
    let id = textoQR[2];

    switch (entidad)
    {
      case 'Mesa':
        this.router.navigate(['/info-mesa', id]);
        break;
      case 'Producto':
        break;
      case 'Ingreso':
        this.router.navigate(['/home/info-ingreso']);
        break;

    }
  }
}
