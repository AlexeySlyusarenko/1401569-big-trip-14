import {
  datePoint,
  compareDay
} from '../utils/date.js';

export const createTripElement = (points) => {
  let  i = 0;
  let dateFrom = points[i].dateFrom;
  let dateTo = points[i].dateTo;

  while (i < points.length - 1) {
    i++;
    if (compareDay(dateFrom, points[i].dateFrom) === -1) {
      dateFrom = points[i].dateFrom;
    }
    if (compareDay(dateTo, points[i].dateTo) === 1) {
      dateTo = points[i].dateTo;
    }
  }

  const date = datePoint(dateFrom, dateTo).getTripDuration();

  const cityList = new Set();
  let cost = 0;

  points.forEach((point) => {
    cityList.add(point.destination.name);
    cost += point.basePrice;
  });

  const tripInfo =
    cityList.size < 3 ?
      Array.from(cityList).join(' &mdash; ') :
      `${points[0].destination.name} &mdash; ... &mdash; ${points[points.length - 1].destination.name}`;

  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${tripInfo}</h1>

      <p class="trip-info__dates">${date}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>
  </section>`;
};
