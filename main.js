(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sathishkumar/Developer/Angular/task/apps/stocks/src/main.ts */"zUnb");


/***/ }),

/***/ "1Esj":
/*!******************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/+state/actions/stocks.actions.ts ***!
  \******************************************************************************************************/
/*! exports provided: StocksActionTypes, GetStocks, GetStocksSuccess, GetStocksFail, SetStocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksActionTypes", function() { return StocksActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStocks", function() { return GetStocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStocksSuccess", function() { return GetStocksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStocksFail", function() { return GetStocksFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStocks", function() { return SetStocks; });
var StocksActionTypes;
(function (StocksActionTypes) {
    StocksActionTypes["GetStocks"] = "[Stocks] Get";
    StocksActionTypes["GetStocksSuccess"] = "[Stocks] Get Success";
    StocksActionTypes["GetStocksFail"] = "[Stocks] Get Fail";
    StocksActionTypes["SetStocks"] = "[Stocks] Set";
})(StocksActionTypes || (StocksActionTypes = {}));
class GetStocks {
    constructor() {
        this.type = StocksActionTypes.GetStocks;
    }
}
class GetStocksSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = StocksActionTypes.GetStocksSuccess;
    }
}
class GetStocksFail {
    constructor(payload) {
        this.payload = payload;
        this.type = StocksActionTypes.GetStocksFail;
    }
}
class SetStocks {
    constructor(payload) {
        this.payload = payload;
        this.type = StocksActionTypes.SetStocks;
    }
}


/***/ }),

/***/ "58il":
/*!*********************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/stock.routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: StockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockRoutingModule", function() { return StockRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "QgXN");






const routes = [
    {
        path: 'stocks',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["StockListComponent"],
    },
    {
        path: '',
        redirectTo: 'stocks',
        pathMatch: 'full',
    },
];
class StockRoutingModule {
}
StockRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StockRoutingModule });
StockRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StockRoutingModule_Factory(t) { return new (t || StockRoutingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StockRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "71hd":
/*!*************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/+state/index.ts ***!
  \*************************************************************************************/
/*! exports provided: StocksActionTypes, GetStocks, GetStocksSuccess, GetStocksFail, SetStocks, effects, initialState, stocksReducer, stocksFeatureKey, reducers, selectStocksState, getStocksState, getStocksData, isStocksLoaded, isStocksLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "y0vh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StocksActionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["StocksActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStocks", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetStocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStocksSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetStocksSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStocksFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetStocksFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetStocks", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SetStocks"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "pGzk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["effects"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "WZN+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stocksReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["stocksReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stocksFeatureKey", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["stocksFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "poPo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectStocksState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["selectStocksState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStocksState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getStocksState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStocksData", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getStocksData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStocksLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["isStocksLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStocksLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["isStocksLoading"]; });







/***/ }),

/***/ "7Siw":
/*!********************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/services/web-socket/yahoo-proto.ts ***!
  \********************************************************************************************************/
/*! exports provided: getProtoRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProtoRoot", function() { return getProtoRoot; });
/* harmony import */ var protobufjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! protobufjs */ "vsBW");
/* harmony import */ var protobufjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(protobufjs__WEBPACK_IMPORTED_MODULE_0__);

