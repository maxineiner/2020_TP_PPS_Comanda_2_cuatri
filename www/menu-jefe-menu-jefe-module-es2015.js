(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-jefe-menu-jefe-module"],{

/***/ "AgYf":
/*!***************************************************!*\
  !*** ./src/app/pages/menu-jefe/menu-jefe.page.ts ***!
  \***************************************************/
/*! exports provided: MenuJefePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuJefePage", function() { return MenuJefePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_jefe_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-jefe.page.html */ "u3g4");
/* harmony import */ var _menu_jefe_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-jefe.page.scss */ "GK3l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_clases_jefe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/clases/jefe */ "Gy7f");
/* harmony import */ var src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/jefe.service */ "97Z+");







let MenuJefePage = class MenuJefePage {
    constructor(router, jefeService) {
        this.router = router;
        this.jefeService = jefeService;
        this.opcion = 'Listado';
        this.listado = src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_6__["JefeService"].jefes;
        this.jefeSeleccionado = new src_app_clases_jefe__WEBPACK_IMPORTED_MODULE_5__["Jefe"]();
    }
    ngDoCheck() {
        this.listado = src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_6__["JefeService"].jefes;
    }
    ngOnInit() {
        console.log("INIT");
        this.jefeService.leer().then((jefes) => {
            console.log(jefes);
            this.listado = jefes;
            console.log(this.listado);
        });
        this.jefeSeleccionado = new src_app_clases_jefe__WEBPACK_IMPORTED_MODULE_5__["Jefe"]();
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
     * Método para recibir jefe seleccionada
     * @param jefe seleccionado desde listado
     */
    seleccionarJefe(jefe) {
        console.log(jefe);
        this.jefeSeleccionado = jefe;
    }
};
MenuJefePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_6__["JefeService"] }
];
MenuJefePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-jefe',
        template: _raw_loader_menu_jefe_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_jefe_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuJefePage);



/***/ }),

/***/ "GK3l":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-jefe/menu-jefe.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtamVmZS9tZW51LWplZmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "mThd":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-jefe/menu-jefe-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MenuJefePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuJefePageRoutingModule", function() { return MenuJefePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_jefe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-jefe.page */ "AgYf");




const routes = [
    {
        path: '',
        component: _menu_jefe_page__WEBPACK_IMPORTED_MODULE_3__["MenuJefePage"]
    }
];
let MenuJefePageRoutingModule = class MenuJefePageRoutingModule {
};
MenuJefePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuJefePageRoutingModule);



/***/ }),

/***/ "sIz6":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-jefe/menu-jefe.module.ts ***!
  \*****************************************************/
/*! exports provided: MenuJefePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuJefePageModule", function() { return MenuJefePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_jefe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-jefe-routing.module */ "mThd");
/* harmony import */ var _menu_jefe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-jefe.page */ "AgYf");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let MenuJefePageModule = class MenuJefePageModule {
};
MenuJefePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_jefe_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuJefePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_menu_jefe_page__WEBPACK_IMPORTED_MODULE_6__["MenuJefePage"]]
    })
], MenuJefePageModule);



/***/ }),

/***/ "u3g4":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-jefe/menu-jefe.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Menú Jefe\"></app-header>\r\n\r\n<ion-segment value=\"Listado\" (ionChange)=\"seleccionarOpcion($event)\" scrollable color=\"success\">\r\n  <ion-segment-button value=\"Listado\">\r\n    <ion-label>Jefes</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Alta\">\r\n    <ion-label>Alta</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Baja\" *ngIf=\"jefeSeleccionado.isActive\">\r\n    <ion-label>Baja</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Modificación\" *ngIf=\"jefeSeleccionado.isActive\">\r\n    <ion-label>Modificación</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<ion-content class=\"fondo\">\r\n\r\n  <app-listado-jefes *ngIf=\"opcion == 'Listado'\" [jefes]=\"listado\" (seleccionarJefe)=\"seleccionarJefe($event)\">\r\n  </app-listado-jefes>\r\n\r\n  <app-form-jefes *ngIf=\"opcion != 'Listado'\" [opcion]=\"opcion\" [jefe]=\"jefeSeleccionado\">\r\n  </app-form-jefes>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=menu-jefe-menu-jefe-module-es2015.js.map