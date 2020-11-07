(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-producto-menu-producto-module"], {
    /***/
    "4pXK":
    /*!*************************************************************!*\
      !*** ./src/app/pages/menu-producto/menu-producto.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function pXK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtcHJvZHVjdG8vbWVudS1wcm9kdWN0by5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "57Xz":
    /*!***********************************************************!*\
      !*** ./src/app/pages/menu-producto/menu-producto.page.ts ***!
      \***********************************************************/

    /*! exports provided: MenuProductoPage */

    /***/
    function Xz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuProductoPage", function () {
        return MenuProductoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_producto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu-producto.page.html */
      "dWO/");
      /* harmony import */


      var _menu_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-producto.page.scss */
      "4pXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_clases_producto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/clases/producto */
      "VJYV");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/producto.service */
      "GPUG");
      /* harmony import */


      var src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/roles.service */
      "0ceX");

      var MenuProductoPage = /*#__PURE__*/function () {
        function MenuProductoPage(productoService, rolService) {
          _classCallCheck(this, MenuProductoPage);

          this.productoService = productoService;
          this.rolService = rolService;
          this.opcion = 'Listado';
          this.productoElegido = new src_app_clases_producto__WEBPACK_IMPORTED_MODULE_4__["Producto"]();
        }

        _createClass(MenuProductoPage, [{
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.listado = src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_6__["ProductoService"].productos;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // No es necesario inyectar el servicio por ser propiedad estática
            this.usuario = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].usuario;
            console.log("INIT");
            this.productoService.traerTodos().then(function (data) {
              console.log(data);
              _this.listado = data;
            });
          }
        }, {
          key: "seleccionarOpcion",
          value: function seleccionarOpcion(event) {
            console.log(event.detail.value);
            this.opcion = event.detail.value;
          }
        }, {
          key: "elegirProducto",
          value: function elegirProducto(event) {
            console.log(event);
            this.productoElegido = event;
          }
        }]);

        return MenuProductoPage;
      }();

      MenuProductoPage.ctorParameters = function () {
        return [{
          type: src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_6__["ProductoService"]
        }, {
          type: src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_7__["RolesService"]
        }];
      };

      MenuProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-producto',
        template: _raw_loader_menu_producto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuProductoPage);
      /***/
    },

    /***/
    "VGnC":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/menu-producto/menu-producto-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MenuProductoPageRoutingModule */

    /***/
    function VGnC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuProductoPageRoutingModule", function () {
        return MenuProductoPageRoutingModule;
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


      var _menu_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-producto.page */
      "57Xz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var routes = [{
        path: '',
        component: _menu_producto_page__WEBPACK_IMPORTED_MODULE_3__["MenuProductoPage"]
      }];

      var MenuProductoPageRoutingModule = function MenuProductoPageRoutingModule() {
        _classCallCheck(this, MenuProductoPageRoutingModule);
      };

      MenuProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuProductoPageRoutingModule);
      /***/
    },

    /***/
    "dWO/":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-producto/menu-producto.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dWO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"Menú\"></app-header>\r\n\r\n<ion-segment value=\"Listado\" (ionChange)=\"seleccionarOpcion($event)\" scrollable color=\"success\">\r\n  <ion-segment-button value=\"Listado\">\r\n    <ion-label>Productos</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Alta\" *ngIf=\"rolService.isJefe(usuario)\">\r\n    <ion-label>Alta</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Baja\" *ngIf=\"productoElegido.isActive &&  \r\n                                          rolService.isJefe(usuario)\">\r\n    <ion-label>Baja</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"Modificación\" *ngIf=\"productoElegido.isActive &&  \r\n                                                  rolService.isJefe(usuario)\">\r\n    <ion-label>Modificar</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<ion-content class=\"fondo\">\r\n\r\n  <app-listado-productos *ngIf=\"opcion == 'Listado'\" [productos]=\"listado\"\r\n                         (elegirProducto)=\"elegirProducto($event)\">\r\n  </app-listado-productos>\r\n  <app-form-producto *ngIf=\"opcion != 'Listado'\" [opcion]=\"opcion\" [producto]=\"productoElegido\"\r\n                     [opcion]=\"opcion\">\r\n  </app-form-producto>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "nboo":
    /*!*************************************************************!*\
      !*** ./src/app/pages/menu-producto/menu-producto.module.ts ***!
      \*************************************************************/

    /*! exports provided: MenuProductoPageModule */

    /***/
    function nboo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuProductoPageModule", function () {
        return MenuProductoPageModule;
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


      var _menu_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-producto-routing.module */
      "VGnC");
      /* harmony import */


      var _menu_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-producto.page */
      "57Xz");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var MenuProductoPageModule = function MenuProductoPageModule() {
        _classCallCheck(this, MenuProductoPageModule);
      };

      MenuProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuProductoPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_menu_producto_page__WEBPACK_IMPORTED_MODULE_6__["MenuProductoPage"]]
      })], MenuProductoPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=menu-producto-menu-producto-module-es5.js.map