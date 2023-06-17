"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class DateUtilsImplement {
    constructor(dateTime = null) {
        this._init = (date) => {
            return DateUtilsImplement.isValidDateTime(date)
                ? new Date(date)
                : DateUtilsImplement.getCurrentTime();
        };
        this._dateTime = this._init(dateTime);
    }
}
_a = DateUtilsImplement;
DateUtilsImplement.getCurrentTime = () => {
    return new Date();
};
DateUtilsImplement.isValidDateTime = (datetimeString) => {
    const timestamp = Date.parse(datetimeString);
    return isNaN(timestamp) === false;
};
DateUtilsImplement.getDaysInMonth = (month = new Date().getMonth() + 1, year = new Date().getFullYear()) => {
    const date = new Date(year, month - 1, 1);
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};
DateUtilsImplement.isLeapYear = (year = new Date().getFullYear()) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
DateUtilsImplement.getDaysInYear = (year = new Date().getFullYear()) => {
    return _a.isLeapYear(year) ? 366 : 365;
};
DateUtilsImplement.isToday = (dateTimeString) => {
    const now = new Date();
    const date = new Date(dateTimeString);
    return (date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear());
};
class DateUtils extends DateUtilsImplement {
    constructor(_dateTime = null) {
        super(_dateTime);
        this.getDateTime = () => {
            return this._dateTime;
        };
        this.getDaysInMonth = () => {
            const year = new Date().getFullYear();
            const month = new Date().getMonth() + 1;
            return DateUtils.getDaysInMonth(month, year);
        };
        this.isLeapYear = () => {
            const year = this.getDateTime().getFullYear();
            return DateUtils.isLeapYear(year);
        };
        this.getDaysInYear = () => {
            const year = this.getDateTime().getFullYear();
            return DateUtils.getDaysInYear(year);
        };
        this.isToday = () => {
            return DateUtils.isToday(this.getDateTime());
        };
    }
}
exports.default = DateUtils;
