export default class Item {
  constructor({cardSelector, config, handleOpenPopup}) {
    this._template = document.querySelector(cardSelector).content;
    this._link = config.link;
    this._title = config.title;
    this._openPopup = handleOpenPopup;
  }

  _getTemplate () {
    this._element = this._template.querySelector('.item').cloneNode(true);
  }

  _setEventListeners() {
    this._element.addEventListener('click', this._openPopup)
  }

  generateCard () {
    this._getTemplate();
    this._setEventListeners();

    this._image = this._element.querySelector('.item__img');
    this._image.src = this._link;
    this._image.alt = this._title;
    this._element.querySelector('.item__name').textContent = this._title;

    return this._element;

  }
}
