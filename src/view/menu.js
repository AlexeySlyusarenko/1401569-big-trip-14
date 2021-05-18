import {setCapitalLetter} from '../utils/string.js';
import AbstractElement from './abstract-element.js';

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
export default class MenuElement extends AbstractElement {
  constructor() {
    super();
  }

  getTemplate() {
    return createTemplate();
  }
}
