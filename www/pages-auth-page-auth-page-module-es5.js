(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-page-auth-page-module"], {
    /***/
    "IEFU":
    /*!*************************************************************!*\
      !*** ./src/app/pages/auth-page/auth-page-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AuthPagePageRoutingModule */

    /***/
    function IEFU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPagePageRoutingModule", function () {
        return AuthPagePageRoutingModule;
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


      var _auth_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth-page.page */
      "g2qW");

      var routes = [{
        path: '',
        component: _auth_page_page__WEBPACK_IMPORTED_MODULE_3__["AuthPagePage"]
      }];

      var AuthPagePageRoutingModule = function AuthPagePageRoutingModule() {
        _classCallCheck(this, AuthPagePageRoutingModule);
      };

      AuthPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthPagePageRoutingModule);
      /***/
    },

    /***/
    "UPBg":
    /*!*****************************************************!*\
      !*** ./src/app/pages/auth-page/auth-page.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function UPBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgtcGFnZS9hdXRoLXBhZ2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "b/Uz":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth-page/auth-page.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function bUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content id=\"container\" class=\"fondo\">\r\n  <div id=\"container\">\r\n    <img src=\"./assets/img/icono_food.png\" alt=\"\" style=\"max-width: 200px;\">\r\n\r\n    <ion-button (click)=\"mostrarLogin($event)\" expand=\"block\" size=\"large\" color=\"danger\">\r\n      Iniciar sesión\r\n    </ion-button>\r\n    <ion-button (click)=\"mostrarRegistro($event)\" size=\"medium\" color=\"dark\">\r\n      Registro\r\n    </ion-button>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "clKO":
    /*!*****************************************************!*\
      !*** ./src/app/pages/auth-page/auth-page.module.ts ***!
      \*****************************************************/

    /*! exports provided: AuthPagePageModule */

    /***/
    function clKO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPagePageModule", function () {
        return AuthPagePageModule;
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


      var _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth-page-routing.module */
      "IEFU");
      /* harmony import */


      var _auth_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth-page.page */
      "g2qW");

      var AuthPagePageModule = function AuthPagePageModule() {
        _classCallCheck(this, AuthPagePageModule);
      };

      AuthPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPagePageRoutingModule"]],
        declarations: [_auth_page_page__WEBPACK_IMPORTED_MODULE_6__["AuthPagePage"]]
      })], AuthPagePageModule);
      /***/
    },

    /***/
    "g2qW":
    /*!***************************************************!*\
      !*** ./src/app/pages/auth-page/auth-page.page.ts ***!
      \***************************************************/

    /*! exports provided: AuthPagePage */

    /***/
    function g2qW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPagePage", function () {
        return AuthPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth-page.page.html */
      "b/Uz");
      /* harmony import */


      var _auth_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-page.page.scss */
      "UPBg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_components_login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/components/login/login.page */
      "+HcX");
      /* harmony import */


      var src_app_components_register_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/register/register.page */
      "MJOv");

      var AuthPagePage = /*#__PURE__*/function () {
        function AuthPagePage(modalController) {
          _classCallCheck(this, AuthPagePage);

          this.modalController = modalController;
        }

        _createClass(AuthPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "mostrarLogin",
          value: function mostrarLogin(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal, _yield$modal$onDidDis, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: src_app_components_login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      _context.next = 7;
                      return modal.onDidDismiss();

                    case 7:
                      _yield$modal$onDidDis = _context.sent;
                      data = _yield$modal$onDidDis.data;
                      return _context.abrupt("return", data);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "mostrarRegistro",
          value: function mostrarRegistro(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal, _yield$modal$onDidDis2, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: src_app_components_register_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      _context2.next = 7;
                      return modal.onDidDismiss();

                    case 7:
                      _yield$modal$onDidDis2 = _context2.sent;
                      data = _yield$modal$onDidDis2.data;
                      return _context2.abrupt("return", data);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AuthPagePage;
      }();

      AuthPagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      AuthPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth-page',
        template: _raw_loader_auth_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AuthPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-auth-page-auth-page-module-es5.js.map