// https://finance.yahoo.com/__finStreamer-proto.js
const $protobuf = protobufjs__WEBPACK_IMPORTED_MODULE_0__;
function getProtoRoot() {
    var $Reader = $protobuf.Reader, $util = $protobuf.util;
    var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});
    $root.quotefeeder = (function () {
        var quotefeeder = {};
        quotefeeder.QuoteType = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[(valuesById[0] = 'NONE')] = 0;
            values[(valuesById[5] = 'ALTSYMBOL')] = 5;
            values[(valuesById[7] = 'HEARTBEAT')] = 7;
            values[(valuesById[8] = 'EQUITY')] = 8;
            values[(valuesById[9] = 'INDEX')] = 9;
            values[(valuesById[11] = 'MUTUALFUND')] = 11;
            values[(valuesById[12] = 'MONEYMARKET')] = 12;
            values[(valuesById[13] = 'OPTION')] = 13;
            values[(valuesById[14] = 'CURRENCY')] = 14;
            values[(valuesById[15] = 'WARRANT')] = 15;
            values[(valuesById[17] = 'BOND')] = 17;
            values[(valuesById[18] = 'FUTURE')] = 18;
            values[(valuesById[20] = 'ETF')] = 20;
            values[(valuesById[23] = 'COMMODITY')] = 23;
            values[(valuesById[28] = 'ECNQUOTE')] = 28;
            values[(valuesById[41] = 'CRYPTOCURRENCY')] = 41;
            values[(valuesById[42] = 'INDICATOR')] = 42;
            values[(valuesById[1000] = 'INDUSTRY')] = 1000;
            return values;
        })();
        quotefeeder.MarketHours = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[(valuesById[0] = 'PRE_MARKET')] = 0;
            values[(valuesById[1] = 'REGULAR_MARKET')] = 1;
            values[(valuesById[2] = 'POST_MARKET')] = 2;
            values[(valuesById[3] = 'EXTENDED_HOURS_MARKET')] = 3;
            return values;
        })();
        quotefeeder.PricingData = (function () {
            function PricingData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
            PricingData.prototype.id = '';
            PricingData.prototype.symbol = '';
            PricingData.prototype.price = 0;
            PricingData.prototype.time = $util.Long
                ? $util.Long.fromBits(0, 0, false)
                : 0;
            PricingData.prototype.currency = '';
            PricingData.prototype.exchange = '';
            PricingData.prototype.quoteType = 0;
            PricingData.prototype.marketHours = 0;
            PricingData.prototype.changePercent = 0;
            PricingData.prototype.dayVolume = $util.Long
                ? $util.Long.fromBits(0, 0, false)
                : 0;
            PricingData.prototype.dayHigh = 0;
            PricingData.prototype.dayLow = 0;
            PricingData.prototype.change = 0;
            PricingData.prototype.shortName = '';
            PricingData.prototype.displayName = '';
            PricingData.prototype.openPrice = 0;
            PricingData.prototype.strikePrice = 0;
            PricingData.prototype.underlyingSymbol = '';
            PricingData.prototype.priceHint = $util.Long
                ? $util.Long.fromBits(0, 0, false)
                : 0;
            PricingData.prototype.vol_24hr = $util.Long
                ? $util.Long.fromBits(0, 0, false)
                : 0;
            PricingData.prototype.volAllCurrencies = $util.Long
                ? $util.Long.fromBits(0, 0, false)
                : 0;
            PricingData.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.quotefeeder.PricingData();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.id = r.string();
                            break;
                        case 2:
                            m.price = r.float();
                            break;
                        case 3:
                            m.time = r.sint64();
                            break;
                        case 4:
                            m.currency = r.string();
                            break;
                        case 5:
                            m.exchange = r.string();
                            break;
                        case 6:
                            m.quoteType = r.int32();
                            break;
                        case 7:
                            m.marketHours = r.int32();
                            break;
                        case 8:
                            m.changePercent = r.float();
                            break;
                        case 9:
                            m.dayVolume = r.sint64();
                            break;
                        case 10:
                            m.dayHigh = r.float();
                            break;
                        case 11:
                            m.dayLow = r.float();
                            break;
                        case 12:
                            m.change = r.float();
                            break;
                        case 13:
                            m.shortName = r.string();
                            break;
                        case 14:
                            m.displayName = r.string();
                            break;
                        case 15:
                            m.openPrice = r.float();
                            break;
                        case 16:
                            m.symbol = r.string();
                            break;
                        case 17:
                            m.strikePrice = r.float();
                            break;
                        case 18:
                            m.underlyingSymbol = r.string();
                            break;
                        case 27:
                            m.priceHint = r.sint64();
                            break;
                        case 28:
                            m.vol_24hr = r.sint64();
                            break;
                        case 29:
                            m.volAllCurrencies = r.sint64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            PricingData.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.id = '';
                    d.symbol = '';
                    d.price = 0;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, false);
                        d.time =
                            o.longs === String
                                ? n.toString()
                                : o.longs === Number
                                    ? n.toNumber()
                                    : n;
                    }
                    else
                        d.time = o.longs === String ? '0' : 0;
                    d.currency = '';
                    d.exchange = '';
                    d.quoteType = o.enums === String ? 'NONE' : 0;
                    d.marketHours = o.enums === String ? 'PRE_MARKET' : 0;
                    d.changePercent = 0;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, false);
                        d.dayVolume =
                            o.longs === String
                                ? n.toString()
                                : o.longs === Number
                                    ? n.toNumber()
                                    : n;
                    }
                    else
                        d.dayVolume = o.longs === String ? '0' : 0;
                    d.dayHigh = 0;
                    d.dayLow = 0;
                    d.change = 0;
                    d.shortName = '';
                    d.displayName = '';
                    d.openPrice = 0;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, false);
                        d.priceHint =
                            o.longs === String
                                ? n.toString()
                                : o.longs === Number
                                    ? n.toNumber()
                                    : n;
                    }
                    else
                        d.priceHint = o.longs === String ? '0' : 0;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, false);
                        d.vol_24hr =
                            o.longs === String
                                ? n.toString()
                                : o.longs === Number
                                    ? n.toNumber()
                                    : n;
                    }
                    else
                        d.vol_24hr = o.longs === String ? '0' : 0;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, false);
                        d.volAllCurrencies =
                            o.longs === String
                                ? n.toString()
                                : o.longs === Number
                                    ? n.toNumber()
                                    : n;
                    }
                    else
                        d.volAllCurrencies = o.longs === String ? '0' : 0;
                }
                if (m.id != null && m.hasOwnProperty('id')) {
                    d.id = m.id;
                }
                if (m.symbol != null && m.hasOwnProperty('symbol')) {
                    d.symbol = m.symbol;
                }
                if (m.price != null && m.hasOwnProperty('price')) {
                    d.price = o.json && !isFinite(m.price) ? String(m.price) : m.price;
                }
                if (m.time != null && m.hasOwnProperty('time')) {
                    if (typeof m.time === 'number')
                        d.time = o.longs === String ? String(m.time) : m.time;
                    else
                        d.time =
                            o.longs === String
                                ? $util.Long.prototype.toString.call(m.time)
                                : o.longs === Number
                                    ? new $util.LongBits(m.time.low >>> 0, m.time.high >>> 0).toNumber()
                                    : m.time;
                }
                if (m.currency != null && m.hasOwnProperty('currency')) {
                    d.currency = m.currency;
                }
                if (m.exchange != null && m.hasOwnProperty('exchange')) {
                    d.exchange = m.exchange;
                }
                if (m.quoteType != null && m.hasOwnProperty('quoteType')) {
                    d.quoteType =
                        o.enums === String
                            ? $root.quotefeeder.QuoteType[m.quoteType]
                            : m.quoteType;
                }
                if (m.marketHours != null && m.hasOwnProperty('marketHours')) {
                    d.marketHours =
                        o.enums === String
                            ? $root.quotefeeder.MarketHours[m.marketHours]
                            : m.marketHours;
                }
                if (m.changePercent != null && m.hasOwnProperty('changePercent')) {
                    d.changePercent =
                        o.json && !isFinite(m.changePercent)
                            ? String(m.changePercent)
                            : m.changePercent;
                }
                if (m.dayVolume != null && m.hasOwnProperty('dayVolume')) {
                    if (typeof m.dayVolume === 'number')
                        d.dayVolume =
                            o.longs === String ? String(m.dayVolume) : m.dayVolume;
                    else
                        d.dayVolume =
                            o.longs === String
                                ? $util.Long.prototype.toString.call(m.dayVolume)
                                : o.longs === Number
                                    ? new $util.LongBits(m.dayVolume.low >>> 0, m.dayVolume.high >>> 0).toNumber()
                                    : m.dayVolume;
                }
                if (m.dayHigh != null && m.hasOwnProperty('dayHigh')) {
                    d.dayHigh =
                        o.json && !isFinite(m.dayHigh) ? String(m.dayHigh) : m.dayHigh;
                }
                if (m.dayLow != null && m.hasOwnProperty('dayLow')) {
                    d.dayLow =
                        o.json && !isFinite(m.dayLow) ? String(m.dayLow) : m.dayLow;
                }
                if (m.change != null && m.hasOwnProperty('change')) {
                    d.change =
                        o.json && !isFinite(m.change) ? String(m.change) : m.change;
                }
                if (m.shortName != null && m.hasOwnProperty('shortName')) {
                    d.shortName = m.shortName;
                }
                if (m.displayName != null && m.hasOwnProperty('displayName')) {
                    d.displayName = m.displayName;
                }
                if (m.openPrice != null && m.hasOwnProperty('openPrice')) {
                    d.openPrice =
                        o.json && !isFinite(m.openPrice)
                            ? String(m.openPrice)
                            : m.openPrice;
                }
                if (m.strikePrice != null && m.hasOwnProperty('strikePrice')) {
                    d.strikePrice =
                        o.json && !isFinite(m.strikePrice)
                            ? String(m.strikePrice)
                            : m.strikePrice;
                }
                if (m.underlyingSymbol != null &&
                    m.hasOwnProperty('underlyingSymbol')) {
                    d.underlyingSymbol = m.underlyingSymbol;
                }
                if (m.priceHint != null && m.hasOwnProperty('priceHint')) {
                    if (typeof m.priceHint === 'number')
                        d.priceHint =
                            o.longs === String ? String(m.priceHint) : m.priceHint;
                    else
                        d.priceHint =
                            o.longs === String
                                ? $util.Long.prototype.toString.call(m.priceHint)
                                : o.longs === Number
                                    ? new $util.LongBits(m.priceHint.low >>> 0, m.priceHint.high >>> 0).toNumber()
                                    : m.priceHint;
                }
                if (m.vol_24hr != null && m.hasOwnProperty('vol_24hr')) {
                    if (typeof m.vol_24hr === 'number')
                        d.vol_24hr = o.longs === String ? String(m.vol_24hr) : m.vol_24hr;
                    else
                        d.vol_24hr =
                            o.longs === String
                                ? $util.Long.prototype.toString.call(m.vol_24hr)
                                : o.longs === Number
                                    ? new $util.LongBits(m.vol_24hr.low >>> 0, m.vol_24hr.high >>> 0).toNumber()
                                    : m.vol_24hr;
                }
                if (m.volAllCurrencies != null &&
                    m.hasOwnProperty('volAllCurrencies')) {
                    if (typeof m.volAllCurrencies === 'number')
                        d.volAllCurrencies =
                            o.longs === String
                                ? String(m.volAllCurrencies)
                                : m.volAllCurrencies;
                    else
                        d.volAllCurrencies =
                            o.longs === String
                                ? $util.Long.prototype.toString.call(m.volAllCurrencies)
                                : o.longs === Number
                                    ? new $util.LongBits(m.volAllCurrencies.low >>> 0, m.volAllCurrencies.high >>> 0).toNumber()
                                    : m.volAllCurrencies;
                }
                return d;
            };
            PricingData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return PricingData;
        })();
        return quotefeeder;
    })();
    return $root;
}


