"use strict";
(self["webpackChunkreflectiz_home_assignment"] = self["webpackChunkreflectiz_home_assignment"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing/landing.component */ 341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule),
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'reflectiz-home-assignment';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ 341);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 341:
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/user-info.model */ 4552);
/* harmony import */ var _shared_constants_regexp_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/regexp.consts */ 9588);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_data_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/data-info.service */ 3777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/chips/chips.component */ 7164);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _shared_components_color_field_color_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/color-field/color-field.component */ 7007);
/* harmony import */ var _shared_validators_date_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/validators/date-validator.directive */ 2153);
/* harmony import */ var _shared_validators_no_special_characters_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/validators/no-special-characters.directive */ 5988);























const _c0 = ["form"];
const _c1 = ["chips"];
const _c2 = ["color"];
function LandingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Car of your dream is right there!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "We really know how to match a perfect car to the perfect owner. Take our one-minute questionnaire and get best offer from the dealer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 16)(6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LandingComponent_div_14_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.isFormActivated = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "I'm ready!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} }
function LandingComponent_div_15_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.specialCharsError);
} }
function LandingComponent_div_15_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", option_r25.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r25.value, " ");
} }
function LandingComponent_div_15_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Date is in the future");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function LandingComponent_div_15_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.specialCharsError);
} }
function LandingComponent_div_15_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function LandingComponent_div_15_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r16.specialCharsError);
} }
function LandingComponent_div_15_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r18.specialCharsError);
} }
function LandingComponent_div_15_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r20.specialCharsError);
} }
function LandingComponent_div_15_mat_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", option_r26.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r26.value, " ");
} }
function LandingComponent_div_15_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Please ensure that provided data is valid and all required inputs are filled in.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function LandingComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Please fill in the form");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 20)(4, "mat-form-field", 21)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Full name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LandingComponent_div_15_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.userInfo.fullName = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, LandingComponent_div_15_mat_error_9_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 24)(11, "mat-form-field", 25)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LandingComponent_div_15_Template_mat_select_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.userInfo.gender = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, LandingComponent_div_15_mat_option_15_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 24)(18, "mat-form-field", 28)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Birth date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LandingComponent_div_15_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.userInfo.birthDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "mat-datepicker-toggle", 31)(24, "mat-datepicker", null, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, LandingComponent_div_15_mat_error_26_Template, 2, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 20)(28, "mat-form-field", 33)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LandingComponent_div_15_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.userInfo.email = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, LandingComponent_div_15_mat_error_33_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, LandingComponent_div_15_mat_error_34_Template, 2, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 20)(36, "mat-form-field", 36)(37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LandingComponent_div_15_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.userInfo.location.address = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, LandingComponent_div_15_mat_error_41_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 24)(43, "mat-form-field", 39)(44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LandingComponent_div_15_Template_input_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.userInfo.location.country = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, LandingComponent_div_15_mat_error_48_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 24)(50, "mat-form-field", 42)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LandingComponent_div_15_Template_input_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.userInfo.location.city = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, LandingComponent_div_15_mat_error_55_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "app-chips", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 24)(60, "app-color-field", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("colorChanged", function LandingComponent_div_15_Template_app_color_field_colorChanged_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.onColorChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 24)(63, "mat-form-field", 49)(64, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Amount of seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LandingComponent_div_15_Template_input_ngModelChange_66_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r36.userInfo.seatsAmount = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 24)(68, "mat-form-field", 51)(69, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Motor Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "mat-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LandingComponent_div_15_Template_mat_select_ngModelChange_71_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.userInfo.motorType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, LandingComponent_div_15_mat_option_72_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](73, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, LandingComponent_div_15_mat_error_74_Template, 2, 0, "mat-error", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 16)(76, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](25);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](32);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](40);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](47);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](54);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appearance", ctx_r2.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userInfo.fullName)("maxLength", ctx_r2.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r6 == null ? null : _r6.errors == null ? null : _r6.errors.specialCharsForbidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appearance", ctx_r2.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userInfo.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 42, ctx_r2.genderOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appearance", ctx_r2.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userInfo.birthDate)("matDatepicker", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r9 == null ? null : _r9.errors == null ? null : _r9.errors.dateInFuture);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appearance", ctx_r2.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userInfo.email)("pattern", ctx_r2.regexEmail)("maxLength", ctx_r2.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r12 == null ? null : _r12.errors == null ? null : _r12.errors.specialCharsForbidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r12.errors == null ? null : _r12.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appearance", ctx_r2.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userInfo.location.address)("maxLength", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r15 == null ? null : _r15.errors == null ? null : _r15.errors.specialCharsForbidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appearance", ctx_r2.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userInfo.location.country)("maxLength", ctx_r2.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r17 == null ? null : _r17.errors == null ? null : _r17.errors.specialCharsForbidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appearance", ctx_r2.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userInfo.location.city)("maxLength", ctx_r2.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r19 == null ? null : _r19.errors == null ? null : _r19.errors.specialCharsForbidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("elements", ctx_r2.userInfo.hobbies)("placeholder", "Add hobby...")("label", "Your hobbies")("maxElements", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", ctx_r2.userInfo.favouriteColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appearance", ctx_r2.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("max", ctx_r2.maxlength)("ngModel", ctx_r2.userInfo.seatsAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appearance", ctx_r2.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userInfo.motorType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](73, 44, ctx_r2.motorOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isFormValid && ctx_r2.isFormSubmitted);
} }
function LandingComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "h3", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Dear ", ctx_r3.userInfo.fullName, ", your perfect match is on its way!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Your request just was sent and a mail with the results will be sent to ", ctx_r3.userInfo.email, " in a couple of minutes. We really appreciate your time!");
} }
const defaultGridCols = 2;
const mobileGridCols = 3;
class LandingComponent {
    constructor(breakpointObserver, formBuilder, dataInfoService) {
        this.breakpointObserver = breakpointObserver;
        this.formBuilder = formBuilder;
        this.dataInfoService = dataInfoService;
        this.layoutCols = defaultGridCols;
        this.defaultGridCols = defaultGridCols;
        this.userInfo = new _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__.UserInfo();
        this.genderOptions = _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__.GenderDisplayNames;
        this.motorOptions = _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__.MotorTypeDisplayNames;
        this.regexEmail = _shared_constants_regexp_consts__WEBPACK_IMPORTED_MODULE_1__.Regexp.EMAIL;
        this.appearance = 'standard';
        this.isFormSubmitted = false;
        this.isFormActivated = false;
        this.isInfoSent = false;
        this.maxlength = 50;
        this.specialCharsError = 'Following characters are forbidden: !&~#$^*()+=\"[]{}|?`/\\:<>%;\'';
    }
    ngOnInit() {
        this.dataInfoService.setVisitorsCounter();
        this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.Small])
            .subscribe(({ matches }) => {
            this.layoutCols = matches ? mobileGridCols : defaultGridCols;
        });
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
        });
    }
    sendInfo() {
        this.isFormSubmitted = true;
        this.chips.chipInput.control.markAsTouched();
        if (this.isFormValid) {
            this.dataInfoService.setUserInfo(this.userInfo);
            this.isInfoSent = true;
        }
    }
    onColorChange(color) {
        this.userInfo.favouriteColor = color;
    }
    get isFormValid() {
        return this.form?.form?.valid && this.chips?.chipInput?.control?.valid && this.color?.colorInput?.control?.valid;
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_data_info_service__WEBPACK_IMPORTED_MODULE_2__.DataInfoService)); };
LandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], viewQuery: function LandingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chips = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.color = _t.first);
    } }, decls: 20, vars: 4, consts: [[1, "content"], [1, "header", "mat-elevation-z5"], [1, "title"], [1, "accent"], ["mat-stroked-button", "", "routerLink", "dashboard", 1, "dashboard-button"], [3, "ngSubmit"], ["form", "ngForm"], ["cols", "3", "rowHeight", "fit"], [1, "form-wrapper", 3, "colspan"], [1, "form-card", "mat-elevation-z0"], [1, "inner-section"], [4, "ngIf"], ["class", "form-controls-wrapper", 4, "ngIf"], [1, "footer"], [1, "form-title"], [1, "sub-line"], [1, "button-wrapper"], ["mat-raised-button", "", "color", "accent", 1, "form-btn", "invite-btn", 3, "click"], [1, "form-controls-wrapper"], [1, "first-line"], [1, "control-field", "full"], ["data-test-id", "fullName", 3, "appearance"], ["name", "fullName", "matInput", "", "placeholder", "Enter full name", "aria-label", "custom domain", "required", "", "appNoSpecialCharacters", "", 3, "ngModel", "maxLength", "ngModelChange"], ["fullName", "ngModel"], [1, "control-field"], ["data-test-id", "gender", 3, "appearance"], ["placeholder", "Select gender", "name", "gender", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["data-test-id", "birthDate", 1, "birth-date-field", 3, "appearance"], ["placeholder", "Choose a date", "name", "birthDate", "aria-label", "birth date", "matInput", "", "required", "", "appDateValidator", "", 3, "ngModel", "matDatepicker", "ngModelChange"], ["birthDate", "ngModel"], ["matSuffix", "", 3, "for"], ["picker", ""], ["data-test-id", "email", 3, "appearance"], ["name", "email", "matInput", "", "placeholder", "Enter email", "aria-label", "email", "required", "", "appNoSpecialCharacters", "", 3, "ngModel", "pattern", "maxLength", "ngModelChange"], ["email", "ngModel"], ["data-test-id", "address", 3, "appearance"], ["name", "address", "matInput", "", "placeholder", "Your address", "aria-label", "address", "required", "", "appNoSpecialCharacters", "", 3, "ngModel", "maxLength", "ngModelChange"], ["address", "ngModel"], ["data-test-id", "country", 3, "appearance"], ["name", "country", "matInput", "", "placeholder", "Your country", "aria-label", "country", "required", "", "appNoSpecialCharacters", "", 3, "ngModel", "maxLength", "ngModelChange"], ["country", "ngModel"], ["data-test-id", "city", 3, "appearance"], ["name", "city", "matInput", "", "placeholder", "Your city", "aria-label", "city", "required", "", "appNoSpecialCharacters", "", 3, "ngModel", "maxLength", "ngModelChange"], ["city", "ngModel"], [3, "elements", "placeholder", "label", "maxElements"], ["chips", ""], [3, "color", "colorChanged"], ["color", ""], ["data-test-id", "seats", 3, "appearance"], ["type", "number", "min", "0", "name", "seats", "matInput", "", "placeholder", "Required amount of seats", "aria-label", "seats", "required", "", 3, "max", "ngModel", "ngModelChange"], ["data-test-id", "motor", 3, "appearance"], ["placeholder", "Select motor type", "name", "motorType", "required", "", 3, "ngModel", "ngModelChange"], ["class", "submit-error", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "form-btn"], [3, "value"], [1, "submit-error"], [1, "form-title", "final"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Reflectiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Cars");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function LandingComponent_Template_form_ngSubmit_8_listener() { return ctx.sendInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-grid-list", 7)(11, "mat-grid-tile", 8)(12, "mat-card", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, LandingComponent_div_14_Template, 8, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, LandingComponent_div_15_Template, 78, 46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, LandingComponent_div_16_Template, 5, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 13)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Powered by Reflectiz Cars \u00A92022.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("colspan", ctx.layoutCols);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isFormActivated);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isFormActivated && !ctx.isInfoSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInfoSent);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _shared_components_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__.ChipsComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridTile, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbar, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _shared_components_color_field_color_field_component__WEBPACK_IMPORTED_MODULE_4__.ColorFieldComponent, _shared_validators_date_validator_directive__WEBPACK_IMPORTED_MODULE_5__.DateValidatorDirective, _shared_validators_no_special_characters_directive__WEBPACK_IMPORTED_MODULE_6__.NoSpecialCharactersDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.KeyValuePipe], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background: rgba(245, 245, 245, 0.7019607843);\n  padding: 0 3vw;\n}\n\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Teko\", sans-serif;\n  font-size: 42px;\n  line-height: 42px;\n  padding-top: 7px;\n}\n\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: #f7b860;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-image: url('background.jpg');\n  background-size: cover;\n  background-position: left;\n  background-blend-mode: lighten;\n  position: relative;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  font-size: 10px;\n}\n\n.mat-grid-list[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px - 32px);\n}\n\n.mat-grid-list[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 64px - 32px - 60px);\n  overflow-y: auto;\n  background: rgba(255, 255, 255, 0.8784313725);\n}\n\n.mat-grid-list[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .inner-section[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  margin: auto;\n  max-width: 400px;\n  min-width: 300px;\n  box-sizing: content-box;\n}\n\n.mat-grid-list[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .inner-section[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 36px;\n  margin: 10px 0;\n}\n\n.mat-grid-list[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .inner-section[_ngcontent-%COMP%]   .form-title.final[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.mat-grid-list[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .inner-section[_ngcontent-%COMP%]   .sub-line[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 25px;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-grid-list[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .inner-section[_ngcontent-%COMP%]   .form-controls-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.mat-grid-list[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .inner-section[_ngcontent-%COMP%]   .form-controls-wrapper[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #212121;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.mat-grid-list[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .inner-section[_ngcontent-%COMP%]   .form-controls-wrapper[_ngcontent-%COMP%]   .control-field[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.mat-grid-list[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .inner-section[_ngcontent-%COMP%]   .form-controls-wrapper[_ngcontent-%COMP%]   .control-field.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%]  {\n  width: 100%;\n}\n\n@media (max-width: 599px) {\n  .control-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n    height: 64px;\n  }\n}\n\n.birth-date-field[_ngcontent-%COMP%]  .mat-form-field-infix {\n  width: 140px;\n}\n\n.button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 20px 0 0;\n}\n\n.button-wrapper[_ngcontent-%COMP%]   .form-btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n}\n\n.button-wrapper[_ngcontent-%COMP%]   .form-btn.invite-btn[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 0;\n  padding: 5px 20px;\n}\n\n.submit-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsNkNBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUU7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBSTtFQUNFLGNBQUE7QUFFTjs7QUFHQTtFQUNFLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFJQTtFQUNFLGlDQUFBO0FBREY7O0FBSUk7RUFDRSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUFGTjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUZOOztBQUtNO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSFI7O0FBS1E7RUFDRSxlQUFBO0FBSFY7O0FBT007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUxSOztBQVFNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFOUjs7QUFRUTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU5WOztBQVNRO0VBQ0Usa0JBQUE7QUFQVjs7QUFTVTtFQUNFLFdBQUE7QUFQWjs7QUFnQkE7RUFDRSxXQUFBO0FBYkY7O0FBZ0JBO0VBQ0U7SUFDRSxXQUFBO0VBYkY7RUFnQkE7SUFDRSxZQUFBO0VBZEY7QUFDRjs7QUFrQkU7RUFDRSxZQUFBO0FBaEJKOztBQW9CQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWpCRjs7QUFrQkU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWhCSjs7QUFrQkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWhCTjs7QUFxQkE7RUFDRSxlQUFBO0FBbEJGIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaGVhZGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNWIzO1xyXG4gIHBhZGRpbmc6IDAgM3Z3O1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcblxyXG4gICAgLmFjY2VudCB7XHJcbiAgICAgIGNvbG9yOiAjZjdiODYwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuXHJcbi5tYXQtZ3JpZC1saXN0IHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4IC0gMzJweCk7XHJcblxyXG4gIC5mb3JtLXdyYXBwZXIge1xyXG4gICAgLmZvcm0tY2FyZCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4IC0gMzJweCAtIDYwcHgpO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmZTA7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItc2VjdGlvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHJcblxyXG4gICAgICAuZm9ybS10aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgICAmLmZpbmFsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdWItbGluZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWNvbnRyb2xzLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAuZmlyc3QtbGluZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRyb2wtZmllbGQge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICYuZnVsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbm1hdC1mb3JtLWZpZWxkOjpuZy1kZWVwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgLmNvbnRyb2wtZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmlydGgtZGF0ZS1maWVsZDo6bmctZGVlcCB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIHdpZHRoOiBjYWxjKDE4MHB4IC0gNDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMDtcclxuICAuZm9ybS1idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHJcbiAgICAmLmludml0ZS1idG4ge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdWJtaXQtZXJyb3Ige1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ 1861);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 2088);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);














































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatFormFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatFormFieldModule] }); })();


