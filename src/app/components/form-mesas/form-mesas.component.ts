import { Component, Input, OnInit } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { Imagen } from 'src/app/clases/imagen'
import { Mesa } from 'src/app/clases/mesa'
import { ImagenService } from 'src/app/services/imagen.service'
import { MesaService } from 'src/app/services/mesa.service'

enum OpcionForm
{
    ALTA = 'Alta',
    MODIFICACION = 'Modificación',
    BAJA = 'Baja',
}

@Component({
    selector: 'app-form-mesas',
    templateUrl: './form-mesas.component.html',
    styleUrls: ['./form-mesas.component.scss'],
})
export class FormMesasComponent implements OnInit
{
    @Input() opcion: OpcionForm
    @Input() mesa: Mesa
    popoverOptions = {
        header: 'Seleccione el tipo',
        translucent: true,
    }
    codigoQR: any
    auxiliarFoto: Imagen
    imgPreview: string

    constructor(
        private mesaService: MesaService,
        private imagenService: ImagenService,
        private toastController: ToastController
    ) { }

    ngOnInit(): void
    {
        if (this.opcion == 'Alta')
        {
            this.mesa = new Mesa()
        }
    }

    /**
     * Método para tomar foto y previsualizar
     */
    async sacarFoto()
    {
        const foto = await this.imagenService.sacarFoto()

        this.imgPreview = `data:image/jpeg;base64,${foto.base64}`

        this.auxiliarFoto = new Imagen()
        this.auxiliarFoto.base64 = foto.base64
        this.auxiliarFoto.fecha = foto.fecha
    }

    /**
     * Alta de mesa
     */
    async crearMesa()
    {
        if (this.mesa && !this.mesa.id)
        {
            // Se guarda imagen en DB y Storage
            const imagenGuardada = await this.imagenService.crearUnaImagen(
                this.auxiliarFoto,
                '/mesas'
            )
            this.mesa.foto = imagenGuardada

            // Alta de mesa en DB
            this.mesaService
                .crear(this.mesa)
                .then(() => this.presentToast('Alta exitosa', 2000))
                .catch(() =>
                    this.presentToast('No se pudo realizar el alta', 2000)
                )
        } else
        {
            this.presentToast('Mesa existente', 2000)
        }
    }

    /**
     *  Modificacion de mesa
     */
    async modificarMesa()
    {
        console.log('Modificar Mesa')

        if (this.mesa)
        {
            // Si se carga nueva Imagen
            if (this.auxiliarFoto)
            {
                // Se guarda imagen en DB y Storage
                const imagenGuardada = await this.imagenService.crearUnaImagen(
                    this.auxiliarFoto,
                    '/mesas'
                )
                this.mesa.foto = imagenGuardada
            }
            // Se actualiza Mesa en DB
            this.mesaService
                .actualizar(this.mesa)
                .then(() => this.presentToast('Modificación exitosa', 2000))
                .catch(() => this.presentToast('No se pudo modificar', 2000))
        }
    }

    /**
     * Baja lógica de mesa
     */
    borrarMesa()
    {
        console.log('Baja de mesa')
        if (this.mesa)
        {
            // TODO: Borrar imagen de DB y Storage
            // this.imagenService.borrar(this.mesa.foto)
            this.mesaService
                .borrar(this.mesa)
                .then(() => this.presentToast('Baja realizada', 2000))
                .catch(() =>
                    this.presentToast('No se pudo realizar baja', 2000)
                )
        }
    }

    // Toast para notificaciones
    async presentToast(message, duration)
    {
        const toast = await this.toastController.create({
            message,
            duration,
        })
        toast.present()
    }
}
