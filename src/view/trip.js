import {
  datePoint,
  compareDay
} from '../utils/date.js';
import {createElement} from '../utils/element.js';

export default class TripElement {
  constructor(points) {
    this._points = points;

    this._element = null;
  }

  _createElement(points) {
    let maxDateFrom = points[0].dateFrom;
    let maxDateTo = points[0].dateTo;

    points.forEach((point) => {
      if (compareDay(maxDateFrom, point.dateFrom) === 1) {
        maxDateFrom = point.dateFrom;
      }
      if (compareDay(maxDateTo, point.dateTo) === -1) {
        maxDateTo = point.dateTo;
      }
    });

    const tripDuration = datePoint(maxDateFrom, maxDateTo).getTripDuration();

    const cityList = new Set();
    const tripCost = points.reduce((accumulator, point) => (
      cityList.add(point.destination.name),
      point.basePrice = accumulator + point.basePrice
    ), 0);

    const tripInfo =
      cityList.size < 3 ?
        Array.from(cityList).join(' &mdash; ') :
        `${points[0].destination.name} &mdash; ... &mdash; ${points[points.length - 1].destination.name}`;

    return `<section class="trip-main__trip-info  trip-info">
              <div class="trip-info__main">
                <h1 class="trip-info__title">${tripInfo}</h1>

                <p class="trip-info__dates">${tripDuration}</p>
              </div>

              <p class="trip-info__cost">
                Total: &euro;&nbsp;<span class="trip-info__cost-value">${tripCost}</span>
              </p>
            </section>`;
  }

  getTemplate() {
    return this._createElement(this._points);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
