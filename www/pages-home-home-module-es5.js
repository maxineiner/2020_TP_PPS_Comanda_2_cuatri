(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
    /***/
    "/rnz":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function rnz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "99Un":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function Un(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "9oos");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "hsj+");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "9oos":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function oos(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile-guard.service */
      "zNKl");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home.page */
      "hsj+");

      var routes = [{
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
        canActivate: [src_app_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_3__["ProfileGuardService"]],
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab1-tab1-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../tab1/tab1.module */
            "uMfO")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab2-tab2-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
            /*! ../tab2/tab2.module */
            "HJ/b")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab3-tab3-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
            /*! ../tab3/tab3.module */
            "XgaQ")).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: 'menu-producto',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | menu-producto-menu-producto-module */
            "menu-producto-menu-producto-module").then(__webpack_require__.bind(null,
            /*! ../menu-producto/menu-producto.module */
            "nboo")).then(function (m) {
              return m.MenuProductoPageModule;
            });
          }
        }, {
          path: 'menu-cliente',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | menu-cliente-menu-cliente-module */
            "menu-cliente-menu-cliente-module").then(__webpack_require__.bind(null,
            /*! ../menu-cliente/menu-cliente.module */
            "Lzep")).then(function (m) {
              return m.MenuClientePageModule;
            });
          }
        }, {
          path: 'menu-empleado',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | menu-empleado-menu-empleado-module */
            "menu-empleado-menu-empleado-module").then(__webpack_require__.bind(null,
            /*! ../menu-empleado/menu-empleado.module */
            "jUP4")).then(function (m) {
              return m.MenuEmpleadoPageModule;
            });
          }
        }, {
          path: 'menu-mesa',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | menu-mesa-menu-mesa-module */
            "menu-mesa-menu-mesa-module").then(__webpack_require__.bind(null,
            /*! ../menu-mesa/menu-mesa.module */
            "/Vt8")).then(function (m) {
              return m.MenuMesaPageModule;
            });
          }
        }, {
          path: 'menu-jefe',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | menu-jefe-menu-jefe-module */
            "menu-jefe-menu-jefe-module").then(__webpack_require__.bind(null,
            /*! ../menu-jefe/menu-jefe.module */
            "sIz6")).then(function (m) {
              return m.MenuJefePageModule;
            });
          }
        }, {
          path: 'qr-ingreso-local',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | qr-ingreso-local-qr-ingreso-local-module */
            "qr-ingreso-local-qr-ingreso-local-module").then(__webpack_require__.bind(null,
            /*! ../qr-ingreso-local/qr-ingreso-local.module */
            "IcSh")).then(function (m) {
              return m.QrIngresoLocalPageModule;
            });
          }
        }, {
          path: 'carta',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | carta-carta-module */
            "carta-carta-module").then(__webpack_require__.bind(null,
            /*! ../carta/carta.module */
            "r6G8")).then(function (m) {
              return m.CartaPageModule;
            });
          }
        }, {
          path: 'menu-pedidos',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | menu-pedidos-menu-pedidos-module */
            "menu-pedidos-menu-pedidos-module").then(__webpack_require__.bind(null,
            /*! ../menu-pedidos/menu-pedidos.module */
            "9lHz")).then(function (m) {
              return m.MenuPedidosPageModule;
            });
          }
        }, {
          path: 'menu-reserva',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | menu-reserva-menu-reserva-module */
            "menu-reserva-menu-reserva-module").then(__webpack_require__.bind(null,
            /*! ../menu-reserva/menu-reserva.module */
            "n335")).then(function (m) {
              return m.MenuReservaPageModule;
            });
          }
        }, {
          path: 'lista-de-espera',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | lista-de-espera-lista-de-espera-module */
            "lista-de-espera-lista-de-espera-module").then(__webpack_require__.bind(null,
            /*! ../lista-de-espera/lista-de-espera.module */
            "G0km")).then(function (m) {
              return m.ListaDeEsperaPageModule;
            });
          }
        }, {
          path: 'inicio',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | inicio-inicio-module */
            "inicio-inicio-module").then(__webpack_require__.bind(null,
            /*! ../inicio/inicio.module */
            "DdEe")).then(function (m) {
              return m.InicioPageModule;
            });
          }
        }, {
          path: 'info-ingreso',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | info-ingreso-info-ingreso-module */
            "info-ingreso-info-ingreso-module").then(__webpack_require__.bind(null,
            /*! ../info-ingreso/info-ingreso.module */
            "A4Xv")).then(function (m) {
              return m.InfoIngresoPageModule;
            });
          }
        }, {
          path: 'info-mesa/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | info-mesa-info-mesa-module */
            [__webpack_require__.e("common"), __webpack_require__.e("info-mesa-info-mesa-module")]).then(__webpack_require__.bind(null,
            /*! ../info-mesa/info-mesa.module */
            "+Hsv")).then(function (m) {
              return m.InfoMesaPageModule;
            });
          }
        }, {
          path: 'sala-chat',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | sala-chat-sala-chat-module */
            [__webpack_require__.e("common"), __webpack_require__.e("sala-chat-sala-chat-module")]).then(__webpack_require__.bind(null,
            /*! ../sala-chat/sala-chat.module */
            "j2q8")).then(function (m) {
              return m.SalaChatPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/home/inicio',
          pathMatch: 'full'
        }]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "KWWs":
    /*!***************************************************!*\
      !*** ./src/app/services/notifications.service.ts ***!
      \***************************************************/

    /*! exports provided: NotificationsService */

    /***/
    function KWWs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
        return NotificationsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].PushNotifications;

      var NotificationsService = /*#__PURE__*/function () {
        function NotificationsService(router) {
          _classCallCheck(this, NotificationsService);

          this.router = router;
        }

        _createClass(NotificationsService, [{
          key: "initPush",
          value: function initPush() {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Capacitor"].platform != 'web') {
              this.registerPush();
              console.log('Registrando...');
            }
          }
        }, {
          key: "registerPush",
          value: function registerPush() {
            // Request permission to use push notifications
            // iOS will prompt user and return if they granted permission or not
            // Android will just grant without prompting
            PushNotifications.requestPermission().then(function (result) {
              if (result.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
              } else {// Show some error
              }
            });
            PushNotifications.addListener('registration', function (token) {
              /* alert('Push registration success, token: ' + token.value); */
            });
            PushNotifications.addListener('registrationError', function (error) {
              /* alert('Error on registration: ' + JSON.stringify(error)); */
            });
            PushNotifications.addListener('pushNotificationReceived', function (notification) {
              /* alert('Push received: ' + JSON.stringify(notification)); */
            });
            PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
              /* alert('Push action performed: ' + JSON.stringify(notification)); */
            });
          }
        }]);

        return NotificationsService;
      }();

      NotificationsService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NotificationsService);
      /***/
    },

    /***/
    "eUf4":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function eUf4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-fab class=\"ion-margin-bottom\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"dark\">\n      <img [src]=\"icono\" alt=\"icono-app\">\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-fab-button color=\"tertiary\" translucent=\"true\">\n        <ion-icon name=\"log-out\" (click)=\"cerrarSesion()\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"success\" translucent=\"true\" [routerLink]=\"['/home/tab1']\">\n        <ion-icon name=\"triangle\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"danger\" translucent=\"true\" [routerLink]=\"['/home/inicio']\">\n        <ion-icon name=\"home-sharp\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n\n\n<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\" color=\"dark\">\n\n    <ion-tab-button tab=\"menu-producto\">\n      <ion-icon name=\"restaurant\"></ion-icon>\n      <ion-label>Carta</ion-label>\n    </ion-tab-button>\n\n    <app-escanerQR [usuario]=\"usuario\"></app-escanerQR>\n\n    <ion-tab-button tab=\"menu-reserva\" *ngIf=\"rolService.isJefe(usuario) || rolService.isClienteAceptado(usuario)\"\n                    color=\"success\">\n      <ion-icon name=\"color-wand-outline\"></ion-icon>\n      <ion-label>Reservas</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"menu-pedidos\" *ngIf=\"rolService.isEmpleado(usuario)\">\n      <ion-icon name=\"fast-food\"></ion-icon>\n      <ion-label>Pedidos</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"lista-de-espera\" *ngIf=\"rolService.isEmpleadoMozo(usuario)\">\n      <ion-icon name=\"hourglass-sharp\"></ion-icon>\n      <ion-label>Lista de espera</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"rolService.isJefe(usuario)\" (click)=\"mostrarMenu()\">\n      <ion-icon name=\"menu\"></ion-icon>\n      <ion-label>Menu</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>";
      /***/
    },

    /***/
    "hsj+":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function hsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "eUf4");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "/rnz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/notifications.service */
      "KWWs");
      /* harmony import */


      var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/pedido.service */
      "KG2h");
      /* harmony import */


      var src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/roles.service */
      "0ceX");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(rolService, authService, router, notifications, actionSheetController, pedidosService) {
          _classCallCheck(this, HomePage);

          this.rolService = rolService;
          this.authService = authService;
          this.router = router;
          this.notifications = notifications;
          this.actionSheetController = actionSheetController;
          this.pedidosService = pedidosService; // Código de prueba

          this.usuario = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].usuario;
          this.icono = '/assets/img/icono.png';
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pedidosService.leer();
            this.usuario = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].usuario;
            this.notifications.initPush();
          }
        }, {
          key: "cerrarSesion",
          value: function cerrarSesion() {
            this.authService.onLogout();
            this.router.navigate(['/auth-page']);
          }
        }, {
          key: "mostrarMenu",
          value: function mostrarMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: 'Menú',
                        mode: 'ios',
                        translucent: true,
                        buttons: [{
                          text: 'Clientes',
                          icon: 'person-circle',
                          handler: function handler() {
                            return _this.router.navigate(['/home/menu-cliente']);
                          }
                        }, {
                          text: 'Empleados',
                          icon: 'accessibility-outline',
                          handler: function handler() {
                            return _this.router.navigate(['/home/menu-empleado']);
                          }
                        }, {
                          text: 'Supervisores',
                          icon: 'glasses-outline',
                          handler: function handler() {
                            return _this.router.navigate(['/home/menu-jefe']);
                          }
                        }, {
                          text: 'Mesas',
                          icon: 'storefront-outline',
                          handler: function handler() {
                            return _this.router.navigate(['/home/menu-mesa']);
                          }
                        }, {
                          text: 'Cerrar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cerrar');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_9__["RolesService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_8__["PedidoService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-home-home-module-es5.js.map