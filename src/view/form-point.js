import {
  datePoint
} from '../utils/date.js';
import {
  createElement
} from '../utils/element.js';

export default class PointFormElement {
  constructor(cities = [], offers = [], point) {
    this._cities = cities;
    this._offers = offers;
    this._point = point;

    this._element = null;
  }

  _createElement(cities = [], offers = [], point) {
    const defaultPoint = point ?
      point :
      Object.assign(
        {},
        {
          destination: cities[0],
        },
        offers[0],
        {
          dateFrom: new Date(),
          dateTo: new Date(),
        },
      );

    const date = datePoint(defaultPoint.dateFrom, defaultPoint.dateTo);

    const typeListElement = `${offers.reduce((accumulator, offer, index) => (
      `${accumulator}
      <div class="event__type-item">
        <input id="event-type-${offer.type}-${index + 1}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offer.type}">
        <label class="event__type-label  event__type-label--${offer.type}" for="event-type-${offer.type}-${index + 1}">${offer.type}</label>
      </div>`
    ), '')}`;

    const cityOptionListElement = `${cities.reduce((accumulator, city) => (
      `${accumulator}
      <option value="${city.name}"></option>`
    ), '')}`;

    const rollupButtonElement = point ?
      `<button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>` :
      '';

    const offerSelectorListElement = defaultPoint.offers.reduce((accumulator, offer, index) => (
      `${accumulator}
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${index + 1}" type="checkbox" name="event-offer-luggage">
        <label class="event__offer-label" for="event-offer-luggage-${index + 1}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`), '');
    const offersElement = offerSelectorListElement ?
      `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${offerSelectorListElement}
        </div>
      </section>` :
      '';

    const destinationDescriptionElement = defaultPoint.destination.description ?
      `<p class="event__destination-description">${defaultPoint.destination.description}</p>` :
      '';
    const destinationPhotosElement = defaultPoint.destination.pictures.length ?
      `<div class="event__photos-container">
        <div class="event__photos-tape">
    ${defaultPoint.destination.pictures.reduce((accumulator, picture) => (
    `${accumulator}
      <img class="event__photo" src="${picture.src}" alt="${picture.description}">`
  ), '')}
        </div>
      </div>` :
      '';
    const destinationElement = destinationDescriptionElement || destinationPhotosElement ?
      `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        ${destinationDescriptionElement}
        ${destinationPhotosElement}
      </section>` :
      '';

    const detailsElement = offersElement || destinationElement ?
      `<section class="event__details">
        ${offersElement}
        ${destinationElement}
      </section>` :
      '';

    return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${defaultPoint.type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${typeListElement}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${defaultPoint.type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${defaultPoint.destination.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${cityOptionListElement}
                    </datalist>
                  </div>
                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${date.getInputDateFrom()}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${date.getInputDateTo()}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${defaultPoint.basePrice ? defaultPoint.basePrice : 0}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  ${rollupButtonElement}
                </header>
                ${detailsElement}
              </form>
            </li>`;
  }

  getTemplate() {
    return this._createElement(this._cities, this._offers, this._point);
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
