export const createSortElement = (sort = []) => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">

  ${sort.reduce((accumulator, item) => (
    `${accumulator}
    <div class="trip-sort__item  trip-sort__item--${item}">
      <input id="sort-${item}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item}">
      <label class="trip-sort__btn" for="sort-${item}">${item}</label>
    </div>`
  ), '')}

  </form>`
);
