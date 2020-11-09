(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-reserva-menu-reserva-module"],{

/***/ "83eM":
/*!***********************************************************!*\
  !*** ./src/app/pages/menu-reserva/menu-reserva.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtcmVzZXJ2YS9tZW51LXJlc2VydmEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "CwaQ":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-reserva/menu-reserva.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Menú\"></app-header>\n\n<ion-segment value=\"Listado\" (ionChange)=\"seleccionarOpcion($event)\" scrollable color=\"success\">\n  <ion-segment-button value=\"Listado\">\n    <ion-label>Reservas</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Alta\">\n    <ion-label>Alta</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Baja\" *ngIf=\"reservaElegida\">\n    <ion-label>Baja</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Modificación\" *ngIf=\"reservaElegida\">\n    <ion-label>Modificar</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content class=\"fondo\">\n\n  <app-listado-reservas *ngIf=\"opcion == 'Listado'\" [reservas]=\"listado\" (elegirReserva)=\"elegirReserva($event)\">\n  </app-listado-reservas>\n  <app-form-reserva *ngIf=\"opcion != 'Listado'\" [opcion]=\"opcion\" [pedido]=\"reservaElegida\" [opcion]=\"opcion\">\n  </app-form-reserva>\n\n</ion-content>");

/***/ }),

/***/ "Lqfj":
/*!*********************************************************!*\
  !*** ./src/app/pages/menu-reserva/menu-reserva.page.ts ***!
  \*********************************************************/
/*! exports provided: MenuReservaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuReservaPage", function() { return MenuReservaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_reserva_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-reserva.page.html */ "CwaQ");
/* harmony import */ var _menu_reserva_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-reserva.page.scss */ "83eM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/pedido */ "tUIk");
/* harmony import */ var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pedido.service */ "KG2h");
/* harmony import */ var src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/reserva.service */ "QzLQ");







let MenuReservaPage = class MenuReservaPage {
    constructor(reservaService, pedidoService) {
        this.reservaService = reservaService;
        this.pedidoService = pedidoService;
        this.opcion = 'Listado';
    }
    ngDoCheck() {
        this.listado = src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_5__["PedidoService"].pedidos.filter(pedido => pedido.estado == src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["EstadoPedido"].RESERVADO);
    }
    ngOnInit() {
        console.log("INIT");
        this.pedidoService.leer().then(data => {
            console.log(data);
            this.listado = data.filter(pedido => pedido.estado == src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["EstadoPedido"].RESERVADO);
        });
    }
    seleccionarOpcion(event) {
        console.log(event.detail.value);
        this.opcion = event.detail.value;
    }
    elegirReserva(event) {
        console.log(event);
        this.reservaElegida = event;
    }
};
MenuReservaPage.ctorParameters = () => [
    { type: src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_6__["ReservaService"] },
    { type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_5__["PedidoService"] }
];
MenuReservaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-reserva',
        template: _raw_loader_menu_reserva_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_reserva_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuReservaPage);



/***/ }),

/***/ "n335":
/*!***********************************************************!*\
  !*** ./src/app/pages/menu-reserva/menu-reserva.module.ts ***!
  \***********************************************************/
/*! exports provided: MenuReservaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuReservaPageModule", function() { return MenuReservaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_reserva_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-reserva-routing.module */ "rLEE");
/* harmony import */ var _menu_reserva_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-reserva.page */ "Lqfj");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let MenuReservaPageModule = class MenuReservaPageModule {
};
MenuReservaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_reserva_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuReservaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_menu_reserva_page__WEBPACK_IMPORTED_MODULE_6__["MenuReservaPage"]]
    })
], MenuReservaPageModule);



/***/ }),

/***/ "rLEE":
/*!*******************************************************************!*\
  !*** ./src/app/pages/menu-reserva/menu-reserva-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MenuReservaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuReservaPageRoutingModule", function() { return MenuReservaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_reserva_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-reserva.page */ "Lqfj");




const routes = [
    {
        path: '',
        component: _menu_reserva_page__WEBPACK_IMPORTED_MODULE_3__["MenuReservaPage"]
    }
];
let MenuReservaPageRoutingModule = class MenuReservaPageRoutingModule {
};
MenuReservaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuReservaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=menu-reserva-menu-reserva-module-es2015.js.map