/***/ }),

/***/ "7mup":
/*!*******************************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/containers/stock-root/stock-root.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: StockRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockRootComponent", function() { return StockRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");



class StockRootComponent {
    constructor() { }
    ngOnInit() { }
}
StockRootComponent.ɵfac = function StockRootComponent_Factory(t) { return new (t || StockRootComponent)(); };
StockRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockRootComponent, selectors: [["stock-root"]], decls: 1, vars: 0, template: function StockRootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3N0b2NrL3NyYy9saWIvY29udGFpbmVycy9zdG9jay1yb290L3N0b2NrLXJvb3QuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockRootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stock-root',
                templateUrl: './stock-root.component.html',
                styleUrls: ['./stock-root.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8h8c":
/*!***********************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/models/stock.mock.data.ts ***!
  \***********************************************************************************************/
/*! exports provided: mockStocks, mockStocksState, mockStocksFeatureState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockStocks", function() { return mockStocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockStocksState", function() { return mockStocksState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockStocksFeatureState", function() { return mockStocksFeatureState; });
const mockStocks = [
    {
        name: 'Alphabet',
        symbol: 'GOOG',
        currency: 'USD',
        currentPrice: 2228.55,
        dayHighPrice: 2269.94,
        dayLowPrice: 2217.22,
        fiftyTwoWeekLow: 2044.16,
        fiftyTwoWeekHigh: 3042,
        regularMarketVolume: 1567487,
    },
    {
        name: 'Microsoft',
        symbol: 'MSFT',
        currency: 'USD',
        currentPrice: 252.99,
        dayHighPrice: 260.54,
        dayLowPrice: 252.86,
        fiftyTwoWeekLow: 246.44,
        fiftyTwoWeekHigh: 349.67,
        regularMarketVolume: 31445841,
    },
];
const mockStocksState = {
    data: mockStocks,
    loading: false,
    loaded: true
};
const mockStocksFeatureState = {
    stocks: mockStocksState
};


/***/ }),

/***/ "A0xT":
/*!**************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/index.ts ***!
  \**************************************************************************/
