import {createTripElement} from './view/trip.js';
import {createMenuElement} from './view/menu.js';
import {createFilterElement} from './view/filter.js';
import {createSortElement} from './view/sort.js';
import {createPointElement} from './view/point.js';
import {createFormEditPointElement} from './view/form-edit-point.js';
import {createFormAddPointElement} from './view/form-add-point.js';

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
insertElement(tripEventsListElement, createPointElement());
insertElement(tripEventsListElement, createPointElement());
insertElement(tripEventsListElement, createPointElement());
insertElement(tripEventsListElement, createFormEditPointElement(), 'afterbegin');
insertElement(tripEventsListElement, createFormAddPointElement('offer', 'destination'));
insertElement(tripEventsListElement, createFormAddPointElement('offer'));
insertElement(tripEventsListElement, createFormAddPointElement('destination'));
