import {
  createElement
} from '../utils/element.js';

export default class AbstractElement {
  constructor() {
    if (new.target === Element) {
      throw new Error('Не создан потомок класса');
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error('Не определен метод getTemplate() для потомока класса');
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
