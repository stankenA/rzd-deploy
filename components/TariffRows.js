export default class TariffRows {
  constructor(rowSelector) {
    this._rows = document.querySelectorAll(rowSelector);
  }

  _toggleTxtBlock(txtBlock) {
    txtBlock.classList.toggle('table__txt-container_closed')
  }

  _toggleButton(btn) {
    btn.classList.toggle('tariff__button_opened');
  }

  setEventListeners() {
    this._rows.forEach((row) => {
      row.addEventListener('click', () => {
        const button = row.querySelector('.tariff__button');
        const txtBlock = row.querySelector('.table__txt-container');
        this._toggleTxtBlock(txtBlock);
        this._toggleButton(button);
      })
    })
  }
}
