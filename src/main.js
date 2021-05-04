import {TRIP_SORT_LIST} from './const/data-trip-sort';

import {renderElement} from './utils/element.js';

import TripElement from './view/trip.js';
import MenuElement from './view/menu.js';
import FilterElement from './view/filter.js';
import SortElement from './view/sort.js';
import PointElement from './view/point.js';
import FormPointElement from './view/form-point.js';

import {
  mockPoints,
  mockCities,
  mockOffers
} from './mocks/mock.js';

const siteHeaderElem = document.querySelector('.page-header');
const siteMainElem = document.querySelector('.page-main');

const tripMainElem = siteHeaderElem.querySelector('.trip-main');
renderElement(tripMainElem, new TripElement(mockPoints).getElement(), 'afterbegin');

const tripControlsElem = tripMainElem.querySelector('.trip-controls');
renderElement(tripControlsElem, new MenuElement().getElement());
renderElement(tripControlsElem, new FilterElement().getElement());

const tripEventsElem = siteMainElem.querySelector('.trip-events');
renderElement(tripEventsElem, new SortElement(TRIP_SORT_LIST).getElement());

tripEventsElem.insertAdjacentHTML(
  'beforeend',
  '<ul class="trip-events__list"></ul>',
);

const tripEventsListElement = tripEventsElem.querySelector('.trip-events__list');
const renderPoint = (container, point) => {
  const pointComponent = new PointElement(point);
  const pointFormComponent = new FormPointElement(mockCities, mockOffers, point);

  renderElement(container, pointComponent.getElement());

  pointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    container.replaceChild(pointFormComponent.getElement(), pointComponent.getElement());
  });

  pointFormComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    container.replaceChild(pointComponent.getElement(), pointFormComponent.getElement());
  });

  pointFormComponent.getElement().querySelector('form').addEventListener('submit', () => {
    container.replaceChild(pointComponent.getElement(), pointFormComponent.getElement());
  });
};

for (const point of mockPoints) {
  renderPoint(tripEventsListElement, point);
}
