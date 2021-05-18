import AbstractElement from './abstract-element.js';

const createTemplate = () => {
  const FILTER_LIST = [
    'everything',
    'future',
    'past',
  ];

  const filtersElement = FILTER_LIST.reduce((accumulator, filter) => (
    `${accumulator}
      <div class="trip-filters__filter">
        <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" checked>
        <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
      </div>`
  ), '');

  return `<form class="trip-filters" action="#" method="get">
            ${filtersElement}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
};
export default class FilterElement extends AbstractElement {
  constructor() {
    super();
  }

  getTemplate() {
    return createTemplate();
  }
}
