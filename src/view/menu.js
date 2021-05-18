import {setCapitalLetter} from '../utils/string.js';
import {createElement} from '../utils/element.js';

const createTemplate = () => {
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
};
export default class MenuElement {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTemplate();
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
