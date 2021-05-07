import {setCapitalLetter} from '../utils/string.js';

export const createMenuElement = () => {
  const MENU_LIST = [
    'table',
    'stats',
  ];

  return `<nav class="trip-controls__trip-tabs  trip-tabs">

  ${MENU_LIST.reduce((accumulator, item, index) => (
    `${accumulator}
    <a class="trip-tabs__btn ${index ? 'trip-tabs__btn--active' : ''}" href="#">${setCapitalLetter(item)}</a>`
  ), '')}

  </nav>`;
};
