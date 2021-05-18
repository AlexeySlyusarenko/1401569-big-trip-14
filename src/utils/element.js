import AbstractElement from '../view/abstract-element';

export const createElement = (template) => {
  const element = document.createElement('div');

  element.innerHTML = template;

  return element.firstChild;
};

export const replaceElement = (container, newElement, oldElement) => {
  if (container instanceof AbstractElement) {
    container = container.getElement();
  }

  if (oldElement instanceof AbstractElement) {
    oldElement = oldElement.getElement();
  }

  if (newElement instanceof AbstractElement) {
    newElement = newElement.getElement();
  }

  container.replaceChild(newElement, oldElement);
};

export const renderElement = (container, element, place = 'beforeend') => {
  if (container instanceof AbstractElement) {
    container = container.getElement();
  }

  if (element instanceof AbstractElement) {
    element = element.getElement();
  }

  switch (place) {
    case ('afterbegin'):
      container.prepend(element);
      break;
    case ('beforeend'):
      container.append(element);
      break;
  }
};