/*! exports provided: StockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_stock_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/stock.module */ "beBC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockModule", function() { return _lib_stock_module__WEBPACK_IMPORTED_MODULE_0__["StockModule"]; });




/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BJ7B":
/*!**********************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/models/stock.constant.ts ***!
  \**********************************************************************************************/
/*! exports provided: QUOTE_STREAMER_WEBSOCKET, QUOTE_URL, stocksSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUOTE_STREAMER_WEBSOCKET", function() { return QUOTE_STREAMER_WEBSOCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUOTE_URL", function() { return QUOTE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stocksSymbol", function() { return stocksSymbol; });
const QUOTE_STREAMER_WEBSOCKET = 'wss://streamer.finance.yahoo.com';
const QUOTE_URL = 'https://query1.finance.yahoo.com/v7/finance/quote?';
const stocksSymbol = [
    'AMZN',
    'AAPL',
    'TSLA',
    'GOOG',
    'MSFT'
];


/***/ }),

/***/ "CB0M":
/*!******************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/+state/effects/stocks.effects.ts ***!
  \******************************************************************************************************/
/*! exports provided: StocksEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksEffects", function() { return StocksEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "xeA8");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "y0vh");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "OWSf");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "NvTN");











class StocksEffects {
    constructor(actions$, stockService) {
        this.actions$ = actions$;
        this.stockService = stockService;
        this.getStocks$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["StocksActionTypes"].GetStocks), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.stockService.getStocks(_models__WEBPACK_IMPORTED_MODULE_7__["stocksSymbol"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            var _a;
            const formatResponse = this.stockService.formatStocksResponse((_a = response === null || response === void 0 ? void 0 : response.quoteResponse) === null || _a === void 0 ? void 0 : _a.result);
            return new _actions__WEBPACK_IMPORTED_MODULE_5__["GetStocksSuccess"](formatResponse);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_5__["GetStocksFail"](err))))));
    }
}
StocksEffects.ɵfac = function StocksEffects_Factory(t) { return new (t || StocksEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_6__["StockService"])); };
StocksEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StocksEffects, factory: StocksEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], StocksEffects.prototype, "getStocks$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StocksEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services__WEBPACK_IMPORTED_MODULE_6__["StockService"] }]; }, { getStocks$: [] }); })();


/***/ }),

/***/ "J5XF":
/*!******************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/services/stocks/stock.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "NvTN");





class StockService {
    constructor(http) {
        this.http = http;
    }
    getStocks(symbols) {
        // HttpRequest has been blocked by CORS policy. So, add cors-anywhere.herokuapp.com to this link.
        const uri = `https://cors-anywhere.herokuapp.com/${_models__WEBPACK_IMPORTED_MODULE_2__["QUOTE_URL"]}symbols=${symbols === null || symbols === void 0 ? void 0 : symbols.join()}`;
        return this.http.get(uri);
    }
    formatStocksResponse(stocks) {
        return stocks === null || stocks === void 0 ? void 0 : stocks.map((stock) => ({
            name: stock.displayName,
            symbol: stock.symbol,
            currency: stock.currency,
            currentPrice: stock.regularMarketPrice,
            dayHighPrice: stock.regularMarketDayHigh,
            dayLowPrice: stock.regularMarketDayLow,
            fiftyTwoWeekLow: stock.fiftyTwoWeekLow,
            fiftyTwoWeekHigh: stock.fiftyTwoWeekHigh,
            regularMarketVolume: stock.regularMarketVolume,
        }));
    }
}
StockService.ɵfac = function StockService_Factory(t) { return new (t || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
StockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StockService, factory: StockService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NvTN":
/*!*************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/models/index.ts ***!
  \*************************************************************************************/
/*! exports provided: QUOTE_STREAMER_WEBSOCKET, QUOTE_URL, stocksSymbol, mockStocks, mockStocksState, mockStocksFeatureState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stock_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock.constant */ "BJ7B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUOTE_STREAMER_WEBSOCKET", function() { return _stock_constant__WEBPACK_IMPORTED_MODULE_0__["QUOTE_STREAMER_WEBSOCKET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUOTE_URL", function() { return _stock_constant__WEBPACK_IMPORTED_MODULE_0__["QUOTE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stocksSymbol", function() { return _stock_constant__WEBPACK_IMPORTED_MODULE_0__["stocksSymbol"]; });

/* harmony import */ var _stock_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock.interface */ "RVDx");
/* empty/unused harmony star reexport *//* harmony import */ var _stock_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock.mock.data */ "8h8c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockStocks", function() { return _stock_mock_data__WEBPACK_IMPORTED_MODULE_2__["mockStocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockStocksState", function() { return _stock_mock_data__WEBPACK_IMPORTED_MODULE_2__["mockStocksState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockStocksFeatureState", function() { return _stock_mock_data__WEBPACK_IMPORTED_MODULE_2__["mockStocksFeatureState"]; });






/***/ }),

/***/ "OWSf":
/*!***************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/services/index.ts ***!
  \***************************************************************************************/
/*! exports provided: DevicesService, StockService, WebSocketService, MockStockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devices_devices_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices/devices.service */ "o2gQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return _devices_devices_service__WEBPACK_IMPORTED_MODULE_0__["DevicesService"]; });

/* harmony import */ var _stocks_stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocks/stock.service */ "J5XF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return _stocks_stock_service__WEBPACK_IMPORTED_MODULE_1__["StockService"]; });

/* harmony import */ var _web_socket_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-socket/web-socket.service */ "xvQ6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return _web_socket_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]; });

/* harmony import */ var _stock_mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.mock.service */ "kvBJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockStockService", function() { return _stock_mock_service__WEBPACK_IMPORTED_MODULE_3__["MockStockService"]; });







/***/ }),

