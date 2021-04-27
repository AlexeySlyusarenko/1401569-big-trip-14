import {getRandomInteger} from '../utils/random.js';

const getMockPoint = (city = {}, offer = {}, id = getRandomInteger(1000, 1000000)) => {
  const getRandomDate = () => {
    const start = new Date();
    const end = new Date();

    start.setTime(Date.now() + getRandomInteger(10000000, 100000000));
    end.setTime(start.getTime() + getRandomInteger(10000000, 500000000));

    return {
      start: start.toISOString(),
      end: end.toISOString(),
    };
  };

  const date = getRandomDate();

  return {
    basePrice: getRandomInteger(15, 1000),
    dateFrom: date.start,
    dateTo: date.end,
    destination: city,
    id: id,
    isFavorite: !getRandomInteger(0, 1),
    offers: offer.offers,
    type: offer.type,
  };
};

export {
  getMockPoint
};
