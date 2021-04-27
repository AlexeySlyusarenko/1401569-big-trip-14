import {getRandomInteger} from '../utils/random.js';

const getMockOffer = (type = '', dataList = []) => {
  const generateOffers = () => (
    dataList.filter(() => getRandomInteger(0, 1))
  );

  return {
    type: type,
    offers: generateOffers(),
  };
};

export {
  getMockOffer
};
