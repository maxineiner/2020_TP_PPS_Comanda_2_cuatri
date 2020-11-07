(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-mesa-info-mesa-module"], {
    /***/
    "+Hsv":
    /*!*****************************************************!*\
      !*** ./src/app/pages/info-mesa/info-mesa.module.ts ***!
      \*****************************************************/

    /*! exports provided: InfoMesaPageModule */

    /***/
    function Hsv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoMesaPageModule", function () {
        return InfoMesaPageModule;
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


      var _info_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./info-mesa-routing.module */
      "g65l");
      /* harmony import */


      var _info_mesa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./info-mesa.page */
      "aalK");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var InfoMesaPageModule = function InfoMesaPageModule() {
        _classCallCheck(this, InfoMesaPageModule);
      };

      InfoMesaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _info_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoMesaPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_info_mesa_page__WEBPACK_IMPORTED_MODULE_6__["InfoMesaPage"]]
      })], InfoMesaPageModule);
      /***/
    },

    /***/
    "Ig2y":
    /*!******************************************!*\
      !*** ./src/app/services/date.service.ts ***!
      \******************************************/

    /*! exports provided: DateService */

    /***/
    function Ig2y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateService", function () {
        return DateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DateService = /*#__PURE__*/function () {
        function DateService() {
          _classCallCheck(this, DateService);
        }
        /**
         * convierte un objeto Date a timeStamp
         * @param date
         */


        _createClass(DateService, [{
          key: "toTimeStamp",
          value: function toTimeStamp(date) {
            return date.getTime() / 1000000;
          }
        }, {
          key: "toDate",
          value: function toDate(timeStamp) {
            var date = new Date(timeStamp * 1000000);
            return date;
          }
          /**
           * Convierte fecha en formato ISO a objeto Date con fecha local
           * @param stringISO Fecha en formato ISO string
           */

        }, {
          key: "getDateObject",
          value: function getDateObject(stringISO) {
            var timeStamp = Date.parse(stringISO);
            var fecha = new Date(timeStamp);
            var anio = fecha.getFullYear();
            var mes = fecha.getMonth();
            var dia = fecha.getDate();
            var horas = fecha.getHours();
            var minutos = fecha.getMinutes();
            var newDate = new Date(anio, mes - 1, dia, horas, minutos, 0, 0);
            return newDate;
          }
          /**Funcion para agregar minutos a un timeStamp
          * @param timeStamp TimeStamp
          * @param minutosAAgregar Minutos a agregar
          * @returns TimeStamp con los minutos agregados
          */

        }, {
          key: "sumarMinutos",
          value: function sumarMinutos(timeStamp, minutosASumar) {
            var nuevoHorario = timeStamp + minutosASumar * 60;
            return nuevoHorario;
          }
        }, {
          key: "restarMinutos",
          value: function restarMinutos(timeStamp, minutosARestar) {
            var nuevoHorario = timeStamp - minutosARestar * 60;
            return nuevoHorario;
          }
          /**
           * Obtiene fecha local en formato ISO string
           * @param date
           */

        }, {
          key: "getIsoLocalTime",
          value: function getIsoLocalTime(date) {
            var isoLocalTime = date.getFullYear().toString() + '-';

            if (date.getMonth() + 1 < 10) {
              isoLocalTime += '0' + (date.getMonth() + 1) + '-';
            } else {
              isoLocalTime += date.getMonth() + 1 + '-';
            }

            if (date.getDate() < 10) {
              isoLocalTime += '0' + date.getDate() + 'T';
            } else {
              isoLocalTime += date.getDate() + 'T';
            }

            isoLocalTime += date.toLocaleTimeString();
            console.log('Mi ISOtimeString', isoLocalTime);
            return isoLocalTime;
          }
        }]);

        return DateService;
      }();

      DateService.ctorParameters = function () {
        return [];
      };

      DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DateService);
      /***/
    },

    /***/
    "PZA/":
    /*!*****************************************************!*\
      !*** ./src/app/pages/info-mesa/info-mesa.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function PZA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm8tbWVzYS9pbmZvLW1lc2EucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "USx0":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info-mesa/info-mesa.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function USx0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"fondo\">\r\n  <ion-grid fixed id=\"container\">\r\n    <ion-row *ngIf=\"pedido\">\r\n      <ion-col size=\"12\" class=\"ion-justify-content-center\">\r\n        <!-- Aca debería ir el componente con la reserva actual -->\r\n        <app-detalle-reserva [reserva]=\"pedido\"></app-detalle-reserva>\r\n        <app-detalle-pedido [pedido]=\"pedido\"></app-detalle-pedido>\r\n        <ion-button (click)=\"consultarAlMozo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n          Consultar al mozo\r\n        </ion-button>\r\n        <ion-button (click)=\"verEncuesta()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n          Realizar encuesta\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"!pedido\">\r\n      <ion-col size=\"12\">\r\n        <div id=\"container\">\r\n          <ion-label>\r\n            <h1>\r\n              <strong>Usted no está asignado a esta mesa</strong>\r\n            </h1>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "aalK":
    /*!***************************************************!*\
      !*** ./src/app/pages/info-mesa/info-mesa.page.ts ***!
      \***************************************************/

    /*! exports provided: InfoMesaPage */

    /***/
    function aalK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoMesaPage", function () {
        return InfoMesaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_info_mesa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./info-mesa.page.html */
      "USx0");
      /* harmony import */


      var _info_mesa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./info-mesa.page.scss */
      "PZA/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/clases/pedido */
      "tUIk");
      /* harmony import */


      var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/cliente.service */
      "teE5");
      /* harmony import */


      var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/date.service */
      "Ig2y");
      /* harmony import */


      var src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/mesa.service */
      "R+YK");
      /* harmony import */


      var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/pedido.service */
      "KG2h");

      var InfoMesaPage = /*#__PURE__*/function () {
        function InfoMesaPage(route, mesaService, clienteService, pedidoService, dateService) {
          _classCallCheck(this, InfoMesaPage);

          this.route = route;
          this.mesaService = mesaService;
          this.clienteService = clienteService;
          this.pedidoService = pedidoService;
          this.dateService = dateService; // Se recibe id de Mesa asignada y id de Cliente
          // this.route.params.subscribe(params =>
          // {
          //   console.log(params['id']);
          //   this.buscarReserva(params['id']);
          //   //this.clienteService.fetch(idCliente)
          // });
          //
          // Codigo para testing

          this.buscarReserva("-MLOssaEI7D5pr7Q8OMl");
        }

        _createClass(InfoMesaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "buscarReserva",
          value: function buscarReserva(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var horaActual;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      horaActual = new Date(); // Se debería traer Entidad con información sobre Pedido y Cliente de Mesa

                      this.pedido = src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_9__["PedidoService"].pedidos.filter(function (pedido) {
                        // Agregar validacion de hora actual
                        if (pedido.cliente && pedido.mesa) {
                          return pedido.estado == src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_5__["EstadoPedido"].RESERVADO && _this.compararFechas(_this.dateService.toDate(pedido.fechaInicio), horaActual) && pedido.mesa.id === id && pedido.cliente.id == _this.usuario.id;
                        }
                      })[0];

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "verEncuesta",
          value: function verEncuesta() {
            console.log("Ver encuesta");
          }
        }, {
          key: "consultarAlMozo",
          value: function consultarAlMozo() {}
        }, {
          key: "compararFechas",
          value: function compararFechas(fechaA, fechaB) {
            console.log("Fecha A - Fecha pedido");
            console.log(fechaA);
            console.log("Fecha B- Fecha actual");
            console.log(fechaB);

            if (fechaA.getFullYear() == fechaB.getFullYear() && fechaA.getMonth() === fechaB.getMonth() && fechaA.getDate() === fechaB.getMonth() && fechaA.getHours() === fechaB.getHours()) {
              return true;
            }

            return false;
          }
        }]);

        return InfoMesaPage;
      }();

      InfoMesaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_8__["MesaService"]
        }, {
          type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"]
        }, {
          type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_9__["PedidoService"]
        }, {
          type: src_app_services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]
        }];
      };

      InfoMesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-info-mesa',
        template: _raw_loader_info_mesa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_mesa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InfoMesaPage);
      /***/
    },

    /***/
    "g65l":
    /*!*************************************************************!*\
      !*** ./src/app/pages/info-mesa/info-mesa-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: InfoMesaPageRoutingModule */

    /***/
    function g65l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoMesaPageRoutingModule", function () {
        return InfoMesaPageRoutingModule;
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


      var _info_mesa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./info-mesa.page */
      "aalK");

      var routes = [{
        path: '',
        component: _info_mesa_page__WEBPACK_IMPORTED_MODULE_3__["InfoMesaPage"]
      }];

      var InfoMesaPageRoutingModule = function InfoMesaPageRoutingModule() {
        _classCallCheck(this, InfoMesaPageRoutingModule);
      };

      InfoMesaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InfoMesaPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=info-mesa-info-mesa-module-es5.js.map