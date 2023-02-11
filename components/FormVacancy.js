export default class FormVacancy {
  constructor(formName) {
    this._form = document.forms[formName];
    this._formFileInput = this._form.querySelector('.form__input_type_file');
    this._formTextAreaInput = this._form.querySelector('.form__input_type_textarea');
    this._symbols = this._form.querySelector('.form__symbols');
    this._file = this._form.querySelector('.form__file');
  }

  _showFileName() {
    this._file.textContent = this._formFileInput.files[0].name;
    this._file.style.color = 'black';
  }

  _toggleSymbolsLeft() {
    this._symbols.textContent = 2000 - this._formTextAreaInput.value.length;
  }

  setEventListners() {
    this._formFileInput.addEventListener('change', () => {
      this._showFileName();
    })

    this._formTextAreaInput.addEventListener('input', () => {
      this._toggleSymbolsLeft();
    })
  }
}