/***/ }),

/***/ 8849:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/charts/color-map-chart/color-map-chart.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorMapChartComponent": () => (/* binding */ ColorMapChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ 4142);
/* harmony import */ var _no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../no-data-for-display/no-data-for-display.component */ 7977);





function ColorMapChartComponent_ngx_charts_tree_map_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-charts-tree-map", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx_r0.view)("customColors", ctx_r0.customColors)("results", ctx_r0.data)("gradient", ctx_r0.gradient)("animations", ctx_r0.animations);
} }
function ColorMapChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-no-data-for-display");
} }
class ColorMapChartComponent {
    constructor() {
        this.data = [];
        this.view = [400, 250];
        // options
        this.gradient = false;
        this.animations = true;
        this.customColors = [];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.customColors = this.data.map(v => {
            return {
                name: v.name,
                value: v.name
            };
        });
    }
}
ColorMapChartComponent.ɵfac = function ColorMapChartComponent_Factory(t) { return new (t || ColorMapChartComponent)(); };
ColorMapChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorMapChartComponent, selectors: [["app-color-map-chart"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[3, "view", "customColors", "results", "gradient", "animations", 4, "ngIf", "ngIfElse"], ["noDataToDisplay", ""], [3, "view", "customColors", "results", "gradient", "animations"]], template: function ColorMapChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ColorMapChartComponent_ngx_charts_tree_map_0_Template, 1, 5, "ngx-charts-tree-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ColorMapChartComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.data.length)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.TreeMapComponent, _no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_0__.NoDataForDisplayComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci1tYXAtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 136:
/*!*************************************************************************************************************!*\
  !*** ./src/app/shared/components/charts/grouped-vertical-bar-chart/grouped-vertical-bar-chart.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupedVerticalBarChartComponent": () => (/* binding */ GroupedVerticalBarChartComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ 4142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../no-data-for-display/no-data-for-display.component */ 7977);





