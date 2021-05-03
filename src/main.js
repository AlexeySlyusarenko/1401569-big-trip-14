import {createTripElement} from './view/trip.js';
import {createMenuElement} from './view/menu.js';
import {createFilterElement} from './view/filter.js';
import {createSortElement} from './view/sort.js';
import {createPointElement} from './view/point.js';
import {showFormPointElement} from './view/form-point.js';

import {
  mockPoints,
  mockCities,
  mockOffers
} from './mocks/mock.js';

const insertElement = (containerElem, elementStr, placeStr = 'beforeend') => {
  containerElem.insertAdjacentHTML(placeStr, elementStr);
};

const siteHeaderElem = document.querySelector('.page-header');
const siteMainElem = document.querySelector('.page-main');

const tripMainElem = siteHeaderElem.querySelector('.trip-main');
insertElement(tripMainElem, createTripElement(), 'afterbegin');

const tripControlsElem = tripMainElem.querySelector('.trip-controls');
insertElement(tripControlsElem, createMenuElement());
insertElement(tripControlsElem, createFilterElement());

const tripEventsElem = siteMainElem.querySelector('.trip-events');
insertElement(tripEventsElem, createSortElement());

insertElement(tripEventsElem, '<ul class="trip-events__list"></ul>');

const tripEventsListElement = tripEventsElem.querySelector('.trip-events__list');
for (const point of mockPoints) {
  insertElement(tripEventsListElement, createPointElement(point));
}
insertElement(tripEventsListElement, showFormPointElement(mockCities, mockOffers), 'afterbegin');