/***/ "Q/Ru":
/*!**********************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/+state/selectors/stocks.selectors.ts ***!
  \**********************************************************************************************************/
/*! exports provided: selectStocksState, getStocksState, getStocksData, isStocksLoaded, isStocksLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStocksState", function() { return selectStocksState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStocksState", function() { return getStocksState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStocksData", function() { return getStocksData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStocksLoaded", function() { return isStocksLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStocksLoading", function() { return isStocksLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "WZN+");


const selectStocksState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["stocksFeatureKey"]);
const getStocksState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStocksState, (state) => state === null || state === void 0 ? void 0 : state.stocks);
const getStocksData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStocksState, (state) => state === null || state === void 0 ? void 0 : state.data);
const isStocksLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStocksState, (state) => state === null || state === void 0 ? void 0 : state.loaded);
const isStocksLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStocksState, (state) => state === null || state === void 0 ? void 0 : state.loading);


/***/ }),

/***/ "QgXN":
/*!*****************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/containers/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: StockRootComponent, StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stock_root_stock_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-root/stock-root.component */ "7mup");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockRootComponent", function() { return _stock_root_stock_root_component__WEBPACK_IMPORTED_MODULE_0__["StockRootComponent"]; });

/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-list/stock-list.component */ "Tpa0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_1__["StockListComponent"]; });





/***/ }),

/***/ "RVDx":
/*!***********************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/models/stock.interface.ts ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _libs_stock_src_lib_containers_stock_root_stock_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/stock/src/lib/containers/stock-root/stock-root.component */ "7mup");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["stocks-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "stock-root");
    } }, directives: [_libs_stock_src_lib_containers_stock_root_stock_root_component__WEBPACK_IMPORTED_MODULE_1__["StockRootComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3N0b2Nrcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stocks-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "Tpa0":
/*!*******************************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/containers/stock-list/stock-list.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return StockListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../+state */ "71hd");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "NvTN");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "OWSf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _components_stock_card_stock_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/stock-card/stock-card.component */ "piR1");
/* harmony import */ var _components_error_screen_error_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/error-screen/error-screen.component */ "Ypez");












function StockListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "stock-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyToggle", function StockListComponent_ng_container_1_Template_stock_card_notifyToggle_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onNotifyToggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stocksList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.stocks$));
} }
function StockListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "stock-error-screen");
} }
class StockListComponent {
    constructor(store, webSocketService) {
        this.store = store;
        this.webSocketService = webSocketService;
    }
    ngOnInit() {
        this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_3__["GetStocks"]());
        this.stocks$ = this.store
            .select(_state__WEBPACK_IMPORTED_MODULE_3__["getStocksData"]);
        if (this.webSocketService.socket$) {
            this.webSocketService.send(_models__WEBPACK_IMPORTED_MODULE_4__["stocksSymbol"]);
        }
        this.webSocketService
            .connect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_3__["SetStocks"](response));
        }))
            .subscribe();
        this.webSocketService.socketOpen$.subscribe(() => this.webSocketService.send(_models__WEBPACK_IMPORTED_MODULE_4__["stocksSymbol"]));
    }
    onNotifyToggle(stock) {
        this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_3__["SetStocks"](stock));
    }
    ngOnDestroy() {
        this.webSocketService.unsubscribe(_models__WEBPACK_IMPORTED_MODULE_4__["stocksSymbol"]);
    }
}
StockListComponent.ɵfac = function StockListComponent_Factory(t) { return new (t || StockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["WebSocketService"])); };
StockListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockListComponent, selectors: [["stock-list"]], decls: 5, vars: 4, consts: [[1, "stock-list"], [4, "ngIf", "ngIfElse"], ["showResiliencyScreen", ""], [3, "stocksList", "notifyToggle"]], template: function StockListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StockListComponent_ng_container_1_Template, 3, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StockListComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        var tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.stocks$)) == null ? null : tmp_0_0.length) > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_stock_card_stock_card_component__WEBPACK_IMPORTED_MODULE_7__["StockCardComponent"], _components_error_screen_error_screen_component__WEBPACK_IMPORTED_MODULE_8__["ErrorScreenComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".stock-list {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc3RvY2svc3JjL2xpYi9jb250YWluZXJzL3N0b2NrLWxpc3Qvc3RvY2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJsaWJzL3N0b2NrL3NyYy9saWIvY29udGFpbmVycy9zdG9jay1saXN0L3N0b2NrLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvY2stbGlzdCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stock-list',
                templateUrl: './stock-list.component.html',
                styleUrls: ['./stock-list.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _services__WEBPACK_IMPORTED_MODULE_5__["WebSocketService"] }]; }, null); })();


/***/ }),

/***/ "VVR5":
/*!************************************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/components/stock-card/stock-card.mock.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: MockStockCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockStockCardComponent", function() { return MockStockCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class MockStockCardComponent {
}
MockStockCardComponent.ɵfac = function MockStockCardComponent_Factory(t) { return new (t || MockStockCardComponent)(); };
MockStockCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MockStockCardComponent, selectors: [["stock-card"]], inputs: { stocksList: "stocksList" }, decls: 0, vars: 0, template: function MockStockCardComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockStockCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stock-card',
                template: ''
            }]
    }], null, { stocksList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WZN+":
/*!**********************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/+state/reducers/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: initialState, stocksReducer, stocksFeatureKey, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stocksFeatureKey", function() { return stocksFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _stocks_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.reducer */ "aHPd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _stocks_reducer__WEBPACK_IMPORTED_MODULE_0__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stocksReducer", function() { return _stocks_reducer__WEBPACK_IMPORTED_MODULE_0__["stocksReducer"]; });



const stocksFeatureKey = 'simpleStocks';
const reducers = {
    stocks: _stocks_reducer__WEBPACK_IMPORTED_MODULE_0__["stocksReducer"],
};


/***/ }),

