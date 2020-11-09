(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+HcX":
/*!************************************************!*\
  !*** ./src/app/components/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "m/sW");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "Af1y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var src_app_clases_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/clases/usuario */ "1Qa6");
/* harmony import */ var src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/clases/cliente */ "tDE8");
/* harmony import */ var src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/jefe.service */ "97Z+");
/* harmony import */ var src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/empleado.service */ "5RfW");
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/cliente.service */ "teE5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");












let LoginPage = class LoginPage {
    // constructor(private authService: AuthService, private router: Router) { }
    constructor(authService, router, jefeService, empleadoService, clienteService, modalController, actionSheetController) {
        this.authService = authService;
        this.router = router;
        this.jefeService = jefeService;
        this.empleadoService = empleadoService;
        this.clienteService = clienteService;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.usuario = new src_app_clases_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
    }
    ngOnInit() {
    }
    onLoginAnonymously() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.authService.onLoginAnonymously();
            if (uid) {
                console.log('Cliente anonimo logueado!');
                let cliente = src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"].CrearCliente(uid, "Anónimo", " ", "0", "-", " ", true, src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_6__["EstadoAceptacion"].Anonimo, false);
                console.log(cliente);
                _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = cliente;
                this.clienteService.crearAnonimo(cliente);
                this.cerrar();
                this.router.navigate(['/home']);
            }
        });
    }
    onLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.authService.onLogin(this.usuario);
            if (uid) {
                console.log('Usuario logueado!');
                let cliente, empleado, jefe;
                let clientePromise, empleadoPromise, jefePromise;
                clientePromise = this.clienteService.leerPorID(uid).then(c => cliente = c);
                empleadoPromise = this.empleadoService.leerPorID(uid).then(c => empleado = c);
                jefePromise = this.jefeService.leerPorID(uid).then(c => jefe = c);
                yield clientePromise, yield empleadoPromise, yield jefePromise;
                console.log(cliente);
                console.log(empleado);
                console.log(jefe);
                if (cliente) {
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = cliente;
                }
                else if (empleado) {
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = empleado;
                }
                else if (jefe) {
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = jefe;
                }
                else {
                    console.log("usuario no encontrado");
                    // mostrar error en pantalla
                }
                console.log(_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario);
                this.cerrar();
                this.router.navigate(['/home']);
            }
        });
    }
    onLoginTesting(rol) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let uid;
            switch (rol) {
                case "Cliente":
                    uid = yield this.authService.onLoginTesting("cliente@mail.com", "111111");
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = yield this.clienteService.leerPorID(uid);
                    break;
                case "Supervisor":
                    uid = yield this.authService.onLoginTesting("supervisor@mail.com", "111111");
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = yield this.jefeService.leerPorID(uid);
                    break;
                case "Duenio":
                    uid = yield this.authService.onLoginTesting("duenio@mail.com", "111111");
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = yield this.jefeService.leerPorID(uid);
                    break;
                case "Mozo":
                    uid = yield this.authService.onLoginTesting("mozo@mail.com", "111111");
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = yield this.empleadoService.leerPorID(uid);
                    break;
                case "Bartender":
                    uid = yield this.authService.onLoginTesting("bartender@mail.com", "111111");
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = yield this.empleadoService.leerPorID(uid);
                    break;
                case "Cocinero":
                    uid = yield this.authService.onLoginTesting("cocinero@mail.com", "111111");
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = yield this.empleadoService.leerPorID(uid);
                    break;
            }
            console.log(_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario);
            this.cerrar();
            this.router.navigate(['/home']);
        });
    }
    cerrar() {
        this.modalController.dismiss();
    }
    mostrarRoles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Perfiles',
                mode: "ios",
                translucent: true,
                buttons: [{
                        text: 'Cliente',
                        handler: () => {
                            this.onLoginTesting("Cliente");
                        }
                    },
                    {
                        text: 'Supervisor',
                        handler: () => {
                            this.onLoginTesting("Supervisor");
                        }
                    },
                    {
                        text: 'Dueño',
                        handler: () => {
                            this.onLoginTesting("Duenio");
                        }
                    },
                    {
                        text: 'Mozo',
                        handler: () => {
                            this.onLoginTesting("Mozo");
                        }
                    },
                    {
                        text: 'Cocinero',
                        handler: () => {
                            this.onLoginTesting("Cocinero");
                        }
                    },
                    {
                        text: 'Bartender',
                        handler: () => {
                            this.onLoginTesting("Bartender");
                        }
                    },
                    {
                        text: 'Cerrar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cerrar');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_7__["JefeService"] },
    { type: src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_8__["EmpleadoService"] },
    { type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_9__["ClienteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "8HYz":
/*!*****************************************************!*\
  !*** ./src/app/pages/sala-chat/sala-chat.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbGEtY2hhdC9zYWxhLWNoYXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Af1y":
/*!**************************************************!*\
  !*** ./src/app/components/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "FD/9":
/*!********************************************************!*\
  !*** ./src/app/components/register/register.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Gslz":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sala-chat/sala-chat.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cerrar()\" expand=\"block\">\n        <ion-icon size=\"large\" slot=\"icon-only\" name=\"arrow-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Chat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-chat [mensajes]=\"mensajes\" [mensaje]=\"mensaje\"\n            [idUsuario]=\"usuario.id\"></app-chat>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"dark\">\n    <ion-item color=\"dark\">\n      <ion-input name=\"mensaje\" [(ngModel)]=\"textoAuxiliar\" clearInput=\"true\" clearOnEdit=\"true\"></ion-input>\n      <ion-button slot=\"end\" (click)=\"enviar()\" fill=\"clear\" shape=\"round\">\n        <ion-icon color=\"secondary\" name=\"send\"></ion-icon>\n      </ion-button>\n\n    </ion-item>\n  </ion-toolbar>\n\n</ion-footer>");

/***/ }),

