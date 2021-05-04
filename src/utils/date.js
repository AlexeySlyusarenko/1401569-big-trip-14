const datePoint = (dateFrom, dateTo) => ({
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

  getTextTime(time, suffix = '') {
    if (time === 0) {
      return '';
    }

    return time < 10 ?
      `0${time}${suffix}` :
      `${time}${suffix}`;
  },

  getDuration() {
    const duration = this._end - this._start;
    const days = Math.floor(duration / 86400000);
    const hours = Math.floor((duration - days * 86400000) / 3600000);
    const minutes = Math.ceil((duration - days * 86400000 - hours * 3600000) / 60000);

    return `${this.getTextTime(days, 'D ')}${this.getTextTime(hours, 'H ')}${this.getTextTime(minutes, 'M ')}`;
  },

  getTripDuration() {
    const start = this._start.toDateString().split(' ');
    const end = this._end.toDateString().split(' ');

    if (start[3] !== end[3]) {
      return `${start[3]} ${start[1]} ${start[2]} &mdash; ${end[3]} ${end[1]} ${end[2]}`;
    } else if (start[1] !== end[1]) {
      return `${start[1]} ${start[2]} &mdash; ${end[1]} ${end[2]}`;
    } else if (start[2] !== end[2]) {
      return `${start[1]} ${start[2]} &mdash; ${end[2]}`;
    }

    return `${start[1]} ${start[2]}`;
  },

  getInputTime(date) {
    const day = this.getTextTime(date.getDate());
    const month = this.getTextTime(date.getMonth() + 1);
    const year = this.getTextTime(date.getFullYear());
    const hours = this.getTextTime(date.getHours());
    const minutes = this.getTextTime(date.getMinutes());

    return `${day}/${month}/${year.slice(2)} ${hours}:${minutes}`;
  },
  getInputDateFrom() {
    return this.getInputTime(this._start);
  },
  getInputDateTo() {
    return this.getInputTime(this._end);
  },
});

const compareDay = (previousDate, currentDate) => {
  const current = currentDate.replace(/[-,T,.,:,Z]/ig, '');
  const previous = previousDate.replace(/[-,T,.,:,Z]/ig, '');

  if (previous < current) {
    return 1;
  } else if (previous === current) {
    return 0;
  } else {
    return -1;
  }
};

export {
  datePoint,
  compareDay
};