/***/ "Ypez":
/*!***********************************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/components/error-screen/error-screen.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ErrorScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorScreenComponent", function() { return ErrorScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class ErrorScreenComponent {
}
ErrorScreenComponent.ɵfac = function ErrorScreenComponent_Factory(t) { return new (t || ErrorScreenComponent)(); };
ErrorScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorScreenComponent, selectors: [["stock-error-screen"]], decls: 8, vars: 0, consts: [[1, "stock-error-screen"], [1, "stock-error-screen__title"], [1, "stock-error-screen__message"], ["href", "https://cors-anywhere.herokuapp.com/corsdemo", "target", "_blank"]], template: function ErrorScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Uh-oh, something went wrong.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " We are not able to load this page right now. Please refresh this page or follow this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".stock-error-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 7rem 0;\n  line-height: 2rem;\n}\n.stock-error-screen .stock-error-screen__title {\n  font-size: 36px;\n  padding: 8px 0;\n}\n.stock-error-screen__message {\n  font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc3RvY2svc3JjL2xpYi9jb21wb25lbnRzL2Vycm9yLXNjcmVlbi9lcnJvci1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtBQUFKIiwiZmlsZSI6ImxpYnMvc3RvY2svc3JjL2xpYi9jb21wb25lbnRzL2Vycm9yLXNjcmVlbi9lcnJvci1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvY2stZXJyb3Itc2NyZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA3cmVtIDA7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuXG4gIC5zdG9jay1lcnJvci1zY3JlZW5fX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gIH1cblxuICAmX19tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stock-error-screen',
                templateUrl: './error-screen.component.html',
                styleUrls: ['./error-screen.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _task_stock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @task/stock */ "A0xT");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "xeA8");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "LcDt");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "vobO");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _task_stock__WEBPACK_IMPORTED_MODULE_3__["StockModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([]),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument() : [],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _task_stock__WEBPACK_IMPORTED_MODULE_3__["StockModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _task_stock__WEBPACK_IMPORTED_MODULE_3__["StockModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({}),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([]),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument() : [],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aHPd":
/*!*******************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/+state/reducers/stocks.reducer.ts ***!
  \*******************************************************************************************************/
/*! exports provided: initialState, stocksReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stocksReducer", function() { return stocksReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "y0vh");

const initialState = {
    data: null,
    loading: false,
    loaded: false,
};
function stocksReducer(state = initialState, action) {
    var _a;
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["StocksActionTypes"].GetStocks:
            return Object.assign(Object.assign({}, state), { loading: true, loaded: false });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["StocksActionTypes"].GetStocksSuccess:
            return Object.assign(Object.assign({}, state), { data: action.payload, loading: false, loaded: true });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["StocksActionTypes"].GetStocksFail:
            return Object.assign(Object.assign({}, state), { loading: false, loaded: false });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["StocksActionTypes"].SetStocks:
            return Object.assign(Object.assign({}, state), { data: (_a = state.data) === null || _a === void 0 ? void 0 : _a.map((item) => (item.isActive || action.payload.isActive) &&
                    item.symbol === action.payload.symbol
                    ? Object.assign(Object.assign({}, item), action.payload) : item) });
        default:
            return state;
    }
}


/***/ }),

/***/ "beBC":
/*!*************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/stock.module.ts ***!
  \*************************************************************************************/
/*! exports provided: StockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockModule", function() { return StockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "xeA8");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock.routing.module */ "58il");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers */ "QgXN");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "v6dn");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state */ "71hd");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "OWSf");