/***/ "HGan":
/*!*********************************************************************!*\
  !*** ./src/app/pages/explore-container/explore-container.module.ts ***!
  \*********************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "XnsX");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "MJOv":
/*!******************************************************!*\
  !*** ./src/app/components/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "km9s");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "FD/9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _clases_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../clases/cliente */ "tDE8");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_codigo_qr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/codigo-qr.service */ "qko+");









let RegisterPage = class RegisterPage {
    // constructor(private authService: AuthService, private router: Router) { }
    constructor(authService, UIVisual, modalController, codigoQRService) {
        this.authService = authService;
        this.UIVisual = UIVisual;
        this.modalController = modalController;
        this.codigoQRService = codigoQRService;
        this.cliente = new _clases_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"];
    }
    ngOnInit() {
    }
    onRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cliente && !this.cliente.id) {
                this.authService
                    .onRegisterCliente(this.cliente)
                    .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__["UIVisualService"].presentToast('Alta exitosa'))
                    .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__["UIVisualService"].presentToast('No se pudo realizar el alta'));
                // this.router.navigateByUrl('/');
            }
            else {
                src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__["UIVisualService"].presentToast('Cliente existente');
            }
        });
    }
    onScanDNI() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let barcodeQR;
            this.codigoQRService.escanear("Escanee su DNI", "PDF_417").then(obj => {
                barcodeQR = obj.text;
                let barcodeQRData = barcodeQR.split("@");
                this.cliente.apellido = barcodeQRData[1];
                this.cliente.nombre = barcodeQRData[2];
                this.cliente.dni = barcodeQRData[4];
                console.log(this.cliente);
            });
        });
    }
    cerrar() {
        this.modalController.dismiss();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__["UIVisualService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_services_codigo_qr_service__WEBPACK_IMPORTED_MODULE_8__["CodigoQRService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "Qndh":
/*!***************************************************!*\
  !*** ./src/app/pages/sala-chat/sala-chat.page.ts ***!
  \***************************************************/
/*! exports provided: SalaChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaChatPage", function() { return SalaChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sala_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sala-chat.page.html */ "Gslz");
/* harmony import */ var _sala_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sala-chat.page.scss */ "8HYz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_clases_mensaje__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/clases/mensaje */ "Gm1F");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mensajes.service */ "fz3y");








let SalaChatPage = class SalaChatPage {
    constructor(mensajeService, modalController) {
        this.mensajeService = mensajeService;
        this.modalController = modalController;
        this.usuario = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].usuario;
        this.mensajeService.leer().then(mensajes => this.mensajes = mensajes);
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.mensajes = src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_7__["MensajesService"].mensajes;
    }
    enviar() {
        this.mensaje = new src_app_clases_mensaje__WEBPACK_IMPORTED_MODULE_5__["Mensaje"]();
        if (this.textoAuxiliar) {
            this.mensaje = src_app_clases_mensaje__WEBPACK_IMPORTED_MODULE_5__["Mensaje"].CrearMensaje('0', this.textoAuxiliar, this.usuario, new Date().toUTCString());
            this.textoAuxiliar = null;
        }
    }
    cerrar() {
        this.modalController.dismiss();
    }
};
SalaChatPage.ctorParameters = () => [
    { type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_7__["MensajesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SalaChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sala-chat',
        template: _raw_loader_sala_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sala_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SalaChatPage);



/***/ }),

