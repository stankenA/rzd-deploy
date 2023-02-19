import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';
import InfoCell from '../components/InfoCell.js';
import { swapInputValues } from '../utils/utils.js';
import MobileMenu from '../components/MobileMenu.js';
import {
  toInput,
  fromInput,
  swapBtn
} from '../utils/constants.js'

// Swap input values
swapBtn.addEventListener('click', () => {
  swapInputValues(toInput, fromInput);
})

//Main page info swiper
const infoSwiper = new Swiper('.info__swiper', {
  slidesPerView: 1,
  spaceBetween: 60,
  grabCursor: true,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".info__swiper-button_next",
    prevEl: ".info__swiper-button_prev",
  },
  pagination: {
    el: ".info__swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  autoplay: {
    delay: 3000,
  },
});


//Main page clickable cells
const privilegeCell = new InfoCell('.info__cell_type_privilege', () => {
  if (document.documentElement.clientWidth <= 768) {
    privilegeCell.toggle();
  } else {
    privilegeCell.open();
    workCell.close();
  }
});

const workCell = new InfoCell('.info__cell_type_work', () => {
  if (document.documentElement.clientWidth <= 768) {
    workCell.toggle();
  } else {
    privilegeCell.close();
    workCell.open();
  }
});

const schemeCell = new InfoCell('.info__cell_type_scheme', () => {
  if (document.documentElement.clientWidth <= 768) {
    schemeCell.toggle();
  } else {
    schemeCell.open();
    economyCell.close();
  }
});

const economyCell = new InfoCell('.info__cell_type_economy', () => {
  if (document.documentElement.clientWidth <= 768) {
    economyCell.toggle();
  } else {
    schemeCell.close();
    economyCell.open();
  }
});

const lowMobCell = new InfoCell('.info__cell_type_low-mob', () => {
  if (document.documentElement.clientWidth <= 768) {
    lowMobCell.toggle();
  } else {
    lowMobCell.open();
    direcotrCell.close();
  }
});

const direcotrCell = new InfoCell('.info__cell_type_director', () => {
  if (document.documentElement.clientWidth <= 768) {
    direcotrCell.toggle();
  } else {
    lowMobCell.close();
    direcotrCell.open();
  }
});

const cellsArray = [privilegeCell, schemeCell, lowMobCell, economyCell, workCell, direcotrCell];

cellsArray.forEach((cell) => {
  cell.setEventListeners();
})

//Main page tourist swiper
const touristSwiper = new Swiper('.tourist__swiper', {
  grabCursor: true,
  pagination: {
    el: ".tourist__swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 1439px
    1439: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});


// Mobile menu
const mobileMenu = new MobileMenu('.header', '.page');
mobileMenu.setEventListeners();
