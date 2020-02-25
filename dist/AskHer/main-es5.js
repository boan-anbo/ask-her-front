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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _back_back_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./back/back.component */
    "./src/app/back/back.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth-guard.service */
    "./src/app/auth/auth-guard.service.ts");

    var routes = [{
      path: ':id/back',
      component: _back_back_component__WEBPACK_IMPORTED_MODULE_2__["BackComponent"],
      canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: '',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'AskHer';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _back_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./back/back.component */
    "./src/app/back/back.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./auth/auth-guard.service */
    "./src/app/auth/auth-guard.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__["RecaptchaModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _back_back_component__WEBPACK_IMPORTED_MODULE_4__["BackComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__["RecaptchaModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _back_back_component__WEBPACK_IMPORTED_MODULE_4__["BackComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__["RecaptchaModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"]],
          providers: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth-guard.service.ts":
  /*!********************************************!*\
    !*** ./src/app/auth/auth-guard.service.ts ***!
    \********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router, dataService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _a;

          console.log(state);
          console.log(next);
          return this.dataService.checkAuth((_a = next.params) === null || _a === void 0 ? void 0 : _a.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            console.log(data);

            if (data === false) {
              return false;
            } else {
              return true;
            }
          })); // if (this.authService.isRouteAuthenticated()) {
          //   console.log(state.toString());
          //   // return true;
          // }
          // this.router.navigate['back'];
          // return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(dataService) {
        _classCallCheck(this, AuthService);

        this.dataService = dataService;
      }

      _createClass(AuthService, [{
        key: "isRouteAuthenticated",
        value: function isRouteAuthenticated() {
          return this.isAuthenticated;
        }
      }, {
        key: "setIsAuthenticated",
        value: function setIsAuthenticated(isAuth) {
          this.isAuthenticated = isAuth;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/back/back.component.ts":
  /*!****************************************!*\
    !*** ./src/app/back/back.component.ts ***!
    \****************************************/

  /*! exports provided: BackComponent */

  /***/
  function srcAppBackBackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackComponent", function () {
      return BackComponent;
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


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function BackComponent_mat_list_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u76EE\u524D\u6CA1\u6709\u65B0\u7684\u56DE\u7B54\u9700\u8981\u5BA1\u6838");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BackComponent_mat_list_item_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BackComponent_mat_list_item_2_Template_mat_icon_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var item_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.approveUploadedAnswer(item_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "check");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BackComponent_mat_list_item_2_Template_mat_icon_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var item_r2 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.deleteUploadedAnswer(item_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.answer == null ? null : item_r2.answer.message, " ");
      }
    }

    var BackComponent =
    /*#__PURE__*/
    function () {
      function BackComponent(dataService, snackbar, authService) {
        _classCallCheck(this, BackComponent);

        this.dataService = dataService;
        this.snackbar = snackbar;
        this.authService = authService;
      }

      _createClass(BackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllUploadedAnswers();
          console.log(this.allUploadedAnswers);
        }
      }, {
        key: "loadAllUploadedAnswers",
        value: function loadAllUploadedAnswers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.dataService.getAllUpload().subscribe(function (data) {
                      console.log(data);
                      _this.allUploadedAnswers = data;
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "approveUploadedAnswer",
        value: function approveUploadedAnswer(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.dataService.approveUploadedAnswer(item._id).subscribe(function (data) {
                      var _a;

                      console.log(data);

                      _this2.loadAllUploadedAnswers();

                      _this2.snackbar.open("Answer Approved: ".concat((_a = item.answer) === null || _a === void 0 ? void 0 : _a.message), '', {
                        duration: 2000
                      });
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "deleteUploadedAnswer",
        value: function deleteUploadedAnswer(item) {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF08\u53EF\u6309\u56DE\u8F66\u952E\u786E\u8BA4\uFF09?\n ".concat((_a = item.answer) === null || _a === void 0 ? void 0 : _a.message))) {
                      this.dataService.deleteUploadedAnswer(item._id).subscribe(function (data) {
                        console.log(data);

                        _this3.loadAllUploadedAnswers();
                      });
                      this.snackbar.open("Answer Deleted: ".concat((_b = item.answer) === null || _b === void 0 ? void 0 : _b.message), 'OK', {
                        duration: 2000
                      });
                    }

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return BackComponent;
    }();

    BackComponent.ɵfac = function BackComponent_Factory(t) {
      return new (t || BackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    BackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BackComponent,
      selectors: [["app-back"]],
      decls: 3,
      vars: 2,
      consts: [["dense", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", "id", "approve"], [3, "click"], ["mat-icon-button", "", "id", "delete"]],
      template: function BackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BackComponent_mat_list_item_1_Template, 3, 0, "mat-list-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BackComponent_mat_list_item_2_Template, 9, 1, "mat-list-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.allUploadedAnswers == null ? null : ctx.allUploadedAnswers.length) === 0 || !ctx.allUploadedAnswers);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allUploadedAnswers);
        }
      },
      directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      styles: ["#approve[_ngcontent-%COMP%] {\r\n  color: yellowgreen;\r\n}\r\n\r\n#delete[_ngcontent-%COMP%] {\r\n  color: darkred;\r\n}\r\n\r\nmat-list-item[_ngcontent-%COMP%] {\r\n  background-color: black\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFjay9iYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JhY2svYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcHJvdmUge1xyXG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcclxufVxyXG5cclxuI2RlbGV0ZSB7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbm1hdC1saXN0LWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-back',
          templateUrl: './back.component.html',
          styleUrls: ['./back.component.css']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http; // tslint:disable-next-line:variable-name

        this._apiBase = 'http://167.172.212.141:4001'; // remote
        // private _apiBase = 'https://www.askjiang.com'; // remote
        // private _apiBase = 'http://localhost:4001'; // local
        // tslint:disable-next-line:variable-name

        this._listAllUpload = '/uploadanswer/listall'; // tslint:disable-next-line:variable-name

        this._deleteUploadedAnswer = '/uploadanswer/delete/'; // tslint:disable-next-line:variable-name

        this._approveUploadedAnswer = '/uploadanswer/approve/'; // tslint:disable-next-line:variable-name

        this._backEntry = '/entry/back/'; // tslint:disable-next-line:variable-name

        this._listAllEntries = '/entry/listall'; // tslint:disable-next-line:variable-name

        this._getRandomEntry = '/entry/find/random'; // tslint:disable-next-line:variable-name

        this._uploadAnswer = '/uploadanswer/'; // tslint:disable-next-line:variable-name

        this._upvoteAnswer = '/upvote/answer/'; // tslint:disable-next-line:variable-name

        this._upvoteQuestion = '/upvote/question/';
      }

      _createClass(DataService, [{
        key: "UpVoteAnswerUrl",
        value: function UpVoteAnswerUrl(answerId) {
          return this._apiBase + this._upvoteAnswer + answerId;
        }
      }, {
        key: "UpvoteQuestionUrl",
        value: function UpvoteQuestionUrl(questionId) {
          return this._apiBase + this._upvoteQuestion + questionId;
        }
      }, {
        key: "uploadQuestionUrl",
        value: function uploadQuestionUrl(questionId) {
          return this._apiBase + this._uploadAnswer + questionId;
        }
      }, {
        key: "getAllUpload",
        value: function getAllUpload() {
          return this.http.get(this._apiBase + this._listAllUpload);
        }
      }, {
        key: "deleteUploadedAnswer",
        value: function deleteUploadedAnswer(id) {
          return this.http.get(this._apiBase + this._deleteUploadedAnswer + id);
        }
      }, {
        key: "approveUploadedAnswer",
        value: function approveUploadedAnswer(id) {
          return this.http.get(this._apiBase + this._approveUploadedAnswer + id);
        }
      }, {
        key: "checkAuth",
        value: function checkAuth(id) {
          return this.http.get(this._apiBase + this._backEntry + id);
        }
      }, {
        key: "getAllEntries",
        value: function getAllEntries() {
          return this.http.get(this._apiBase + this._listAllEntries);
        }
      }, {
        key: "getOneRandomEntry",
        value: function getOneRandomEntry() {
          return this.http.get(this._apiBase + this._getRandomEntry);
        }
      }, {
        key: "uploadAnswer",
        value: function uploadAnswer(questionId, message, authorId) {
          // console.log({message, authorId});
          return this.http.put(this.uploadQuestionUrl(questionId), {
            message: message,
            authorId: authorId
          });
        }
      }, {
        key: "UpvoteAnswer",
        value: function UpvoteAnswer(answerId) {
          return this.http.get(this.UpVoteAnswerUrl(answerId));
        }
      }, {
        key: "UpvoteQuestion",
        value: function UpvoteQuestion(questionId) {
          return this.http.get(this.UpvoteQuestionUrl(questionId));
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/entry.model.ts":
  /*!*************************************!*\
    !*** ./src/app/main/entry.model.ts ***!
    \*************************************/

  /*! exports provided: Entry, Question, Answer, UploadAnswer, EntryCollection */

  /***/
  function srcAppMainEntryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Entry", function () {
      return Entry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Answer", function () {
      return Answer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadAnswer", function () {
      return UploadAnswer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntryCollection", function () {
      return EntryCollection;
    });

    var Entry = function Entry() {
      _classCallCheck(this, Entry);

      this.question = {
        text: '',
        authorId: '',
        heard: 0
      };
      this.answers = [new Answer()];
    };

    var Question = function Question() {
      _classCallCheck(this, Question);
    };

    var Answer = function Answer() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var authorId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      _classCallCheck(this, Answer);

      this.message = message;
      this.authorId = authorId;
      this.upvote = 0;
    };

    var UploadAnswer = function UploadAnswer() {
      _classCallCheck(this, UploadAnswer);
    };

    var EntryCollection = function EntryCollection() {
      _classCallCheck(this, EntryCollection);
    };
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
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


    var _entry_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./entry.model */
    "./src/app/main/entry.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _speech_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../speech.service */
    "./src/app/speech.service.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");

    function MainComponent_mat_grid_tile_26_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " / ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_mat_grid_tile_26_mat_card_4_Template_button_click_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r12.IUpVoteThat();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "favorite_border");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.currentEntry.answers[ctx_r9.answerPointer].message, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.currentEntry.answers[ctx_r9.answerPointer].authorId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.answerPointer + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.currentEntry.answers.length, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r9.currentEntry.answers[ctx_r9.answerPointer].upvote, " ");
      }
    }

    function MainComponent_mat_grid_tile_26_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u65E0\u4EBA\u56DE\u7B54");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainComponent_mat_grid_tile_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_mat_grid_tile_26_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.LeftArrow();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "arrow_left");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MainComponent_mat_grid_tile_26_mat_card_4_Template, 19, 5, "mat-card", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainComponent_mat_grid_tile_26_ng_template_5_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_mat_grid_tile_26_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.RightArrow();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.IsFirstAnswer());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.IsThereAnswer())("ngIfElse", _r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.IsLastAnswer());
      }
    }

    function MainComponent_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MainComponent_ng_template_27_Template_form_ngSubmit_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.submitHandler();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u6211\u7684\u56DE\u7B54");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "textarea", 35, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-hint", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-hint", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 40, 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-hint", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-hint", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "send");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r8.inputForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r17.value.length, " / 140\u5B57");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r19.value.length, " / 20\u5B57\u7B26");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8.inputSubmitLoading);
      }
    }

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(fb, dataService, snackbar, speechService) {
        _classCallCheck(this, MainComponent);

        this.fb = fb;
        this.dataService = dataService;
        this.snackbar = snackbar;
        this.speechService = speechService;
        this.currentEntry = new _entry_model__WEBPACK_IMPORTED_MODULE_2__["Entry"]();
        this.answerPointer = 0;
        this.writingAnswer = false;
        this.inputSubmitLoading = false;
        this.alreadyHeard = false;
        this.alreadyUpvoted = {};
        this.loadingEntry = false; // to prevent loading questions too frequently

        this.preLoadQuestionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.preLoadQuestionSubject.pipe(throttleTime(100)).subscribe(() => {
          //   this.PreLoadRandomQuestion();
          // });
          this.LoadRandomQuestion(); // this.PreLoadRandomQuestion()
          // this.LoadAnswer();

          this.InitializeQuestion();
          this.InitializeInputForm();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.preLoadQuestionSubject.unsubscribe();
        } // async uploadAnswer(questionId, message, authorId) {
        //   this.dataService.uploadAnswer(questionId, message, authorId).subscribe((data) => {
        //     console.log(data);
        //   });
        // }

      }, {
        key: "submitHandler",
        value: function submitHandler() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var formValue;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.inputSubmitLoading = true;
                    formValue = this.inputForm.value;

                    try {
                      this.uploadAnswerSubscription = this.dataService.uploadAnswer(this.currentEntry._id, formValue.message, formValue.authorId).subscribe(function (data) {
                        console.log(data);

                        if (data) {
                          _this4.snackbar.open('你的回答已收录', "\u7A0D\u540E\u66F4\u65B0\u2665", {
                            duration: 3000
                          });

                          _this4.InitializeInputForm();

                          _this4.ExitWritingMode();
                        } else {}
                      });
                    } catch (err) {
                      console.log(err);
                    }

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "setCurrentEntry",
        value: function setCurrentEntry(entryToUse) {
          if (!this.currentEntry) {
            this.currentEntry = new _entry_model__WEBPACK_IMPORTED_MODULE_2__["Entry"]();
          }

          this.currentEntry = entryToUse;
        }
      }, {
        key: "IHeardThat",
        value: function IHeardThat() {
          if (this.alreadyHeard === false) {
            this.currentEntry.question.heard += 1;
            this.iHeardThatSubscription = this.dataService.UpvoteQuestion(this.currentEntry._id).subscribe(function (data) {
              return console.log(data);
            });
            this.alreadyHeard = true;
          }
        }
      }, {
        key: "LetMeAnswer",
        value: function LetMeAnswer() {
          this.writingAnswer = true;
        }
      }, {
        key: "LeftArrow",
        value: function LeftArrow() {
          if (this.answerPointer > 0) {
            this.answerPointer -= 1; // this.LoadAnswer();
          }
        }
      }, {
        key: "RightArrow",
        value: function RightArrow() {
          if (this.answerPointer < this.currentEntry.answers.length - 1) {
            this.answerPointer += 1; // this.LoadAnswer();
          }
        }
      }, {
        key: "IsLastAnswer",
        value: function IsLastAnswer() {
          return this.answerPointer === this.currentEntry.answers.length - 1 || this.currentEntry.answers.length === 0 ? true : false;
        }
      }, {
        key: "IsFirstAnswer",
        value: function IsFirstAnswer() {
          return this.answerPointer === 0 ? true : false;
        }
      }, {
        key: "ExitWritingMode",
        value: function ExitWritingMode() {
          this.writingAnswer = false;
          this.inputSubmitLoading = false;
        }
      }, {
        key: "IsThereAnswer",
        value: function IsThereAnswer() {
          return this.currentEntry.answers.length === 0 ? false : true;
        }
      }, {
        key: "InitializeQuestion",
        value: function InitializeQuestion() {
          this.alreadyHeard = false;
          this.ResetAnswerPointer();
          this.InitializeAnswerUpvote();
        }
      }, {
        key: "InitializeAnswerUpvote",
        value: function InitializeAnswerUpvote() {
          this.alreadyUpvoted = [];
        }
      }, {
        key: "ResetAnswerPointer",
        value: function ResetAnswerPointer() {
          this.answerPointer = 0;
        }
      }, {
        key: "InitializeInputForm",
        value: function InitializeInputForm() {
          this.inputForm = this.fb.group({
            message: '',
            authorId: '匿名'
          });
          this.inputSubmitLoading = false;
        }
      }, {
        key: "IUpVoteThat",
        value: function IUpVoteThat() {
          if (!this.alreadyUpvoted[this.answerPointer.toString()]) {
            this.currentEntry.answers[this.answerPointer].upvote += 1;
            this.upvoteSubscription = this.dataService.UpvoteAnswer(this.currentEntry.answers[this.answerPointer].answerId).subscribe(function (data) {
              return console.log(data);
            });
            this.alreadyUpvoted[this.answerPointer.toString()] = true;
          }
        }
      }, {
        key: "addNewAnswer",
        value: function addNewAnswer(message, authorId) {
          var newAnswer = new _entry_model__WEBPACK_IMPORTED_MODULE_2__["Answer"](message, authorId);
          this.currentEntry.answers.unshift(newAnswer);
          this.ResetAnswerPointer(); // this.LoadAnswer()

          console.log(this.currentEntry.answers[0].message);
        }
      }, {
        key: "NextQuestion",
        value: function NextQuestion() {
          // if (this.preLoadedEntry) {
          //   this.MovePreToCurrentEntry();
          // }
          // this.preLoadQuestionSubject.next();
          this.LoadRandomQuestion();
          this.InitializeQuestion();
          this.ResetButtons();
        }
      }, {
        key: "MovePreToCurrentEntry",
        value: function MovePreToCurrentEntry() {
          this.setCurrentEntry(this.preLoadedEntry);
          this.preLoadedEntry = null;
          this.preLoadQuestionSubject.next();
        }
      }, {
        key: "LoadRandomQuestion",
        value: function LoadRandomQuestion() {
          var _this5 = this;

          // return this.sampleEntryData.entries[Math.floor(Math.random() * this.sampleEntryData.entries.length)];
          this.loadingEntry = true;
          this.speechService.cancelSpeech();
          this.loadingSubscription = this.dataService.getOneRandomEntry().subscribe(function (data) {
            var _a;

            console.log('Current', data);
            var entry = new _entry_model__WEBPACK_IMPORTED_MODULE_2__["Entry"]();
            Object.assign(entry, data);

            _this5.setCurrentEntry(entry);

            _this5.speechService.sayQuestion(entry.question.text);

            _this5.loadingEntry = false;
            (_a = _this5.loadingSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          });
        }
      }, {
        key: "PreLoadRandomQuestion",
        value: function PreLoadRandomQuestion() {
          var _this6 = this;

          this.preloadingSubscription = this.dataService.getOneRandomEntry().subscribe(function (data) {
            var _a;

            console.log('Preload', data);
            var entry = new _entry_model__WEBPACK_IMPORTED_MODULE_2__["Entry"]();
            Object.assign(entry, data);
            _this6.preLoadedEntry = entry;
            (_a = _this6.preloadingSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          });
        }
      }, {
        key: "UnsubscribeAll",
        value: function UnsubscribeAll() {
          var _a, _b, _c, _d;

          (_a = this.upvoteSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          (_b = this.loadingSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
          (_c = this.uploadAnswerSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
          (_d = this.preloadingSubscription) === null || _d === void 0 ? void 0 : _d.unsubscribe();
        }
      }, {
        key: "ResetButtons",
        value: function ResetButtons() {
          this.inputSubmitLoading = false;
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_speech_service__WEBPACK_IMPORTED_MODULE_7__["SpeechService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 36,
      vars: 8,
      consts: [["cols", "1", "rowHeight", "fit"], ["id", "question-tile", "rowspan", "5"], ["color", "accent"], ["id", "app-title-span"], ["id", "app-title-name"], ["id", "app-title-icon"], ["id", "question-title"], ["id", "question-author"], ["mat-button", "", "id", "heard-button", 3, "click"], ["id", "heard-text"], ["id", "heardNumber"], ["rowspan", "1"], ["mat-fab", "", "id", "next-answer", "color", "warn", 3, "disabled", "click"], ["id", "answer-tile", "rowspan", "4", 4, "ngIf", "ngIfElse"], ["writingPanel", ""], ["mat-flat-button", "", "id", "let-me-answer", "color", "accent", 3, "disabled", "click"], ["mat-flat-button", "", "color", "accent", 3, "disabled", "click"], ["id", "answer-tile", "rowspan", "4"], ["mat-button", "", "id", "left-arrow", "color", "accent", 3, "disabled", "click"], [1, "arrow-button-icon"], ["id", "answer-card", 4, "ngIf", "ngIfElse"], ["noAnswer", ""], ["mat-button", "", "id", "right-arrow", "color", "accent", 3, "disabled", "click"], ["id", "answer-card"], ["id", "answer-message"], ["mat-flat-button", "", "disabled", "", "id", "answer-index-button"], ["id", "answer-index-current"], ["id", "answer-index-total"], ["mat-button", "", 3, "click"], ["id", "favorite"], ["id", "upVoteNumber"], ["id", "no-answer"], ["id", "writing-tile", "rowspan", "4"], ["ngNativeValidate", "", 1, "input-form", 3, "formGroup", "ngSubmit"], ["id", "inputText", 1, "input-full-width"], ["required", "", "matInput", "", "maxlength", "140", "placeholder", "\u6211\u60F3\u8BF4", "autocomplete", "off", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5", "formControlName", "message"], ["message", "", "autosize", "cdkTextareaAutosize"], ["align", "start"], ["align", "end"], ["id", "inputId", 1, "input-full-width"], ["matInput", "", "maxlength", "20", "autocomplete", "on", "formControlName", "authorId", "value", "\u533F\u540D"], ["id", ""], ["id", "submit-button", "mat-stroked-button", "", 3, "disabled"], ["id", "submit-button-icon"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-grid-tile", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-grid-tile-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u6C5F\u5C71\u5A07");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u53EF\u4EE5\u8BF4\u8BDD");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "speaker_notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-title", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-subtitle", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_button_click_17_listener($event) {
            return ctx.IHeardThat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u6211\u542C\u8FC7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-grid-tile", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_button_click_23_listener($event) {
            return ctx.NextQuestion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MainComponent_mat_grid_tile_26_Template, 10, 4, "mat-grid-tile", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MainComponent_ng_template_27_Template, 25, 4, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-grid-tile", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_button_click_30_listener($event) {
            return ctx.LetMeAnswer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "speaker_notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_button_click_33_listener($event) {
            return ctx.ExitWritingMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentEntry.question.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentEntry.question.authorId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.currentEntry.question.heard, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loadingEntry || ctx.writingAnswer);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.writingAnswer)("ngIfElse", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.writingAnswer);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.writingAnswer);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileHeaderCssMatStyler"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"]],
      styles: ["mat-grid-list[_ngcontent-%COMP%] {\r\n  height: 100vh\r\n}\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  \r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  \r\n  \r\n\r\n}\r\nmat-list[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n#answer-tile[_ngcontent-%COMP%] {\r\n\r\n}\r\ntextarea[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  color: white\r\n}\r\n#submit-button[_ngcontent-%COMP%] {\r\n  margin-left: 30px;\r\n}\r\n#inputId[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  }\r\n#inputText[_ngcontent-%COMP%] {\r\n  width: 120%;\r\n  \r\n}\r\n#left-arrow[_ngcontent-%COMP%], #right-arrow[_ngcontent-%COMP%] {\r\n\r\n  height: 70%;\r\n  width: 100%;\r\n}\r\n#right-arrow[_ngcontent-%COMP%] {\r\n  margin-left: 0px;\r\n}\r\n.arrow-button-icon[_ngcontent-%COMP%] {\r\n  font-size: 400%;\r\n  margin: 0px;\r\n\r\n}\r\n#answer-card[_ngcontent-%COMP%] {\r\n  min-width: 50%;\r\n  max-width: 85%;\r\n  margin-right: 0px;\r\n  border-right: 0px;\r\n}\r\n#favorite[_ngcontent-%COMP%] {\r\n  font-size: 90%;\r\n}\r\n#submit-button-icon[_ngcontent-%COMP%] {\r\n  color: #b1184c;\r\n  \r\n}\r\n#no-answer[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  color: slategrey;\r\n}\r\n#heardNumber[_ngcontent-%COMP%]{\r\n  font-size: 80%;\r\n  color: red;\r\n}\r\n#upVoteNumber[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.mat-card-actions[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  padding-right: 2%;\r\n  padding-top: 0;\r\n}\r\n.mat-mini-fab[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  font-size: 20px;\r\n}\r\n#answer-index-button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\n#answer-index-current[_ngcontent-%COMP%] {\r\n  color: lightgrey;\r\n  font-size: 95%;\r\n}\r\n#answer-index-total[_ngcontent-%COMP%] {\r\n  font-size: 95%\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  max-width: 90%;\r\n  \r\n}\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  max-width: border-box;\r\n  word-break: break-all;\r\n}\r\n#question-title[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  color: white;\r\n  font-weight: bold;\r\n  max-width: border-box;\r\n  max-height: border-box;\r\n  overflow-wrap: normal;\r\n}\r\n#answer-message[_ngcontent-%COMP%] {\r\n  \r\n  font-size: 80%;\r\n  color: #f44336;\r\n}\r\nmat-card-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 70%;\r\n  color: #b0bec5;\r\n  font-weight: lighter;\r\n  padding-left: 5%;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n}\r\n#app-title-span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 25%;\r\n}\r\n#app-title-name[_ngcontent-%COMP%] {\r\n  color: #f44336;\r\n}\r\n#heard-text[_ngcontent-%COMP%] {\r\n  font-size: 100%;\r\n}\r\nmat-card-header[_ngcontent-%COMP%] {\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n}\r\n#heard-button[_ngcontent-%COMP%] {\r\n  font-size: 80%;\r\n}\r\n#app-title-icon[_ngcontent-%COMP%] {\r\n  color: #b0bec5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjOztBQUVoQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7O0FBRUE7QUFFQTtFQUNFO0FBQ0Y7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtFQUNWO0FBRUY7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBRUE7O0VBRUUsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVzs7QUFFYjtBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUVBO0VBQ0U7QUFDRjtBQUlBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLWxpc3Qge1xyXG4gIGhlaWdodDogMTAwdmhcclxufVxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICAvKmJhY2tncm91bmQ6IGdob3N0d2hpdGU7Ki9cclxufVxyXG5idXR0b24ge1xyXG4gIC8qZm9udC1zaXplOiAxNTAlOyovXHJcbiAgLypzaXplOiBhdXRvOyovXHJcblxyXG59XHJcblxyXG5tYXQtbGlzdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYW5zd2VyLXRpbGUge1xyXG5cclxufVxyXG5cclxudGV4dGFyZWEsaW5wdXQge1xyXG4gIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4jc3VibWl0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbiNpbnB1dElkIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiNpbnB1dFRleHQge1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIC8qbWFyZ2luLXJpZ2h0OiAxMDBweDsqL1xyXG59XHJcblxyXG4jbGVmdC1hcnJvdywgI3JpZ2h0LWFycm93IHtcclxuXHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNyaWdodC1hcnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4uYXJyb3ctYnV0dG9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDAwJTtcclxuICBtYXJnaW46IDBweDtcclxuXHJcbn1cclxuXHJcbiNhbnN3ZXItY2FyZCB7XHJcbiAgbWluLXdpZHRoOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbn1cclxuI2Zhdm9yaXRlIHtcclxuICBmb250LXNpemU6IDkwJTtcclxufVxyXG5cclxuI3N1Ym1pdC1idXR0b24taWNvbiB7XHJcbiAgY29sb3I6ICNiMTE4NGM7XHJcbiAgLypmb250LXNpemU6IDUwJTsqL1xyXG59XHJcbiNuby1hbnN3ZXIge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBjb2xvcjogc2xhdGVncmV5O1xyXG59XHJcblxyXG4jaGVhcmROdW1iZXJ7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuI3VwVm90ZU51bWJlciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4ubWF0LW1pbmktZmFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuI2Fuc3dlci1pbmRleC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jYW5zd2VyLWluZGV4LWN1cnJlbnQge1xyXG4gIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgZm9udC1zaXplOiA5NSU7XHJcbn1cclxuXHJcbiNhbnN3ZXItaW5kZXgtdG90YWwge1xyXG4gIGZvbnQtc2l6ZTogOTUlXHJcbn1cclxuXHJcblxyXG5cclxubWF0LWNhcmQge1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIC8qcGFkZGluZy1ib3R0b206IDElOyovXHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBtYXgtd2lkdGg6IGJvcmRlci1ib3g7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG4jcXVlc3Rpb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWF4LXdpZHRoOiBib3JkZXItYm94O1xyXG4gIG1heC1oZWlnaHQ6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xyXG59XHJcbiNhbnN3ZXItbWVzc2FnZSB7XHJcbiAgLypjb2xvcjogI0U5MUU2MzsqL1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiA3MCU7XHJcbiAgY29sb3I6ICNiMGJlYzU7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4jYXBwLXRpdGxlLXNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyNSU7XHJcbn1cclxuXHJcbiNhcHAtdGl0bGUtbmFtZSB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbiNoZWFyZC10ZXh0IHtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxubWF0LWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4jaGVhcmQtYnV0dG9uIHtcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuI2FwcC10aXRsZS1pY29uIHtcclxuICBjb2xvcjogI2IwYmVjNTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }, {
          type: _speech_service__WEBPACK_IMPORTED_MODULE_7__["SpeechService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/speech.service.ts":
  /*!***********************************!*\
    !*** ./src/app/speech.service.ts ***!
    \***********************************/

  /*! exports provided: SpeechService */

  /***/
  function srcAppSpeechServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeechService", function () {
      return SpeechService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SpeechService =
    /*#__PURE__*/
    function () {
      function SpeechService() {
        _classCallCheck(this, SpeechService);
      }

      _createClass(SpeechService, [{
        key: "sayQuestion",
        value: function sayQuestion(utterance) {
          var utteranceInstance = new SpeechSynthesisUtterance(utterance);
          utteranceInstance.lang = 'zh-Chinese';
          utteranceInstance.rate = 4;
          speechSynthesis.speak(utteranceInstance);
        }
      }, {
        key: "cancelSpeech",
        value: function cancelSpeech() {
          speechSynthesis.cancel();
        }
      }]);

      return SpeechService;
    }();

    SpeechService.ɵfac = function SpeechService_Factory(t) {
      return new (t || SpeechService)();
    };

    SpeechService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SpeechService,
      factory: SpeechService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
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
      production: false
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
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
    /*! C:\Users\Bo\Dropbox\NEra\Script\Projects\AskHer\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map