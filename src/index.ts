interface IDateUtils {}

abstract class DateUtilsImplement implements IDateUtils {
  protected _dateTime: Date;

  public constructor(dateTime: string | null = null) {
    this._dateTime = this._init(dateTime);
  }

  private _init = (date: string | null): Date => {
    return DateUtilsImplement.isValidDateTime(date)
      ? new Date(date as string)
      : DateUtilsImplement.getCurrentTime();
  };

  public static getCurrentTime = (): Date => {
    return new Date();
  };

  public static isValidDateTime = (datetimeString: any): boolean => {
    const timestamp: number = Date.parse(datetimeString);
    return isNaN(timestamp) === false;
  };

  public static getDaysInMonth = (
    month: number = new Date().getMonth() + 1,
    year: number = new Date().getFullYear(),
  ): number => {
    const date: Date = new Date(year, month - 1, 1);

    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  public static isLeapYear = (year: number = new Date().getFullYear()): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  public static getDaysInYear = (year: number = new Date().getFullYear()): number => {
    return this.isLeapYear(year) ? 366 : 365;
  };

  public static isToday = (dateTimeString: Date | string): boolean => {
    const now: Date = new Date();
    const date: Date = new Date(dateTimeString as string);

    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  };
}

class DateUtils extends DateUtilsImplement {
  public constructor(_dateTime: string | null = null) {
    super(_dateTime);
  }

  public static parse = (dateTime: string) => {
    if (DateUtils.isValidDateTime(dateTime)) {
      return new DateUtils(dateTime);
    }

    throw new Error("Invalid date time string");
  };

  public getDateTime = (): Date => {
    return this._dateTime;
  };

  public getDaysInMonth = (): number => {
    const year: number = new Date().getFullYear();
    const month: number = new Date().getMonth() + 1;

    return DateUtils.getDaysInMonth(month, year);
  };

  public isLeapYear = (): boolean => {
    const year: number = this.getDateTime().getFullYear();
    return DateUtils.isLeapYear(year);
  };

  public getDaysInYear = (): number => {
    const year: number = this.getDateTime().getFullYear();
    return DateUtils.getDaysInYear(year);
  };

  public isToday = (): boolean => {
    return DateUtils.isToday(this.getDateTime());
  };
}

export default DateUtils;
