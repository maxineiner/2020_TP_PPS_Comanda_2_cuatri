(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-producto-menu-producto-module"],{

/***/ "4pXK":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-producto/menu-producto.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtcHJvZHVjdG8vbWVudS1wcm9kdWN0by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "57Xz":
/*!***********************************************************!*\
  !*** ./src/app/pages/menu-producto/menu-producto.page.ts ***!
  \***********************************************************/
/*! exports provided: MenuProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProductoPage", function() { return MenuProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_producto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-producto.page.html */ "dWO/");
/* harmony import */ var _menu_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-producto.page.scss */ "4pXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/empleado */ "de4J");
/* harmony import */ var src_app_clases_producto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/clases/producto */ "VJYV");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/producto.service */ "GPUG");
/* harmony import */ var src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/roles.service */ "0ceX");









let MenuProductoPage = class MenuProductoPage {
    constructor(productoService, rolService) {
        this.productoService = productoService;
        this.rolService = rolService;
        this.opcion = 'Platos';
        this.productoElegido = new src_app_clases_producto__WEBPACK_IMPORTED_MODULE_5__["Producto"]();
    }
    ngDoCheck() {
        this.platos = src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductoService"].productos.filter(producto => producto.tipo == src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_4__["TipoEmpleado"].Cocinero);
        this.bebidas = src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductoService"].productos.filter(producto => producto.tipo == src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_4__["TipoEmpleado"].Bartender);
    }
    ngOnInit() {
        // No es necesario inyectar el servicio por ser propiedad estática
        this.usuario = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].usuario;
        console.log("INIT");
        this.productoService.traerTodos().then(data => {
            console.log(data);
            this.platos = data.filter(producto => producto.tipo == src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_4__["TipoEmpleado"].Cocinero);
            this.bebidas = data.filter(producto => producto.tipo == src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_4__["TipoEmpleado"].Bartender);
        });
    }
    seleccionarOpcion(event) {
        console.log(event.detail.value);
        this.opcion = event.detail.value;
    }
    elegirProducto(event) {
        console.log(event);
        this.productoElegido = event;
    }
};
MenuProductoPage.ctorParameters = () => [
    { type: src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductoService"] },
    { type: src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_8__["RolesService"] }
];
MenuProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-producto',
        template: _raw_loader_menu_producto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuProductoPage);



/***/ }),

/***/ "VGnC":
/*!*********************************************************************!*\
  !*** ./src/app/pages/menu-producto/menu-producto-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MenuProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProductoPageRoutingModule", function() { return MenuProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-producto.page */ "57Xz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const routes = [
    {
        path: '',
        component: _menu_producto_page__WEBPACK_IMPORTED_MODULE_3__["MenuProductoPage"]
    }
];
let MenuProductoPageRoutingModule = class MenuProductoPageRoutingModule {
};
MenuProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuProductoPageRoutingModule);



/***/ }),

/***/ "dWO/":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-producto/menu-producto.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Menú\"></app-header>\n\n<ion-segment value=\"Platos\" (ionChange)=\"seleccionarOpcion($event)\" scrollable color=\"success\">\n  <ion-segment-button value=\"Platos\">\n    <ion-label>\n      Platos\n    </ion-label>\n  </ion-segment-button>\n\n  <ion-segment-button value=\"Bebidas\">\n    <ion-label>\n      Bebidas\n    </ion-label>\n  </ion-segment-button>\n\n  <ion-segment-button value=\"Alta\" *ngIf=\"rolService.isEmpleadoBartender(usuario) || \n                                    rolService.isEmpleadoCocinero(usuario)\">\n    <ion-label>Alta</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Baja\" *ngIf=\"rolService.isEmpleadoBartender(usuario) || \n                                  rolService.isEmpleadoCocinero(usuario)\">\n    <ion-label>Baja</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Modificación\" *ngIf=\"rolService.isEmpleadoBartender(usuario) || \n                                           rolService.isEmpleadoCocinero(usuario)\">\n    <ion-label>Modificar</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content class=\"fondo\">\n\n  <app-listado-productos *ngIf=\"opcion == 'Platos'\" [productos]=\"platos\" [opcion]=\"Platos\"\n                         (elegirProducto)=\"elegirProducto($event)\">\n  </app-listado-productos>\n\n  <app-listado-productos *ngIf=\"opcion == 'Bebidas'\" [productos]=\"bebidas\" [opcion]=\"Bebidas\"\n                         (elegirProducto)=\"elegirProducto($event)\">\n  </app-listado-productos>\n\n  <app-form-producto *ngIf=\"opcion != 'Platos' && opcion != 'Bebidas'\" [opcion]=\"opcion\"\n                     [producto]=\"productoElegido\">\n  </app-form-producto>\n\n</ion-content>");

/***/ }),

/***/ "nboo":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-producto/menu-producto.module.ts ***!
  \*************************************************************/
/*! exports provided: MenuProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProductoPageModule", function() { return MenuProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-producto-routing.module */ "VGnC");
/* harmony import */ var _menu_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-producto.page */ "57Xz");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let MenuProductoPageModule = class MenuProductoPageModule {
};
MenuProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuProductoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_menu_producto_page__WEBPACK_IMPORTED_MODULE_6__["MenuProductoPage"]]
    })
], MenuProductoPageModule);



/***/ })

}]);
//# sourceMappingURL=menu-producto-menu-producto-module-es2015.js.map