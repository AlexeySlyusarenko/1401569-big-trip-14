import {
  CITY_LIST,
  CITY_DESCRIPTION
} from '../const/data-cities.js';
import {
  TYPE_LIST,
  DATA_LIST
} from '../const/data-offers.js';

import {getRandomInteger} from '../utils/random.js';

import {getMockCity} from './mock-city.js';
import {getMockOffer} from './mock-offer.js';
import {getMockPoint} from './mock-point.js';

export const mockCities = CITY_LIST.map((value) => getMockCity(value, CITY_DESCRIPTION));
export const mockOffers = TYPE_LIST.map((value) => getMockOffer(value, DATA_LIST));
export const mockPoints = [];
const NUMBER_POINT = 0;

for (let i = 0; i < NUMBER_POINT; i++) {
  mockPoints.push(
    getMockPoint(
      mockCities[getRandomInteger(0, mockCities.length - 1)],
      mockOffers[getRandomInteger(0, mockOffers.length - 1)],
    ),
  );
}
