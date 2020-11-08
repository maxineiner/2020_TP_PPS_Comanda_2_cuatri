(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-mesa-menu-mesa-module"],{

/***/ "/Vt8":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-mesa/menu-mesa.module.ts ***!
  \*****************************************************/
/*! exports provided: MenuMesaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMesaPageModule", function() { return MenuMesaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-mesa-routing.module */ "Lap3");
/* harmony import */ var _menu_mesa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-mesa.page */ "tAK2");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let MenuMesaPageModule = class MenuMesaPageModule {
};
MenuMesaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuMesaPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_menu_mesa_page__WEBPACK_IMPORTED_MODULE_6__["MenuMesaPage"]]
    })
], MenuMesaPageModule);



/***/ }),

/***/ "AiFF":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-mesa/menu-mesa.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Menú Mesa\"></app-header>\r\n\r\n<ion-segment value=\"Listado\" (ionChange)=\"seleccionarOpcion($event)\" scrollable color=\"success\">\r\n  <ion-segment-button value=\"Listado\">\r\n    <ion-label>Mesas</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Alta\">\r\n    <ion-label>Alta</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Baja\" *ngIf=\"mesaElegida.isActive\">\r\n    <ion-label>Baja</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Modificación\" *ngIf=\"mesaElegida.isActive\">\r\n    <ion-label>Modificar</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<ion-content class=\"fondo\">\r\n\r\n  <app-listado-mesas *ngIf=\"opcion == 'Listado'\" [mesas]=\"listado\" (elegirMesa)=\"elegirMesa($event)\">\r\n  </app-listado-mesas>\r\n\r\n  <app-form-mesas *ngIf=\"opcion != 'Listado'\" [opcion]=\"opcion\" [mesa]=\"mesaElegida\"></app-form-mesas>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "Lap3":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-mesa/menu-mesa-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MenuMesaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMesaPageRoutingModule", function() { return MenuMesaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_mesa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-mesa.page */ "tAK2");




const routes = [
    {
        path: '',
        component: _menu_mesa_page__WEBPACK_IMPORTED_MODULE_3__["MenuMesaPage"],
    }
];
let MenuMesaPageRoutingModule = class MenuMesaPageRoutingModule {
};
MenuMesaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuMesaPageRoutingModule);



/***/ }),

/***/ "cKyI":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-mesa/menu-mesa.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtbWVzYS9tZW51LW1lc2EucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "tAK2":
/*!***************************************************!*\
  !*** ./src/app/pages/menu-mesa/menu-mesa.page.ts ***!
  \***************************************************/
/*! exports provided: MenuMesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMesaPage", function() { return MenuMesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_mesa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-mesa.page.html */ "AiFF");
/* harmony import */ var _menu_mesa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-mesa.page.scss */ "cKyI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_clases_mesa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/mesa */ "sV09");
/* harmony import */ var src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mesa.service */ "R+YK");






let MenuMesaPage = class MenuMesaPage {
    constructor(mesaService) {
        this.mesaService = mesaService;
        this.opcion = 'Listado';
        this.listado = src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_5__["MesaService"].mesas;
        this.mesaElegida = new src_app_clases_mesa__WEBPACK_IMPORTED_MODULE_4__["Mesa"]();
    }
    ngDoCheck() {
        this.listado = src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_5__["MesaService"].mesas;
    }
    ngOnInit() {
        console.log("INIT");
        this.mesaService.leer().then((mesas) => {
            console.log(mesas);
            this.listado = mesas;
        });
        this.mesaElegida = new src_app_clases_mesa__WEBPACK_IMPORTED_MODULE_4__["Mesa"]();
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
     * Método para recibir mesa seleccionada
     * @param mesa Mesa seleccionada desde listado
     */
    elegirMesa(mesa) {
        console.log(mesa);
        this.mesaElegida = mesa;
    }
};
MenuMesaPage.ctorParameters = () => [
    { type: src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_5__["MesaService"] }
];
MenuMesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-mesa',
        template: _raw_loader_menu_mesa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_mesa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuMesaPage);



/***/ })

}]);
//# sourceMappingURL=menu-mesa-menu-mesa-module-es2015.js.map