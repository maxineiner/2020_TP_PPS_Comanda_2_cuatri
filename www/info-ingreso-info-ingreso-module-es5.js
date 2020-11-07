(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-ingreso-info-ingreso-module"], {
    /***/
    "5I7i":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/info-ingreso/info-ingreso-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: InfoIngresoPageRoutingModule */

    /***/
    function I7i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoIngresoPageRoutingModule", function () {
        return InfoIngresoPageRoutingModule;
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


      var _info_ingreso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./info-ingreso.page */
      "8/tq");

      var routes = [{
        path: '',
        component: _info_ingreso_page__WEBPACK_IMPORTED_MODULE_3__["InfoIngresoPage"]
      }];

      var InfoIngresoPageRoutingModule = function InfoIngresoPageRoutingModule() {
        _classCallCheck(this, InfoIngresoPageRoutingModule);
      };

      InfoIngresoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InfoIngresoPageRoutingModule);
      /***/
    },

    /***/
    "8/tq":
    /*!*********************************************************!*\
      !*** ./src/app/pages/info-ingreso/info-ingreso.page.ts ***!
      \*********************************************************/

    /*! exports provided: InfoIngresoPage */

    /***/
    function tq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoIngresoPage", function () {
        return InfoIngresoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_info_ingreso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./info-ingreso.page.html */
      "URIQ");
      /* harmony import */


      var _info_ingreso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./info-ingreso.page.scss */
      "CWOb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/cliente.service */
      "teE5");
      /* harmony import */


      var src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/roles.service */
      "0ceX");
      /* harmony import */


      var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/uivisual.service */
      "KPCj");

      var InfoIngresoPage = /*#__PURE__*/function () {
        function InfoIngresoPage(authService, roles, route, clienteService, uiService) {
          _classCallCheck(this, InfoIngresoPage);

          this.authService = authService;
          this.roles = roles;
          this.route = route;
          this.clienteService = clienteService;
          this.uiService = uiService;
        }

        _createClass(InfoIngresoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "verEncuestasAntiguas",
          value: function verEncuestasAntiguas() {}
        }, {
          key: "ponerseEnListaDeEspera",
          value: function ponerseEnListaDeEspera() {
            if (this.roles.isClienteAceptado(src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].usuario)) {
              var cliente = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].usuario;
              cliente.enListaDeEspera = true;
              this.clienteService.actualizar(cliente).then(function () {
                src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_8__["UIVisualService"].presentToast('Estas en la lista de espera');
              });
            }
          }
        }, {
          key: "verListaDeEspera",
          value: function verListaDeEspera() {
            this.route.navigate(['/home/lista-de-espera']);
          }
        }]);

        return InfoIngresoPage;
      }();

      InfoIngresoPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_7__["RolesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"]
        }, {
          type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_8__["UIVisualService"]
        }];
      };

      InfoIngresoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-info-ingreso',
        template: _raw_loader_info_ingreso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_ingreso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InfoIngresoPage);
      /***/
    },

    /***/
    "A4Xv":
    /*!***********************************************************!*\
      !*** ./src/app/pages/info-ingreso/info-ingreso.module.ts ***!
      \***********************************************************/

    /*! exports provided: InfoIngresoPageModule */

    /***/
    function A4Xv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoIngresoPageModule", function () {
        return InfoIngresoPageModule;
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


      var _info_ingreso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./info-ingreso-routing.module */
      "5I7i");
      /* harmony import */


      var _info_ingreso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./info-ingreso.page */
      "8/tq");

      var InfoIngresoPageModule = function InfoIngresoPageModule() {
        _classCallCheck(this, InfoIngresoPageModule);
      };

      InfoIngresoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _info_ingreso_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoIngresoPageRoutingModule"]],
        declarations: [_info_ingreso_page__WEBPACK_IMPORTED_MODULE_6__["InfoIngresoPage"]]
      })], InfoIngresoPageModule);
      /***/
    },

    /***/
    "CWOb":
    /*!***********************************************************!*\
      !*** ./src/app/pages/info-ingreso/info-ingreso.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function CWOb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm8taW5ncmVzby9pbmZvLWluZ3Jlc28ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "URIQ":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info-ingreso/info-ingreso.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function URIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <!-- Opciones: ver encuestas pasadas. ponerse en la lista de espera ver la lista de espera -->\n  <ion-button (click)=\"verEncuestasAntiguas()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Ver encuentas antiguas\n  </ion-button>\n  <ion-button (click)=\"ponerseEnListaDeEspera()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Ponerme en la fila\n  </ion-button>\n  <ion-button (click)=\"verListaDeEspera()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Ver lista de espera\n  </ion-button>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=info-ingreso-info-ingreso-module-es5.js.map