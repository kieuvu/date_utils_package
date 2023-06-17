"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DateUtilsImplement = /** @class */ (function () {
    function DateUtilsImplement(dateTime) {
        if (dateTime === void 0) { dateTime = null; }
        this._init = function (date) {
            return DateUtilsImplement.isValidDateTime(date)
                ? new Date(date)
                : DateUtilsImplement.getCurrentTime();
        };
        this._dateTime = this._init(dateTime);
    }
    var _a;
    _a = DateUtilsImplement;
    DateUtilsImplement.getCurrentTime = function () {
        return new Date();
    };
    DateUtilsImplement.isValidDateTime = function (datetimeString) {
        var timestamp = Date.parse(datetimeString);
        return isNaN(timestamp) === false;
    };
    DateUtilsImplement.getDaysInMonth = function (month, year) {
        if (month === void 0) { month = new Date().getMonth() + 1; }
        if (year === void 0) { year = new Date().getFullYear(); }
        var date = new Date(year, month - 1, 1);
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    DateUtilsImplement.isLeapYear = function (year) {
        if (year === void 0) { year = new Date().getFullYear(); }
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
    DateUtilsImplement.getDaysInYear = function (year) {
        if (year === void 0) { year = new Date().getFullYear(); }
        return _a.isLeapYear(year) ? 366 : 365;
    };
    DateUtilsImplement.isToday = function (dateTimeString) {
        var now = new Date();
        var date = new Date(dateTimeString);
        return (date.getDate() === now.getDate() &&
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear());
    };
    return DateUtilsImplement;
}());
var DateUtils = /** @class */ (function (_super) {
    __extends(DateUtils, _super);
    function DateUtils(_dateTime) {
        if (_dateTime === void 0) { _dateTime = null; }
        var _this = _super.call(this, _dateTime) || this;
        _this.getDateTime = function () {
            return _this._dateTime;
        };
        _this.getDaysInMonth = function () {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            return DateUtils.getDaysInMonth(month, year);
        };
        _this.isLeapYear = function () {
            var year = _this.getDateTime().getFullYear();
            return DateUtils.isLeapYear(year);
        };
        _this.getDaysInYear = function () {
            var year = _this.getDateTime().getFullYear();
            return DateUtils.getDaysInYear(year);
        };
        _this.isToday = function () {
            return DateUtils.isToday(_this.getDateTime());
        };
        return _this;
    }
    return DateUtils;
}(DateUtilsImplement));
exports.default = DateUtils;
