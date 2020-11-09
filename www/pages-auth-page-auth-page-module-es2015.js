(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-page-auth-page-module"],{

/***/ "IEFU":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth-page/auth-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPagePageRoutingModule", function() { return AuthPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-page.page */ "g2qW");




const routes = [
    {
        path: '',
        component: _auth_page_page__WEBPACK_IMPORTED_MODULE_3__["AuthPagePage"]
    }
];
let AuthPagePageRoutingModule = class AuthPagePageRoutingModule {
};
AuthPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthPagePageRoutingModule);



/***/ }),

/***/ "UPBg":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth-page/auth-page.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgtcGFnZS9hdXRoLXBhZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "b/Uz":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth-page/auth-page.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"container\" class=\"fondo\">\n  <div id=\"container\">\n    <img src=\"./assets/img/icono_food.png\" alt=\"\" style=\"max-width: 200px;\">\n\n    <ion-button (click)=\"mostrarLogin($event)\" expand=\"block\" size=\"large\" color=\"danger\">\n      Iniciar sesión\n    </ion-button>\n    <ion-button (click)=\"mostrarRegistro($event)\" size=\"medium\" color=\"dark\">\n      Registro\n    </ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "clKO":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth-page/auth-page.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPagePageModule", function() { return AuthPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-page-routing.module */ "IEFU");
/* harmony import */ var _auth_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-page.page */ "g2qW");







let AuthPagePageModule = class AuthPagePageModule {
};
AuthPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPagePageRoutingModule"]
        ],
        declarations: [_auth_page_page__WEBPACK_IMPORTED_MODULE_6__["AuthPagePage"]]
    })
], AuthPagePageModule);



/***/ }),

/***/ "g2qW":
/*!***************************************************!*\
  !*** ./src/app/pages/auth-page/auth-page.page.ts ***!
  \***************************************************/
/*! exports provided: AuthPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPagePage", function() { return AuthPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-page.page.html */ "b/Uz");
/* harmony import */ var _auth_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-page.page.scss */ "UPBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_components_login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/login/login.page */ "+HcX");
/* harmony import */ var src_app_components_register_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/register/register.page */ "MJOv");







let AuthPagePage = class AuthPagePage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    mostrarLogin(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            return data;
        });
    }
    mostrarRegistro(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_register_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"],
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            return data;
        });
    }
};
AuthPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AuthPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth-page',
        template: _raw_loader_auth_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-page-auth-page-module-es2015.js.map