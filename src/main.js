import {TRIP_SORT_LIST} from './const/data-trip-sort';

import {
  renderElement
} from './utils/element.js';
import {
  createPoint
} from './utils/point.js';

import TripElement from './view/trip.js';
import MenuElement from './view/menu.js';
import FilterElement from './view/filter.js';
import SortElement from './view/sort.js';
import PointElement from './view/point.js';
import FormPointElement from './view/form-point.js';
import PointEmptyListElement from './view/point-list-empty.js';
import PointListElement from './view/point-list.js';

import {
  mockPoints,
  mockCities,
  mockOffers
} from './mocks/mock.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');

const tripMainElement = siteHeaderElement.querySelector('.trip-main');
if(mockPoints.length) {
  renderElement(tripMainElement, new TripElement(mockPoints), 'afterbegin');
}

const tripControlsElement = tripMainElement.querySelector('.trip-controls');
renderElement(tripControlsElement, new MenuElement());
renderElement(tripControlsElement, new FilterElement());

const tripEventsElement = siteMainElement.querySelector('.trip-events');
renderElement(tripEventsElement, new SortElement(TRIP_SORT_LIST));

if (mockPoints.length) {
  const pointList = new PointListElement();

  renderElement(tripEventsElement, pointList);

  for (const point of mockPoints) {
    createPoint(
      pointList,
      new PointElement(point),
      new FormPointElement(mockCities, mockOffers, point),
    );
  }
} else {
  renderElement(tripEventsElement, new PointEmptyListElement());
}
