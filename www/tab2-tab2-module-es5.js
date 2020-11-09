(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "0Mug":
    /*!***************************************************!*\
      !*** ./src/app/pages/tab2/tab2-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function Mug(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "AEsy");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "AEsy":
    /*!*****************************************!*\
      !*** ./src/app/pages/tab2/tab2.page.ts ***!
      \*****************************************/

    /*! exports provided: Tab2Page */

    /***/
    function AEsy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "iTLA");
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2.page.scss */
      "Xbvs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page() {
          _classCallCheck(this, Tab2Page);
        }

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab2Page);
      /***/
    },

    /***/
    "HJ/b":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab2/tab2.module.ts ***!
      \*******************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function HJB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "AEsy");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "HGan");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "0Mug");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "Xbvs":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab2/tab2.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function Xbvs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "iTLA":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function iTLA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Tab 2\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map