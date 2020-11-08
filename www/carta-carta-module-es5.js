(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carta-carta-module"], {
    /***/
    "+r10":
    /*!*****************************************************!*\
      !*** ./src/app/pages/carta/carta-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CartaPageRoutingModule */

    /***/
    function r10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartaPageRoutingModule", function () {
        return CartaPageRoutingModule;
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


      var _carta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./carta.page */
      "4kP8");

      var routes = [{
        path: '',
        component: _carta_page__WEBPACK_IMPORTED_MODULE_3__["CartaPage"]
      }];

      var CartaPageRoutingModule = function CartaPageRoutingModule() {
        _classCallCheck(this, CartaPageRoutingModule);
      };

      CartaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartaPageRoutingModule);
      /***/
    },

    /***/
    "r6G8":
    /*!*********************************************!*\
      !*** ./src/app/pages/carta/carta.module.ts ***!
      \*********************************************/

    /*! exports provided: CartaPageModule */

    /***/
    function r6G8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartaPageModule", function () {
        return CartaPageModule;
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


      var _carta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./carta-routing.module */
      "+r10");
      /* harmony import */


      var _carta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./carta.page */
      "4kP8");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var CartaPageModule = function CartaPageModule() {
        _classCallCheck(this, CartaPageModule);
      };

      CartaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _carta_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartaPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_carta_page__WEBPACK_IMPORTED_MODULE_6__["CartaPage"]]
      })], CartaPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=carta-carta-module-es5.js.map