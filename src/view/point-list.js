import AbstractElement from './abstract-element.js';

const createPointListElement = () => {
  return '<ul class="trip-events__list"></ul>';
};

export default class PointListElement extends AbstractElement {
  getTemplate() {
    return createPointListElement();
  }
}