/***/ "XnsX":
/*!************************************************************************!*\
  !*** ./src/app/pages/explore-container/explore-container.component.ts ***!
  \************************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-container.component.html */ "aRCn");
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-container.component.scss */ "hTsW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "aRCn":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore-container/explore-container.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "hTsW":
/*!**************************************************************************!*\
  !*** ./src/app/pages/explore-container/explore-container.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "km9s":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cerrar()\">\n        <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"fondo\">\n  <div id=\"container\" class=\"contenido\">\n    <form #formulario=\"ngForm\">\n      <ion-list class=\"ion-no-padding\" color=\"dark\">\n        <ion-item color=\"dark\">\n          <ion-label position=\"floating\">\n            Nombre\n          </ion-label>\n          <ion-input type=\"text\" name=\"nombre\" minlength=\"2\" [(ngModel)]=\"cliente.nombre\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item color=\"dark\">\n          <ion-label position=\"floating\">\n            Apellido\n          </ion-label>\n          <ion-input type=\"text\" name=\"apellido\" minlength=\"2\" [(ngModel)]=\"cliente.apellido\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item color=\"dark\">\n          <ion-label position=\"floating\">\n            DNI\n          </ion-label>\n          <ion-input type=\"text\" minlength=\"7\" maxlength=\"8\" name=\"dni\" [(ngModel)]=\"cliente.dni\"></ion-input>\n        </ion-item>\n        <ion-item color=\"dark\">\n          <ion-label position=\"floating\">\n            Correo electrónico\n          </ion-label>\n          <ion-input type=\"email\" name=\"email\" minlength=\"6\" [(ngModel)]=\"cliente.email\"></ion-input>\n        </ion-item>\n        <ion-item color=\"dark\">\n          <ion-label position=\"floating\">\n            Contraseña\n          </ion-label>\n          <ion-input type=\"password\" name=\"password\" minlength=\"6\" [(ngModel)]=\"cliente.password\"></ion-input>\n        </ion-item>\n        <ion-button size=\"large\" (click)=\"onRegister()\" expand=\"full\" color=\"danger\" [disabled]=\"formulario.invalid\"\n                    class=\"ion-no-margin\">\n          Registro\n        </ion-button>\n      </ion-list>\n    </form>\n\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onScanDNI()\">\n      <ion-icon name=\"qr-code\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "m/sW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cerrar()\">\n        <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Iniciar Sesión</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"fondo\">\n  <div id=\"container\" class=\"contenido\">\n    <form #formulario=\"ngForm\">\n      <ion-list class=\"ion-no-padding ion-no-margin\" color=\"dark\">\n        <ion-item color=\"dark\">\n          <ion-label>\n            Correo electrónico\n          </ion-label>\n          <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"usuario.email\"></ion-input>\n        </ion-item>\n        <ion-item color=\"dark\">\n          <ion-label>\n            Contraseña\n          </ion-label>\n          <ion-input type=\"password\" name=\"password\" [min]=\"6\" [(ngModel)]=\"usuario.password\"></ion-input>\n        </ion-item>\n\n        <ion-button size=\"medium\" (click)=\"onLoginAnonymously()\" expand=\"full\" color=\"medium\" class=\"ion-no-margin\">\n          Anónimo</ion-button>\n\n        <ion-button size=\"large\" (click)=\"onLogin()\" expand=\"full\" color=\"danger\" class=\"ion-no-margin\">Iniciar Sesión\n        </ion-button>\n\n\n      </ion-list>\n    </form>\n\n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"dark\">\n    <ion-button (click)=\"mostrarRoles()\" expand=\"full\" fill=\"clear\" size=\"large\" color=\"danger\">\n      Login de testing\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map