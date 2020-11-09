(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-mesa-info-mesa-module"],{

/***/ "+Hsv":
/*!*****************************************************!*\
  !*** ./src/app/pages/info-mesa/info-mesa.module.ts ***!
  \*****************************************************/
/*! exports provided: InfoMesaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMesaPageModule", function() { return InfoMesaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _info_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-mesa-routing.module */ "g65l");
/* harmony import */ var _info_mesa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-mesa.page */ "aalK");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let InfoMesaPageModule = class InfoMesaPageModule {
};
InfoMesaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _info_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoMesaPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_info_mesa_page__WEBPACK_IMPORTED_MODULE_6__["InfoMesaPage"]]
    })
], InfoMesaPageModule);



/***/ }),

/***/ "Ig2y":
/*!******************************************!*\
  !*** ./src/app/services/date.service.ts ***!
  \******************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DateService = class DateService {
    constructor() { }
    /**
     * convierte un objeto Date a timeStamp
     * @param date
     */
    toTimeStamp(date) {
        return date.getTime() / 1000000;
    }
    toDate(timeStamp) {
        let date = new Date(timeStamp * 1000000);
        return date;
    }
    /**
     * Convierte fecha en formato ISO a objeto Date con fecha local
     * @param stringISO Fecha en formato ISO string
     */
    getDateObject(stringISO) {
        let timeStamp = Date.parse(stringISO);
        let fecha = new Date(timeStamp);
        let anio = fecha.getFullYear();
        let mes = fecha.getMonth();
        let dia = fecha.getDate();
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let newDate = new Date(anio, mes - 1, dia, horas, minutos, 0, 0);
        return newDate;
    }
    /**Funcion para agregar minutos a un timeStamp
   * @param timeStamp TimeStamp
   * @param minutosAAgregar Minutos a agregar
   * @returns TimeStamp con los minutos agregados
   */
    sumarMinutos(timeStamp, minutosASumar) {
        let nuevoHorario = timeStamp + (minutosASumar * 60);
        return nuevoHorario;
    }
    restarMinutos(timeStamp, minutosARestar) {
        let nuevoHorario = timeStamp - (minutosARestar * 60);
        return nuevoHorario;
    }
    /**
     * Obtiene fecha local en formato ISO string
     * @param date
     */
    getIsoLocalTime(date) {
        let isoLocalTime = date.getFullYear().toString() + '-';
        if ((date.getMonth() + 1) < 10) {
            isoLocalTime += '0' + (date.getMonth() + 1) + '-';
        }
        else {
            isoLocalTime += (date.getMonth() + 1) + '-';
        }
        if (date.getDate() < 10) {
            isoLocalTime += '0' + (date.getDate()) + 'T';
        }
        else {
            isoLocalTime += date.getDate() + 'T';
        }
        isoLocalTime += date.toLocaleTimeString();
        console.log('Mi ISOtimeString', isoLocalTime);
        return isoLocalTime;
    }
};
DateService.ctorParameters = () => [];
DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DateService);



/***/ }),

/***/ "PZA/":
/*!*****************************************************!*\
  !*** ./src/app/pages/info-mesa/info-mesa.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm8tbWVzYS9pbmZvLW1lc2EucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "USx0":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info-mesa/info-mesa.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"fondo\">\n  <ion-grid fixed id=\"container\" class=\"contenido\">\n    <ion-row *ngIf=\"pedido\">\n      <ion-col size=\"12\" class=\"ion-justify-content-center\">\n        <!-- Aca debería ir el componente con la reserva actual -->\n        <app-detalle-reserva [reserva]=\"pedido\" class=\"ion-no-margin\"></app-detalle-reserva>\n        <app-detalle-pedido [pedido]=\"pedido\" class=\"ion-no-margin\"></app-detalle-pedido>\n\n        <ion-button (click)=\"consultarAlMozo()\" expand=\"full\"\n                    class=\"ion-no-margin\" color=\"tertiary\" size=\"large\">\n          Consultar al mozo\n        </ion-button>\n        <ion-button (click)=\"verEncuesta()\" expand=\"full\"\n                    class=\"ion-no-margin\" color=\"dark\" size=\"large\">\n          Realizar encuesta\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!pedido\">\n      <ion-col size=\"12\">\n        <div id=\"container\" class=\"contenido\">\n          <ion-label>\n            <h1>\n              <strong>Usted no está asignado a esta mesa</strong>\n            </h1>\n          </ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "aalK":
/*!***************************************************!*\
  !*** ./src/app/pages/info-mesa/info-mesa.page.ts ***!
  \***************************************************/
