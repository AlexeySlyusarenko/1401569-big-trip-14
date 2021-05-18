import AbstractElement from './abstract-element.js';

const createTemplate = (sort) => {
  const sortElement = sort.reduce((accumulator, item) => (
    `${accumulator}
      <div class="trip-sort__item  trip-sort__item--${item}">
        <input id="sort-${item}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item}">
        <label class="trip-sort__btn" for="sort-${item}">${item}</label>
      </div>`
  ), '');

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${sortElement}
          </form>`;
};
export default class SortElement extends AbstractElement {
  constructor(sort = []) {
    super();

    this._sort = sort;
  }

  getTemplate() {
    return createTemplate(this._sort);
  }
}
