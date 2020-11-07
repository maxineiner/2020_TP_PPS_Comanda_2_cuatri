(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-empleado-menu-empleado-module"], {
    /***/
    "TIm2":
    /*!*************************************************************!*\
      !*** ./src/app/pages/menu-empleado/menu-empleado.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function TIm2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtZW1wbGVhZG8vbWVudS1lbXBsZWFkby5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "jUP4":
    /*!*************************************************************!*\
      !*** ./src/app/pages/menu-empleado/menu-empleado.module.ts ***!
      \*************************************************************/

    /*! exports provided: MenuEmpleadoPageModule */

    /***/
    function jUP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuEmpleadoPageModule", function () {
        return MenuEmpleadoPageModule;
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


      var _menu_empleado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-empleado-routing.module */
      "qvl8");
      /* harmony import */


      var _menu_empleado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-empleado.page */
      "sfnd");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var MenuEmpleadoPageModule = function MenuEmpleadoPageModule() {
        _classCallCheck(this, MenuEmpleadoPageModule);
      };

      MenuEmpleadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_empleado_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuEmpleadoPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_menu_empleado_page__WEBPACK_IMPORTED_MODULE_6__["MenuEmpleadoPage"]]
      })], MenuEmpleadoPageModule);
      /***/
    },

    /***/
    "kBhn":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-empleado/menu-empleado.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kBhn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"Menú Empleado\"></app-header>\r\n\r\n<ion-segment value=\"Listado\" (ionChange)=\"seleccionarOpcion($event)\" scrollable color=\"success\">\r\n  <ion-segment-button value=\"Listado\">\r\n    <ion-label>Empleados</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Alta\">\r\n    <ion-label>Alta</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Baja\" *ngIf=\"empleadoSeleccionado.isActive\">\r\n    <ion-label>Baja</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Modificación\" *ngIf=\"empleadoSeleccionado.isActive\">\r\n    <ion-label>Modificar</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<ion-content class=\"fondo\">\r\n\r\n  <app-listado-empleados *ngIf=\"opcion == 'Listado'\" [empleados]=\"listado\"\r\n                         (seleccionarEmpleado)=\"seleccionarEmpleado($event)\">\r\n  </app-listado-empleados>\r\n\r\n  <app-form-empleados *ngIf=\"opcion != 'Listado'\" [opcion]=\"opcion\" [empleado]=\"empleadoSeleccionado\">\r\n  </app-form-empleados>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "qvl8":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/menu-empleado/menu-empleado-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MenuEmpleadoPageRoutingModule */

    /***/
    function qvl8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuEmpleadoPageRoutingModule", function () {
        return MenuEmpleadoPageRoutingModule;
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


      var _menu_empleado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-empleado.page */
      "sfnd");

      var routes = [{
        path: '',
        component: _menu_empleado_page__WEBPACK_IMPORTED_MODULE_3__["MenuEmpleadoPage"]
      }];

      var MenuEmpleadoPageRoutingModule = function MenuEmpleadoPageRoutingModule() {
        _classCallCheck(this, MenuEmpleadoPageRoutingModule);
      };

      MenuEmpleadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuEmpleadoPageRoutingModule);
      /***/
    },

    /***/
    "sfnd":
    /*!***********************************************************!*\
      !*** ./src/app/pages/menu-empleado/menu-empleado.page.ts ***!
      \***********************************************************/

    /*! exports provided: MenuEmpleadoPage */

    /***/
    function sfnd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuEmpleadoPage", function () {
        return MenuEmpleadoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_empleado_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu-empleado.page.html */
      "kBhn");
      /* harmony import */


      var _menu_empleado_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-empleado.page.scss */
      "TIm2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/clases/empleado */
      "de4J");
      /* harmony import */


      var src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/empleado.service */
      "5RfW");

      var MenuEmpleadoPage = /*#__PURE__*/function () {
        function MenuEmpleadoPage(router, empleadoService) {
          _classCallCheck(this, MenuEmpleadoPage);

          this.router = router;
          this.empleadoService = empleadoService;
          this.opcion = 'Listado';
          this.listado = src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_6__["EmpleadoService"].empleados;
          this.empleadoSeleccionado = new src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_5__["Empleado"]();
        }

        _createClass(MenuEmpleadoPage, [{
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.listado = src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_6__["EmpleadoService"].empleados;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log("INIT");
            this.empleadoService.leer().then(function (empleados) {
              console.log(empleados);
              _this.listado = empleados;
              console.log(_this.listado);
            });
            this.empleadoSeleccionado = new src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_5__["Empleado"]();
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
           * Método para recibir empleado seleccionada
           * @param empleado seleccionado desde listado
           */

        }, {
          key: "seleccionarEmpleado",
          value: function seleccionarEmpleado(empleado) {
            console.log(empleado);
            this.empleadoSeleccionado = empleado;
          }
        }]);

        return MenuEmpleadoPage;
      }();

      MenuEmpleadoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_6__["EmpleadoService"]
        }];
      };

      MenuEmpleadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-empleado',
        template: _raw_loader_menu_empleado_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_empleado_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuEmpleadoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=menu-empleado-menu-empleado-module-es5.js.map