function GroupedVerticalBarChartComponent_ngx_charts_bar_vertical_2d_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-charts-bar-vertical-2d", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", ctx_r0.colorScheme)("view", ctx_r0.view)("results", ctx_r0.data)("gradient", ctx_r0.gradient)("xAxis", ctx_r0.showXAxis)("yAxis", ctx_r0.showYAxis)("legend", ctx_r0.showLegend)("showXAxisLabel", ctx_r0.showXAxisLabel)("showYAxisLabel", ctx_r0.showYAxisLabel)("xAxisLabel", ctx_r0.xAxisLabel)("yAxisLabel", ctx_r0.yAxisLabel)("legendTitle", ctx_r0.legendTitle)("legendPosition", ctx_r0.legendPosition);
} }
function GroupedVerticalBarChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-no-data-for-display");
} }
class GroupedVerticalBarChartComponent {
    constructor() {
        this.xAxisLabel = '';
        this.yAxisLabel = '';
        this.legendTitle = '';
        this.data = [];
        this.view = [400, 250];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = true;
        this.showLegend = true;
        this.showXAxisLabel = false;
        this.showYAxisLabel = true;
        this.legendPosition = _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.LegendPosition.Below;
        this.colorScheme = {
            domain: ['#673AB7', '#ffd740'],
            group: _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.ScaleType.Ordinal,
            selectable: true,
            name: 'Customer Usage',
        };
    }
    ngOnInit() {
    }
    isDataEmpty() {
        return this.data.every(entry => !entry.series.length);
    }
}
GroupedVerticalBarChartComponent.ɵfac = function GroupedVerticalBarChartComponent_Factory(t) { return new (t || GroupedVerticalBarChartComponent)(); };
GroupedVerticalBarChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupedVerticalBarChartComponent, selectors: [["app-grouped-vertical-bar-chart"]], inputs: { xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", legendTitle: "legendTitle", data: "data" }, decls: 3, vars: 2, consts: [[3, "scheme", "view", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "legendPosition", 4, "ngIf", "ngIfElse"], ["noDataToDisplay", ""], [3, "scheme", "view", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "legendPosition"]], template: function GroupedVerticalBarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GroupedVerticalBarChartComponent_ngx_charts_bar_vertical_2d_0_Template, 1, 13, "ngx-charts-bar-vertical-2d", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GroupedVerticalBarChartComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDataEmpty())("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.BarVertical2DComponent, _no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_0__.NoDataForDisplayComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cGVkLXZlcnRpY2FsLWJhci1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 777:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/charts/horizontal-bar-chart/horizontal-bar-chart.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalBarChartComponent": () => (/* binding */ HorizontalBarChartComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ 4142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../no-data-for-display/no-data-for-display.component */ 7977);





function HorizontalBarChartComponent_ngx_charts_bar_horizontal_stacked_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r5 = ctx.model;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", model_r5.name, " - ", model_r5.value, " visitors ");
} }
function HorizontalBarChartComponent_ngx_charts_bar_horizontal_stacked_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-charts-bar-horizontal-stacked", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalBarChartComponent_ngx_charts_bar_horizontal_stacked_0_ng_template_1_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx_r0.view)("scheme", ctx_r0.colorScheme)("results", ctx_r0.data)("gradient", ctx_r0.gradient)("xAxis", ctx_r0.showXAxis)("yAxis", ctx_r0.showYAxis)("legend", ctx_r0.showLegend)("legendPosition", ctx_r0.legendPosition)("legendTitle", ctx_r0.legendTitle)("showXAxisLabel", ctx_r0.showXAxisLabel)("showYAxisLabel", ctx_r0.showYAxisLabel)("xAxisTickFormatting", ctx_r0.format)("xAxisLabel", ctx_r0.xAxisLabel)("yAxisLabel", ctx_r0.yAxisLabel);
} }
function HorizontalBarChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-no-data-for-display");
} }
class HorizontalBarChartComponent {
    constructor() {
        this.xAxisLabel = '';
        this.yAxisLabel = '';
        this.legendTitle = '';
        this.data = [];
        this.view = [400, 250];
        // options
        this.showXAxis = true;
        this.showYAxis = false;
        this.gradient = true;
        this.showLegend = true;
        this.showXAxisLabel = false;
        this.showYAxisLabel = false;
        this.legendPosition = _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.LegendPosition.Below;
        this.colorScheme = {
            domain: ['#673AB7', '#ffd740', '#AAAAAA'],
            group: _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.ScaleType.Ordinal,
            selectable: true,
            name: 'Customer Usage',
        };
    }
    ngOnInit() {
    }
    format(xAxisVal) {
        return Math.round(xAxisVal);
    }
}
HorizontalBarChartComponent.ɵfac = function HorizontalBarChartComponent_Factory(t) { return new (t || HorizontalBarChartComponent)(); };
HorizontalBarChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HorizontalBarChartComponent, selectors: [["app-horizontal-bar-chart"]], inputs: { xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", legendTitle: "legendTitle", data: "data" }, decls: 3, vars: 2, consts: [[3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "legendPosition", "legendTitle", "showXAxisLabel", "showYAxisLabel", "xAxisTickFormatting", "xAxisLabel", "yAxisLabel", 4, "ngIf", "ngIfElse"], ["noDataToDisplay", ""], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "legendPosition", "legendTitle", "showXAxisLabel", "showYAxisLabel", "xAxisTickFormatting", "xAxisLabel", "yAxisLabel"], ["tooltipTemplate", ""], [1, "tooltip-wrapper"]], template: function HorizontalBarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HorizontalBarChartComponent_ngx_charts_bar_horizontal_stacked_0_Template, 3, 14, "ngx-charts-bar-horizontal-stacked", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalBarChartComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.data.length)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.BarHorizontalStackedComponent, _no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_0__.NoDataForDisplayComponent], styles: [".tooltip-wrapper[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6Imhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7977:
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/charts/no-data-for-display/no-data-for-display.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoDataForDisplayComponent": () => (/* binding */ NoDataForDisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NoDataForDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoDataForDisplayComponent.ɵfac = function NoDataForDisplayComponent_Factory(t) { return new (t || NoDataForDisplayComponent)(); };
NoDataForDisplayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoDataForDisplayComponent, selectors: [["app-no-data-for-display"]], decls: 2, vars: 0, consts: [[1, "no-data"]], template: function NoDataForDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry no data to display\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".no-data[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLWRhdGEtZm9yLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoibm8tZGF0YS1mb3ItZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1kYXRhIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1436:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/charts/pie-chart/pie-chart.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieChartComponent": () => (/* binding */ PieChartComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ 4142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../no-data-for-display/no-data-for-display.component */ 7977);





function PieChartComponent_ngx_charts_pie_chart_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-charts-pie-chart", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx_r0.view)("scheme", ctx_r0.colorScheme)("results", ctx_r0.data)("gradient", ctx_r0.gradient)("legend", ctx_r0.showLegend)("legendPosition", ctx_r0.legendPosition)("labels", ctx_r0.showLabels)("doughnut", ctx_r0.isDoughnut)("legendTitle", ctx_r0.legendTitle)("trimLabels", false);
} }
function PieChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-no-data-for-display");
} }
class PieChartComponent {
    constructor() {
        this.legendTitle = '';
        this.data = [];
        this.view = [400, 250];
        // options
        this.gradient = true;
        this.showLegend = true;
        this.showLabels = true;
        this.isDoughnut = false;
        this.legendPosition = _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.LegendPosition.Below;
        this.colorScheme = {
            domain: ['#673AB7', '#ffd740'],
            group: _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.ScaleType.Ordinal,
            selectable: true,
            name: 'Customer Usage',
        };
    }
    ngOnInit() { }
    isDataEmpty() {
        return this.data.every(entry => !entry.value);
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(); };
PieChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-pie-chart"]], inputs: { legendTitle: "legendTitle", data: "data" }, decls: 3, vars: 2, consts: [[3, "view", "scheme", "results", "gradient", "legend", "legendPosition", "labels", "doughnut", "legendTitle", "trimLabels", 4, "ngIf", "ngIfElse"], ["noDataToDisplay", ""], [3, "view", "scheme", "results", "gradient", "legend", "legendPosition", "labels", "doughnut", "legendTitle", "trimLabels"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PieChartComponent_ngx_charts_pie_chart_0_Template, 1, 10, "ngx-charts-pie-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PieChartComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDataEmpty())("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.PieChartComponent, _no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_0__.NoDataForDisplayComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7164:
/*!************************************************************!*\
  !*** ./src/app/shared/components/chips/chips.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChipsComponent": () => (/* binding */ ChipsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);








