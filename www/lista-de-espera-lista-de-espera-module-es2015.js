(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-de-espera-lista-de-espera-module"],{

/***/ "C7WN":
/*!*****************************************************************!*\
  !*** ./src/app/pages/lista-de-espera/lista-de-espera.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3RhLWRlLWVzcGVyYS9saXN0YS1kZS1lc3BlcmEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "G0km":
/*!*****************************************************************!*\
  !*** ./src/app/pages/lista-de-espera/lista-de-espera.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListaDeEsperaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeEsperaPageModule", function() { return ListaDeEsperaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lista_de_espera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-de-espera-routing.module */ "TKgp");
/* harmony import */ var _lista_de_espera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-de-espera.page */ "z/Fm");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let ListaDeEsperaPageModule = class ListaDeEsperaPageModule {
};
ListaDeEsperaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lista_de_espera_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaDeEsperaPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_lista_de_espera_page__WEBPACK_IMPORTED_MODULE_6__["ListaDeEsperaPage"]]
    })
], ListaDeEsperaPageModule);



/***/ }),

/***/ "TKgp":
/*!*************************************************************************!*\
  !*** ./src/app/pages/lista-de-espera/lista-de-espera-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListaDeEsperaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeEsperaPageRoutingModule", function() { return ListaDeEsperaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lista_de_espera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-de-espera.page */ "z/Fm");




const routes = [
    {
        path: '',
        component: _lista_de_espera_page__WEBPACK_IMPORTED_MODULE_3__["ListaDeEsperaPage"]
    }
];
let ListaDeEsperaPageRoutingModule = class ListaDeEsperaPageRoutingModule {
};
ListaDeEsperaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListaDeEsperaPageRoutingModule);



/***/ }),

/***/ "ULTc":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-de-espera/lista-de-espera.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Lista de espera\" paginaAnterior='/tabs/tab1'></app-header>\n<!-- <ion-grid *ngIf=\"!clientes\">\n  <ion-row justify-content-center align-items-center >\n    <div text-center>\n      <ion-text color=\"dark\"> <h4>NO HAY CLIENTES EN ESPERA</h4>   </ion-text>\n    </div>\n  </ion-row>\n</ion-grid> -->\n\n  <ion-toolbar color=\"light\" *ngIf=\"!asignandoMesa\">\n    <ion-title>Hay {{clientes.length}} clientes en espera</ion-title>\n  </ion-toolbar>\n<!-- <ion-content *ngIf=\"!asignandoMesa\">\n  <ion-grid >\n  <ion-row justify-content-center align-items-center >\n    <div text-center>\n      <ion-text color=\"dark\"><h1>Hay {{clientes.length}} clientes en espera</h1> </ion-text>\n    </div>\n  </ion-row>\n</ion-grid>\n</ion-content> -->\n\n<div *ngIf=\"!asignandoMesa\">\n  <ion-list *ngFor=\"let cliente of clientes\">\n  <ion-item>\n\n    <ion-item-sliding>\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" expandable (click)=\"quitarDeLaLista(cliente)\">\n          Quitar de la lista\n        </ion-item-option>\n      </ion-item-options>\n\n      <ion-item>\n        <ion-label>{{cliente.nombre}} {{cliente.apellido}}</ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"tertiary\" expandable (click)=\"verMesas(cliente)\">\n          Asignar Mesa\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-item>\n</ion-list>\n</div>\n\n<ion-content>\n  <app-listado-mesas *ngIf=\"asignandoMesa\" [mesas]=\"mesas\" (elegirMesa)=\"asignarMesa($event)\">\n</app-listado-mesas>\n</ion-content>\n");

/***/ }),

/***/ "z/Fm":
/*!***************************************************************!*\
  !*** ./src/app/pages/lista-de-espera/lista-de-espera.page.ts ***!
  \***************************************************************/
/*! exports provided: ListaDeEsperaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeEsperaPage", function() { return ListaDeEsperaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_de_espera_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista-de-espera.page.html */ "ULTc");
/* harmony import */ var _lista_de_espera_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-de-espera.page.scss */ "C7WN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/pedido */ "tUIk");
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cliente.service */ "teE5");
/* harmony import */ var src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mesa.service */ "R+YK");
/* harmony import */ var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pedido.service */ "KG2h");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");









let ListaDeEsperaPage = class ListaDeEsperaPage {
    constructor(clienteService, UIVisual, pedidosService, mesasService) {
        this.clienteService = clienteService;
        this.UIVisual = UIVisual;
        this.pedidosService = pedidosService;
        this.mesasService = mesasService;
        this.asignandoMesa = false;
        this.clienteService.leer().then(clientes => {
            this.clientes = clientes.filter(cliente => cliente.enListaDeEspera == true);
            console.log(this.clientes);
        });
        this.mesasService.leer().then(mesas => {
            this.mesas = mesas; /* .filter(mesa=>{mesa.isAvailable == true}) */
        });
    }
    ngDoCheck() {
        this.clientes = src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"].clientes.filter(cliente => cliente.enListaDeEspera == true);
        this.mesas = src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_6__["MesaService"].mesas; /* .filter(mesa=>{mesa.isAvailable == true}) */
    }
    ngOnInit() {
    }
    quitarDeLaLista(cliente) {
        cliente.enListaDeEspera = false;
        this.clienteService.actualizar(cliente).then(ok => {
            src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_8__["UIVisualService"].presentToast('Removido correctamente.');
        });
    }
    verMesas(cliente) {
        this.clienteActual = cliente;
        this.asignandoMesa = true;
        src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_8__["UIVisualService"].presentAlert('Cliente ' + cliente.nombre, 'Asigne una mesa.');
    }
    asignarMesa(mesa) {
        let mensaje = 'Mesa:' + mesa.numero + ' asignada.';
        this.pedidosService.crear(src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["Pedido"].CrearPedido('', this.clienteActual, mesa, null, Date.now(), null, null, src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["EstadoPedido"].ASIGNADO, true)).then(() => {
            //Se envia push al cliente avisando que es su turno y un redireccionamiento al pedidos page
            src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_8__["UIVisualService"].presentAlert('Mesa Asignada', mensaje);
            this.asignandoMesa = false;
        });
    }
};
ListaDeEsperaPage.ctorParameters = () => [
    { type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_8__["UIVisualService"] },
    { type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_7__["PedidoService"] },
    { type: src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_6__["MesaService"] }
];
ListaDeEsperaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lista-de-espera',
        template: _raw_loader_lista_de_espera_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_de_espera_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListaDeEsperaPage);



/***/ })

}]);
//# sourceMappingURL=lista-de-espera-lista-de-espera-module-es2015.js.map