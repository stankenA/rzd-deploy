export default class MobileMenu {
  constructor(headerSelector, pageSelector) {
    this._header = document.querySelector(headerSelector);
    this._page = document.querySelector(pageSelector);
    this._headerWrapper = this._header.querySelector('.header__wrapper');
    this._headerMobileBtn = this._header.querySelector('.header__mobile-btn');
    this._headerRightSide = this._header.querySelector('.header__right-side');
    this._headerUpper = this._header.querySelector('.header__upper');

    this._headerItems = this._header.querySelectorAll('.header__list-item')
  }

  _toggleMenu() {
    this._headerWrapper.classList.toggle('header__wrapper_opened');
    this._headerRightSide.classList.toggle('header__right-side_opened');
    this._headerMobileBtn.classList.toggle('header__mobile-btn_opened');
    this._headerUpper.classList.toggle('header__upper_opened');
    this._page.classList.toggle('page_opened');
    this._header.classList.toggle('header_opened');
  }

  _toggleHeaderItems() {
    this._headerItems.forEach((item) => {
      const list = item.querySelector('.header__mobile-list');
      const arrow = item.querySelector('.header__link-btn');

      item.addEventListener('click', () => {
        list.classList.toggle('header__mobile-list_opened');
        arrow.classList.toggle('header__link-btn_opened');

        if (list.classList.contains('header__mobile-list_opened')) {
          list.style.height = `${list.scrollHeight}px`;
        } else {
          list.style.height = '0px';
        }
      })
    })
  }

  setEventListeners() {
    this._headerMobileBtn.addEventListener('click', () => {
      this._toggleMenu();
      this._toggleHeaderItems();
    })
  }
}