const _c0 = ["chipInput"];
function ChipsComponent_mat_chip_5_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChipsComponent_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ChipsComponent_mat_chip_5_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const element_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.remove(element_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChipsComponent_mat_chip_5_mat_icon_2_Template, 2, 0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.removable);
} }
function ChipsComponent_mat_hint_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Possible to enter till ", ctx_r3.maxElements, " elements");
} }
const _c1 = function (a0) { return { "mat-form-field-invalid": a0 }; };
class ChipsComponent {
    constructor(ref) {
        this.ref = ref;
        this.elements = [];
        this.visible = true;
        this.selectable = false;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.COMMA];
    }
    ngOnInit() {
    }
    remove(hobby) {
        const index = this.elements.indexOf(hobby);
        if (index >= 0) {
            this.elements.splice(index, 1);
        }
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add hobby
        if ((value || '').trim()) {
            this.elements.push(value.trim().toLowerCase());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    onBlur() {
        if (!this.elements.length) {
            this.chipInput.control.setErrors({ required: true });
        }
        else {
            this.chipInput.control.setErrors(null);
        }
    }
    ngAfterViewChecked() {
        this.onBlur();
        this.ref.detectChanges();
    }
    isControlInvalid() {
        return this.chipInput?.control?.invalid && this.chipInput?.control?.touched;
    }
    isPossibleToAddMore() {
        return !this.maxElements || this.elements.length < this.maxElements;
    }
    resolvePlaceholder() {
        return this.isPossibleToAddMore() ? this.placeholder : '';
    }
}
ChipsComponent.ɵfac = function ChipsComponent_Factory(t) { return new (t || ChipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
ChipsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChipsComponent, selectors: [["app-chips"]], viewQuery: function ChipsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chipInput = _t.first);
    } }, inputs: { elements: "elements", label: "label", placeholder: "placeholder", maxElements: "maxElements" }, decls: 9, vars: 13, consts: [[1, "chip-list", 3, "ngClass"], ["aria-label", "Fruit selection", "required", ""], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["aria-label", "chip-list", "maxlength", "30", 3, "ngModel", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "disabled", "matChipInputTokenEnd", "blur"], ["chipInput", "ngModel"], [4, "ngIf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function ChipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-list", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChipsComponent_mat_chip_5_Template, 3, 4, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function ChipsComponent_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); })("blur", function ChipsComponent_Template_input_blur_6_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChipsComponent_mat_hint_8_Template, 2, 1, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.isControlInvalid()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-test-id", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.elements);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.elements)("placeholder", ctx.resolvePlaceholder())("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur)("disabled", !ctx.isPossibleToAddMore());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxElements);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipRemove, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: [".chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImNoaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoaXAtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7007:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/color-field/color-field.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorFieldComponent": () => (/* binding */ ColorFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-material-components/color-picker */ 5400);






const _c0 = ["toggle"];
const _c1 = ["colorInput"];
class ColorFieldComponent {
    constructor() {
        this.colorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    colorChangeEmit(value) {
        // this.colorChanged.emit([value, paramName]);
        this.colorChanged.emit(value);
    }
    ngAfterViewInit() {
        this.toggle._button._elementRef.nativeElement.firstChild.firstChild.firstChild.nodeValue = 'square';
    }
}
ColorFieldComponent.ɵfac = function ColorFieldComponent_Factory(t) { return new (t || ColorFieldComponent)(); };
ColorFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorFieldComponent, selectors: [["app-color-field"]], viewQuery: function ColorFieldComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toggle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.colorInput = _t.first);
    } }, inputs: { color: "color" }, outputs: { colorChanged: "colorChanged" }, decls: 9, vars: 4, consts: [["data-test-id", "color", 1, "color-param"], ["matInput", "", "name", "color", "aria-label", "color", "required", "", 3, "ngxMatColorPicker", "ngModel", "ngModelChange", "colorChange"], ["colorInput", "ngModel"], ["matSuffix", "", 3, "for"], ["toggle", ""], ["color", "primary", 3, "touchUi"], ["colorPicker", ""]], template: function ColorFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Favourite color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColorFieldComponent_Template_input_ngModelChange_3_listener($event) { return ctx.color = $event; })("colorChange", function ColorFieldComponent_Template_input_colorChange_3_listener($event) { return ctx.colorChangeEmit($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-mat-color-toggle", 3, 4)(7, "ngx-mat-color-picker", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatColorPicker", _r2)("ngModel", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("touchUi", false);
    } }, dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_4__.NgxMatColorToggleComponent, _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_4__.NgxMatColorPickerInput, _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_4__.NgxMatColorPickerComponent], styles: [".color-param[_ngcontent-%COMP%]  .mat-form-field-flex .mat-form-field-infix {\n  width: 160px;\n}\n.color-param[_ngcontent-%COMP%]  .mat-form-field-flex .mat-form-field-suffix .ngx-mat-color-toggle .mat-button-base {\n  height: 0;\n}\n.color-param[_ngcontent-%COMP%]  .mat-form-field-flex .mat-form-field-suffix .ngx-mat-color-toggle .mat-button-base .mat-button-wrapper .mat-icon {\n  font-size: 18px;\n  width: 20px;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px #dcdcdc;\n}\nmat-form-field[_ngcontent-%COMP%]  {\n  width: 100%;\n}\n  .ngx-mat-colorpicker-content .ngx-mat-color-canvas .color-canvas-row:first-of-type {\n  display: none;\n}\n  .ngx-mat-colorpicker-content .ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:last-of-type {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsWUFBQTtBQUROO0FBS1E7RUFDRSxTQUFBO0FBSFY7QUFNWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQUpkO0FBYUE7RUFDRSxXQUFBO0FBVkY7QUFlSTtFQUNFLGFBQUE7QUFaTjtBQWVJO0VBQ0UsYUFBQTtBQWJOIiwiZmlsZSI6ImNvbG9yLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLXBhcmFtOjpuZy1kZWVwIHtcclxuICAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICB3aWR0aDogY2FsYygxODBweCAtIDIwcHgpO1xyXG4gICAgfVxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XHJcbiAgICAgIC5uZ3gtbWF0LWNvbG9yLXRvZ2dsZSB7XHJcbiAgICAgICAgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2RjZGNkYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQ6Om5nLWRlZXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5uZ3gtbWF0LWNvbG9ycGlja2VyLWNvbnRlbnQge1xyXG4gICAgLm5neC1tYXQtY29sb3ItY2FudmFzIC5jb2xvci1jYW52YXMtcm93OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtbWF0LWNvbG9yLWNhbnZhcyAuY29sb3ItY2FudmFzLXJvdzpudGgtb2YtdHlwZSgyKSAubWF0LWZvcm0tZmllbGQ6bGFzdC1vZi10eXBlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5145:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/navigation/navigation.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function NavigationComponent_a_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.icon);
} }
function NavigationComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_a_1_mat_icon_1_Template, 2, 1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.title);
} }
class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "nav-list"], ["mat-list-item", "", "routerLinkActive", "active-link", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLinkActive", "active-link", 3, "routerLink"], ["class", "material-icons-outlined", "matListIcon", "", 4, "ngIf"], [1, "item-title"], ["matListIcon", "", 1, "material-icons-outlined"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_a_1_Template, 4, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListIconCssMatStyler, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive], styles: [".mat-list-item.active-link[_ngcontent-%COMP%] {\n  color: #673ab7;\n  background: rgba(63, 81, 181, 0.15);\n}\n\n.item-title[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.nav-list[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbGlzdC1pdGVtLmFjdGl2ZS1saW5rIHtcclxuICBjb2xvcjogIzY3M2FiNztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLDgxLDE4MSwuMTUpO1xyXG59XHJcblxyXG4uaXRlbS10aXRsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpc3Qge1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9588:
/*!***************************************************!*\
  !*** ./src/app/shared/constants/regexp.consts.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Regexp": () => (/* binding */ Regexp)
/* harmony export */ });
class Regexp {
}
Regexp.EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
Regexp.EXCEPT_SPECIAL_CHARACTERS = /^[^!&~#$^*()+=[\]{}|\\?:<>'"/;`%]*$/;


/***/ }),

