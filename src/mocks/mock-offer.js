import {getRandomInteger} from '../utils/random.js';

const generateOffers = (dataList) => (
  dataList.filter(() => getRandomInteger(0, 1))
);

export const getMockOffer = (type = '', dataList = []) => {
  return {
    type: type,
    offers: generateOffers(dataList),
  };
};
