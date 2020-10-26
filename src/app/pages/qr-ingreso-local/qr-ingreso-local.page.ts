import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Cliente } from 'src/app/clases/cliente';
import { Mesa } from 'src/app/clases/mesa';
import { IListaEspera } from 'src/app/interfaces/IListaEspera';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-qr-ingreso-local',
  templateUrl: './qr-ingreso-local.page.html',
  styleUrls: ['./qr-ingreso-local.page.scss'],
})
export class QrIngresoLocalPage implements OnInit
{
  reservas:Array<any>;
  mesas:Array<Mesa>;
  listaEspera:Array<IListaEspera>;
  constructor(
    private scannerService: CodigoQRService,
    private mesasService:MesaService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit()
  {
  }

  escanear()
  {
    this.scannerService.escanear("Escanear qr ingreso", 'PDF_417').then((data) =>
    {
      console.log(data);


      // VERIFICO CODIGO QR
      if (data.text == "IngresoLocal")
      {
        //Buscar usuario actual del servicio de usuarios o auth o donde lo pongan y verificar con los datos que se guarden (seguramente el email) y perfil
        let usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario"));

        if (usuarioLogueado instanceof Cliente)//si es un cliente...
        {
          //puede ser cliente o anonimo 
          //ademas puede tener una mesa reservada o no
          let tieneMesa: boolean = false;
          let nroMesa: number;
          //deberia checkiar las reservas 
          this.reservas.forEach(reserva =>
          {
            if (reserva.cliente == usuarioLogueado.correo)
            {
              tieneMesa = true;
              nroMesa = reserva.mesa.numero;
            }
          });
          if (tieneMesa)
          {
            this.presentToast("Usted tiene asignada la mesa" + nroMesa, 2000);
          } else //No tiene mesa le asigno una
          {
            let estaEnLista: boolean = false;
            //verifico si ya esta en la lista de espera (en caso de que escanee dos veces)
            this.listaEspera.forEach(lista =>
            {
              if (lista.cliente.dni == usuarioLogueado.dni) ///Deberia verificar por correo que es individual por usuario. Si es anonimo (ver las opciones de FireAuth para usuarios anonimos).
              {
                estaEnLista = true;
              }
            });
            if (estaEnLista)
            {
              this.presentToast("Usted ya se encuentra en lista de espera", 2000);
            } else
            {
              // lo pongo en la lista con sus datos
              let datos: any = { 'cliente':usuarioLogueado};
              //Pushear la lista a la base
              //Y lo mando a la page de encuestas de antiguos usuario
            }
          }
        } else// Es un empleado
        {
          //
        }
      } else //No es un codigo de ingreso
      {
        this.presentToast('El codigo QR no pertenece al ingreso', 2000);
      }
    }, (err) =>//Onrejected qr scaner
    {
      console.log("Error: " + err);
    });

    this.traerListaEspera();
  }

  async presentToast(message, duration)
  {
    const toast = await this.toastController.create({
      message,
      duration,
    });
    toast.present();
  }
  traerMesas()
  {
    this.mesasService.leer().then(mesas =>
    {
      this.mesas = mesas;
    });
  }
  TraerReservas(){

  }

  traerListaEspera()
  {
    //traer lalista de espera.
  }

}