class StockModule {
}
StockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StockModule });
StockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StockModule_Factory(t) { return new (t || StockModule)(); }, providers: [_services__WEBPACK_IMPORTED_MODULE_8__["DevicesService"], _services__WEBPACK_IMPORTED_MODULE_8__["StockService"], _services__WEBPACK_IMPORTED_MODULE_8__["WebSocketService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _stock_routing_module__WEBPACK_IMPORTED_MODULE_4__["StockRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_state__WEBPACK_IMPORTED_MODULE_7__["stocksFeatureKey"], _state__WEBPACK_IMPORTED_MODULE_7__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature(_state__WEBPACK_IMPORTED_MODULE_7__["effects"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StockModule, { declarations: [_containers__WEBPACK_IMPORTED_MODULE_5__["StockRootComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_5__["StockListComponent"],
        _components__WEBPACK_IMPORTED_MODULE_6__["StockCardComponent"],
        _components__WEBPACK_IMPORTED_MODULE_6__["ErrorScreenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _stock_routing_module__WEBPACK_IMPORTED_MODULE_4__["StockRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]], exports: [_containers__WEBPACK_IMPORTED_MODULE_5__["StockRootComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _stock_routing_module__WEBPACK_IMPORTED_MODULE_4__["StockRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_state__WEBPACK_IMPORTED_MODULE_7__["stocksFeatureKey"], _state__WEBPACK_IMPORTED_MODULE_7__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature(_state__WEBPACK_IMPORTED_MODULE_7__["effects"]),
                ],
                declarations: [
                    _containers__WEBPACK_IMPORTED_MODULE_5__["StockRootComponent"],
                    _containers__WEBPACK_IMPORTED_MODULE_5__["StockListComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_6__["StockCardComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_6__["ErrorScreenComponent"],
                ],
                exports: [_containers__WEBPACK_IMPORTED_MODULE_5__["StockRootComponent"]],
                providers: [_services__WEBPACK_IMPORTED_MODULE_8__["DevicesService"], _services__WEBPACK_IMPORTED_MODULE_8__["StockService"], _services__WEBPACK_IMPORTED_MODULE_8__["WebSocketService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "kvBJ":
/*!****************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/services/stock.mock.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: MockStockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockStockService", function() { return MockStockService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "NvTN");


class MockStockService {
    getStocks() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
    }
    formatStocksResponse() {
        return _models__WEBPACK_IMPORTED_MODULE_1__["mockStocks"];
    }
}


/***/ }),

/***/ "o2gQ":
/*!*********************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/services/devices/devices.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "HOZh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");





class DevicesService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.observeViewPort();
    }
    //https://material.angular.io/cdk/layout/overview
    observeViewPort() {
        this.isMobile$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => result.matches));
    }
}
DevicesService.ɵfac = function DevicesService_Factory(t) { return new (t || DevicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
DevicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DevicesService, factory: DevicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DevicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "pGzk":
/*!*********************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/+state/effects/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _stocks_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.effects */ "CB0M");

const effects = [_stocks_effects__WEBPACK_IMPORTED_MODULE_0__["StocksEffects"]];


/***/ }),

/***/ "piR1":
/*!*******************************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/components/stock-card/stock-card.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: StockCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCardComponent", function() { return StockCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "OWSf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");





function StockCardComponent_div_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const stock_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, stock_r1.fiftyTwoWeekLow, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, stock_r1.fiftyTwoWeekHigh, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, stock_r1.regularMarketVolume), " ");
} }
function StockCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StockCardComponent_div_1_ng_container_13_Template, 10, 11, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockCardComponent_div_1_Template_input_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const stock_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onToggle(stock_r1, $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stock_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("stock-card__item--active", stock_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, stock_r1.symbol), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 10, stock_r1.currentPrice, stock_r1.currency), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 13, stock_r1.dayHighPrice, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 16, stock_r1.dayLowPrice, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, ctx_r0.devicesService.isMobile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", stock_r1.isActive);
} }
class StockCardComponent {
    constructor(devicesService) {
        this.devicesService = devicesService;
        this.notifyToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onToggle(stock, isChecked) {
        setTimeout(() => this.notifyToggle.emit(Object.assign(Object.assign({}, stock), { isActive: isChecked })), 300);
    }
}
StockCardComponent.ɵfac = function StockCardComponent_Factory(t) { return new (t || StockCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["DevicesService"])); };
StockCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockCardComponent, selectors: [["stock-card"]], inputs: { stocksList: "stocksList" }, outputs: { notifyToggle: "notifyToggle" }, decls: 2, vars: 1, consts: [[1, "stock-card__group"], ["class", "stock-card__item", 3, "stock-card__item--active", 4, "ngFor", "ngForOf"], [1, "stock-card__item"], [1, "stock-card__item__title"], [1, "stock-card__item__current-price", "f-20"], [1, "stock-card__item__daily-high-price", "f-20"], [1, "stock-card__item__daily-low-price", "f-20"], [4, "ngIf"], [1, "stock-card__item__switch"], ["type", "checkbox", 1, "stock-card__item__checkbox", 3, "checked", "click"], [1, "stock-card__item__switch--slider"], [1, "stock-card__item__fiftyTwoWeekLow", "f-20"], [1, "stock-card__item__fiftyTwoWeekHigh", "f-20"], [1, "stock-card__item__regularMarketVolume", "f-20"]], template: function StockCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StockCardComponent_div_1_Template, 18, 21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stocksList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".stock-card__group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.stock-card__item {\n  background-color: #ecf0f1;\n  display: flex;\n  flex: 0 0 200px;\n  gap: 1.5rem;\n  flex-direction: column;\n  align-items: center;\n  padding: 4rem 1rem 2rem;\n  margin: 1rem;\n  color: #34495e;\n  border-radius: 10px;\n}\n.stock-card__item--active {\n  background-color: #2ecc71;\n}\n.stock-card__item__title {\n  font-weight: 700;\n  font-size: 36px;\n  text-align: center;\n}\n.stock-card__item__switch {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 40px;\n}\n.stock-card__item__switch input {\n  width: 0;\n}\n.stock-card__item__switch--slider:after {\n  content: \"OFF\";\n  display: block;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 60%;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #ffffff;\n}\n.stock-card__item__switch input:checked + .stock-card__item__switch--slider {\n  background-color: #34495e;\n}\n.stock-card__item__switch input:checked + .stock-card__item__switch--slider:before {\n  transform: translateX(60px);\n  background-color: #1abc9c;\n}\n.stock-card__item__switch input:checked + .stock-card__item__switch--slider:after {\n  content: \"ON\";\n  left: 40%;\n  color: #1abc9c;\n}\n.stock-card__item__switch--slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #bdc3c7;\n  transition: 0.4s;\n  border-radius: 40px;\n}\n.stock-card__item__switch--slider:before {\n  position: absolute;\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  left: 4px;\n  bottom: 5px;\n  background-color: #7f8c9a;\n  transition: 0.3s;\n  border-radius: 50%;\n}\n.stock-card__item .f-20 {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc3RvY2svc3JjL2xpYi9jb21wb25lbnRzL3N0b2NrLWNhcmQvc3RvY2stY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUVFO0VBQ0UseUJBQUE7RUFJQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSEo7QUFSSTtFQUNFLHlCQUFBO0FBVU47QUFDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ047QUFDSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNOO0FBQU07RUFDRSxRQUFBO0FBRVI7QUFBTTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQU07RUFDRSx5QkFBQTtBQUVSO0FBRFE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FBR1Y7QUFEUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUdWO0FBQU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHVjtBQUNJO0VBQ0UsZUFBQTtBQUNOIiwiZmlsZSI6ImxpYnMvc3RvY2svc3JjL2xpYi9jb21wb25lbnRzL3N0b2NrLWNhcmQvc3RvY2stY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9jay1jYXJkIHtcbiAgJl9fZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICZfX2l0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XG4gICAgJi0tYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XG4gICAgfVxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMCAwIDIwMHB4O1xuICAgIGdhcDogMS41cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0cmVtIDFyZW0gMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgY29sb3I6ICMzNDQ5NWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAmX190aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAmX19zd2l0Y2gge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgIH1cbiAgICAgICYtLXNsaWRlcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICdPRkYnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDYwJTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICAgIGlucHV0OmNoZWNrZWQgKyAuc3RvY2stY2FyZF9faXRlbV9fc3dpdGNoLS1zbGlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlO1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwcHgpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJ09OJztcbiAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgY29sb3I6ICMxYWJjOWM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYtLXNsaWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y4YzlhO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5mLTIwIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stock-card',
                templateUrl: './stock-card.component.html',
                styleUrls: ['./stock-card.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["DevicesService"] }]; }, { stocksList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notifyToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "poPo":
/*!***********************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/+state/selectors/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: selectStocksState, getStocksState, getStocksData, isStocksLoaded, isStocksLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stocks_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.selectors */ "Q/Ru");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectStocksState", function() { return _stocks_selectors__WEBPACK_IMPORTED_MODULE_0__["selectStocksState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStocksState", function() { return _stocks_selectors__WEBPACK_IMPORTED_MODULE_0__["getStocksState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStocksData", function() { return _stocks_selectors__WEBPACK_IMPORTED_MODULE_0__["getStocksData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStocksLoaded", function() { return _stocks_selectors__WEBPACK_IMPORTED_MODULE_0__["isStocksLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStocksLoading", function() { return _stocks_selectors__WEBPACK_IMPORTED_MODULE_0__["isStocksLoading"]; });




/***/ }),

/***/ "v6dn":
/*!*****************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/components/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: ErrorScreenComponent, StockCardComponent, MockStockCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_screen_error_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-screen/error-screen.component */ "Ypez");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorScreenComponent", function() { return _error_screen_error_screen_component__WEBPACK_IMPORTED_MODULE_0__["ErrorScreenComponent"]; });

/* harmony import */ var _stock_card_stock_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-card/stock-card.component */ "piR1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockCardComponent", function() { return _stock_card_stock_card_component__WEBPACK_IMPORTED_MODULE_1__["StockCardComponent"]; });

