import {TRIP_SORT_LIST} from './const/data-trip-sort';

import {
  createElement,
  renderElement
} from './utils/element.js';

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

const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');

const tripMainElem = siteHeaderElement.querySelector('.trip-main');
renderElement(tripMainElem, new TripElement(mockPoints).getElement(), 'afterbegin');

const tripControlsElem = tripMainElem.querySelector('.trip-controls');
renderElement(tripControlsElem, new MenuElement().getElement());
renderElement(tripControlsElem, new FilterElement().getElement());

const tripEventsElement = siteMainElement.querySelector('.trip-events');
renderElement(tripEventsElement, new SortElement(TRIP_SORT_LIST).getElement());

renderElement(
  tripEventsElement,
  createElement('<ul class="trip-events__list"></ul>'),
);

const tripEventsListElement = tripEventsElement.querySelector('.trip-events__list');

const renderPoint = (container, point, mockCities, mockOffers) => {
  const pointComponent = new PointElement(point);
  const pointFormComponent = new FormPointElement(mockCities, mockOffers, point);

  const showFormEditPoint = () => {
    container.replaceChild(pointFormComponent.getElement(), pointComponent.getElement());
    document.addEventListener('keydown', onEscKeyDown);
  };
  const hideFormEditPoint = () => {
    container.replaceChild(pointComponent.getElement(), pointFormComponent.getElement());
    document.removeEventListener('keydown', onEscKeyDown);
  };
  const onEscKeyDown = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault();
      hideFormEditPoint();
    }
  };

  renderElement(container, pointComponent.getElement());

  pointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    showFormEditPoint();
  });

  pointFormComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    hideFormEditPoint();
  });

  pointFormComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    hideFormEditPoint();
  });
};

for (const point of mockPoints) {
  renderPoint(tripEventsListElement, point, mockCities, mockOffers);
}
