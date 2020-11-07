(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "hsj+");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile-guard.service */ "zNKl");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ "hsj+");





const routes = [
    {
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
        canActivate: [src_app_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_3__["ProfileGuardService"]],
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "uMfO")).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "HJ/b")).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "XgaQ")).then(m => m.Tab3PageModule)
            },
            {
                path: 'menu-producto',
                loadChildren: () => __webpack_require__.e(/*! import() | menu-producto-menu-producto-module */ "menu-producto-menu-producto-module").then(__webpack_require__.bind(null, /*! ../menu-producto/menu-producto.module */ "nboo")).then(m => m.MenuProductoPageModule)
            },
            {
                path: 'menu-cliente',
                loadChildren: () => __webpack_require__.e(/*! import() | menu-cliente-menu-cliente-module */ "menu-cliente-menu-cliente-module").then(__webpack_require__.bind(null, /*! ../menu-cliente/menu-cliente.module */ "Lzep")).then(m => m.MenuClientePageModule)
            },
            {
                path: 'menu-empleado',
                loadChildren: () => __webpack_require__.e(/*! import() | menu-empleado-menu-empleado-module */ "menu-empleado-menu-empleado-module").then(__webpack_require__.bind(null, /*! ../menu-empleado/menu-empleado.module */ "jUP4")).then(m => m.MenuEmpleadoPageModule)
            },
            {
                path: 'menu-mesa',
                loadChildren: () => __webpack_require__.e(/*! import() | menu-mesa-menu-mesa-module */ "menu-mesa-menu-mesa-module").then(__webpack_require__.bind(null, /*! ../menu-mesa/menu-mesa.module */ "/Vt8")).then(m => m.MenuMesaPageModule)
            },
            {
                path: 'menu-jefe',
                loadChildren: () => __webpack_require__.e(/*! import() | menu-jefe-menu-jefe-module */ "menu-jefe-menu-jefe-module").then(__webpack_require__.bind(null, /*! ../menu-jefe/menu-jefe.module */ "sIz6")).then(m => m.MenuJefePageModule)
            },
            {
                path: 'qr-ingreso-local',
                loadChildren: () => __webpack_require__.e(/*! import() | qr-ingreso-local-qr-ingreso-local-module */ "qr-ingreso-local-qr-ingreso-local-module").then(__webpack_require__.bind(null, /*! ../qr-ingreso-local/qr-ingreso-local.module */ "IcSh")).then(m => m.QrIngresoLocalPageModule)
            },
            {
                path: 'carta',
                loadChildren: () => __webpack_require__.e(/*! import() | carta-carta-module */ "carta-carta-module").then(__webpack_require__.bind(null, /*! ../carta/carta.module */ "r6G8")).then(m => m.CartaPageModule)
            },
            {
                path: 'menu-pedidos',
                loadChildren: () => __webpack_require__.e(/*! import() | menu-pedidos-menu-pedidos-module */ "menu-pedidos-menu-pedidos-module").then(__webpack_require__.bind(null, /*! ../menu-pedidos/menu-pedidos.module */ "9lHz")).then(m => m.MenuPedidosPageModule)
            },
            {
                path: 'menu-reserva',
                loadChildren: () => __webpack_require__.e(/*! import() | menu-reserva-menu-reserva-module */ "menu-reserva-menu-reserva-module").then(__webpack_require__.bind(null, /*! ../menu-reserva/menu-reserva.module */ "n335")).then(m => m.MenuReservaPageModule)
            },
            {
                path: 'lista-de-espera',
                loadChildren: () => __webpack_require__.e(/*! import() | lista-de-espera-lista-de-espera-module */ "lista-de-espera-lista-de-espera-module").then(__webpack_require__.bind(null, /*! ../lista-de-espera/lista-de-espera.module */ "G0km")).then(m => m.ListaDeEsperaPageModule)
            },
            {
                path: 'inicio',
                loadChildren: () => __webpack_require__.e(/*! import() | inicio-inicio-module */ "inicio-inicio-module").then(__webpack_require__.bind(null, /*! ../inicio/inicio.module */ "DdEe")).then(m => m.InicioPageModule)
            },
            {
                path: 'info-ingreso',
                loadChildren: () => __webpack_require__.e(/*! import() | info-ingreso-info-ingreso-module */ "info-ingreso-info-ingreso-module").then(__webpack_require__.bind(null, /*! ../info-ingreso/info-ingreso.module */ "A4Xv")).then(m => m.InfoIngresoPageModule)
            },
            {
                path: 'info-mesa/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | info-mesa-info-mesa-module */ "info-mesa-info-mesa-module").then(__webpack_require__.bind(null, /*! ../info-mesa/info-mesa.module */ "+Hsv")).then(m => m.InfoMesaPageModule)
            },
            {
                path: '',
                redirectTo: '/home/inicio',
                pathMatch: 'full'
            },
        ]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "KWWs":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");





const { PushNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let NotificationsService = class NotificationsService {
    constructor(router) {
        this.router = router;
    }
    initPush() {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Capacitor"].platform != 'web') {
            this.registerPush();
            console.log('Registrando...');
        }
    }
    registerPush() {
        // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting
        PushNotifications.requestPermission().then(result => {
            if (result.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
            }
            else {
                // Show some error
            }
        });
        PushNotifications.addListener('registration', (token) => {
            alert('Push registration success, token: ' + token.value);
        });
        PushNotifications.addListener('registrationError', (error) => {
            alert('Error on registration: ' + JSON.stringify(error));
        });
        PushNotifications.addListener('pushNotificationReceived', (notification) => {
            alert('Push received: ' + JSON.stringify(notification));
        });
        PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            alert('Push action performed: ' + JSON.stringify(notification));
        });
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationsService);



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <ion-fab class=\"ion-margin-bottom\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"dark\">\r\n      <img [src]=\"icono\" alt=\"icono-app\">\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"start\">\r\n      <ion-fab-button color=\"tertiary\" translucent=\"true\">\r\n        <ion-icon name=\"log-out\" (click)=\"cerrarSesion()\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"success\" translucent=\"true\" [routerLink]=\"['/home/tab1']\">\r\n        <ion-icon name=\"triangle\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\" color=\"dark\">\r\n\r\n    <app-escanerQR [usuario]=\"usuario\"></app-escanerQR>\r\n\r\n\r\n    <ion-tab-button tab=\"menu-producto\"\r\n                    *ngIf=\"rolService.isClienteAceptado(usuario) || \r\n                    rolService.isClienteAnonimo(usuario) ||\r\n                    rolService.isJefe(usuario)\">\r\n      <ion-icon name=\"restaurant\"></ion-icon>\r\n      <ion-label>Carta</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"menu-reserva\" *ngIf=\"rolService.isJefe(usuario) || rolService.isClienteAceptado(usuario)\"\r\n                    color=\"success\">\r\n      <ion-icon name=\"color-wand-outline\"></ion-icon>\r\n      <ion-label>Reservas</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"menu-pedidos\" *ngIf=\"rolService.isEmpleado(usuario)\">\r\n      <ion-icon name=\"fast-food\"></ion-icon>\r\n      <ion-label>Pedidos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"lista-de-espera\" *ngIf=\"rolService.isEmpleadoMozo(usuario)\">\r\n      <ion-icon name=\"hourglass-sharp\"></ion-icon>\r\n      <ion-label>Lista de espera</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button *ngIf=\"rolService.isJefe(usuario)\" (click)=\"mostrarMenu()\">\r\n      <ion-icon name=\"menu\"></ion-icon>\r\n      <ion-label>Menu</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/notifications.service */ "KWWs");
/* harmony import */ var src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/roles.service */ "0ceX");









let HomePage = class HomePage {
    constructor(rolService, authService, router, notifications, actionSheetController) {
        this.rolService = rolService;
        this.authService = authService;
        this.router = router;
        this.notifications = notifications;
        this.actionSheetController = actionSheetController;
        // Código de prueba
        this.usuario = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].usuario;
        this.icono = '/assets/img/icono.png';
    }
    ngOnInit() {
        this.usuario = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].usuario;
        this.notifications.initPush();
    }
    cerrarSesion() {
        this.authService.onLogout();
        this.router.navigate(['/auth-page']);
    }
    mostrarMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Menú',
                mode: 'ios',
                translucent: true,
                buttons: [{
                        text: 'Clientes',
                        icon: 'person-circle',
                        handler: () => this.router.navigate(['/home/menu-cliente'])
                    },
                    {
                        text: 'Empleados',
                        icon: 'accessibility-outline',
                        handler: () => this.router.navigate(['/home/menu-empleado'])
                    },
                    {
                        text: 'Supervisores',
                        icon: 'glasses-outline',
                        handler: () => this.router.navigate(['/home/menu-jefe'])
                    },
                    {
                        text: 'Mesas',
                        icon: 'storefront-outline',
                        handler: () => this.router.navigate(['/home/menu-mesa'])
                    },
                    {
                        text: 'Cerrar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cerrar');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_8__["RolesService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map