export default class TariffRows {
  constructor(rowSelector) {
    this._rows = document.querySelectorAll(rowSelector);
  }

  // _toggleTxtBlock(txtBlock) {
  //   txtBlock.classList.toggle('table__txt-container_closed')
  // }

  _toggleButton(btn) {
    btn.classList.toggle('tariff__button_opened');
  }

  _toggleTxtBlock(container) {
    container.classList.toggle('table__txt-container_closed');

    if (container.classList.contains('table__txt-container_closed')) {
      container.style.height = '0px';
    } else {
      container.style.height = `${container.scrollHeight}px`;
    }
  }

  setEventListeners() {
    this._rows.forEach((row) => {
      const container = row.querySelector('.table__txt-container');
      const button = row.querySelector('.tariff__button');

      row.addEventListener('click', () => {

        this._toggleTxtBlock(container);
        this._toggleButton(button);
      })
    })
  }
}