/* harmony import */ var _stock_card_stock_card_mock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-card/stock-card.mock.component */ "VVR5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockStockCardComponent", function() { return _stock_card_stock_card_mock_component__WEBPACK_IMPORTED_MODULE_2__["MockStockCardComponent"]; });






/***/ }),

/***/ "xvQ6":
/*!***************************************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/services/web-socket/web-socket.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/webSocket */ "YCUu");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "NvTN");
/* harmony import */ var _yahoo_proto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./yahoo-proto */ "7Siw");







const { quotefeeder } = Object(_yahoo_proto__WEBPACK_IMPORTED_MODULE_5__["getProtoRoot"])();
class WebSocketService {
    constructor() {
        this.socketOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.socketClose$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    connect() {
        if (!this.socket$) {
            this.websocket$ = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__["webSocket"])({
                closeObserver: this.socketClose$,
                deserializer: (result) => {
                    try {
                        const buffer = this.base64ToArray(result.data);
                        const decoded = quotefeeder.PricingData.decode(buffer);
                        const stockObj = quotefeeder.PricingData.toObject(decoded, {
                            enums: String,
                        });
                        console.log(stockObj);
                        return this.formatStreamData(stockObj);
                    }
                    catch (e) {
                        return {};
                    }
                },
                openObserver: this.socketOpen$,
                url: _models__WEBPACK_IMPORTED_MODULE_4__["QUOTE_STREAMER_WEBSOCKET"],
            });
            this.socket$ = this.websocket$.pipe(this.reconnect, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]));
        }
        return this.socket$;
    }
    send(symbol) {
        this.websocket$.next({ subscribe: symbol });
    }
    unsubscribe(symbol) {
        this.websocket$.next({ unsubscribe: symbol });
    }
    reconnect(observable) {
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])((errors) => errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delayWhen"])((_) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(2000)))));
    }
    /**
     * Helper function to convert a base 64 string into a bytes array
     * @param {String} base64 a string in base 64
     */
    base64ToArray(base64) {
        var binaryString = atob(base64);
        var len = binaryString.length;
        var bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }
    /**
     * Helper function to trim a float number to a given places (toFixed returns string)
     * @param {Number} val value to be trimmed
     * @param {Number} place how many digits you need after decimal point.
     */
    getFixedNumber(val, place) {
        if (isNaN(val)) {
            return val;
        }
        const pow = Math.pow(10, place);
        return +(Math.round(val * pow) / pow);
    }
    formatStreamData(stock) {
        if (stock) {
            return {
                name: stock.displayName || stock.id,
                symbol: stock.id,
                currentPrice: this.getFixedNumber(stock.price, 2),
            };
        }
    }
}
WebSocketService.ɵfac = function WebSocketService_Factory(t) { return new (t || WebSocketService)(); };
WebSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebSocketService, factory: WebSocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebSocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "y0vh":
/*!*********************************************************************************************!*\
  !*** /Users/sathishkumar/Developer/Angular/task/libs/stock/src/lib/+state/actions/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: StocksActionTypes, GetStocks, GetStocksSuccess, GetStocksFail, SetStocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stocks_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.actions */ "1Esj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StocksActionTypes", function() { return _stocks_actions__WEBPACK_IMPORTED_MODULE_0__["StocksActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStocks", function() { return _stocks_actions__WEBPACK_IMPORTED_MODULE_0__["GetStocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStocksSuccess", function() { return _stocks_actions__WEBPACK_IMPORTED_MODULE_0__["GetStocksSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStocksFail", function() { return _stocks_actions__WEBPACK_IMPORTED_MODULE_0__["GetStocksFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetStocks", function() { return _stocks_actions__WEBPACK_IMPORTED_MODULE_0__["SetStocks"]; });




/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map