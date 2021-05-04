import {setCapitalLetter} from '../utils/string.js';
import {createElement} from '../utils/element.js';

export default class MenuElement {
  constructor() {
    this._element = null;
  }

  _createElement() {
    const MENU_LIST = [
      'table',
      'stats',
    ];

    const menuElement = MENU_LIST.reduce((accumulator, item, index) => (
      `${accumulator}
      <a class="trip-tabs__btn ${index ? 'trip-tabs__btn--active' : ''}" href="#">${setCapitalLetter(item)}</a>`
    ), '');

    return `<nav class="trip-controls__trip-tabs  trip-tabs">
              ${menuElement}
            </nav>`;
  }

  getTemplate() {
    return this._createElement();
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