/***/ 4552:
/*!**************************************************!*\
  !*** ./src/app/shared/models/user-info.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardGenderDisplayNames": () => (/* binding */ DashboardGenderDisplayNames),
/* harmony export */   "Gender": () => (/* binding */ Gender),
/* harmony export */   "GenderDisplayNames": () => (/* binding */ GenderDisplayNames),
/* harmony export */   "LocationDetails": () => (/* binding */ LocationDetails),
/* harmony export */   "MotorType": () => (/* binding */ MotorType),
/* harmony export */   "MotorTypeDisplayNames": () => (/* binding */ MotorTypeDisplayNames),
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
class UserInfo {
    constructor({ fullName, gender, email, birthDate, location = new LocationDetails(), hobbies = [], favouriteColor, seatsAmount = 0, motorType } = {}) {
        this.fullName = fullName;
        this.gender = gender;
        this.email = email;
        this.birthDate = birthDate;
        this.location = location;
        this.hobbies = hobbies;
        this.favouriteColor = favouriteColor;
        this.seatsAmount = seatsAmount;
        this.motorType = motorType;
    }
}
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
    Gender["NotSay"] = "unknown";
})(Gender || (Gender = {}));
const GenderDisplayNames = {
    [Gender.Male]: 'Male',
    [Gender.Female]: 'Female',
    [Gender.Other]: 'Other',
    [Gender.NotSay]: 'I prefer not to say'
};
const DashboardGenderDisplayNames = {
    [Gender.Male]: 'Male',
    [Gender.Female]: 'Female',
    [Gender.Other]: 'Other',
    [Gender.NotSay]: 'Unknown'
};
class LocationDetails {
    constructor({ address, city, country } = {}) {
        this.address = address;
        this.city = city;
        this.country = country;
    }
}
var MotorType;
(function (MotorType) {
    MotorType["Electric"] = "electric";
    MotorType["Fuel"] = "fuel";
})(MotorType || (MotorType = {}));
const MotorTypeDisplayNames = {
    [MotorType.Electric]: 'Electric',
    [MotorType.Fuel]: 'Fuel'
};


