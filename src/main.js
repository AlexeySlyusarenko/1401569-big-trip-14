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

<<<<<<< HEAD
const tripMainElem = siteHeaderElement.querySelector('.trip-main');
renderElement(tripMainElem, new TripElement(mockPoints).getElement(), 'afterbegin');
=======
const tripMainElem = siteHeaderElem.querySelector('.trip-main');
if(mockPoints.length) {
  renderElement(tripMainElem, new TripElement(mockPoints).getElement(), 'afterbegin');
}
>>>>>>> d5dc917 (Добавил сообщение о пустом списке)

const tripControlsElem = tripMainElem.querySelector('.trip-controls');
renderElement(tripControlsElem, new MenuElement().getElement());
renderElement(tripControlsElem, new FilterElement().getElement());

const tripEventsElement = siteMainElement.querySelector('.trip-events');
renderElement(tripEventsElement, new SortElement(TRIP_SORT_LIST).getElement());

renderElement(
  tripEventsElement,
  createElement('<ul class="trip-events__list"></ul>'),
);

<<<<<<< HEAD
const tripEventsListElement = tripEventsElement.querySelector('.trip-events__list');

=======
>>>>>>> d5dc917 (Добавил сообщение о пустом списке)
const renderPoint = (container, point, mockCities, mockOffers) => {
  const pointComponent = new PointElement(point);
  const pointFormComponent = new FormPointElement(mockCities, mockOffers, point);
  const pointElement = pointComponent.getElement();
  const pointFormElement = pointFormComponent.getElement();

  const showFormEditPoint = () => {
    container.replaceChild(pointFormElement, pointElement);
    document.addEventListener('keydown', onEscKeyDown);
  };
  const hideFormEditPoint = () => {
    container.replaceChild(pointElement, pointFormElement);
    document.removeEventListener('keydown', onEscKeyDown);
  };
  const onEscKeyDown = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault();
      hideFormEditPoint();
    }
  };

  renderElement(container, pointElement);

  pointElement.querySelector('.event__rollup-btn').addEventListener('click', () => {
    showFormEditPoint();
  });

  pointFormElement.querySelector('.event__rollup-btn').addEventListener('click', () => {
    hideFormEditPoint();
  });

  pointFormElement.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    hideFormEditPoint();
  });
};

const renderPointList = (container, pointsList) => {
  if (!pointsList.length) {
    container.insertAdjacentHTML(
      'beforeend',
      '<p class="trip-events__msg">Click New Event to create your first point</p>',
    );

    return;
  }

  container.insertAdjacentHTML(
    'beforeend',
    '<ul class="trip-events__list"></ul>',
  );
  const tripListElement = container.querySelector('.trip-events__list');

  for (const point of mockPoints) {
    renderPoint(tripListElement, point, mockCities, mockOffers);
  }
};

renderPointList(tripEventsElem, mockPoints);
