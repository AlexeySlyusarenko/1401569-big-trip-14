import AbstractElement from '../view/abstract-element.js';
import {
  replaceElement,
  renderElement
} from './element.js';

export const createPoint = (container, point, pointForm) => {
  if (container instanceof AbstractElement) {
    container = container.getElement();
  }

  const showFormEditPoint = () => {
    replaceElement(container, pointForm, point);
  };
  const hideFormEditPoint = () => {
    replaceElement(container, point, pointForm);
    document.removeEventListener('keydown', onEscKeyDown);
  };
  const onEscKeyDown = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault();
      hideFormEditPoint();
    }
  };

  renderElement(container, point);

  point.setClickHandler(() => {
    showFormEditPoint();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointForm.setClickHandler(() => {
    hideFormEditPoint();
  });

  pointForm.setSubmitHandler(() => {
    hideFormEditPoint();
  });
};
