import {getRandomInteger} from '../utils/random.js';

const getMockCity = (city = '', descriptionTemplate = 'Lorem ipsum dolor sit amet') => {
  const generateDescription = () => {
    let result = descriptionTemplate.split('. ');
    let i;

    result[result.length - 1] = result[result.length - 1].slice(0, -1);

    result = result.filter(() => {
      if (i > 5) {
        return false;
      }

      const randomValue = getRandomInteger(0, 1);

      if (randomValue) {
        i++;
      }

      return randomValue;
    });

    return result.reduce((r, c) => `${r} ${c}.`);
  };

  const description = generateDescription();

  const generatePhotoUrl = () => {
    return `http://picsum.photos/248/152?r=${getRandomInteger(10, 10000)}`;
  };

  const generatePhotoDescription = () => {
    return description.match(/^([\w,а-я,А-Я]+ ){3}/gi);
  };

  const generatePhoto = () => {
    const result = [];
    const photoDescription = generatePhotoDescription();

    for (let i = 0; i < getRandomInteger(0, 10); i++) {
      result.push({
        src: generatePhotoUrl(),
        description: photoDescription,
      });
    }

    return result;
  };

  return {
    description,
    name: city,
    pictures: generatePhoto(),
  };
};

export {
  getMockCity
};
