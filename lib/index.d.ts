interface IDateUtils {
}
declare abstract class DateUtilsImplement implements IDateUtils {
    protected _dateTime: Date;
    constructor(dateTime?: string | null);
    private _init;
    static getCurrentTime: () => Date;
    static isValidDateTime: (datetimeString: any) => boolean;
    static getDaysInMonth: (month?: number, year?: number) => number;
    static isLeapYear: (year?: number) => boolean;
    static getDaysInYear: (year?: number) => number;
    static isToday: (dateTimeString: Date | string) => boolean;
}
declare class DateUtils extends DateUtilsImplement {
    constructor(_dateTime?: string | null);
    static parse: (dateTime: string) => DateUtils;
    getDateTime: () => Date;
    getDaysInMonth: () => number;
    isLeapYear: () => boolean;
    getDaysInYear: () => number;
    isToday: () => boolean;
}
export default DateUtils;
