(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-cliente-menu-cliente-module"], {
    /***/
    "5/oq":
    /*!***********************************************************!*\
      !*** ./src/app/pages/menu-cliente/menu-cliente.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function oq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtY2xpZW50ZS9tZW51LWNsaWVudGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "9q10":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-cliente/menu-cliente.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"Menú Cliente\"></app-header>\n\n<ion-segment value=\"Listado\" (ionChange)=\"seleccionarOpcion($event)\" scrollable color=\"success\">\n  <ion-segment-button value=\"Listado\">\n    <ion-label>Clientes</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Alta\">\n    <ion-label>Alta</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Baja\" *ngIf=\"clienteSeleccionado.isActive\">\n    <ion-label>Baja</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Modificación\" *ngIf=\"clienteSeleccionado.isActive\">\n    <ion-label>Modificar</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content class=\"fondo\">\n\n  <app-listado-clientes *ngIf=\"opcion == 'Listado'\" [clientes]=\"listado\"\n                        (seleccionarCliente)=\"seleccionarCliente($event)\">\n  </app-listado-clientes>\n\n  <app-form-clientes *ngIf=\"opcion != 'Listado'\" [opcion]=\"opcion\" [cliente]=\"clienteSeleccionado\">\n  </app-form-clientes>\n\n</ion-content>";
      /***/
    },

    /***/
    "Lzep":
    /*!***********************************************************!*\
      !*** ./src/app/pages/menu-cliente/menu-cliente.module.ts ***!
      \***********************************************************/

    /*! exports provided: MenuClientePageModule */

    /***/
    function Lzep(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuClientePageModule", function () {
        return MenuClientePageModule;
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


      var _menu_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-cliente-routing.module */
      "eZBl");
      /* harmony import */


      var _menu_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-cliente.page */
      "VksE");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var MenuClientePageModule = function MenuClientePageModule() {
        _classCallCheck(this, MenuClientePageModule);
      };

      MenuClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuClientePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_menu_cliente_page__WEBPACK_IMPORTED_MODULE_6__["MenuClientePage"]]
      })], MenuClientePageModule);
      /***/
    },

    /***/
    "VksE":
    /*!*********************************************************!*\
      !*** ./src/app/pages/menu-cliente/menu-cliente.page.ts ***!
      \*********************************************************/

    /*! exports provided: MenuClientePage */

    /***/
    function VksE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuClientePage", function () {
        return MenuClientePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_cliente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu-cliente.page.html */
      "9q10");
      /* harmony import */


      var _menu_cliente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-cliente.page.scss */
      "5/oq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/clases/cliente */
      "tDE8");
      /* harmony import */


      var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/cliente.service */
      "teE5");

      var MenuClientePage = /*#__PURE__*/function () {
        function MenuClientePage(router, clienteService) {
          _classCallCheck(this, MenuClientePage);

          this.router = router;
          this.clienteService = clienteService;
          this.opcion = 'Listado';
          this.listado = src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"].clientes;
          this.clienteSeleccionado = new src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        }

        _createClass(MenuClientePage, [{
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.listado = src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"].clientes;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log("INIT");
            this.clienteService.leer().then(function (clientes) {
              console.log(clientes);
              _this.listado = clientes;
              console.log(_this.listado);
            });
            this.clienteSeleccionado = new src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
          }
          /**
           * Metodo para seleccionar modo del form para ABM
           * @param event Evento con el valor que determina modo del form
           */

        }, {
          key: "seleccionarOpcion",
          value: function seleccionarOpcion(event) {
            console.log(event.detail.value);
            this.opcion = event.detail.value;
          }
          /**
           * Método para recibir cliente seleccionada
           * @param cliente seleccionado desde listado
           */

        }, {
          key: "seleccionarCliente",
          value: function seleccionarCliente(cliente) {
            console.log(cliente);
            this.clienteSeleccionado = cliente;
          }
        }]);

        return MenuClientePage;
      }();

      MenuClientePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"]
        }];
      };

      MenuClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-cliente',
        template: _raw_loader_menu_cliente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_cliente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuClientePage);
      /***/
    },

    /***/
    "eZBl":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/menu-cliente/menu-cliente-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: MenuClientePageRoutingModule */

    /***/
    function eZBl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuClientePageRoutingModule", function () {
        return MenuClientePageRoutingModule;
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


      var _menu_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-cliente.page */
      "VksE");

      var routes = [{
        path: '',
        component: _menu_cliente_page__WEBPACK_IMPORTED_MODULE_3__["MenuClientePage"]
      }];

      var MenuClientePageRoutingModule = function MenuClientePageRoutingModule() {
        _classCallCheck(this, MenuClientePageRoutingModule);
      };

      MenuClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuClientePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=menu-cliente-menu-cliente-module-es5.js.map