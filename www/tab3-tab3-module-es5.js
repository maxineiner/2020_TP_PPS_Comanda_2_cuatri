(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "ADJJ":
    /*!***************************************************!*\
      !*** ./src/app/pages/tab3/tab3-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function ADJJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "iBx5");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "Praz":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function Praz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Tab 3\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"dark\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 3</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Tab 3 page\"></app-explore-container>\n</ion-content>";
      /***/
    },

    /***/
    "XgaQ":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab3/tab3.module.ts ***!
      \*******************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function XgaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "iBx5");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "HGan");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "ADJJ");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "iBx5":
    /*!*****************************************!*\
      !*** ./src/app/pages/tab3/tab3.page.ts ***!
      \*****************************************/

    /*! exports provided: Tab3Page */

    /***/
    function iBx5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "Praz");
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3.page.scss */
      "yxfH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Tab3Page = function Tab3Page() {
        _classCallCheck(this, Tab3Page);
      };

      Tab3Page.ctorParameters = function () {
        return [];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab3Page);
      /***/
    },

    /***/
    "yxfH":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab3/tab3.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function yxfH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map