/***/ }),

/***/ 3777:
/*!******************************************************!*\
  !*** ./src/app/shared/services/data-info.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataInfoService": () => (/* binding */ DataInfoService)
/* harmony export */ });
/* harmony import */ var _models_user_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user-info.model */ 4552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class DataInfoService {
    static prepareData(userInfo) {
        return new _models_user_info_model__WEBPACK_IMPORTED_MODULE_0__.UserInfo({ ...userInfo, favouriteColor: `#${typeof userInfo.favouriteColor !== 'string' ? userInfo.favouriteColor.hex : userInfo.favouriteColor}` });
    }
    getUserInfo() {
        const userInfoString = localStorage.getItem('users_info') || '[]';
        return JSON.parse(userInfoString);
    }
    setUserInfo(userInfo) {
        const parsedData = this.getUserInfo();
        parsedData.push(DataInfoService.prepareData(userInfo));
        localStorage.setItem('users_info', JSON.stringify(parsedData));
    }
    setVisitorsCounter() {
        localStorage.setItem('visitors_count', this.getVisitorsCounter() + 1 + '');
    }
    getVisitorsCounter() {
        return +localStorage.getItem('visitors_count');
    }
}
DataInfoService.ɵfac = function DataInfoService_Factory(t) { return new (t || DataInfoService)(); };
DataInfoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataInfoService, factory: DataInfoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material.module */ 3806);
/* harmony import */ var _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular-material-components/color-picker */ 5400);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/chips/chips.component */ 7164);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_color_field_color_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/color-field/color-field.component */ 7007);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 5145);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @swimlane/ngx-charts */ 4142);
/* harmony import */ var _components_charts_grouped_vertical_bar_chart_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/charts/grouped-vertical-bar-chart/grouped-vertical-bar-chart.component */ 136);
/* harmony import */ var _components_charts_color_map_chart_color_map_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/charts/color-map-chart/color-map-chart.component */ 8849);
/* harmony import */ var _components_charts_horizontal_bar_chart_horizontal_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/charts/horizontal-bar-chart/horizontal-bar-chart.component */ 777);
/* harmony import */ var _components_charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/charts/pie-chart/pie-chart.component */ 1436);
/* harmony import */ var _components_charts_no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/charts/no-data-for-display/no-data-for-display.component */ 7977);
/* harmony import */ var _validators_date_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validators/date-validator.directive */ 2153);
/* harmony import */ var _validators_no_special_characters_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validators/no-special-characters.directive */ 5988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);


















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_12__.MAT_COLOR_FORMATS, useValue: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_12__.NGX_MAT_COLOR_FORMATS }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__.LayoutModule,
        _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_12__.NgxMatColorPickerModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__.NgxChartsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__.LayoutModule,
        _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_12__.NgxMatColorPickerModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__.NgxChartsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_chips_chips_component__WEBPACK_IMPORTED_MODULE_1__.ChipsComponent,
        _components_color_field_color_field_component__WEBPACK_IMPORTED_MODULE_2__.ColorFieldComponent,
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__.NavigationComponent,
        _components_charts_grouped_vertical_bar_chart_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__.GroupedVerticalBarChartComponent,
        _components_charts_color_map_chart_color_map_chart_component__WEBPACK_IMPORTED_MODULE_5__.ColorMapChartComponent,
        _components_charts_horizontal_bar_chart_horizontal_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalBarChartComponent,
        _components_charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__.PieChartComponent,
        _components_charts_no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_8__.NoDataForDisplayComponent,
        _validators_date_validator_directive__WEBPACK_IMPORTED_MODULE_9__.DateValidatorDirective,
        _validators_no_special_characters_directive__WEBPACK_IMPORTED_MODULE_10__.NoSpecialCharactersDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__.LayoutModule,
        _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_12__.NgxMatColorPickerModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__.NgxChartsModule], exports: [_components_chips_chips_component__WEBPACK_IMPORTED_MODULE_1__.ChipsComponent,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__.LayoutModule,
        _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_12__.NgxMatColorPickerModule,
        _components_color_field_color_field_component__WEBPACK_IMPORTED_MODULE_2__.ColorFieldComponent,
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__.NavigationComponent,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__.NgxChartsModule,
        _components_charts_grouped_vertical_bar_chart_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__.GroupedVerticalBarChartComponent,
        _components_charts_color_map_chart_color_map_chart_component__WEBPACK_IMPORTED_MODULE_5__.ColorMapChartComponent,
        _components_charts_horizontal_bar_chart_horizontal_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalBarChartComponent,
        _components_charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__.PieChartComponent,
        _components_charts_no_data_for_display_no_data_for_display_component__WEBPACK_IMPORTED_MODULE_8__.NoDataForDisplayComponent,
        _validators_date_validator_directive__WEBPACK_IMPORTED_MODULE_9__.DateValidatorDirective,
        _validators_no_special_characters_directive__WEBPACK_IMPORTED_MODULE_10__.NoSpecialCharactersDirective] }); })();


