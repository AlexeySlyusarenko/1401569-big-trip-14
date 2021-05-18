const createElement = (template) => {
  const element = document.createElement('div');

  element.innerHTML = template;

  return element.firstChild;
};

const renderElement = (container, element, place = 'beforeend') => {
  switch (place) {
    case ('afterbegin'):
      container.prepend(element);
      break;
    case ('beforeend'):
      container.append(element);
      break;
  }
};

export {
  createElement,
  renderElement
};
