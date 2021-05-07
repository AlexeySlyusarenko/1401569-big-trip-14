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

export const mockCities = [];
export const mockOffers = [];
export const mockPoints = [];
const NUMBER_POINT = 30;

CITY_LIST.forEach((value) => {
  mockCities.push(getMockCity(value, CITY_DESCRIPTION));
});

TYPE_LIST.forEach((value) => {
  mockOffers.push(getMockOffer(value, DATA_LIST));
});

for (let i = 0; i < NUMBER_POINT; i++) {
  mockPoints.push(
    getMockPoint(
      mockCities[getRandomInteger(0, mockCities.length - 1)],
      mockOffers[getRandomInteger(0, mockOffers.length - 1)],
    ),
  );
}
