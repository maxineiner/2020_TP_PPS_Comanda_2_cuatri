(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-pedidos-menu-pedidos-module"],{

/***/ "9lHz":
/*!***********************************************************!*\
  !*** ./src/app/pages/menu-pedidos/menu-pedidos.module.ts ***!
  \***********************************************************/
/*! exports provided: MenuPedidosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPedidosPageModule", function() { return MenuPedidosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-pedidos-routing.module */ "EyKu");
/* harmony import */ var _menu_pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-pedidos.page */ "rAPg");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let MenuPedidosPageModule = class MenuPedidosPageModule {
};
MenuPedidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPedidosPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_menu_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["MenuPedidosPage"]]
    })
], MenuPedidosPageModule);



/***/ }),

/***/ "EyKu":
/*!*******************************************************************!*\
  !*** ./src/app/pages/menu-pedidos/menu-pedidos-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MenuPedidosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPedidosPageRoutingModule", function() { return MenuPedidosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_pedidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-pedidos.page */ "rAPg");




const routes = [
    {
        path: '',
        component: _menu_pedidos_page__WEBPACK_IMPORTED_MODULE_3__["MenuPedidosPage"]
    }
];
let MenuPedidosPageRoutingModule = class MenuPedidosPageRoutingModule {
};
MenuPedidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPedidosPageRoutingModule);



/***/ }),

/***/ "fg+F":
/*!***********************************************************!*\
  !*** ./src/app/pages/menu-pedidos/menu-pedidos.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtcGVkaWRvcy9tZW51LXBlZGlkb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "k/9+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-pedidos/menu-pedidos.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Menú Pedidos\"></app-header>\n\n<ion-segment value=\"Alta\" (ionChange)=\"seleccionarOpcion($event)\" scrollable color=\"success\">\n  <ion-segment-button value=\"Listado\" *ngIf=\"!rolService.isCliente(usuario)\">\n    <ion-label>Pedidos</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Alta\">\n    <ion-label>Alta</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Baja\" *ngIf=\"pedidoElegido.isActive\">\n    <ion-label>Baja</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Modificación\" *ngIf=\"pedidoElegido.isActive\">\n    <ion-label>Modificar</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content class=\"fondo\">\n\n  <app-listado-pedidos *ngIf=\"opcion == 'Listado'\" [pedidos]=\"pedidos\"\n                       (elegirPedido)=\"elegirPedido($event)\">\n  </app-listado-pedidos>\n\n  <app-form-pedido *ngIf=\"opcion != 'Listado'\" [opcion]=\"opcion\" [pedido]=\"pedidoElegido\"></app-form-pedido>\n\n\n</ion-content>");

/***/ }),

/***/ "rAPg":
/*!*********************************************************!*\
  !*** ./src/app/pages/menu-pedidos/menu-pedidos.page.ts ***!
  \*********************************************************/
/*! exports provided: MenuPedidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPedidosPage", function() { return MenuPedidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_pedidos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-pedidos.page.html */ "k/9+");
/* harmony import */ var _menu_pedidos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-pedidos.page.scss */ "fg+F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/pedido */ "tUIk");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pedido.service */ "KG2h");
/* harmony import */ var src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/roles.service */ "0ceX");








let MenuPedidosPage = class MenuPedidosPage {
    constructor(pedidoService, rolService) {
        this.pedidoService = pedidoService;
        this.rolService = rolService;
        this.opcion = 'Listado';
        this.pedidos = src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_6__["PedidoService"].pedidos;
        this.pedidoElegido = new src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["Pedido"]();
    }
    ngDoCheck() {
        this.pedidos = this.filtrarPedidos(src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_6__["PedidoService"].pedidos);
    }
    ngOnInit() {
        this.usuario = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].usuario;
        console.log("INIT");
        this.pedidoService.leer().then((pedidos) => {
            this.pedidos = this.filtrarPedidos(pedidos);
        });
        this.pedidoElegido = new src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["Pedido"]();
    }
    /**
     * Metodo para seleccionar modo del form para ABM
     * @param event Evento con el valor que determina modo del form
     */
    seleccionarOpcion(event) {
        console.log(event.detail.value);
        this.opcion = event.detail.value;
    }
    /**
     * Método para recibir pedido seleccionado
     * @param pedido Pedido seleccionado desde listado
     */
    elegirPedido(pedido) {
        console.log(pedido);
        this.pedidoElegido = pedido;
    }
    filtrarPedidos(pedidos) {
        let pedidosFiltrados = [];
        console.log(pedidos);
        // Pedidos del Cliente logueado
        if (this.rolService.isClienteAceptado(this.usuario)) {
            pedidosFiltrados = pedidos.filter(pedido => {
                if (pedido.cliente) {
                    return pedido.cliente.id === this.usuario.id;
                }
            });
        }
        else if (this.rolService.isEmpleado(this.usuario)) // Pedidos para empleados
         {
            pedidosFiltrados = pedidos.filter(pedido => pedido.estado != src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["EstadoPedido"].RESERVADO);
        }
        else if (this.rolService.isJefe(this.usuario)) // Pedidos para jefes
         {
            pedidosFiltrados = pedidos.filter(pedido => pedido.estado == src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["EstadoPedido"].RESERVADO);
        }
        return pedidosFiltrados;
    }
};
MenuPedidosPage.ctorParameters = () => [
    { type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_6__["PedidoService"] },
    { type: src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_7__["RolesService"] }
];
MenuPedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-pedidos',
        template: _raw_loader_menu_pedidos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_pedidos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPedidosPage);



/***/ })

}]);
//# sourceMappingURL=menu-pedidos-menu-pedidos-module-es2015.js.map