(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-reserva-menu-reserva-module"], {
    /***/
    "83eM":
    /*!***********************************************************!*\
      !*** ./src/app/pages/menu-reserva/menu-reserva.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function eM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtcmVzZXJ2YS9tZW51LXJlc2VydmEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "CwaQ":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-reserva/menu-reserva.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CwaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"Menú\"></app-header>\r\n\r\n<ion-segment value=\"Listado\" (ionChange)=\"seleccionarOpcion($event)\" scrollable color=\"success\">\r\n  <ion-segment-button value=\"Listado\">\r\n    <ion-label>Reservas</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Alta\">\r\n    <ion-label>Alta</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Baja\" *ngIf=\"reservaElegida\">\r\n    <ion-label>Baja</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Modificación\" *ngIf=\"reservaElegida\">\r\n    <ion-label>Modificar</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<ion-content class=\"fondo\">\r\n\r\n  <app-listado-reservas *ngIf=\"opcion == 'Listado'\" [reservas]=\"listado\" (elegirReserva)=\"elegirReserva($event)\">\r\n  </app-listado-reservas>\r\n  <app-form-reserva *ngIf=\"opcion != 'Listado'\" [opcion]=\"opcion\" [pedido]=\"reservaElegida\" [opcion]=\"opcion\">\r\n  </app-form-reserva>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "Lqfj":
    /*!*********************************************************!*\
      !*** ./src/app/pages/menu-reserva/menu-reserva.page.ts ***!
      \*********************************************************/

    /*! exports provided: MenuReservaPage */

    /***/
    function Lqfj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuReservaPage", function () {
        return MenuReservaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_reserva_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu-reserva.page.html */
      "CwaQ");
      /* harmony import */


      var _menu_reserva_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-reserva.page.scss */
      "83eM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/clases/pedido */
      "tUIk");
      /* harmony import */


      var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/pedido.service */
      "KG2h");
      /* harmony import */


      var src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/reserva.service */
      "QzLQ");

      var MenuReservaPage = /*#__PURE__*/function () {
        function MenuReservaPage(reservaService, pedidoService) {
          _classCallCheck(this, MenuReservaPage);

          this.reservaService = reservaService;
          this.pedidoService = pedidoService;
          this.opcion = 'Listado';
        }

        _createClass(MenuReservaPage, [{
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.listado = src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_5__["PedidoService"].pedidos.filter(function (pedido) {
              return pedido.estado == src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["EstadoPedido"].RESERVADO;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log("INIT");
            this.pedidoService.leer().then(function (data) {
              console.log(data);
              _this.listado = data.filter(function (pedido) {
                return pedido.estado == src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_4__["EstadoPedido"].RESERVADO;
              });
            });
          }
        }, {
          key: "seleccionarOpcion",
          value: function seleccionarOpcion(event) {
            console.log(event.detail.value);
            this.opcion = event.detail.value;
          }
        }, {
          key: "elegirReserva",
          value: function elegirReserva(event) {
            console.log(event);
            this.reservaElegida = event;
          }
        }]);

        return MenuReservaPage;
      }();

      MenuReservaPage.ctorParameters = function () {
        return [{
          type: src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_6__["ReservaService"]
        }, {
          type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_5__["PedidoService"]
        }];
      };

      MenuReservaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-reserva',
        template: _raw_loader_menu_reserva_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_reserva_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuReservaPage);
      /***/
    },

    /***/
    "n335":
    /*!***********************************************************!*\
      !*** ./src/app/pages/menu-reserva/menu-reserva.module.ts ***!
      \***********************************************************/

    /*! exports provided: MenuReservaPageModule */

    /***/
    function n335(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuReservaPageModule", function () {
        return MenuReservaPageModule;
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


      var _menu_reserva_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-reserva-routing.module */
      "rLEE");
      /* harmony import */


      var _menu_reserva_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-reserva.page */
      "Lqfj");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var MenuReservaPageModule = function MenuReservaPageModule() {
        _classCallCheck(this, MenuReservaPageModule);
      };

      MenuReservaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_reserva_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuReservaPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_menu_reserva_page__WEBPACK_IMPORTED_MODULE_6__["MenuReservaPage"]]
      })], MenuReservaPageModule);
      /***/
    },

    /***/
    "rLEE":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/menu-reserva/menu-reserva-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: MenuReservaPageRoutingModule */

    /***/
    function rLEE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuReservaPageRoutingModule", function () {
        return MenuReservaPageRoutingModule;
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


      var _menu_reserva_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-reserva.page */
      "Lqfj");

      var routes = [{
        path: '',
        component: _menu_reserva_page__WEBPACK_IMPORTED_MODULE_3__["MenuReservaPage"]
      }];

      var MenuReservaPageRoutingModule = function MenuReservaPageRoutingModule() {
        _classCallCheck(this, MenuReservaPageRoutingModule);
      };

      MenuReservaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuReservaPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=menu-reserva-menu-reserva-module-es5.js.map