import TariffRows from "../components/TariffRows.js";
import Survey from "../components/Survey.js";
import FormVacancy from "../components/FormVacancy.js";
import { swapInputValues } from "../utils/utils.js"
import MobileMenu from "../components/MobileMenu.js";
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

// Mobile menu
const mobileMenu = new MobileMenu('.header', '.page');
mobileMenu.setEventListeners();

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

//Form
const vacancyForm = new FormVacancy('vacancyForm');
vacancyForm.setEventListners();
