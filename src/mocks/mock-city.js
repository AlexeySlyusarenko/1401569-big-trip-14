import {getRandomInteger} from '../utils/random.js';

const generateDescription = (descriptionTemplate) => {
  let result = descriptionTemplate.split('. ');
  let i;

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

  return result.join('. ');
};

const generatePhotoUrl = () => {
  return `http://picsum.photos/248/152?r=${getRandomInteger(10, 10000)}`;
};

const generatePhotoDescription = (description) => {
  return description.match(/^([\w,а-я,А-Я]+ ){3}/gi);
};

const generatePhoto = (description) => {
  const result = [];
  const photoDescription = generatePhotoDescription(description);

  for (let i = 0; i < getRandomInteger(0, 10); i++) {
    result.push({
      src: generatePhotoUrl(),
      description: photoDescription,
    });
  }

  return result;
};

export const getMockCity = (city = '', descriptionTemplate = 'Lorem ipsum dolor sit amet') => {
  const description = generateDescription(descriptionTemplate);

  return {
    description,
    name: city,
    pictures: generatePhoto(description),
  };
};
