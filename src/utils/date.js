export const datePoint = (dateFrom, dateTo) => ({
  _start: new Date(dateFrom),
  _end: new Date(dateTo),

  getDay() {
    return this._start.toString().match(/[a-z,A-Z]+ [0-9]+/i);
  },
  getDayDescription() {
    return this._start.toISOString().match(/^[0-9,-]*/i);
  },

  getTime(date) {
    return date.toISOString().match(/[0-9]*:[0-9]*/i);
  },
  getDateFrom() {
    return this.getTime(this._start);
  },
  getDateTo() {
    return this.getTime(this._end);
  },

  getTimeDescription(date) {
    return date.toISOString().match(/^[0-9,-]*T[0-9]*:[0-9]*/i);
  },
  getDateFromDescription() {
    return this.getTimeDescription(this._start);
  },
  getDateToDescription() {
    return this.getTimeDescription(this._end);
  },

  getTextTime(time, suffix) {
    if (time === 0) {
      return '';
    }

    return time < 10 ?
      `0${time}${suffix} ` :
      `${time}${suffix} `;
  },

  getDuration() {
    const duration = this._end - this._start;
    const days = Math.floor(duration / 86400000);
    const hours = Math.floor((duration - days * 86400000) / 3600000);
    const minutes = Math.ceil((duration - days * 86400000 - hours * 3600000) / 60000);

    return `${this.getTextTime(days, 'D')}${this.getTextTime(hours, 'H')}${this.getTextTime(minutes, 'M')}`;
  },
});
