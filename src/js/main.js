@tailwind base;
@tailwind components;
@tailwind utilities;

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 10,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      // mobil
      slidesPerView: 2,
    },
    640: {
      // tablet
      slidesPerView: 3,
    },
    1024: {
      // descktop
      slidesPerView: 3,
    },
  },
});
