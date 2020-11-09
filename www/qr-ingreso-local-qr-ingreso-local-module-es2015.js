(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-ingreso-local-qr-ingreso-local-module"],{

/***/ "473k":
/*!***************************************************************************!*\
  !*** ./src/app/pages/qr-ingreso-local/qr-ingreso-local-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: QrIngresoLocalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrIngresoLocalPageRoutingModule", function() { return QrIngresoLocalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _qr_ingreso_local_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qr-ingreso-local.page */ "JM1O");




const routes = [
    {
        path: '',
        component: _qr_ingreso_local_page__WEBPACK_IMPORTED_MODULE_3__["QrIngresoLocalPage"]
    }
];
let QrIngresoLocalPageRoutingModule = class QrIngresoLocalPageRoutingModule {
};
QrIngresoLocalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QrIngresoLocalPageRoutingModule);



/***/ }),

/***/ "IcSh":
/*!*******************************************************************!*\
  !*** ./src/app/pages/qr-ingreso-local/qr-ingreso-local.module.ts ***!
  \*******************************************************************/
/*! exports provided: QrIngresoLocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrIngresoLocalPageModule", function() { return QrIngresoLocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _qr_ingreso_local_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qr-ingreso-local-routing.module */ "473k");
/* harmony import */ var _qr_ingreso_local_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr-ingreso-local.page */ "JM1O");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let QrIngresoLocalPageModule = class QrIngresoLocalPageModule {
};
QrIngresoLocalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _qr_ingreso_local_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrIngresoLocalPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_qr_ingreso_local_page__WEBPACK_IMPORTED_MODULE_6__["QrIngresoLocalPage"]]
    })
], QrIngresoLocalPageModule);



/***/ }),

/***/ "JM1O":
/*!*****************************************************************!*\
  !*** ./src/app/pages/qr-ingreso-local/qr-ingreso-local.page.ts ***!
  \*****************************************************************/
/*! exports provided: QrIngresoLocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrIngresoLocalPage", function() { return QrIngresoLocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_qr_ingreso_local_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./qr-ingreso-local.page.html */ "Pa3u");
/* harmony import */ var _qr_ingreso_local_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-ingreso-local.page.scss */ "qU9D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/clases/cliente */ "tDE8");
/* harmony import */ var src_app_services_codigo_qr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/codigo-qr.service */ "qko+");
/* harmony import */ var src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/mesa.service */ "R+YK");









let QrIngresoLocalPage = class QrIngresoLocalPage {
    constructor(scannerService, mesasService, router, toastController) {
        this.scannerService = scannerService;
        this.mesasService = mesasService;
        this.router = router;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    escanear() {
        this.scannerService.escanear("Escanear qr ingreso", 'PDF_417').then((data) => {
            console.log(data);
            // VERIFICO CODIGO QR
            if (data.text == "IngresoLocal") {
                //Buscar usuario actual del servicio de usuarios o auth o donde lo pongan y verificar con los datos que se guarden (seguramente el email) y perfil
                let usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario"));
                if (usuarioLogueado instanceof src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"]) //si es un cliente...
                 {
                    //puede ser cliente o anonimo 
                    //ademas puede tener una mesa reservada o no
                    let tieneMesa = false;
                    let nroMesa;
                    //deberia checkiar las reservas 
                    this.reservas.forEach(reserva => {
                        if (reserva.cliente == usuarioLogueado.correo) {
                            tieneMesa = true;
                            nroMesa = reserva.mesa.numero;
                        }
                    });
                    if (tieneMesa) {
                        this.presentToast("Usted tiene asignada la mesa" + nroMesa, 2000);
                    }
                    else //No tiene mesa le asigno una
                     {
                        let estaEnLista = false;
                        //verifico si ya esta en la lista de espera (en caso de que escanee dos veces)
                        this.listaEspera.forEach(lista => {
                            if (lista.cliente.dni == usuarioLogueado.dni) ///Deberia verificar por correo que es individual por usuario. Si es anonimo (ver las opciones de FireAuth para usuarios anonimos).
                             {
                                estaEnLista = true;
                            }
                        });
                        if (estaEnLista) {
                            this.presentToast("Usted ya se encuentra en lista de espera", 2000);
                        }
                        else {
                            // lo pongo en la lista con sus datos
                            let datos = { 'cliente': usuarioLogueado };
                            //Pushear la lista a la base
                            //Y lo mando a la page de encuestas de antiguos usuario
                        }
                    }
                }
                else // Es un empleado
                 {
                    //
                }
            }
            else //No es un codigo de ingreso
             {
                this.presentToast('El codigo QR no pertenece al ingreso', 2000);
            }
        }, (err) => //Onrejected qr scaner
         {
            console.log("Error: " + err);
        });
        this.traerListaEspera();
    }
    presentToast(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
            });
            toast.present();
        });
    }
    traerMesas() {
        this.mesasService.leer().then(mesas => {
            this.mesas = mesas;
        });
    }
    TraerReservas() {
    }
    traerListaEspera() {
        //traer lalista de espera.
    }
};
QrIngresoLocalPage.ctorParameters = () => [
    { type: src_app_services_codigo_qr_service__WEBPACK_IMPORTED_MODULE_7__["CodigoQRService"] },
    { type: src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_8__["MesaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
QrIngresoLocalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qr-ingreso-local',
        template: _raw_loader_qr_ingreso_local_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_ingreso_local_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QrIngresoLocalPage);



/***/ }),

/***/ "Pa3u":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qr-ingreso-local/qr-ingreso-local.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Qr Ingreso\" paginaAnterior='/tabs/tab1'></app-header>\n\n<ion-content>\n  <ion-button color=\"primary\" expand=\"block\" (click)=\"escanear()\">Escanear</ion-button>\n</ion-content>");

/***/ }),

/***/ "qU9D":
/*!*******************************************************************!*\
  !*** ./src/app/pages/qr-ingreso-local/qr-ingreso-local.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3FyLWluZ3Jlc28tbG9jYWwvcXItaW5ncmVzby1sb2NhbC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=qr-ingreso-local-qr-ingreso-local-module-es2015.js.map