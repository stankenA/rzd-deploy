export default class Cell {
  constructor(cellSelector, handleClick) {
    this._cell = document.querySelector(cellSelector);
    this._button = this._cell.querySelector('.info__cell-btn');
    this._list = this._cell.querySelector('.info__list');
    this._handleClick = handleClick;
  }

  open() {
    this._cell.classList.add('info__cell_opened');
    this._list.classList.add('info__list_opened');
    this._button.classList.remove('info__cell-btn_rotate');
  }

  close() {
    this._cell.classList.remove('info__cell_opened');
    this._list.classList.remove('info__list_opened');
    this._button.classList.add('info__cell-btn_rotate');
  }

  _checkClientWidth() {
    if (document.documentElement.clientWidth < 768) {
      this.close();
    }
  }

  setEventListeners() {
    this._cell.addEventListener('click', this._handleClick);
    this._checkClientWidth();
  }
}
