"use strict";
(self["webpackChunkreflectiz_home_assignment"] = self["webpackChunkreflectiz_home_assignment"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 1892:
/*!************************************************************!*\
  !*** ./src/app/dashboard/analytics/analytics.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsComponent": () => (/* binding */ AnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _dashboard_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard-store.service */ 4861);
/* harmony import */ var _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/user-info.model */ 4552);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_charts_grouped_vertical_bar_chart_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/charts/grouped-vertical-bar-chart/grouped-vertical-bar-chart.component */ 136);
/* harmony import */ var _shared_components_charts_color_map_chart_color_map_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/charts/color-map-chart/color-map-chart.component */ 8849);
/* harmony import */ var _shared_components_charts_horizontal_bar_chart_horizontal_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/charts/horizontal-bar-chart/horizontal-bar-chart.component */ 777);
/* harmony import */ var _shared_components_charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/charts/pie-chart/pie-chart.component */ 1436);
















function AnalyticsComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", option_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r1, " ");
  }
}

class AnalyticsComponent {
  constructor(dashboardStoreService) {
    this.dashboardStoreService = dashboardStoreService;
    this.cardLayoutCols = 12;
    this.xAxisLabel1 = 'Gender';
    this.yAxisLabel1 = 'Quantity of choices';
    this.legendTitle1 = 'Motor type';
    this.chosenAgeRange = '0-10';
    this.ageRanges = _dashboard_store_service__WEBPACK_IMPORTED_MODULE_0__.ageGroups;
    this.ageRangeSub = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject('0-10');
    this.xAxisLabel3 = 'Quantity';
    this.yAxisLabel3 = 'Place';
    this.legendTitle3 = 'Hobbies';
    this.legendTitle4 = 'Visitors';
  }

  ngOnInit() {
    this.fillChart1Data();
    this.fillChart2Data();
    this.fillChart3Data();
    this.fillChart4Data();
  }

  fillChart3Data() {
    const entries = Object.entries(this.dashboardStoreService.hobbiesMap);
    this.chartData3 = entries.sort((e1, e2) => e2[1] - e1[1]).slice(0, 5).map((entry, index) => {
      return {
        name: index + 1,
        series: [{
          name: entry[0],
          value: entry[1]
        }]
      };
    });
  }

  fillChart2Data() {
    this.ageRangeSub.subscribe(ageRange => {
      this.chartData2 = Object.entries(this.dashboardStoreService.colorsByAgesGroupsMap[ageRange]).map(entry => {
        return {
          name: entry[0],
          value: +entry[1]
        };
      });
    });
  }

  fillChart1Data() {
    this.chartData1 = Object.entries(this.dashboardStoreService.engineByGenderMap).map(entry => {
      return {
        name: _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_1__.GenderDisplayNames[entry[0]],
        series: Object.entries(entry[1]).map(innerEntry => {
          return {
            name: _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_1__.MotorTypeDisplayNames[innerEntry[0]],
            value: innerEntry[1]
          };
        })
      };
    });
  }

  onAgeRangeChange($event) {
    this.ageRangeSub.next($event.value);
  }

  fillChart4Data() {
    this.chartData4 = Object.entries(this.dashboardStoreService.visitorsMap).map(entry => {
      return {
        name: entry[0],
        value: +entry[1]
      };
    });
  }

}

AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) {
  return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dashboard_store_service__WEBPACK_IMPORTED_MODULE_0__.DashboardStoreService));
};

AnalyticsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AnalyticsComponent,
  selectors: [["app-analytics"]],
  decls: 35,
  vars: 15,
  consts: [[1, "analytic-container"], [1, "card-content"], [1, "inner-content"], [3, "data", "legendTitle", "xAxisLabel", "yAxisLabel"], [3, "data", "legendTitle"], ["appearance", "standard", "data-test-id", "age-range", 1, "select-range-control"], ["placeholder", "Select age range", "name", "ageRange", 3, "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "data"], [3, "value"]],
  template: function AnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Most picked engine type by gender ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card-content", 1)(6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-grouped-vertical-bar-chart", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-card")(9, "mat-card-header")(10, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Ratio of users who filled out the form ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-card-content", 1)(13, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "app-pie-chart", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-card")(16, "mat-card-header")(17, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Most popular hobbies among visitors ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-card-content", 1)(20, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "app-horizontal-bar-chart", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-card")(23, "mat-card-header")(24, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Most picked colors by age group ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-card-content", 1)(27, "div", 2)(28, "mat-form-field", 5)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Age range");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function AnalyticsComponent_Template_mat_select_selectionChange_31_listener($event) {
        return ctx.onAgeRangeChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, AnalyticsComponent_mat_option_33_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "app-color-map-chart", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.chartData1)("legendTitle", ctx.legendTitle1)("xAxisLabel", ctx.xAxisLabel1)("yAxisLabel", ctx.yAxisLabel1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.chartData4)("legendTitle", ctx.legendTitle4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.chartData3)("legendTitle", ctx.legendTitle3)("xAxisLabel", ctx.xAxisLabel3)("yAxisLabel", ctx.yAxisLabel3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 13, ctx.ageRangeSub));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ageRanges);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.chartData2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _shared_components_charts_grouped_vertical_bar_chart_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__.GroupedVerticalBarChartComponent, _shared_components_charts_color_map_chart_color_map_chart_component__WEBPACK_IMPORTED_MODULE_3__.ColorMapChartComponent, _shared_components_charts_horizontal_bar_chart_horizontal_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__.HorizontalBarChartComponent, _shared_components_charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__.PieChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".card-content[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 10px 20px 30px;\n  width: max-content;\n  flex-grow: 2;\n}\n\n.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.analytic-container[_ngcontent-%COMP%] {\n  margin: 10px 0 50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n\n.select-range-control[_ngcontent-%COMP%]  {\n  width: 380px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5dGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFRTtFQUNFLHVCQUFBO0FBQUo7O0FBSUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZOOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0FBSkYiLCJmaWxlIjoiYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDEwcHggMjBweCAzMHB4O1xyXG4gIC8vd2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuXHJcbiAgLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9O1xyXG5cclxuICAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAuaW5uZXItY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYW5hbHl0aWMtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDEwcHggMCA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbn1cclxuXHJcbi5zZWxlY3QtcmFuZ2UtY29udHJvbDo6bmctZGVlcCB7XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG59XHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 840:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 7528);
/* harmony import */ var _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitors/visitors.component */ 4964);
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics/analytics.component */ 1892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'visitors',
                pathMatch: 'full'
            },
            {
                path: 'visitors',
                component: _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_1__.VisitorsComponent
            },
            {
                path: 'analytics',
                component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__.AnalyticsComponent
            }
        ]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 4861:
/*!******************************************************!*\
  !*** ./src/app/dashboard/dashboard-store.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardStoreService": () => (/* binding */ DashboardStoreService),
/* harmony export */   "ageGroups": () => (/* binding */ ageGroups)
/* harmony export */ });
/* harmony import */ var _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/user-info.model */ 4552);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 6901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_data_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/data-info.service */ 3777);




const ageGroups = ['70-80', '60-70', '50-60', '40-50', '30-40', '20-30', '10-20', '0-10'];
const genderGroups = [_shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__.Gender.Male, _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__.Gender.Female];
class DashboardStoreService {
    constructor(dataInfoService) {
        this.dataInfoService = dataInfoService;
        this.userInfo = [];
        this.colorsByAgesGroupsMap = {};
        this.hobbiesMap = {};
        this.engineByGenderMap = {};
        this.visitorsMap = {};
    }
    initService() {
        if (!this.userInfo.length) {
            this.userInfo = this.dataInfoService.getUserInfo();
            this.fillColorsByAgesGroupsMap();
            this.fillHobbiesMap();
            this.fillEngineByGenderMap();
            this.fillVisitorsMap();
        }
    }
    fillColorsByAgesGroupsMap() {
        ageGroups.forEach(g => {
            this.colorsByAgesGroupsMap[g] = {};
            this.colorsByAgesGroupsMap['80+'] = {};
        });
        this.userInfo.forEach(user => {
            const age = dayjs__WEBPACK_IMPORTED_MODULE_1__().diff(dayjs__WEBPACK_IMPORTED_MODULE_1__(user.birthDate), 'year');
            const ageRange = this.getAgeRange(age) || '80+';
            const initialColorVal = this.colorsByAgesGroupsMap[ageRange][user.favouriteColor] || 0;
            this.colorsByAgesGroupsMap[ageRange][user.favouriteColor] = initialColorVal + 1;
        });
    }
    getAgeRange(age) {
        return ageGroups.find(g => {
            const groupPoints = g.split('-');
            return age >= +groupPoints[0] && age < +groupPoints[1];
        });
    }
    fillHobbiesMap() {
        this.userInfo.forEach(user => {
            user.hobbies.forEach(hobby => {
                const initialHobbyVal = this.hobbiesMap[hobby] || 0;
                this.hobbiesMap[hobby] = initialHobbyVal + 1;
            });
        });
    }
    fillEngineByGenderMap() {
        genderGroups.forEach(g => {
            this.engineByGenderMap[g] = {};
        });
        this.userInfo.forEach(user => {
            if (genderGroups.some(g => g === user.gender)) {
                const initialVal = this.engineByGenderMap[user.gender][user.motorType] || 0;
                this.engineByGenderMap[user.gender][user.motorType] = initialVal + 1;
            }
        });
    }
    fillVisitorsMap() {
        const filledInUsers = this.userInfo.length;
        const allUsers = this.dataInfoService.getVisitorsCounter();
        this.visitorsMap = {
            filled: filledInUsers,
            'not filled': allUsers - filledInUsers
        };
    }
}
DashboardStoreService.ɵfac = function DashboardStoreService_Factory(t) { return new (t || DashboardStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_data_info_service__WEBPACK_IMPORTED_MODULE_2__.DataInfoService)); };
DashboardStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DashboardStoreService, factory: DashboardStoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var _shared_models_link_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/link.model */ 3666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-store.service */ 4861);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/navigation/navigation.component */ 5145);














function DashboardComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);

      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

class DashboardComponent {
  constructor(breakpointObserver, router, dashboardStoreService) {
    this.breakpointObserver = breakpointObserver;
    this.router = router;
    this.dashboardStoreService = dashboardStoreService;
    this.isMediumOrSmaller = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)());
    this.links = [new _shared_models_link_model__WEBPACK_IMPORTED_MODULE_0__.Link('Visitors', 'visitors', 'people_outline'), new _shared_models_link_model__WEBPACK_IMPORTED_MODULE_0__.Link('Analytics', 'analytics', 'insights')];
  }

  ngOnInit() {
    this.dashboardStoreService.initService();
  }

}

DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_store_service__WEBPACK_IMPORTED_MODULE_1__.DashboardStoreService));
};

DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 19,
  vars: 16,
  consts: [["color", "primary", 1, "header", "mat-elevation-z5"], [1, "left"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "title"], [1, "accent"], [1, "right"], [1, "sidenav-container"], [3, "mode", "opened", "disableClose"], ["drawer", ""], [3, "items"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon", 1, "burger-icon"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DashboardComponent_button_2_Template, 3, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Reflectiz ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Cars");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-sidenav-container", 6)(10, "mat-sidenav", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-navigation", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-sidenav-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, ctx.isMediumOrSmaller));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 10, ctx.isMediumOrSmaller) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 12, ctx.isMediumOrSmaller) === false)("disableClose", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 14, ctx.isMediumOrSmaller) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 8, ctx.isMediumOrSmaller) ? "dialog" : "navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.links);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar, _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  position: relative;\n  z-index: 2;\n}\n.header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Teko\", sans-serif;\n  font-size: 30px;\n  padding: 7px 1vw 0;\n}\n.sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n.mat-sidenav[_ngcontent-%COMP%] {\n  background: #F2F2F2;\n  width: 200px;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.mat-sidenav-content[_ngcontent-%COMP%] {\n  padding: 4vh 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUVFO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFKO0FBSUE7RUFDRSwwQkFBQTtBQURGO0FBSUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLHNCQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0FBREYiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG5cclxuICAubGVmdCwgLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRla29cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmc6IDdweCAxdncgMDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDR2aCAydnc7XHJcbn1cclxuXHJcbiJdfQ== */"]
});

/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 840);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 7528);
/* harmony import */ var _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitors/visitors.component */ 4964);
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analytics/analytics.component */ 1892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_3__.VisitorsComponent,
        _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__.AnalyticsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 4964:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/visitors/visitors.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitorsComponent": () => (/* binding */ VisitorsComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/user-info.model */ 4552);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 6901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _dashboard_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-store.service */ 4861);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);










function VisitorsComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitorsComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const userInfo_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](userInfo_r20.fullName);
} }
function VisitorsComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitorsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const userInfo_r21 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.genderDisplayNames[userInfo_r21.gender]);
} }
function VisitorsComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitorsComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const userInfo_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](userInfo_r22.email);
} }
function VisitorsComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitorsComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const userInfo_r23 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r7.getAge(userInfo_r23.birthDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.getBirthDate(userInfo_r23.birthDate));
} }
function VisitorsComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitorsComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const userInfo_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", userInfo_r24.location.country, ", ", userInfo_r24.location.city, ", ", userInfo_r24.location.address, "");
} }
function VisitorsComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Hobbies");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitorsComponent_td_19_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitorsComponent_td_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, VisitorsComponent_td_19_span_1_span_2_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hobby_r27 = ctx.$implicit;
    const last_r28 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", hobby_r27, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !last_r28);
} }
function VisitorsComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VisitorsComponent_td_19_span_1_Template, 3, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userInfo_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", userInfo_r25.hobbies);
} }
function VisitorsComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function VisitorsComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userInfo_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, userInfo_r30.favouriteColor))("matTooltip", userInfo_r30.favouriteColor);
} }
function VisitorsComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitorsComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const userInfo_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](userInfo_r31.seatsAmount);
} }
function VisitorsComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Motor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitorsComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const userInfo_r32 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.motorDisplayNames[userInfo_r32.motorType]);
} }
function VisitorsComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 22);
} }
function VisitorsComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 23);
} }
const _c1 = function () { return [10, 25, 50]; };
class VisitorsComponent {
    constructor(dashboardStoreService) {
        this.dashboardStoreService = dashboardStoreService;
        this.genderDisplayNames = _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__.DashboardGenderDisplayNames;
        this.motorDisplayNames = _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_0__.MotorTypeDisplayNames;
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
        this.dataSource.data = this.dashboardStoreService.userInfo;
        this.displayedColumns =
            ['fullName', 'gender', 'email', 'birthDate', 'address', 'hobbies', 'favouriteColor', 'seatsAmount', 'motorType'];
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getBirthDate(date) {
        const dayJsDate = dayjs__WEBPACK_IMPORTED_MODULE_1__(date);
        return dayJsDate.format('DD MMMM YYYY');
    }
    getAge(birthDate) {
        const age = dayjs__WEBPACK_IMPORTED_MODULE_1__().diff(dayjs__WEBPACK_IMPORTED_MODULE_1__(birthDate), 'year');
        const postfix = age > 1 ? 'years' : 'year';
        return age + ' ' + postfix;
    }
}
VisitorsComponent.ɵfac = function VisitorsComponent_Factory(t) { return new (t || VisitorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_store_service__WEBPACK_IMPORTED_MODULE_2__.DashboardStoreService)); };
VisitorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VisitorsComponent, selectors: [["app-visitors"]], viewQuery: function VisitorsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "table-container"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "fullName", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "birthDate"], ["matColumnDef", "address"], ["matColumnDef", "hobbies"], ["matColumnDef", "favouriteColor"], ["matColumnDef", "seatsAmount"], ["matColumnDef", "motorType"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matTooltip"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["matTooltipPosition", "below", 1, "color-circle", "mat-elevation-z2", 3, "ngStyle", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""]], template: function VisitorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, VisitorsComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VisitorsComponent_td_4_Template, 3, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, VisitorsComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, VisitorsComponent_td_7_Template, 3, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VisitorsComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, VisitorsComponent_td_10_Template, 3, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, VisitorsComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, VisitorsComponent_td_13_Template, 3, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, VisitorsComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, VisitorsComponent_td_16_Template, 3, 3, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, VisitorsComponent_th_18_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, VisitorsComponent_td_19_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, VisitorsComponent_th_21_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, VisitorsComponent_td_22_Template, 2, 4, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](23, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, VisitorsComponent_th_24_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, VisitorsComponent_td_25_Template, 3, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](26, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, VisitorsComponent_th_27_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, VisitorsComponent_td_28_Template, 3, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, VisitorsComponent_tr_29_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, VisitorsComponent_tr_30_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "mat-paginator", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip], styles: [".table-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px 15px 5px 0;\n}\n\n.color-circle[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n}\n\n.mat-column-hobbies[_ngcontent-%COMP%] {\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREYiLCJmaWxlIjoidmlzaXRvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7IC8vIDwhLS0gVEhJUyBXT1JLUyBmb3IgaG9yaXpvbnRhbCBzY3JvbGxpbmcgKGFsbCBjb2x1bW5zIHZpc2libGUpXHJcbn1cclxuXHJcbi5tYXQtdGFibGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcblxyXG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwsIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMDtcclxufVxyXG5cclxuLmNvbG9yLWNpcmNsZSB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4taG9iYmllcyB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3666:
/*!*********************************************!*\
  !*** ./src/app/shared/models/link.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link)
/* harmony export */ });
class Link {
    constructor(title, path, icon) {
        this.title = title;
        this.path = path;
        this.icon = icon;
    }
}


/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map