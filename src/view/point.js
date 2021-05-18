import {datePoint} from '../utils/date.js';
import AbstractElement from './abstract-element.js';

const createTemplate = ({
  type,
  destination,
  dateFrom,
  dateTo,
  basePrice,
  offers,
  isFavorite,
}) => {
  const date = datePoint(dateFrom, dateTo);
  const offersElement = offers.reduce((result, offer) => (
    `${result}
    <li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>`
  ), '');

  return `<li class="trip-events__item">
            <div class="event">
              <time class="event__date" datetime="${date.getDayDescription()}">${date.getDay()}</time>
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
              </div>
              <h3 class="event__title">${type[0].toUpperCase()}${type.slice(1)} ${destination.name}</h3>
              <div class="event__schedule">
                <p class="event__time">
                  <time class="event__start-time" datetime="${date.getDateFromDescription()}">${date.getDateFrom()}</time>
                  &mdash;
                  <time class="event__end-time" datetime="${date.getDateToDescription()}">${date.getDateTo()}</time>
                </p>
                <p class="event__duration">${date.getDuration()}</p>
              </div>
              <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
              </p>
              <h4 class="visually-hidden">Offers:</h4>
              <ul class="event__selected-offers">
                ${offersElement}
              </ul>
              <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
                <span class="visually-hidden">Add to favorite</span>
                <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                  <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                </svg>
              </button>
              <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
              </button>
            </div>
          </li>`;
};
export default class PointElement extends AbstractElement {
  constructor(point) {
    super();

    this._point = point;

    this._callback = {};
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createTemplate(this._point);
  }

  _clickHandler(event) {
    event.preventDefault();
    this._callback.click();
  }

  setClickHandler(cb) {
    this._callback.click = cb;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._clickHandler);
  }
}