/***/ }),

/***/ 2153:
/*!***************************************************************!*\
  !*** ./src/app/shared/validators/date-validator.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateValidatorDirective": () => (/* binding */ DateValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 6901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class DateValidatorDirective {
    validate(control) {
        if (control.value) {
            return dayjs__WEBPACK_IMPORTED_MODULE_0__().isBefore(dayjs__WEBPACK_IMPORTED_MODULE_0__(control.value)) ? { dateInFuture: true } : null;
        }
        return null;
    }
}
DateValidatorDirective.ɵfac = function DateValidatorDirective_Factory(t) { return new (t || DateValidatorDirective)(); };
DateValidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DateValidatorDirective, selectors: [["", "appDateValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
                useExisting: DateValidatorDirective,
                multi: true,
            },
        ])] });


/***/ }),

/***/ 5988:
/*!**********************************************************************!*\
  !*** ./src/app/shared/validators/no-special-characters.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoSpecialCharactersDirective": () => (/* binding */ NoSpecialCharactersDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _constants_regexp_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regexp.consts */ 9588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class NoSpecialCharactersDirective {
    constructor() {
        this.regexChars = _constants_regexp_consts__WEBPACK_IMPORTED_MODULE_0__.Regexp.EXCEPT_SPECIAL_CHARACTERS;
    }
    validate(control) {
        if (control.value) {
            return !this.regexChars.test(control.value) ? { specialCharsForbidden: true } : null;
        }
        return null;
    }
}
NoSpecialCharactersDirective.ɵfac = function NoSpecialCharactersDirective_Factory(t) { return new (t || NoSpecialCharactersDirective)(); };
NoSpecialCharactersDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NoSpecialCharactersDirective, selectors: [["", "appNoSpecialCharacters", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
                useExisting: NoSpecialCharactersDirective,
                multi: true,
            },
        ])] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map