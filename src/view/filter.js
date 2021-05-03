export const createFilterElement = (filters = []) => (
  `<form class="trip-filters" action="#" method="get">

  ${filters.reduce((accumulator, filter) => (
    `${accumulator}
    <div class="trip-filters__filter">
      <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" checked>
      <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
    </div>`
  ), '')}

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);
