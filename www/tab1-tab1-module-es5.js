(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "JGGF":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab1/tab1.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function JGGF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "LhMw":
    /*!*****************************************!*\
      !*** ./src/app/pages/tab1/tab1.page.ts ***!
      \*****************************************/

    /*! exports provided: Tab1Page */

    /***/
    function LhMw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "p9Ql");
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1.page.scss */
      "JGGF");
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


      var src_app_services_codigo_qr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/codigo-qr.service */
      "qko+");
      /* harmony import */


      var _sala_chat_sala_chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../sala-chat/sala-chat.page */
      "Qndh");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(escanerQR, toastController, router, modalController) {
          _classCallCheck(this, Tab1Page);

          this.escanerQR = escanerQR;
          this.toastController = toastController;
          this.router = router;
          this.modalController = modalController;
        }

        _createClass(Tab1Page, [{
          key: "escanear",
          value: function escanear() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var scan;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.escanerQR.escanear("Escanee el código QR", 'QR_CODE');

                    case 2:
                      scan = _context.sent;
                      this.procesarQR(scan);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "procesarQR",
          value: function procesarQR(scan) {
            var textoQR = scan.text.split(':');
            var entidad = textoQR[1];
            var id = textoQR[2];

            switch (entidad) {
              case 'Mesa':
                this.router.navigate(['/info-mesa', id]);
                break;

              case 'Producto':
                break;

              case 'Ingreso':
                break;
            }
          }
        }, {
          key: "verChat",
          value: function verChat() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _sala_chat_sala_chat_page__WEBPACK_IMPORTED_MODULE_7__["SalaChatPage"]
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: src_app_services_codigo_qr_service__WEBPACK_IMPORTED_MODULE_6__["CodigoQRService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab1Page);
      /***/
    },

    /***/
    "mV/h":
    /*!***************************************************!*\
      !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function mVH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tab1.page */
      "LhMw");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_4__["Tab1Page"],
        canActivate: [src_app_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_3__["ProfileGuardService"]]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "p9Ql":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function p9Ql(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Test\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"dark\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Botones para prueba</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-list color=\"dark\">\n    <ion-list-header>\n      <ion-label>Sólo para probar pages</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/menu-mesa\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Menú mesa\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/menu-cliente\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Menú Cliente\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/menu-empleado\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Menú Empleado\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/menu-jefe\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Menú Jefe\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/menu-producto\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Menú producto\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/menu-pedidos\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Menú Pedido\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/qr-ingreso-local\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Qr ingreso al local\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/menu-reserva\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Menú reserva\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/login\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Iniciar Sesión\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/register\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Registro\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/lista-de-espera\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Lista de Espera\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/info-ingreso\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Info-ingreso\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button routerLink=\"/home/info-mesa/1\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Info-mesa\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-button (click)=\"verChat()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Chat mozo\n      </ion-button>\n    </ion-item>\n\n\n  </ion-list>\n  <!--  -->\n\n</ion-content>";
      /***/
    },

    /***/
    "uMfO":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab1/tab1.module.ts ***!
      \*******************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function uMfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "LhMw");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "HGan");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "mV/h");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map