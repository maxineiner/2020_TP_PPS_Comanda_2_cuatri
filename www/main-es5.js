(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-mesa/detalle-mesa.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-mesa/detalle-mesa.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsDetalleMesaDetalleMesaComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ion-activatable card-mesa\">\n  <ion-card mode=\"ios\" color=\"dark\">\n    <ion-card-header>\n      <ion-card-title>Mesa:{{ mesa.numero }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-img [src]=\"mesa.foto.url\"></ion-img>\n\n    <ion-card-content>\n      <ion-chip color=\"success\" mode=\"ios\" outline=\"true\">\n        <ion-label>Tipo:{{ mesa.tipo }}</ion-label>\n      </ion-chip>\n      <ion-chip color=\"success\" mode=\"ios\" outline=\"true\">\n        <ion-label>Personas:{{ mesa.comensales }}</ion-label>\n      </ion-chip>\n    </ion-card-content>\n    <ion-button (click)=\"reservar()\" size=\"large\" expand=\"block\" \n                fill=\"solid\"  color=\"success\">\n      Reservar\n    </ion-button>\n  </ion-card>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-empleados/form-empleados.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-empleados/form-empleados.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFormEmpleadosFormEmpleadosComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  form-empleados works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-mesas/form-mesas.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-mesas/form-mesas.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFormMesasFormMesasComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #formulario=\"ngForm\">\n\n  <ion-list mode=\"ios\" lines=\"none\">\n\n    <ion-list-header>\n      <ion-label>{{opcion}} Mesa</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label position=\"floating\">Número de mesa</ion-label>\n      <ion-input type=\"number\" name=\"name\" [(ngModel)]=\"mesa.numero\" [placeholder]=\"mesa.numero\"\n        [disabled]=\"opcion == 'Baja'\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Capacidad de comensales</ion-label>\n      <ion-input type=\"number\" name=\"comensales\" [(ngModel)]=\"mesa.comensales\" [placeholder]=\"mesa.comensales\"\n        [pattern]=\"emailPattern\" [disabled]=\"opcion == 'Baja'\" required>\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n    <ion-label>Tipo de mesa</ion-label>\n    <ion-select value=\"mesa.estado\" multiple=\"false\" name=\"tipoMesa\" [placeholder]=\"mesa.tipo\" [(ngModel)]=\"mesa.tipo\"\n      [disabled]=\"opcion == 'Baja'\" [interfaceOptions]=\"popoverOptions\" interface=\"popover\" required>\n      <ion-select-option value=\"Vip\">V.I.P.</ion-select-option>\n      <ion-select-option value=\"Normal\">Normal</ion-select-option>\n      <ion-select-option value=\"Discapacitados\">Discapacitados</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"imgPreview\">\n    <img [src]=\"imgPreview | safe: 'url'\" alt=\"Foto de la mesa\">\n  </ion-item>\n\n  <ion-item>\n    <ion-button (click)=\"sacarFoto()\" fill=\"solid\" size=\"medium\" color=\"dark\" [disabled]=\"opcion == 'Baja'\">\n      Subir foto\n      <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n    </ion-button>\n\n  </ion-item>\n\n  <!-- Se muestra accion segun tipo de llamado al formulario -->\n  <ion-button (click)=\"crearMesa()\" color=\"dark\" expand=\"block\" type=\"submit\" [disabled]=\"formulario.invalid\"\n    *ngIf=\"opcion == 'Alta'\">\n    Crear\n  </ion-button>\n\n  <ion-button (click)=\"modificarMesa()\" color=\"dark\" expand=\"block\" type=\"submit\" [disabled]=\"formulario.invalid\"\n    *ngIf=\"opcion == 'Modificación'\">\n    Modificar\n  </ion-button>\n\n  <ion-button (click)=\"borrarMesa()\" color=\"dark\" expand=\"block\" type=\"submit\" *ngIf=\"opcion == 'Baja'\">\n    Eliminar\n  </ion-button>\n  <ion-img [src]=\"mesa.codigoQR\"></ion-img>\n\n</form>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-producto/form-producto.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-producto/form-producto.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFormProductoFormProductoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form class=\"modal-content animate container\" [formGroup]=\"registroForm\" novalidate>\n  <div class=\"form-group\">\n    <label>Nombre:</label>\n    <input class=\"form-control\" formControlName=\"nombre\" type=\"text\">\n  </div>\n  <div\n    *ngIf=\"registroForm.controls['nombre'].invalid && (registroForm.controls['nombre'].dirty || registroForm.controls['nombre'].touched)\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registroForm.controls['nombre'].errors.required\">\n      Nombre es requerido.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Descripcion:</label>\n    <input class=\"form-control\" formControlName=\"descripcion\" type=\"text\">\n  </div>\n  <div\n    *ngIf=\"registroForm.controls['descripcion'].invalid && (registroForm.controls['descripcion'].dirty || registroForm.controls['descripcion'].touched)\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registroForm.controls['descripcion'].errors.required\">\n      Descricion es requerida.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Tiempo de elaboracion (minutos):</label>\n    <input class=\"form-control\" formControlName=\"minutosDeElaboracion\" type=\"text\">\n  </div>\n  <div\n    *ngIf=\"registroForm.controls['minutosDeElaboracion'].invalid && (registroForm.controls['minutosDeElaboracion'].dirty || registroForm.controls['minutosDeElaboracion'].touched)\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registroForm.controls['minutosDeElaboracion'].errors.required\">\n      Tiempo de elaboracion es requerido.\n    </div>\n    <div *ngIf=\"registroForm.controls['minutosDeElaboracion'].errors.pattern\">\n      El Tiempo de elaboracion solo debe contener numeros.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Precio:</label>\n    <input class=\"form-control\" formControlName=\"precio\" type=\"text\">\n  </div>\n  <div\n    *ngIf=\"registroForm.controls['precio'].invalid && (registroForm.controls['precio'].dirty || registroForm.controls['precio'].touched)\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registroForm.controls['precio'].errors.required\">\n      Precio es requerido.\n    </div>\n    <div *ngIf=\"registroForm.controls['precio'].errors.pattern\">\n      El precio solo debe contener numeros.\n    </div>\n  </div>\n  <ion-button color=\"dark\" center (click)=tomarFotos() *ngIf=\"opcion != 'Baja'\" [disabled]=\"fotos.length == 3\">\n    <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n    Tomar Fotos\n  </ion-button>\n<!--   <ion-button color=\"dark\" center (click)=subirFoto() *ngIf=\"opcion != 'Baja'\" [disabled]=\"fotos.length == 3\">\n    <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n    Tomar Fotos\n  </ion-button> -->\n\n  <ion-grid *ngIf=\"fotos\">\n    <ion-row>\n      <ion-col *ngFor=\"let foto of fotos\">\n        <img src=\"{{foto.url}}\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-button (click)=\"registrar()\" color=\"dark\" expand=\"block\" type=\"submit\" [disabled]=\"registroForm.pristine || registroForm.invalid\"\n    *ngIf=\"opcion == 'Alta'\">\n    Crear\n  </ion-button>\n\n  <ion-button (click)=\"modificarProducto()\" color=\"dark\" expand=\"block\" type=\"submit\" [disabled]=\"registroForm.pristine || registroForm.invalid\"\n    *ngIf=\"opcion == 'Modificación'\">\n    Modificar\n  </ion-button>\n\n  <ion-button (click)=\"borrarProducto()\" color=\"dark\" expand=\"block\" type=\"submit\" *ngIf=\"opcion == 'Baja'\">\n    Eliminar\n  </ion-button>\n</form>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" translucent >\n  <ion-toolbar >\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n\n    <ion-title  text-capitalize>{{ titulo }}</ion-title>\n  </ion-toolbar>\n</ion-header>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-mesas/listado-mesas.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-mesas/listado-mesas.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsListadoMesasListadoMesasComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list *ngFor=\"let mesa of mesas\" >\n  <ion-item (click)=\"seleccionarMesa(mesa)\" >\n\n    <app-detalle-mesa [mesa]=\"mesa\"></app-detalle-mesa>\n\n  </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-productos/listado-productos.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-productos/listado-productos.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsListadoProductosListadoProductosComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-list *ngFor=\"let producto of productos\">\n  <ion-item (click)=\"seleccionarProducto(producto)\">\n    <ion-card>\n      <h1>Producto: {{producto.nombre}}</h1>\n      <p>\n        <small>Descripción: {{producto.descripcion}}</small>        \n      </p>\n      <p>\n        Tiempo de elaboracion: {{producto.minutosDeElaboracion}} minutos\n      </p>   \n      <div *ngFor=\"let fotos of producto.fotos\" style=\"text-align: center;\">\n        <img style=\"max-height: 100px;\" src=\"{{fotos.url}}\" alt=\"{{producto.nombre}}\">\n      </div>      \n      <h5>Precio: ${{producto.precio}}</h5>\n    </ion-card>\n  </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/splash/splash.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/splash/splash.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSplashSplashComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"splash modal-wrapper\" center>\n\n  <div class=\"splash modal-wrapper\">\n\n    <svg id=\"logo\" width=\"297\" height=\"418.00000000000006\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->\n      <defs>\n       <linearGradient id=\"svg_6\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\" spreadMethod=\"pad\">\n        <stop offset=\"1\" stop-color=\"#fff\"/>\n        <stop offset=\"1\" stop-color=\"#000000\"/>\n       </linearGradient>\n      </defs>\n      <g>\n       <title>background</title>\n       <rect x=\"-1\" y=\"-1\" width=\"299\" height=\"420\" id=\"canvas_background\" fill=\"url(#svg_6)\"/>\n      </g>\n      <g>\n       <title>Layer 1</title>\n       <g id=\"svg_25\" stroke=\"null\">\n        <path id=\"svg_23\" class=\"shp0\" d=\"m146.50001,278.47944c-31.78655,0 -57.47939,-25.24584 -57.47939,-56.47937c0,-31.23353 25.69284,-56.47937 57.47939,-56.47937c31.78655,0 57.47939,25.24584 57.47939,56.47937c0,31.23353 -25.69284,56.47937 -57.47939,56.47937z\" stroke=\"null\"/>\n       </g>\n       <style>tspan { white-space:pre }</style>\n       <g stroke=\"null\" id=\"svg_7\">\n        <path stroke=\"null\" d=\"m42.73694,128.41694l0,6.10324l-2.65659,0l0,-16.91237l4.69209,0q1.04118,0 2.05968,0.34464q1.01851,0.34464 1.81488,1.03235q0.81904,0.68771 1.30563,1.67463q0.50925,0.96499 0.50925,2.18062q0,1.28456 -0.4201,2.34041q-0.42161,1.03235 -1.17416,1.74356q-0.75255,0.71121 -1.81488,1.10128q-1.06233,0.39164 -2.34529,0.39164l-1.97053,0l0.00002,0zm1.99168,-8.72093l-1.99168,0l0,6.70009l2.43445,0q0.48659,0 0.95202,-0.15979q0.48659,-0.18329 0.88553,-0.57335q0.39894,-0.39007 0.64223,-1.07935q0.24329,-0.71121 0.24329,-1.74356q0,-0.41357 -0.11031,-0.94149q-0.11182,-0.54986 -0.46543,-1.03235q-0.33245,-0.50443 -0.95202,-0.82557q-0.61957,-0.34464 -1.63808,-0.34464l0,0.00001zm11.28973,-3.00619l0,13.88268q0,0.7817 0.19947,1.23913q0.19947,0.43706 0.55308,0.66578q0.35361,0.20678 0.79637,0.27571q0.46543,0.06893 0.99584,0.06893l0,1.69813q-0.28712,0.04543 -0.5969,0.06893q-0.24329,0.0235 -0.57574,0.04543q-0.33245,0 -0.66339,0q-0.33245,0 -0.6649,-0.02193q-0.33245,-0.0235 -0.5969,-0.06893q-0.75255,-0.16135 -1.17416,-0.68928q-0.4201,-0.52792 -0.64072,-1.17021q-0.22214,-0.66578 -0.28863,-1.28456q-0.04382,-0.62035 -0.04382,-0.96342l0,-0.27571l0,-13.47068l2.70041,0l-0.00001,0zm14.43291,10.83106l0,2.98426l0,0.18329q0,0.18329 0.02116,0.54986q0.02267,0.34464 0.08916,0.71121q0.06649,0.36814 0.19947,0.66578q0.15414,0.29921 0.39743,0.39007l-0.70721,1.53834q-0.28863,0 -0.61957,-0.13786q-0.3113,-0.13786 -0.62108,-0.39007q-0.28712,-0.25221 -0.50925,-0.55142q-0.19796,-0.32114 -0.30978,-0.68771q-0.15414,0.39007 -0.55308,0.73314q-0.37627,0.32271 -0.86286,0.59685q-0.48659,0.25221 -1.06233,0.39007q-0.55308,0.13786 -1.04118,0.13786q-0.75255,0 -1.46127,-0.20678q-0.68606,-0.20522 -1.21647,-0.66421q-0.53192,-0.459 -0.84171,-1.2172q-0.28712,-0.75664 -0.28712,-1.85792q0,-1.05585 0.4201,-1.81405q0.44276,-0.78014 1.10616,-1.26106q0.68757,-0.50443 1.55043,-0.73471q0.86286,-0.25221 1.74839,-0.25221l1.88137,0q0,-1.12478 -0.11031,-1.79056q-0.11031,-0.66421 -0.37627,-0.96342q-0.26596,-0.32114 -0.6649,-0.39007q-0.37627,-0.09086 -0.90668,-0.09086q-0.48659,0 -0.92935,0.13629q-0.42161,0.11592 -0.79788,0.29921q-0.35361,0.15979 -0.64072,0.36657q-0.26596,0.20678 -0.39894,0.32114l-0.99584,-1.58221q0.22063,-0.25378 0.66339,-0.50599q0.44276,-0.27571 1.01851,-0.48093q0.57574,-0.20678 1.23914,-0.32114q0.68606,-0.13786 1.41745,-0.13786q0.66339,0 1.28296,0.13786q0.64223,0.13629 1.15149,0.459q0.53192,0.32114 0.9082,0.871q0.39743,0.52792 0.55308,1.33156q0.15414,0.80207 0.19947,1.6292q0.06649,0.80364 0.06649,1.6057l-0.00005,-0.00002zm-2.65659,3.90069l0,-3.16598l-1.41745,0q-0.44276,0 -0.92935,0.09243q-0.48659,0.09086 -0.90668,0.34307q-0.42161,0.25221 -0.70873,0.73471q-0.26596,0.459 -0.26596,1.1937q0,1.14671 0.48659,1.65113q0.50925,0.50599 1.46127,0.50599q0.6649,0 1.2618,-0.36814q0.61957,-0.36657 1.01851,-0.98692l0,0.00001zm17.22096,2.63962l0,0.459l-2.70041,0l0,-7.04473q0,-0.78014 -0.06649,-1.49135q-0.06649,-0.71121 -0.30978,-1.26263q-0.24329,-0.54986 -0.66339,-0.84906q-0.42161,-0.32114 -1.17416,-0.32114q-0.24329,0 -0.64072,0.06893q-0.37627,0.06893 -0.79788,0.20678q-0.39743,0.13786 -0.7737,0.34464q-0.35512,0.20522 -0.53192,0.48093l0,0.13786l0,0.04543l0,5.09439l0,0.047l0,4.54297l-2.67774,0l0,-12.94276l2.39062,0l0.28712,1.30806q0.26596,-0.25221 0.66339,-0.50443q0.42161,-0.27571 0.9082,-0.48249q0.48659,-0.20522 0.99584,-0.32114q0.50925,-0.13786 0.99584,-0.13786q0.99735,0 1.68341,0.43706q0.68606,0.4355 1.37212,1.12321q0.37627,0.39164 0.57574,0.91799q0.22063,0.50599 0.30978,1.07935q0.11031,0.54986 0.13298,1.12478q0.02116,0.57335 0.02116,1.12321l0,6.81602l-0.00001,-0.00002zm8.92178,-12.62161q1.5051,0 2.65507,0.64385q1.15149,0.61878 1.88288,1.67463q0.75255,1.03235 1.06233,2.40934q0.33094,1.35349 0.13298,2.82291l-8.67848,0q0,0.73314 0.26596,1.35349q0.26596,0.61878 0.70873,1.07778q0.46543,0.43706 1.085,0.68928q0.64223,0.25221 1.37212,0.25221q0.24329,0 0.5969,-0.04543q0.37627,-0.06893 0.77522,-0.20678q0.4201,-0.16135 0.81904,-0.39007q0.4201,-0.23028 0.73139,-0.55142l0.97317,1.53834q-0.72988,0.93992 -1.70457,1.42242q-0.97317,0.48249 -2.47827,0.48249q-1.21798,0 -2.28031,-0.50599q-1.06233,-0.52792 -1.81488,-1.42242q-0.75406,-0.89449 -1.19531,-2.0882q-0.44276,-1.1937 -0.44276,-2.57069q0,-1.35349 0.44276,-2.54563q0.44125,-1.2172 1.17265,-2.1117q0.75255,-0.89449 1.77106,-1.40049q1.01851,-0.52792 2.14733,-0.52792l-0.00001,0zm-2.85606,5.53145l6.10954,0q0,-0.62035 -0.22063,-1.2172q-0.22214,-0.59685 -0.62108,-1.07778q-0.37627,-0.48249 -0.92935,-0.75821q-0.55308,-0.29764 -1.19531,-0.32114q-0.68606,0 -1.2618,0.27571q-0.57574,0.27571 -0.99584,0.73471q-0.4201,0.459 -0.66339,1.10128q-0.22214,0.62035 -0.22214,1.26263zm12.0861,6.51681l1.12882,-1.85948q0.44276,0.32114 1.04118,0.59685q0.61957,0.27571 1.54892,0.27571q1.21798,0 1.90404,-0.39007q0.68606,-0.39007 0.68606,-1.14827q0,-0.54986 -0.39894,-0.871q-0.39743,-0.34464 -1.01851,-0.57335q-0.5969,-0.25221 -1.30563,-0.459q-0.68606,-0.23028 -1.28296,-0.55142q-1.17416,-0.64228 -1.77106,-1.35349q-0.57574,-0.71121 -0.57574,-1.88141q0,-0.96499 0.37627,-1.69813q0.39743,-0.73471 1.01851,-1.2172q0.61957,-0.50443 1.41594,-0.75664q0.79637,-0.25221 1.61541,-0.25221q1.10767,0 2.03702,0.25221q0.92935,0.22871 1.79372,0.80364l-0.86437,1.90335q-0.66339,-0.39007 -1.43861,-0.52636q-0.7737,-0.16135 -1.52776,-0.16135q-0.81904,0 -1.30563,0.39007q-0.46392,0.36657 -0.46392,1.17021q0,0.62035 0.4201,0.98692q0.44276,0.34464 1.12882,0.61878q0.68606,0.27571 1.46127,0.55142q0.7737,0.27571 1.43861,0.71121q0.68606,0.41357 1.12882,1.05585q0.44276,0.64228 0.44276,1.6527q0,0.98692 -0.37627,1.72006q-0.37627,0.73471 -1.01851,1.2172q-0.64223,0.48093 -1.48243,0.71121q-0.84171,0.22871 -1.79372,0.22871q-0.57574,0 -1.06233,-0.02193q-0.48659,-0.047 -0.95202,-0.16135q-0.46392,-0.11436 -0.92935,-0.34464q-0.46543,-0.22871 -1.01851,-0.61878l0,-0.00002z\" fill=\"#000000\" id=\"svg_4\"/>\n       </g>\n       <style>tspan { white-space:pre }</style>\n       <g id=\"svg_13\">\n        <path d=\"m203.26073,62.98837l-7.73691,0l0,5.29556l7.02959,0l0,1.87113l-7.02959,0l0,5.49965l7.73691,0l0,2.07678l-10.52101,0l0,-16.8199l10.52101,0l0,2.07678zm4.63186,17.98371l1.59848,-1.57511q0.22746,0.38794 0.57022,0.63877q0.36457,0.25239 0.73069,0.38949q0.38794,0.13554 0.7525,0.20409q0.38794,0.04674 0.68551,0.04674q1.41464,0 2.21233,-0.82261q0.79924,-0.82105 0.79924,-2.80591l0,-0.59359l0,-0.04674l0.02337,-0.11373q0,-0.02181 -0.02337,-0.04518q0,-0.02337 0,-0.04518q-0.06855,0.29602 -0.41131,0.59203q-0.31939,0.29757 -0.82105,0.54841q-0.50167,0.22746 -1.14044,0.36457q-0.63877,0.1371 -1.32428,0.1371q-1.27754,0 -2.2357,-0.54685q-0.95971,-0.57178 -1.59848,-1.50656q-0.63877,-0.93634 -0.93479,-2.14533q-0.29757,-1.20899 -0.29757,-2.53327q0,-1.78077 0.47986,-2.98976q0.50167,-1.20899 1.25417,-1.96305q0.77587,-0.77587 1.71222,-1.09526q0.95816,-0.31939 1.87113,-0.31939q1.11863,0 2.0316,0.38794q0.93479,0.38794 1.41464,1.02671l0.29757,-1.30091l2.46472,0l-0.02337,12.87199q-0.09192,1.39283 -0.57022,2.3728q-0.45649,0.98152 -1.18718,1.62029q-0.73069,0.64033 -1.68885,0.91297q-0.95816,0.2742 -2.05341,0.2742q-1.2791,0 -2.53327,-0.43312q-1.23236,-0.45649 -2.05497,-1.50656l0.00001,0.00001zm7.53125,-9.76695q0,-0.91297 -0.22746,-1.68885q-0.22902,-0.77587 -0.61696,-1.36946q-0.38794,-0.59359 -0.95816,-0.93634q-0.57022,-0.34275 -1.23236,-0.34275q-0.68395,0 -1.25573,0.36612q-0.54685,0.3412 -0.93479,0.93479q-0.38794,0.59359 -0.59359,1.39283q-0.20565,0.79924 -0.20565,1.68885q0,0.91297 0.20565,1.73403q0.22746,0.79924 0.6154,1.39283q0.41131,0.59359 0.95971,0.95816q0.57022,0.34275 1.25417,0.34275q0.70732,0 1.25573,-0.34275q0.54841,-0.36457 0.91297,-0.95816q0.38794,-0.61696 0.59359,-1.43801q0.22746,-0.82261 0.22746,-1.73403l0.00002,-0.00001zm12.41551,-6.48274q1.55174,0 2.73892,0.64033q1.18718,0.6154 1.93968,1.66548q0.77587,1.02671 1.09526,2.39617q0.34275,1.34609 0.1371,2.80747l-8.9459,0q0,0.72913 0.2742,1.34609q0.27265,0.6154 0.72913,1.07189q0.47986,0.43468 1.11863,0.68551q0.66214,0.25083 1.41464,0.25083q0.25083,0 0.61696,-0.04518q0.38794,-0.06855 0.79924,-0.20565q0.43312,-0.16047 0.84286,-0.38794q0.43468,-0.22902 0.75406,-0.54841l1.00334,1.52993q-0.7525,0.93479 -1.7574,1.41464q-1.00334,0.47986 -2.55508,0.47986q-1.25573,0 -2.35099,-0.50323q-1.09526,-0.52504 -1.87113,-1.41464q-0.77587,-0.8896 -1.23236,-2.07678q-0.45649,-1.18718 -0.45649,-2.55664q0,-1.34609 0.45649,-2.53171q0.45649,-1.21055 1.20899,-2.10015q0.77587,-0.8896 1.82595,-1.39283q1.05008,-0.52504 2.21388,-0.52504l0.00002,0zm-2.94457,5.50121l6.2989,0q0,-0.61696 -0.22746,-1.21055q-0.22902,-0.59359 -0.63877,-1.07189q-0.38794,-0.47986 -0.95971,-0.75406q-0.57022,-0.29602 -1.23236,-0.31939q-0.70732,0 -1.29935,0.2742q-0.59359,0.2742 -1.02826,0.73069q-0.43312,0.45649 -0.68395,1.09526q-0.22902,0.61696 -0.22902,1.25573l-0.00002,0.00001zm22.04691,0.54685l0,2.96794l0,0.18228q0,0.18228 0.02181,0.54685q0.02337,0.34275 0.09192,0.70732q0.06855,0.36612 0.20565,0.66214q0.15891,0.29757 0.41131,0.38794l-0.73069,1.52993q-0.29757,0 -0.63877,-0.1371q-0.31939,-0.1371 -0.64033,-0.38794q-0.29602,-0.25083 -0.52348,-0.54841q-0.20565,-0.31939 -0.32094,-0.68395q-0.15891,0.38794 -0.57022,0.72913q-0.38794,0.32094 -0.8896,0.59359q-0.50167,0.25083 -1.09526,0.38794q-0.57022,0.1371 -1.07345,0.1371q-0.77587,0 -1.505,-0.20565q-0.70888,-0.20409 -1.25573,-0.66058q-0.54841,-0.45649 -0.86779,-1.21055q-0.29602,-0.7525 -0.29602,-1.84776q0,-1.05008 0.43312,-1.80414q0.45649,-0.77587 1.142,-1.25417q0.70732,-0.50167 1.59693,-0.73069q0.8896,-0.25083 1.80258,-0.25083l1.93968,0q0,-1.11863 -0.11373,-1.78077q-0.11373,-0.66058 -0.38794,-0.95816q-0.2742,-0.31939 -0.68395,-0.38794q-0.38794,-0.09036 -0.93634,-0.09036q-0.50167,0 -0.95816,0.13554q-0.43468,0.11529 -0.82261,0.29757q-0.36457,0.15891 -0.66058,0.36457q-0.2742,0.20565 -0.41131,0.31939l-1.02671,-1.57356q0.22746,-0.25239 0.68395,-0.50323q0.45649,-0.2742 1.05008,-0.4783q0.59359,-0.20565 1.27754,-0.31939q0.70732,-0.1371 1.46138,-0.1371q0.68395,0 1.32272,0.1371q0.66214,0.13554 1.18718,0.45649q0.54841,0.31939 0.93634,0.86623q0.40975,0.52504 0.57022,1.32428q0.16047,0.79768 0.20565,1.62029q0.06855,0.79924 0.06855,1.59693l0,0.00003zm-2.73892,3.87936l0,-3.14867l-1.46138,0q-0.45649,0 -0.95816,0.09192q-0.50167,0.09036 -0.93479,0.3412q-0.43468,0.25083 -0.73069,0.73069q-0.2742,0.45649 -0.2742,1.18718q0,1.14044 0.50167,1.64211q0.52504,0.50323 1.50656,0.50323q0.68551,0 1.30091,-0.36612q0.63877,-0.36457 1.05008,-0.98152l0,-0.00002z\" fill=\"#000000\" id=\"svg_11\"/>\n       </g>\n       <style>tspan { white-space:pre }</style>\n       <g id=\"svg_19\">\n        <path d=\"m131.09731,105.74031l-3.88296,0l-5.69954,-18.44618l3.41055,0l4.25681,15.83262l4.50491,-15.83262l3.38506,0l-5.97483,18.44618zm15.18518,-14.28963q1.69253,0 2.98741,0.69842q1.29489,0.67123 2.11566,1.81658q0.84626,1.11986 1.19463,2.61356q0.37385,1.46822 0.14954,3.06219l-9.75753,0q0,0.79528 0.29908,1.46822q0.29738,0.67123 0.79528,1.16914q0.52339,0.47411 1.22012,0.7477q0.72221,0.27359 1.54299,0.27359q0.27359,0 0.67293,-0.04928q0.42313,-0.07477 0.87005,-0.22431q0.47411,-0.17503 0.92103,-0.42313q0.47411,-0.2498 0.82247,-0.59816l1.09437,1.66874q-0.82077,1.0196 -1.91684,1.54299q-1.09437,0.52339 -2.78689,0.52339q-1.36966,0 -2.56428,-0.54888q-1.19463,-0.57267 -2.04089,-1.54299q-0.84626,-0.97032 -1.34417,-2.2652q-0.4979,-1.29489 -0.4979,-2.78859q0,-1.46822 0.4979,-2.7614q0.4979,-1.32038 1.31868,-2.29069q0.84626,-0.97032 1.99161,-1.5192q1.14535,-0.57267 2.41474,-0.57267l0.00001,-0.00002zm-3.21173,6.00032l6.87037,0q0,-0.67293 -0.2481,-1.32038q-0.2498,-0.64744 -0.69672,-1.16914q-0.42313,-0.52339 -1.04678,-0.82247q-0.62195,-0.32287 -1.34417,-0.34836q-0.77149,0 -1.41894,0.29908q-0.64574,0.29908 -1.11986,0.79698q-0.47241,0.4979 -0.746,1.19463q-0.2498,0.67293 -0.2498,1.36966zm21.75647,-5.94934l0,3.13526q-0.69672,-0.19882 -1.69253,-0.22261q-0.89554,0 -1.79279,0.22261q-0.87005,0.20052 -1.39345,0.69842l0,5.32569l0,0.05098l0,4.92804l-3.01121,0l0,-14.03983l2.68833,0l0.32287,1.44443q0.37385,-0.37385 0.77149,-0.67293q0.42313,-0.29738 0.97032,-0.47241q0.54888,-0.19882 1.29489,-0.29908q0.7477,-0.09856 1.84207,-0.09856l0.00001,-0.00001zm13.39239,6.5458l0,3.23722l0,0.19882q0,0.19882 0.02549,0.59646q0.02379,0.37385 0.09856,0.77149q0.07477,0.39934 0.22431,0.72221q0.17503,0.32457 0.44862,0.42313l-0.79698,1.66874q-0.32457,0 -0.69672,-0.14954q-0.34836,-0.14954 -0.69672,-0.42313q-0.32457,-0.27359 -0.57267,-0.59816q-0.22431,-0.34836 -0.34836,-0.746q-0.17503,0.42313 -0.62365,0.79528q-0.42313,0.35006 -0.97032,0.64744q-0.54718,0.27359 -1.19463,0.42313q-0.62195,0.14954 -1.16914,0.14954q-0.84796,0 -1.64325,-0.22431q-0.77149,-0.22261 -1.36966,-0.72051q-0.59816,-0.4979 -0.94652,-1.32038q-0.32287,-0.82077 -0.32287,-2.0154q0,-1.14535 0.47241,-1.96782q0.4979,-0.84626 1.24561,-1.36796q0.77149,-0.54718 1.74181,-0.79698q0.97032,-0.27359 1.96612,-0.27359l2.11566,0q0,-1.22012 -0.12405,-1.94233q-0.12405,-0.72051 -0.42313,-1.04509q-0.29908,-0.34836 -0.746,-0.42313q-0.42313,-0.09856 -1.02129,-0.09856q-0.54718,0 -1.04509,0.14784q-0.47241,0.12575 -0.89554,0.32457q-0.39934,0.17333 -0.72221,0.39764q-0.29908,0.22431 -0.44862,0.34836l-1.11986,-1.71632q0.2481,-0.27529 0.746,-0.54888q0.4979,-0.29908 1.14535,-0.52169q0.64744,-0.22431 1.39515,-0.34836q0.77149,-0.14954 1.59227,-0.14954q0.746,0 1.44443,0.14954q0.72051,0.14784 1.29319,0.4979q0.59816,0.34836 1.02129,0.94483q0.44862,0.57267 0.62195,1.44443q0.17503,0.87005 0.22431,1.7673q0.07477,0.87175 0.07477,1.74181l-0.00002,0zm-2.98741,4.23132l0,-3.43434l-1.59227,0q-0.4979,0 -1.04678,0.10026q-0.54718,0.09856 -1.0196,0.37215q-0.47411,0.27359 -0.79698,0.79698q-0.29908,0.4979 -0.29908,1.29489q0,1.24391 0.54888,1.79109q0.57097,0.54888 1.64155,0.54888q0.7477,0 1.41894,-0.39934q0.69672,-0.39764 1.14535,-1.07058l-0.00001,0.00001z\" fill=\"#000000\" id=\"svg_17\"/>\n       </g>\n       <style>tspan { white-space:pre }\n         .shp0 { fill: #ecf7ea }</style>\n       <style>tspan { white-space:pre }\n         .shp0 { fill: #96f39c }</style>\n       <style>tspan { white-space:pre }\n         .shp0 { fill: #c35bf6 }</style>\n       <style>tspan { white-space:pre }\n         .shp0 { fill: #96f39c }</style>\n       <style>tspan { white-space:pre }\n         .shp0 { fill: #c35bf6 }</style>\n       <style>tspan { white-space:pre }\n         .shp0 { fill: #ecf7ea }</style>\n       <image class=\"cls-4\" stroke=\"null\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0kAAANcCAMAAAC9vBRaAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBQTFRFAAAAZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fZe8fHi/PHgAAAQB0Uk5TABBy3jAU8v/4XaOWPswcCd/sQot3Nv6zDgbb3CeE9FIxkNPFFoDlLCn79U8E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\" id=\"svg_1\" height=\"91\" width=\"88\" y=\"175.48703\" x=\"106.65575\"/>\n       <image class=\"cls-1\" stroke=\"null\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0EAAANdCAMAAABlN4cLAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBQTFRFAAAA9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUV9hUVlr2MLwAAAQB0Uk5TAAuLmV3m//0tK8S1EphFAmrt2wU91XQZpvV486dD3TsirtcGf/dwPtzyERio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\" id=\"svg_2\" height=\"91.44333\" width=\"88.36046\" y=\"176.56986\" x=\"97.66303\"/>\n       <image class=\"cls-5\" stroke=\"null\" xlink:href=\"data:image/png;base64,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\" id=\"svg_3\" height=\"113.27859\" width=\"77.57043\" y=\"165.5759\" x=\"108.30974\"/>\n      </g>\n     </svg>\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tabs-tabs-module */
          "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/tabs/tabs.module */
          "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'menu-producto',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-menu-producto-menu-producto-module */
          "pages-menu-producto-menu-producto-module").then(__webpack_require__.bind(null,
          /*! ./pages/menu-producto/menu-producto.module */
          "./src/app/pages/menu-producto/menu-producto.module.ts")).then(function (m) {
            return m.MenuProductoPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/splash/splash.component */
      "./src/app/components/splash/splash.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, modalCtrl, router) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.modalCtrl = modalCtrl;
          this.router = router;
          platform.ready().then(function () {
            _this.presentModal().then(function () {
              return _this.router.navigate(['/tabs']);
            });
          });
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.statusBar.styleDefault();
                      _context.next = 3;
                      return this.modalCtrl.create({
                        component: _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_5__["SplashComponent"]
                      });

                    case 3:
                      modal = _context.sent;
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js"); // Firebase
      // Plugins


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig), _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_14__["SplashScreen"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__["BarcodeScanner"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabase"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_16__["MediaCapture"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/clases/empleado.ts":
    /*!************************************!*\
      !*** ./src/app/clases/empleado.ts ***!
      \************************************/

    /*! exports provided: TipoEmpleado, Empleado */

    /***/
    function srcAppClasesEmpleadoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoEmpleado", function () {
        return TipoEmpleado;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Empleado", function () {
        return Empleado;
      });
      /* harmony import */


      var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./usuario */
      "./src/app/clases/usuario.ts");

      var TipoEmpleado;

      (function (TipoEmpleado) {
        TipoEmpleado["Cocinero"] = "Cocinero";
        TipoEmpleado["Bartender"] = "Bartender";
        TipoEmpleado["Mozo"] = "Mozo";
      })(TipoEmpleado || (TipoEmpleado = {}));

      var Empleado = /*#__PURE__*/function (_usuario__WEBPACK_IMP) {
        _inherits(Empleado, _usuario__WEBPACK_IMP);

        var _super = _createSuper(Empleado);

        function Empleado() {
          _classCallCheck(this, Empleado);

          return _super.apply(this, arguments);
        }

        _createClass(Empleado, null, [{
          key: "CrearEmpleado",
          value: function CrearEmpleado(id, nombre, apellido, dni, foto, isActive, tipo, cuil) {
            var empleado = new Empleado();
            empleado.id = id;
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.dni = dni;
            empleado.foto = foto;
            empleado.isActive = isActive;
            empleado.tipo = tipo;
            empleado.cuil = cuil;
            return empleado;
          }
        }]);

        return Empleado;
      }(_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]);
      /***/

    },

    /***/
    "./src/app/clases/imagen.ts":
    /*!**********************************!*\
      !*** ./src/app/clases/imagen.ts ***!
      \**********************************/

    /*! exports provided: Imagen */

    /***/
    function srcAppClasesImagenTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Imagen", function () {
        return Imagen;
      });

      var Imagen = /*#__PURE__*/function () {
        function Imagen() {
          _classCallCheck(this, Imagen);
        }

        _createClass(Imagen, [{
          key: "Imagen",
          value: function Imagen() {}
        }], [{
          key: "CrearImagen",
          value: function CrearImagen(id, base64, url, fecha, rutaStorage) {
            var imagen = new Imagen();
            imagen.id = id;
            imagen.base64 = base64;
            imagen.url = url;
            imagen.fecha = fecha;
            imagen.rutaStorage = rutaStorage;
            return imagen;
          }
        }]);

        return Imagen;
      }();
      /***/

    },

    /***/
    "./src/app/clases/mesa.ts":
    /*!********************************!*\
      !*** ./src/app/clases/mesa.ts ***!
      \********************************/

    /*! exports provided: TipoMesa, Mesa */

    /***/
    function srcAppClasesMesaTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoMesa", function () {
        return TipoMesa;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mesa", function () {
        return Mesa;
      });

      var TipoMesa;

      (function (TipoMesa) {
        TipoMesa["VIP"] = "Vip";
        TipoMesa["Discapacitados"] = "Discapacitados";
        TipoMesa["Normal"] = "Normal";
      })(TipoMesa || (TipoMesa = {}));

      var Mesa = /*#__PURE__*/function () {
        function Mesa() {
          _classCallCheck(this, Mesa);
        }

        _createClass(Mesa, [{
          key: "setImage",
          value: function setImage(imagen) {
            this.foto.base64 = imagen.base64;
            this.foto.url = imagen.url;
            this.foto.fecha = imagen.fecha;
            this.foto.rutaStorage = imagen.rutaStorage;
          }
        }], [{
          key: "CrearMesa",
          value: function CrearMesa(id, numero, comensales, tipo, foto, codigoQR, isAvailable, isActive) {
            var mesa = new Mesa();
            mesa.id = id;
            mesa.numero = numero;
            mesa.comensales = comensales;
            mesa.tipo = tipo;
            mesa.foto = foto;
            mesa.codigoQR = codigoQR;
            mesa.isAvailable = isAvailable;
            mesa.isActive = isActive;
            return mesa;
          }
        }]);

        return Mesa;
      }();
      /***/

    },

    /***/
    "./src/app/clases/producto.ts":
    /*!************************************!*\
      !*** ./src/app/clases/producto.ts ***!
      \************************************/

    /*! exports provided: Producto */

    /***/
    function srcAppClasesProductoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Producto", function () {
        return Producto;
      });

      var TipoProducto;

      (function (TipoProducto) {
        TipoProducto[TipoProducto["Comida"] = 0] = "Comida";
        TipoProducto[TipoProducto["Bebida"] = 1] = "Bebida";
      })(TipoProducto || (TipoProducto = {}));

      var Producto = /*#__PURE__*/function () {
        function Producto(init) {
          _classCallCheck(this, Producto);

          if (init) {
            Object.assign(this, init);
          }
        }

        _createClass(Producto, null, [{
          key: "CrearProducto",
          value: function CrearProducto(id, nombre, descripcion, fotos, minutosDeElaboracion, precio, tipo, codigoQr) {
            var producto = new Producto();
            producto.id = id;
            producto.nombre = nombre;
            producto.descripcion = descripcion;
            producto.fotos = fotos;
            producto.minutosDeElaboracion = minutosDeElaboracion;
            producto.precio = precio;
            producto.tipo = tipo;
            producto.codigoQr = codigoQr;
            return producto;
          }
        }]);

        return Producto;
      }();
      /***/

    },

    /***/
    "./src/app/clases/usuario.ts":
    /*!***********************************!*\
      !*** ./src/app/clases/usuario.ts ***!
      \***********************************/

    /*! exports provided: Usuario */

    /***/
    function srcAppClasesUsuarioTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Usuario", function () {
        return Usuario;
      });

      var Usuario = function Usuario() {
        _classCallCheck(this, Usuario);
      };
      /***/

    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _splash_splash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./splash/splash.component */
      "./src/app/components/splash/splash.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/components/header/header.component.ts");
      /* harmony import */


      var _form_mesas_form_mesas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-mesas/form-mesas.component */
      "./src/app/components/form-mesas/form-mesas.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _listado_mesas_listado_mesas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./listado-mesas/listado-mesas.component */
      "./src/app/components/listado-mesas/listado-mesas.component.ts");
      /* harmony import */


      var _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./form-producto/form-producto.component */
      "./src/app/components/form-producto/form-producto.component.ts");
      /* harmony import */


      var _listado_productos_listado_productos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./listado-productos/listado-productos.component */
      "./src/app/components/listado-productos/listado-productos.component.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _detalle_mesa_detalle_mesa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./detalle-mesa/detalle-mesa.component */
      "./src/app/components/detalle-mesa/detalle-mesa.component.ts");
      /* harmony import */


      var _form_empleados_form_empleados_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./form-empleados/form-empleados.component */
      "./src/app/components/form-empleados/form-empleados.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_splash_splash_component__WEBPACK_IMPORTED_MODULE_3__["SplashComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _detalle_mesa_detalle_mesa_component__WEBPACK_IMPORTED_MODULE_12__["DetalleMesaComponent"], _form_mesas_form_mesas_component__WEBPACK_IMPORTED_MODULE_5__["FormMesasComponent"], _listado_mesas_listado_mesas_component__WEBPACK_IMPORTED_MODULE_8__["ListadoMesasComponent"], _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_9__["FormProductoComponent"], _listado_productos_listado_productos_component__WEBPACK_IMPORTED_MODULE_10__["ListadoProductosComponent"], _form_empleados_form_empleados_component__WEBPACK_IMPORTED_MODULE_13__["FormEmpleadosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]],
        exports: [_splash_splash_component__WEBPACK_IMPORTED_MODULE_3__["SplashComponent"], _listado_productos_listado_productos_component__WEBPACK_IMPORTED_MODULE_10__["ListadoProductosComponent"], _detalle_mesa_detalle_mesa_component__WEBPACK_IMPORTED_MODULE_12__["DetalleMesaComponent"], _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_9__["FormProductoComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _form_mesas_form_mesas_component__WEBPACK_IMPORTED_MODULE_5__["FormMesasComponent"], _listado_mesas_listado_mesas_component__WEBPACK_IMPORTED_MODULE_8__["ListadoMesasComponent"], _form_empleados_form_empleados_component__WEBPACK_IMPORTED_MODULE_13__["FormEmpleadosComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/detalle-mesa/detalle-mesa.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/detalle-mesa/detalle-mesa.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsDetalleMesaDetalleMesaComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-mesa {\n  margin: auto;\n  width: 300px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhbGxlLW1lc2EvZGV0YWxsZS1tZXNhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLHVCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFsbGUtbWVzYS9kZXRhbGxlLW1lc2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1tZXNhXG57XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/detalle-mesa/detalle-mesa.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/detalle-mesa/detalle-mesa.component.ts ***!
      \*******************************************************************/

    /*! exports provided: DetalleMesaComponent */

    /***/
    function srcAppComponentsDetalleMesaDetalleMesaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleMesaComponent", function () {
        return DetalleMesaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DetalleMesaComponent = /*#__PURE__*/function () {
        function DetalleMesaComponent() {
          _classCallCheck(this, DetalleMesaComponent);
        }

        _createClass(DetalleMesaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "reservar",
          value: function reservar() {
            console.log("Realizar reserva");
          }
        }]);

        return DetalleMesaComponent;
      }();

      DetalleMesaComponent.ctorParameters = function () {
        return [];
      };

      DetalleMesaComponent.propDecorators = {
        mesa: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      DetalleMesaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-mesa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detalle-mesa.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-mesa/detalle-mesa.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detalle-mesa.component.scss */
        "./src/app/components/detalle-mesa/detalle-mesa.component.scss"))["default"]]
      })], DetalleMesaComponent);
      /***/
    },

    /***/
    "./src/app/components/form-empleados/form-empleados.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/components/form-empleados/form-empleados.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFormEmpleadosFormEmpleadosComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1lbXBsZWFkb3MvZm9ybS1lbXBsZWFkb3MuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/form-empleados/form-empleados.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/form-empleados/form-empleados.component.ts ***!
      \***********************************************************************/

    /*! exports provided: FormEmpleadosComponent */

    /***/
    function srcAppComponentsFormEmpleadosFormEmpleadosComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormEmpleadosComponent", function () {
        return FormEmpleadosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/clases/empleado */
      "./src/app/clases/empleado.ts");
      /* harmony import */


      var src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/empleado.service */
      "./src/app/services/empleado.service.ts");

      var OpcionForm;

      (function (OpcionForm) {
        OpcionForm["ALTA"] = "Alta";
        OpcionForm["MODIFICACION"] = "Modificaci\xF3n";
        OpcionForm["BAJA"] = "Baja";
      })(OpcionForm || (OpcionForm = {}));

      var FormEmpleadosComponent = /*#__PURE__*/function () {
        function FormEmpleadosComponent(empleadoService, toastController) {
          _classCallCheck(this, FormEmpleadosComponent);

          this.empleadoService = empleadoService;
          this.toastController = toastController;
          this.toastTime = 2000;
          this.popoverOptions = {
            header: "Seleccione el tipo",
            // translucent: true,
            // cancelText: "Cerrar",
            okText: "Guardar"
          };
        }

        _createClass(FormEmpleadosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.opcion == "Alta") {
              this.empleado = new src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_3__["Empleado"]();
            }
          }
          /**
           * Alta de mesa
           */

        }, {
          key: "altaEmpleado",
          value: function altaEmpleado() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.empleado && !this.empleado.id) {
                        // Alta de mesa en DB
                        this.empleadoService.crear(this.empleado).then(function () {
                          return _this3.presentToast('Alta exitosa');
                        })["catch"](function () {
                          return _this3.presentToast('No se pudo realizar el alta');
                        });
                      } else {
                        this.presentToast('Mesa existente');
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           *  Modificacion de mesa
           */

        }, {
          key: "modificarEmpleado",
          value: function modificarEmpleado() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('Modificar Empleado');

                      if (this.empleado) {
                        // Se actualiza Mesa en DB
                        this.empleadoService.actualizar(this.empleado).then(function () {
                          return _this4.presentToast('Modificación exitosa');
                        })["catch"](function () {
                          return _this4.presentToast('No se pudo modificar');
                        });
                      }

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * Baja lógica de empleado
           */

        }, {
          key: "borrarEmpleado",
          value: function borrarEmpleado() {
            var _this5 = this;

            console.log("Baja empleado");

            if (this.empleado) {
              this.empleadoService.borradoLogico(this.empleado).then(function () {
                return _this5.presentToast('Baja realizada');
              })["catch"](function () {
                return _this5.presentToast('No se pudo realizar baja');
              });
            }
          } // Toast para notificaciones

        }, {
          key: "presentToast",
          value: function presentToast(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (duration <= 0) {
                        duration = this.toastTime;
                      }

                      _context4.next = 3;
                      return this.toastController.create({
                        message: message,
                        duration: this.toastTime
                      });

                    case 3:
                      toast = _context4.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return FormEmpleadosComponent;
      }();

      FormEmpleadosComponent.ctorParameters = function () {
        return [{
          type: src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_4__["EmpleadoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      FormEmpleadosComponent.propDecorators = {
        opcion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        empleado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      FormEmpleadosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-form-empleados",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form-empleados.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-empleados/form-empleados.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form-empleados.component.scss */
        "./src/app/components/form-empleados/form-empleados.component.scss"))["default"]]
      })], FormEmpleadosComponent);
      /***/
    },

    /***/
    "./src/app/components/form-mesas/form-mesas.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/components/form-mesas/form-mesas.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFormMesasFormMesasComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1tZXNhcy9mb3JtLW1lc2FzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/form-mesas/form-mesas.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/form-mesas/form-mesas.component.ts ***!
      \***************************************************************/

    /*! exports provided: FormMesasComponent */

    /***/
    function srcAppComponentsFormMesasFormMesasComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormMesasComponent", function () {
        return FormMesasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_clases_imagen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/clases/imagen */
      "./src/app/clases/imagen.ts");
      /* harmony import */


      var src_app_clases_mesa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/clases/mesa */
      "./src/app/clases/mesa.ts");
      /* harmony import */


      var src_app_services_imagen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/imagen.service */
      "./src/app/services/imagen.service.ts");
      /* harmony import */


      var src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/mesa.service */
      "./src/app/services/mesa.service.ts");

      var OpcionForm;

      (function (OpcionForm) {
        OpcionForm["ALTA"] = "Alta";
        OpcionForm["MODIFICACION"] = "Modificaci\xF3n";
        OpcionForm["BAJA"] = "Baja";
      })(OpcionForm || (OpcionForm = {}));

      var FormMesasComponent = /*#__PURE__*/function () {
        function FormMesasComponent(mesaService, imagenService, toastController) {
          _classCallCheck(this, FormMesasComponent);

          this.mesaService = mesaService;
          this.imagenService = imagenService;
          this.toastController = toastController;
          this.popoverOptions = {
            header: 'Seleccione el tipo',
            translucent: true
          };
        }

        _createClass(FormMesasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.opcion == 'Alta') {
              this.mesa = new src_app_clases_mesa__WEBPACK_IMPORTED_MODULE_4__["Mesa"]();
            }
          }
          /**
           * Método para tomar foto y previsualizar
           */

        }, {
          key: "sacarFoto",
          value: function sacarFoto() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var foto;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.imagenService.sacarFoto();

                    case 2:
                      foto = _context5.sent;
                      this.imgPreview = "data:image/jpeg;base64,".concat(foto.base64);
                      this.auxiliarFoto = new src_app_clases_imagen__WEBPACK_IMPORTED_MODULE_3__["Imagen"]();
                      this.auxiliarFoto.base64 = foto.base64;
                      this.auxiliarFoto.fecha = foto.fecha;

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /**
           * Alta de mesa
           */

        }, {
          key: "crearMesa",
          value: function crearMesa() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              var imagenGuardada;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(this.mesa && !this.mesa.id)) {
                        _context6.next = 8;
                        break;
                      }

                      _context6.next = 3;
                      return this.imagenService.crearUnaImagen(this.auxiliarFoto, '/mesas');

                    case 3:
                      imagenGuardada = _context6.sent;
                      this.mesa.foto = imagenGuardada; // Alta de mesa en DB

                      this.mesaService.crear(this.mesa).then(function () {
                        return _this6.presentToast('Alta exitosa', 2000);
                      })["catch"](function () {
                        return _this6.presentToast('No se pudo realizar el alta', 2000);
                      });
                      _context6.next = 9;
                      break;

                    case 8:
                      this.presentToast('Mesa existente', 2000);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
          /**
           *  Modificacion de mesa
           */

        }, {
          key: "modificarMesa",
          value: function modificarMesa() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              var imagenGuardada;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log('Modificar Mesa');

                      if (!this.mesa) {
                        _context7.next = 8;
                        break;
                      }

                      if (!this.auxiliarFoto) {
                        _context7.next = 7;
                        break;
                      }

                      _context7.next = 5;
                      return this.imagenService.crearUnaImagen(this.auxiliarFoto, '/mesas');

                    case 5:
                      imagenGuardada = _context7.sent;
                      this.mesa.foto = imagenGuardada;

                    case 7:
                      // Se actualiza Mesa en DB
                      this.mesaService.actualizar(this.mesa).then(function () {
                        return _this7.presentToast('Modificación exitosa', 2000);
                      })["catch"](function () {
                        return _this7.presentToast('No se pudo modificar', 2000);
                      });

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
          /**
           * Baja lógica de mesa
           */

        }, {
          key: "borrarMesa",
          value: function borrarMesa() {
            var _this8 = this;

            console.log('Baja de mesa');

            if (this.mesa) {
              // TODO: Borrar imagen de DB y Storage
              // this.imagenService.borrar(this.mesa.foto)
              this.mesaService.borrar(this.mesa).then(function () {
                return _this8.presentToast('Baja realizada', 2000);
              })["catch"](function () {
                return _this8.presentToast('No se pudo realizar baja', 2000);
              });
            }
          } // Toast para notificaciones

        }, {
          key: "presentToast",
          value: function presentToast(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: duration
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return FormMesasComponent;
      }();

      FormMesasComponent.ctorParameters = function () {
        return [{
          type: src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_6__["MesaService"]
        }, {
          type: src_app_services_imagen_service__WEBPACK_IMPORTED_MODULE_5__["ImagenService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      FormMesasComponent.propDecorators = {
        opcion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mesa: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      FormMesasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-mesas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form-mesas.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-mesas/form-mesas.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form-mesas.component.scss */
        "./src/app/components/form-mesas/form-mesas.component.scss"))["default"]]
      })], FormMesasComponent);
      /***/
    },

    /***/
    "./src/app/components/form-producto/form-producto.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/form-producto/form-producto.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFormProductoFormProductoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "input[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 16px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  padding-top: 60px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 98%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  color: #000;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n\n.alert {\n  padding: 2%;\n  background-color: rgba(255, 0, 0, 0.665);\n  border-radius: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXByb2R1Y3RvL2Zvcm0tcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUEsZ0NBQUE7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQSx1Q0FBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQSwyREFBQTs7QUFDQTtFQUF1QixXQUFBO0VBQVcsVUFBQTtBQUdsQzs7QUFEQSxzQ0FBQTs7QUFDQTtFQUNJLGFBQUE7QUFJSjs7QUFEQSwyQkFBQTs7QUFDQTtFQUNJLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix1QkFBQTtFQUE4QixtQkFBQTtFQUM5QixvQ0FBQTtFQUFtQyxxQkFBQTtFQUNuQyxpQkFBQTtBQVlKOztBQVRBLHNCQUFBOztBQUNBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUEwQixzREFBQTtFQUMxQixzQkFBQTtFQUNBLFVBQUE7RUFBWSxvREFBQTtBQWNoQjs7QUFYQSx5QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWEE7O0VBRUksVUFBQTtFQUNBLGVBQUE7QUFjSjs7QUFYQSxpQkFBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWNKOztBQVhBLDZFQUFBOztBQUNBO0VBQ0k7SUFDRyxXQUFBO0VBY0w7QUFDRjs7QUFYQTtFQUNJLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWFKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXByb2R1Y3RvL2Zvcm0tcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cbi5jYW5jZWxidG4ge1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbi5jYW5jZWxidG4sLnNpZ251cGJ0biB7ZmxvYXQ6bGVmdDt3aWR0aDo1MCV9XG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogOTglOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xufVxuXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xuLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDM1cHg7XG4gICAgdG9wOiAxNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQ2xlYXIgZmxvYXRzICovXG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYWxlcnR7XG4gICAgcGFkZGluZzogMiU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjY1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/form-producto/form-producto.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/form-producto/form-producto.component.ts ***!
      \*********************************************************************/

    /*! exports provided: FormProductoComponent */

    /***/
    function srcAppComponentsFormProductoFormProductoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormProductoComponent", function () {
        return FormProductoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_clases_producto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/clases/producto */
      "./src/app/clases/producto.ts");
      /* harmony import */


      var src_app_services_imagen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/imagen.service */
      "./src/app/services/imagen.service.ts");
      /* harmony import */


      var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/producto.service */
      "./src/app/services/producto.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var OpcionForm;

      (function (OpcionForm) {
        OpcionForm["ALTA"] = "Alta";
        OpcionForm["MODIFICACION"] = "Modificaci\xF3n";
        OpcionForm["BAJA"] = "Baja";
      })(OpcionForm || (OpcionForm = {}));

      var FormProductoComponent = /*#__PURE__*/function () {
        function FormProductoComponent(fb, productoService, imagenService, toastController) {
          _classCallCheck(this, FormProductoComponent);

          this.fb = fb;
          this.productoService = productoService;
          this.imagenService = imagenService;
          this.toastController = toastController;
          this.popoverOptions = {
            header: "Seleccione el tipo",
            translucent: true,
            cancelText: "Cerrar",
            okText: "Guardar"
          };
          this.fotos = [];
          this.crearForm();
        }

        _createClass(FormProductoComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.rellenarFormulario();
          }
        }, {
          key: "rellenarFormulario",
          value: function rellenarFormulario() {
            try {
              if (this.producto && this.opcion != OpcionForm.ALTA) {
                this.registroForm.setValue({
                  nombre: this.producto.nombre,
                  descripcion: this.producto.descripcion,
                  minutosDeElaboracion: this.producto.minutosDeElaboracion,
                  precio: this.producto.precio,
                  fotos: this.producto.fotos
                });
                this.fotos = this.producto.fotos;
              } else {
                this.registroForm.reset();
                this.fotos = [];
              }

              if (this.opcion == OpcionForm.BAJA) {
                this.registroForm.disable();
              } else {
                this.registroForm.enable();
              }
            } catch (error) {
              console.error(error);
            }
          }
        }, {
          key: "crearForm",
          value: function crearForm() {
            this.registroForm = this.fb.group({
              nombre: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              descripcion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              minutosDeElaboracion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]],
              precio: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]],
              fotos: [""]
            });
          }
        }, {
          key: "registrar",
          value: function registrar() {
            var _this9 = this;

            this.imagenService.crearArrayImagenes(this.fotos, "/productos").then(function (data) {
              console.log(data);

              _this9.registroForm.get("fotos").setValue(data);

              _this9.productoService.registrar(new src_app_clases_producto__WEBPACK_IMPORTED_MODULE_3__["Producto"](_this9.registroForm.value)).then(function (data) {
                _this9.presentToast("Alta exitosa", 2000);

                console.log("Registrado correctamente.");
              })["catch"](function (error) {
                _this9.presentToast("No se pudo realizar el alta", 2000);

                console.error("No se pudo realizar el alta.", error);
              });
            })["catch"](function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "tomarFotos",
          value: function tomarFotos() {
            var _this10 = this;

            this.imagenService.tomarFotos(1).then(function (data) {
              _this10.fotos = data;
            });
          }
        }, {
          key: "subirFoto",
          value: function subirFoto() {
            var _this11 = this;

            this.imagenService.sacarFoto().then(function (data) {
              _this11.fotos.push(data);
            });
          }
        }, {
          key: "modificarProducto",
          value: function modificarProducto() {
            var _this12 = this;

            console.log("Modificando Producto-------");
            this.producto.nombre = this.registroForm.get("nombre").value;
            this.producto.descripcion = this.registroForm.get("descripcion").value;
            this.producto.minutosDeElaboracion = this.registroForm.get("minutosDeElaboracion").value;
            this.producto.precio = this.registroForm.get("precio").value;
            this.producto.fotos = this.registroForm.get("fotos").value;
            this.productoService.actualizar(this.producto).then(function () {
              _this12.presentToast("Modificación exitosa", 2000);

              console.log("Modificado correctamente.");
            })["catch"](function () {
              return _this12.presentToast("No se pudo modificar", 2000);
            });
          }
        }, {
          key: "borrarProducto",
          value: function borrarProducto() {
            var _this13 = this;

            console.log("Baja de producto------");

            if (this.producto) {
              this.producto.isActive = false;
              this.productoService.actualizar(this.producto).then(function () {
                _this13.presentToast("Baja realizada", 2000);

                _this13.registroForm.reset();
              })["catch"](function () {
                return _this13.presentToast("No se pudo realizar baja", 2000);
              });
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: duration
                      });

                    case 2:
                      toast = _context9.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return FormProductoComponent;
      }();

      FormProductoComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"]
        }, {
          type: src_app_services_imagen_service__WEBPACK_IMPORTED_MODULE_4__["ImagenService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }];
      };

      FormProductoComponent.propDecorators = {
        opcion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        producto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      FormProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-form-producto",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form-producto.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-producto/form-producto.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form-producto.component.scss */
        "./src/app/components/form-producto/form-producto.component.scss"))["default"]]
      })], FormProductoComponent);
      /***/
    },

    /***/
    "./src/app/components/header/header.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/components/header/header.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/header/header.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [];
      };

      HeaderComponent.propDecorators = {
        titulo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        paginaAnterior: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./header.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./header.component.scss */
        "./src/app/components/header/header.component.scss"))["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "./src/app/components/listado-mesas/listado-mesas.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/listado-mesas/listado-mesas.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsListadoMesasListadoMesasComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFkby1tZXNhcy9saXN0YWRvLW1lc2FzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/listado-mesas/listado-mesas.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/listado-mesas/listado-mesas.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ListadoMesasComponent */

    /***/
    function srcAppComponentsListadoMesasListadoMesasComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListadoMesasComponent", function () {
        return ListadoMesasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ListadoMesasComponent = /*#__PURE__*/function () {
        function ListadoMesasComponent(loadingController) {
          _classCallCheck(this, ListadoMesasComponent);

          this.loadingController = loadingController;
          this.mesas = [];
          this.elegirMesa = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ListadoMesasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.presentLoading('Cargando mesas...', 2000);
          }
          /**
           * Método para enviar mesa seleccionada
           * @param mesa Mesa seleccionada
           */

        }, {
          key: "seleccionarMesa",
          value: function seleccionarMesa(mesa) {
            this.elegirMesa.emit(mesa);
          }
          /**
           * Método para presentar loading
           * @param message Mensaje del componente
           * @param duration Duracion del presentacion del mensaje
           */

        }, {
          key: "presentLoading",
          value: function presentLoading(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var loading;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.loadingController.create({
                        message: message,
                        duration: duration,
                        spinner: 'crescent'
                      });

                    case 2:
                      loading = _context10.sent;
                      _context10.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return ListadoMesasComponent;
      }();

      ListadoMesasComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      ListadoMesasComponent.propDecorators = {
        mesas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        elegirMesa: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ListadoMesasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-mesas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listado-mesas.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-mesas/listado-mesas.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./listado-mesas.component.scss */
        "./src/app/components/listado-mesas/listado-mesas.component.scss"))["default"]]
      })], ListadoMesasComponent);
      /***/
    },

    /***/
    "./src/app/components/listado-productos/listado-productos.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/listado-productos/listado-productos.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsListadoProductosListadoProductosComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-card {\n  flex-basis: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0YWRvLXByb2R1Y3Rvcy9saXN0YWRvLXByb2R1Y3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3RhZG8tcHJvZHVjdG9zL2xpc3RhZG8tcHJvZHVjdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1jYXJkIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/listado-productos/listado-productos.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/listado-productos/listado-productos.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ListadoProductosComponent */

    /***/
    function srcAppComponentsListadoProductosListadoProductosComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListadoProductosComponent", function () {
        return ListadoProductosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ListadoProductosComponent = /*#__PURE__*/function () {
        function ListadoProductosComponent(loadingController) {
          _classCallCheck(this, ListadoProductosComponent);

          this.loadingController = loadingController;
          this.productos = [];
          this.elegirProducto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ListadoProductosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.presentLoading('Cargando productos...', 2000);
          }
        }, {
          key: "seleccionarProducto",
          value: function seleccionarProducto(producto) {
            this.elegirProducto.emit(producto);
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var loading;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.loadingController.create({
                        message: message,
                        duration: duration,
                        spinner: 'crescent'
                      });

                    case 2:
                      loading = _context11.sent;
                      _context11.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return ListadoProductosComponent;
      }();

      ListadoProductosComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      ListadoProductosComponent.propDecorators = {
        productos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        elegirProducto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ListadoProductosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-productos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listado-productos.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-productos/listado-productos.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./listado-productos.component.scss */
        "./src/app/components/listado-productos/listado-productos.component.scss"))["default"]]
      })], ListadoProductosComponent);
      /***/
    },

    /***/
    "./src/app/components/splash/splash.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/components/splash/splash.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSplashSplashComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".splash #logo {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important;\n  min-height: -webkit-fit-content !important;\n  min-height: -moz-fit-content !important;\n  min-height: fit-content !important;\n}\n.splash #logo .cls-1 {\n  opacity: 0;\n  transform: rotate3d(1, 1, 0, 50deg);\n  -webkit-animation: 1s 0.2s ease fadeInAndSpin;\n          animation: 1s 0.2s ease fadeInAndSpin;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.splash #logo .cls-2 {\n  opacity: 0;\n  transform: rotate3d(1, 1, 0, 60deg);\n  -webkit-animation: 1s 0.4s ease fadeInAndSpin;\n          animation: 1s 0.4s ease fadeInAndSpin;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.splash #logo .cls-3 {\n  opacity: 0;\n  transform: rotate3d(1, 1, 0, 50deg);\n  -webkit-animation: 1s 0.6s ease fadeInAndSpin;\n          animation: 1s 0.6s ease fadeInAndSpin;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.splash #logo .cls-4 {\n  opacity: 0;\n  transform: rotate3d(1, 1, 0, 60deg);\n  -webkit-animation: 1s 0.8s ease fadeInAndSpin;\n          animation: 1s 0.8s ease fadeInAndSpin;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.splash #logo .cls-5, .splash #logo .cls-6 {\n  opacity: 0;\n  -webkit-animation: 2s 1.5s linear fadeIn;\n          animation: 2s 1.5s linear fadeIn;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes fadeInAndSpin {\n  100% {\n    opacity: 1;\n    transform: rotate3d(1, 1, 0, 0deg);\n  }\n}\n@keyframes fadeInAndSpin {\n  100% {\n    opacity: 1;\n    transform: rotate3d(1, 1, 0, 0deg);\n  }\n}\n@-webkit-keyframes fadeIn {\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  100% {\n    opacity: 1;\n  }\n}\n.modal-wrapper {\n  display: flex !important;\n  justify-content: center !important;\n  align-content: center !important;\n  height: 100% !important;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gvc3BsYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBRUkseUNBQUE7RUFBQSxzQ0FBQTtFQUFBLGlDQUFBO0VBQ0EsMENBQUE7RUFBQSx1Q0FBQTtFQUFBLGtDQUFBO0FBSFI7QUFNUTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBSlo7QUFPUTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBTFo7QUFRUTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBTlo7QUFTUTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBUFo7QUFVUTtFQUNJLFVBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQVJaO0FBY0E7RUFFSTtJQUNJLFVBQUE7SUFDQSxrQ0FBQTtFQVpOO0FBQ0Y7QUFPQTtFQUVJO0lBQ0ksVUFBQTtJQUNBLGtDQUFBO0VBWk47QUFDRjtBQWdCQTtFQUVJO0lBQ0ksVUFBQTtFQWZOO0FBQ0Y7QUFXQTtFQUVJO0lBQ0ksVUFBQTtFQWZOO0FBQ0Y7QUFtQkE7RUFDSSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBakJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gvc3BsYXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGFzaHtcblxuXG4gICAgI2xvZ28ge1xuXG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICAgICAgXG5cbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDEsIDEsIDAsIDUwZGVnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgMC4ycyBlYXNlIGZhZGVJbkFuZFNwaW47XG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbHMtMiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCA2MGRlZyk7XG4gICAgICAgICAgICBhbmltYXRpb246IDFzIDAuNHMgZWFzZSBmYWRlSW5BbmRTcGluO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2xzLTMge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMSwgMCwgNTBkZWcpO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxcyAwLjZzIGVhc2UgZmFkZUluQW5kU3BpbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNscy00IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDEsIDEsIDAsIDYwZGVnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgMC44cyBlYXNlIGZhZGVJbkFuZFNwaW47XG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbHMtNSwgLmNscy02IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBhbmltYXRpb246IDJzIDEuNXMgbGluZWFyIGZhZGVJbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluQW5kU3BpbiB7XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCAwZGVnKTtcbiAgICB9XG5cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG59XG5cbi5tb2RhbC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/splash/splash.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/splash/splash.component.ts ***!
      \*******************************************************/

    /*! exports provided: SplashComponent */

    /***/
    function srcAppComponentsSplashSplashComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashComponent", function () {
        return SplashComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SplashComponent = /*#__PURE__*/function () {
        function SplashComponent(viewCtrl, splashScreen) {
          var _this14 = this;

          _classCallCheck(this, SplashComponent);

          this.viewCtrl = viewCtrl;
          this.splashScreen = splashScreen;
          this.splashScreen.hide();
          setTimeout(function () {
            _this14.viewCtrl.dismiss();
          }, 5000);
        }

        _createClass(SplashComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SplashComponent;
      }();

      SplashComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
        }];
      };

      SplashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-splash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./splash.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/splash/splash.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./splash.component.scss */
        "./src/app/components/splash/splash.component.scss"))["default"]]
      })], SplashComponent);
      /***/
    },

    /***/
    "./src/app/pipes/pipes.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./safe.pipe */
      "./src/app/pipes/safe.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "./src/app/pipes/safe.pipe.ts":
    /*!************************************!*\
      !*** ./src/app/pipes/safe.pipe.ts ***!
      \************************************/

    /*! exports provided: SafePipe */

    /***/
    function srcAppPipesSafePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var SafePipe = /*#__PURE__*/function () {
        function SafePipe(sanitizer) {
          _classCallCheck(this, SafePipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(value, type) {
            switch (type) {
              case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);

              case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);

              case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);

              default:
                throw new Error("Invalid safe type specified: ".concat(type));
            }
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
      })], SafePipe);
      /***/
    },

    /***/
    "./src/app/services/codigo-qr.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/codigo-qr.service.ts ***!
      \***********************************************/

    /*! exports provided: CodigoQRService */

    /***/
    function srcAppServicesCodigoQrServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodigoQRService", function () {
        return CodigoQRService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js"); //import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


      var CodigoQRService = /*#__PURE__*/function () {
        /**
         * Se le adiciona al backbutton la funcion de cancelar el escaneo
         * si se presiona para retornar a la pagina anterior
         *
         * @param platform Instancia del dispositivo donde se ejecuta el código (Web, Native)
         * @param escanerQR (Instancia del plugin de lector QR)
         */
        function CodigoQRService(platform, barcodeScanner) {
          _classCallCheck(this, CodigoQRService);

          this.platform = platform;
          this.barcodeScanner = barcodeScanner;
        }
        /**
         * Método para leer un código QR
         * @returns Data contenida por código QR
         */


        _createClass(CodigoQRService, [{
          key: "escanear",
          value: function escanear(formats) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var scannerOpts, scan;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      console.log("Leer QR");
                      scannerOpts = {
                        prompt: 'Escanea el DNI',
                        formats: formats,
                        showTorchButton: true
                      };
                      _context12.next = 4;
                      return this.barcodeScanner.scan(scannerOpts);

                    case 4:
                      scan = _context12.sent;
                      return _context12.abrupt("return", scan);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
          /**
           * Método para generar QR
           * - !Se debe mejorar funcionalidad e integrar con DB -
           * @param elemento Objeto con data para generar QR
           * @param id UID que identificará al objeto
           */

        }, {
          key: "generar",
          value: function generar(elemento, id) {
            // The text to store within the QR code (URL encoded, PHP programmers may use urlencode()).
            var data = "BEGIN:".concat(elemento.constructor.name, "ID%3A").concat(id);
            elemento.codigoQR = "http://api.qrserver.com/v1/create-qr-code/?data=".concat(data, "&size=66x66&format=svg");
            console.log(elemento);
          }
          /**
           * Método para otorgar permisos a plugin
           * - !Este método es opcional pero requiere testear en dispositivo
           */

        }, {
          key: "configurar",
          value: function configurar() {//this.escanerQR.openSettings();
          }
        }]);

        return CodigoQRService;
      }();

      CodigoQRService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]
        }];
      };

      CodigoQRService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CodigoQRService);
      /***/
    },

    /***/
    "./src/app/services/empleado.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/empleado.service.ts ***!
      \**********************************************/

    /*! exports provided: EmpleadoService */

    /***/
    function srcAppServicesEmpleadoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmpleadoService", function () {
        return EmpleadoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _clases_empleado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../clases/empleado */
      "./src/app/clases/empleado.ts");

      var EmpleadoService_1;

      var EmpleadoService = EmpleadoService_1 = /*#__PURE__*/function () {
        function EmpleadoService(firebase) {
          _classCallCheck(this, EmpleadoService);

          this.firebase = firebase;
        }

        _createClass(EmpleadoService, [{
          key: "crear",
          value: function crear(empleado) {
            var _this15 = this;

            empleado.isActive = true;
            return this.firebase.database.ref("empleados").push().then(function (snapshot) {
              return empleado.id = snapshot.key;
            }).then(function () {
              return _this15.actualizar(empleado);
            })["catch"](console.error);
          }
        }, {
          key: "actualizar",
          value: function actualizar(empleado) {
            return this.firebase.database.ref("empleados/" + empleado.id).update(empleado);
          }
        }, {
          key: "borradoLogico",
          value: function borradoLogico(empleado) {
            empleado.isActive = false;
            return this.actualizar(empleado);
          }
        }, {
          key: "leer",
          value: function leer() {
            var _this16 = this;

            var empleados = [];
            console.info("Fetch de todos los empleados");
            return new Promise(function (resolve) {
              _this16.firebase.database.ref("empleados").on("value", function (snapshot) {
                empleados = [];
                snapshot.forEach(function (child) {
                  var data = child.val();
                  empleados.push(_clases_empleado__WEBPACK_IMPORTED_MODULE_3__["Empleado"].CrearEmpleado(data.id, data.nombre, data.apellido, data.dni, data.foto, data.isActive, data.tipo, data.cuil));
                });
                EmpleadoService_1.empleados = empleados.filter(function (e) {
                  return e.isActive;
                });
                resolve(EmpleadoService_1.empleados);
              });
            });
          }
        }, {
          key: "leerPorID",
          value: function leerPorID(id) {
            return this.firebase.database.ref("empleados/".concat(id)).once('value');
          }
        }]);

        return EmpleadoService;
      }();

      EmpleadoService.empleados = [];

      EmpleadoService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }];
      };

      EmpleadoService = EmpleadoService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], EmpleadoService);
      /***/
    },

    /***/
    "./src/app/services/imagen.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/imagen.service.ts ***!
      \********************************************/

    /*! exports provided: ImagenService */

    /***/
    function srcAppServicesImagenServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagenService", function () {
        return ImagenService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _clases_imagen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../clases/imagen */
      "./src/app/clases/imagen.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);

      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Camera;

      var ImagenService = /*#__PURE__*/function () {
        function ImagenService(storage, firebaseDB, toastController, mediaCapture) {
          _classCallCheck(this, ImagenService);

          this.storage = storage;
          this.firebaseDB = firebaseDB;
          this.toastController = toastController;
          this.mediaCapture = mediaCapture;
        }
        /** Permite sacar multiples fotos y devuelve un array de Imagenes*/


        _createClass(ImagenService, [{
          key: "tomarFotos",
          value: function tomarFotos(cantidadDeFotos) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this17 = this;

              var options, fotos;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      options = {
                        limit: cantidadDeFotos
                      };
                      _context14.next = 3;
                      return this.mediaCapture.captureImage(options).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) {
                              switch (_context13.prev = _context13.next) {
                                case 0:
                                  _context13.next = 2;
                                  return this.convertirMediaFileAImagen(data).then(function (imagenes) {
                                    fotos = imagenes;
                                  });

                                case 2:
                                case "end":
                                  return _context13.stop();
                              }
                            }
                          }, _callee13, this);
                        }));
                      }, function (err) {
                        console.error("Error al sacar fotos ", err);
                      });

                    case 3:
                      return _context14.abrupt("return", fotos);

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
          /**Convierte un archivo MediaFile[] a Array<Imagen>.
           * Agregandoles la fecha y una url local(se cambia cuando se guarda definitivamente en el Storage)
           */

        }, {
          key: "convertirMediaFileAImagen",
          value: function convertirMediaFileAImagen(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this18 = this;

              var fotos, i, len, _loop;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      fotos = new Array();

                      _loop = function _loop() {
                        var imagen = new _clases_imagen__WEBPACK_IMPORTED_MODULE_2__["Imagen"]();
                        imagen.url = window.Ionic.WebView.convertFileSrc(data[i].fullPath);
                        imagen.fecha = new Date().toUTCString();

                        _this18.convertirArchivoABase64(data[i].fullPath, function (imgbase) {
                          imagen.base64 = imgbase;
                        });

                        fotos.push(imagen);
                      };

                      for (i = 0, len = data.length; i < len; i += 1) {
                        _loop();
                      }

                      return _context15.abrupt("return", fotos);

                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }));
          }
          /**
           * Esta funcion convierte un archivo a formato Base64
           * @path string con la ruta local hacia el archivo
           * @callback function recibe como primer parámetro el la imagen base64
           */

        }, {
          key: "convertirArchivoABase64",
          value: function convertirArchivoABase64(path, callback) {
            window.resolveLocalFileSystemURL(path, archivoEncontrado, fail);

            function fail(e) {
              console.error("No se pudo acceder al archivo en este dispositivo");
            }

            function archivoEncontrado(archivo) {
              archivo.file(function (file) {
                var reader = new FileReader();

                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };

                reader.readAsDataURL(file);
              });
            }
          }
          /**
           * Subir foto del almacenamiento del dispositivo
           */

        }, {
          key: "sacarFoto",
          value: function sacarFoto() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var imagen, image;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      imagen = new _clases_imagen__WEBPACK_IMPORTED_MODULE_2__["Imagen"]();
                      _context16.next = 3;
                      return Camera.getPhoto({
                        quality: 90,
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
                        correctOrientation: true,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt,
                        promptLabelHeader: "Subir foto",
                        promptLabelCancel: "Cancelar",
                        promptLabelPhoto: "Subir desde galería",
                        promptLabelPicture: "Nueva foto"
                      });

                    case 3:
                      image = _context16.sent;
                      imagen.base64 = image.base64String;
                      imagen.fecha = new Date().toUTCString();
                      return _context16.abrupt("return", imagen);

                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));
          }
          /**
           * Registra una imagen en la base de datos y la devuelve con su respectivo id y su url
           *  @imagen Imagen que se desea guardar
           * @rutaCarpetaStorage Ruta de la base de datos donde guardar el array, ej '/productos'
           */

        }, {
          key: "crearUnaImagen",
          value: function crearUnaImagen(imagen, rutaCarpetaStorage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this19 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", new Promise(function (resolve) {
                        var carpeta = rutaCarpetaStorage; // Se sube imagen a Base de Datos

                        var imagenDB = _this19.crear(imagen);

                        imagenDB.then(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                            var imagenStorage, URL;
                            return regeneratorRuntime.wrap(function _callee17$(_context17) {
                              while (1) {
                                switch (_context17.prev = _context17.next) {
                                  case 0:
                                    console.log("Imagen en DB"); // Se guarda imagen en el Storage

                                    _context17.next = 3;
                                    return this.guardarImagen(imagen, carpeta);

                                  case 3:
                                    imagenStorage = _context17.sent;
                                    _context17.next = 6;
                                    return imagenStorage.ref.getDownloadURL();

                                  case 6:
                                    URL = _context17.sent;
                                    imagen.url = URL;
                                    imagen.rutaStorage = imagenStorage.ref.child("".concat(rutaCarpetaStorage, "/").concat(imagen.id)).toString();
                                    console.log(imagen);
                                    resolve(imagen);

                                  case 11:
                                  case "end":
                                    return _context17.stop();
                                }
                              }
                            }, _callee17, this);
                          }));
                        })["catch"](console.error);
                      }));

                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }));
          }
          /**
           * Registra un array de imagenes en la base de datos, Guardando el archivo en Firebase.Storage y lo devuelve con sus respectivos id y url
           * @imagenes Array<Imagen> el array que se decea guardar
           * @rutaCarpetaStorage Ruta de la base de datos donde guardar el array, ej '/productos'
           */

        }, {
          key: "crearArrayImagenes",
          value: function crearArrayImagenes(imagenes, rutaCarpetaStorage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this20 = this;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      return _context20.abrupt("return", new Promise(function (resolve) {
                        var carpeta = rutaCarpetaStorage; // Se sube imagen a Base de Datos

                        imagenes.forEach(function (imagen) {
                          var imagenDB = _this20.crear(imagen);

                          imagenDB.then(function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                              var imagenStorage, URL;
                              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                                while (1) {
                                  switch (_context19.prev = _context19.next) {
                                    case 0:
                                      _context19.next = 2;
                                      return this.guardarImagen(imagen, carpeta);

                                    case 2:
                                      imagenStorage = _context19.sent;
                                      _context19.next = 5;
                                      return imagenStorage.ref.getDownloadURL();

                                    case 5:
                                      URL = _context19.sent;
                                      imagen.url = URL;
                                      imagen.rutaStorage = imagenStorage.ref.child("".concat(rutaCarpetaStorage, "/").concat(imagen.id)).toString();

                                    case 8:
                                    case "end":
                                      return _context19.stop();
                                  }
                                }
                              }, _callee19, this);
                            }));
                          })["catch"](console.error);
                        });
                        resolve(imagenes);
                      }));

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }));
          }
        }, {
          key: "guardarImagen",
          value: function guardarImagen(imagen, carpeta) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var metadata;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      console.log("Guardar imagen-----------------------");
                      metadata = {
                        contentType: "image/jpeg"
                      }; // Se sube imagen al Firebase Storage

                      return _context21.abrupt("return", this.storage.ref("".concat(carpeta, "/").concat(imagen.id)).putString(imagen.base64, firebase__WEBPACK_IMPORTED_MODULE_8__["storage"].StringFormat.BASE64, metadata));

                    case 3:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
          /**
           * Crea una referencia en la carpeta imagenes de la base de datos (Realtime data base), y devuelve el parametro imagen pero con el id de referencia
           */

        }, {
          key: "crear",
          value: function crear(imagen) {
            var _this21 = this;

            return this.firebaseDB.database.ref("imagenes").push().then(function (snapshot) {
              imagen.id = snapshot.key;
              console.log('Creado correctamente');

              _this21.actualizar(imagen);
            })["catch"](function () {
              return console.info("No se pudo realizar alta");
            });
          }
        }, {
          key: "actualizar",
          value: function actualizar(imagen) {
            return this.firebaseDB.database.ref("imagenes/" + imagen.id).update(imagen).then(function () {
              return console.info("Actualizacion exitosa");
            })["catch"](function () {
              return console.info("No se pudo actualizar");
            });
          }
        }, {
          key: "borrar",
          value: function borrar(imagen) {
            return this.firebaseDB.database.ref("imagenes/" + imagen.id).remove().then(function () {
              return console.info("Imagen eliminada");
            })["catch"](function () {
              return console.info("No se pudo realizar la baja.");
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var toast;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context22.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }]);

        return ImagenService;
      }();

      ImagenService.ctorParameters = function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__["MediaCapture"]
        }];
      };

      ImagenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], ImagenService);
      /***/
    },

    /***/
    "./src/app/services/mesa.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/mesa.service.ts ***!
      \******************************************/

    /*! exports provided: MesaService */

    /***/
    function srcAppServicesMesaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MesaService", function () {
        return MesaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _clases_mesa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../clases/mesa */
      "./src/app/clases/mesa.ts");
      /* harmony import */


      var _codigo_qr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./codigo-qr.service */
      "./src/app/services/codigo-qr.service.ts");

      var MesaService_1;

      var MesaService = MesaService_1 = /*#__PURE__*/function () {
        function MesaService(firebase, escanerQR) {
          _classCallCheck(this, MesaService);

          this.firebase = firebase;
          this.escanerQR = escanerQR;
        }
        /**
         * Método para realizar Alta en DB
         * @param mesa instancia de Mesa
         */


        _createClass(MesaService, [{
          key: "crear",
          value: function crear(mesa) {
            var _this22 = this;

            console.log(mesa);
            mesa.isActive = true;
            mesa.isAvailable = true;
            return this.firebase.database.ref('mesas').push(mesa).then(function (snapshot) {
              return mesa.id = snapshot.key;
            }).then(function () {
              return _this22.actualizar(mesa);
            })["catch"](console.error);
          }
          /**
           * Método para realizar Modificacion en DB
           * @param mesa instancia de Mesa
           */

        }, {
          key: "actualizar",
          value: function actualizar(mesa) {
            this.escanerQR.generar(mesa, mesa.id); //Generacion de QR

            return this.firebase.database.ref('mesas/' + mesa.id).update(mesa);
          }
          /**
           * Método para realizar Baja lógica en DB
           * @param mesa instancia de Mesa
           */

        }, {
          key: "borrar",
          value: function borrar(mesa) {
            mesa.isActive = false;
            return this.firebase.database.ref('mesas/' + mesa.id).update(mesa);
          }
          /**
           * Método para realizar Fetch de todas las mesas en DB
           */

        }, {
          key: "leer",
          value: function leer() {
            var _this23 = this;

            var mesas = [];
            console.info("Fetch de todas las mesas");
            var fetch = new Promise(function (resolve) {
              _this23.firebase.database.ref('mesas').on('value', function (snapshot) {
                mesas = [];
                snapshot.forEach(function (child) {
                  var data = child.val();
                  mesas.push(_clases_mesa__WEBPACK_IMPORTED_MODULE_3__["Mesa"].CrearMesa(data.id, data.numero, data.comensales, data.tipo, data.foto, data.codigoQR, data.isAvailable, data.isActive));
                });
                MesaService_1.mesas = mesas.filter(function (mesa) {
                  return mesa.isActive;
                });
                resolve(MesaService_1.mesas);
              });
            });
            return fetch;
          }
          /**
           * Método para realizar Fetch de una mesa en DB
           * @param id UID del registro a obtener
           */

        }, {
          key: "fetch",
          value: function fetch(id) {
            return this.firebase.database.ref("mesas/".concat(id)).once('value');
          }
        }]);

        return MesaService;
      }();

      MesaService.mesas = [];

      MesaService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _codigo_qr_service__WEBPACK_IMPORTED_MODULE_4__["CodigoQRService"]
        }];
      };

      MesaService = MesaService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MesaService);
      /***/
    },

    /***/
    "./src/app/services/producto.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/producto.service.ts ***!
      \**********************************************/

    /*! exports provided: ProductoService */

    /***/
    function srcAppServicesProductoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoService", function () {
        return ProductoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _clases_producto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../clases/producto */
      "./src/app/clases/producto.ts");

      var ProductoService = /*#__PURE__*/function () {
        function ProductoService(db) {
          _classCallCheck(this, ProductoService);

          this.db = db;
          this.rutaDB = '/productos';
          this.referenciaProductos = null;

          try {
            this.referenciaProductos = db.list(this.rutaDB);
          } catch (error) {
            console.log("Error: ", error);
          }
        }

        _createClass(ProductoService, [{
          key: "traerTodos",
          value: function traerTodos() {
            var _this24 = this;

            try {
              var productos = [];
              var fetch = new Promise(function (resolve) {
                _this24.db.database.ref('productos').on('value', function (snapshot) {
                  productos = [];
                  snapshot.forEach(function (child) {
                    var data = child.val();
                    productos.push(new _clases_producto__WEBPACK_IMPORTED_MODULE_3__["Producto"](data));
                  });
                  productos = productos.filter(function (producto) {
                    return producto.isActive == true;
                  });
                  resolve(productos);
                });
              });
              return fetch;
            } catch (error) {
              console.log("Error: ", error);
            }
          }
        }, {
          key: "registrar",
          value: function registrar(producto) {
            var _this25 = this;

            try {
              producto.isActive = true;
              return this.referenciaProductos.push(producto).then(function (snapshot) {
                return producto.id = snapshot.key;
              }).then(function () {
                return _this25.actualizar(producto);
              })["catch"](console.error);
            } catch (error) {
              console.log("No se pudo registrar: ", error);
            }
          }
        }, {
          key: "actualizar",
          value: function actualizar(producto) {
            return this.db.database.ref('productos/' + producto.id).update(producto).then(function () {
              return console.info("Actualizacion exitosa");
            })["catch"](function () {
              return console.info("No se pudo actualizar");
            });
          }
        }, {
          key: "eliminar",
          value: function eliminar(producto) {
            try {
              producto.isActive = false;
              return this.actualizar(producto).then(function () {
                console.info("Borrado");
              });
            } catch (error) {
              console.log("No se pudo Borrar: ", error);
            }
          }
        }]);

        return ProductoService;
      }();

      ProductoService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }];
      };

      ProductoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProductoService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyD_MLjLqoz_-P9E7My_LxpTwVd2ncrmZy8",
          authDomain: "tp2-comanda-pps.firebaseapp.com",
          databaseURL: "https://tp2-comanda-pps.firebaseio.com",
          projectId: "tp2-comanda-pps",
          storageBucket: "tp2-comanda-pps.appspot.com",
          messagingSenderId: "186663344195",
          appId: "1:186663344195:web:98d1d508b5aa7b301b1cf6"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/aleksei/workspace/Trabajo_Practico_2_PPS/2020_TP_PPS_Comanda_2_cuatri/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map