/*! exports provided: InfoMesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMesaPage", function() { return InfoMesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_info_mesa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./info-mesa.page.html */ "USx0");
/* harmony import */ var _info_mesa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-mesa.page.scss */ "PZA/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/clases/pedido */ "tUIk");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cliente.service */ "teE5");
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/date.service */ "Ig2y");
/* harmony import */ var src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/mesa.service */ "R+YK");
/* harmony import */ var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/pedido.service */ "KG2h");
/* harmony import */ var _sala_chat_sala_chat_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sala-chat/sala-chat.page */ "Qndh");













let InfoMesaPage = class InfoMesaPage {
    constructor(route, router, mesaService, clienteService, pedidoService, dateService, modalController) {
        this.route = route;
        this.router = router;
        this.mesaService = mesaService;
        this.clienteService = clienteService;
        this.pedidoService = pedidoService;
        this.dateService = dateService;
        this.modalController = modalController;
        this.pedido = new src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_6__["Pedido"]();
        //this.buscarReserva("-MLOssaEI7D5pr7Q8OMl");
    }
    ngOnInit() {
        this.cliente = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"].usuario;
        // Se recibe id de Mesa asignada y id de Cliente
        // this.route.params.subscribe(params =>
        // {
        //   console.log(params['id']);
        //   this.buscarReserva(params['id']);
        // });
        // Codigo para testing
        this.buscarReserva("-MLOssaEI7D5pr7Q8OMl");
    }
    buscarReserva(id) {
        let horaActual = new Date();
        // Se debería traer Entidad con información sobre Pedido y Cliente de Mesa
        this.pedido = src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_11__["PedidoService"].pedidos.filter(pedido => {
            console.log(pedido);
            // Agregar validacion de hora actual
            if (pedido.cliente && pedido.mesa) {
                return pedido.estado == src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_6__["EstadoPedido"].ASIGNADO &&
                    pedido.mesa.id === id &&
                    pedido.cliente.id == this.cliente.id;
            }
        })[0];
        console.log(this.pedido);
    }
    confirmarRecepcion() {
    }
    pagarCuenta() {
    }
    verEncuesta() {
        console.log("Ver encuesta");
    }
    consultarAlMozo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _sala_chat_sala_chat_page__WEBPACK_IMPORTED_MODULE_12__["SalaChatPage"],
            });
            yield modal.present();
        });
    }
    compararFechas(fechaA, fechaB) {
        console.log("Fecha A - Fecha pedido");
        console.log(fechaA);
        console.log("Fecha B- Fecha actual");
        console.log(fechaB);
        if (fechaA.getFullYear() == fechaB.getFullYear() &&
            fechaA.getMonth() === fechaB.getMonth() &&
            fechaA.getDate() === fechaB.getMonth() &&
            fechaA.getHours() === fechaB.getHours()) {
            return true;
        }
        return false;
    }
};
InfoMesaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_10__["MesaService"] },
    { type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"] },
    { type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_11__["PedidoService"] },
    { type: src_app_services_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
InfoMesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-info-mesa',
        template: _raw_loader_info_mesa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_mesa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfoMesaPage);



/***/ }),

/***/ "g65l":
/*!*************************************************************!*\
  !*** ./src/app/pages/info-mesa/info-mesa-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InfoMesaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMesaPageRoutingModule", function() { return InfoMesaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _info_mesa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-mesa.page */ "aalK");




const routes = [
    {
        path: '',
        component: _info_mesa_page__WEBPACK_IMPORTED_MODULE_3__["InfoMesaPage"]
    }
];
let InfoMesaPageRoutingModule = class InfoMesaPageRoutingModule {
};
InfoMesaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoMesaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=info-mesa-info-mesa-module-es2015.js.map