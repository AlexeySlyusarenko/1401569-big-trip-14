import AbstractElement from './abstract-element.js';

const createPointEmptyListElement = () => {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
};

export default class PointEmptyListElement extends AbstractElement {
  getTemplate() {
    return createPointEmptyListElement();
  }
}
