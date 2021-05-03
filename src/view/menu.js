import {setCapitalLetter} from '../utils/string.js';

export const createMenuElement = (menu = []) => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">

  ${menu.reduce((accumulator, item, index) => (
    `${accumulator}
    <a class="trip-tabs__btn ${index ? 'trip-tabs__btn--active' : ''}" href="#">${setCapitalLetter(item)}</a>`
  ), '')}

  </nav>`
);
