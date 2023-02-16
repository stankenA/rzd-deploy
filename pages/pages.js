import TariffRows from "../components/TariffRows.js";
import Survey from "../components/Survey.js";
import FormVacancy from "../components/FormVacancy.js";
import { swapInputValues } from "../utils/utils.js"
import {
  toInput,
  fromInput,
  swapBtn,
} from '../utils/constants.js'

// Clickable tariff rows
const tariffRows = new TariffRows('.tariff__row_clickable');
tariffRows.setEventListeners();

// Swap input values

swapBtn.addEventListener('click', () => {
  swapInputValues(toInput, fromInput);
})

//Survey

const survey = new Survey({
  surveySelector: '.survey',
  handleSurvey: () => {
    setTimeout(() => {
      survey.showResults();
      survey.hideBtns();
    }, 300)
  }
});

survey.setEventListeners();

// Mobile menu

const headerItems = document.querySelectorAll('.header__list-item');

headerItems.forEach((item) => {
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

const headerWrapper = document.querySelector('.header__wrapper');
const headerMobileBtn = document.querySelector('.header__mobile-btn');
const headerRightSide = document.querySelector('.header__right-side');
const headerUpper = document.querySelector('.header__upper')
const page = document.querySelector('.page');

headerMobileBtn.addEventListener('click', () => {
  headerWrapper.classList.toggle('header__wrapper_opened');
  headerRightSide.classList.toggle('header__right-side_opened');
  headerMobileBtn.classList.toggle('header__mobile-btn_opened');
  headerUpper.classList.toggle('header__upper_opened');
  page.classList.toggle('page_opened');
})

//Form

const vacancyForm = new FormVacancy('vacancyForm');
vacancyForm.setEventListners();
