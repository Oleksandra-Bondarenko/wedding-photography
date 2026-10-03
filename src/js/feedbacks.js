import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';

const feedbacksList = document.querySelector('.feedbacks-list');
const prevButton = document.querySelector('.feedbacks-button-prev');
const nextButton = document.querySelector('.feedbacks-button-next');
const pagination = document.querySelector('.feedbacks-pagination');

axios.defaults.baseURL = 'https://wedding-photographer.b.goit.study/api';

async function getFeedbacks(limit = 10, page = 1) {
  const response = await axios.get('/feedbacks', {
    params: {
      limit,
      page,
    },
  });

  return response.data;
}

async function renderFeedbacks() {
  try {
    const data = await getFeedbacks();

    feedbacksList.innerHTML = data.feedbacks
      .map(
        feedback => `
          <li class="feedbacks-item swiper-slide">
            <blockquote class="feedbacks-card">
              <p class="feedbacks-text">
                ${feedback.descr}
              </p>

              <p class="feedbacks-author">
                ${feedback.name}
              </p>
            </blockquote>
          </li>
        `
      )
      .join('');
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load feedbacks. Please try again later.',
      position: 'topRight',
    });

    throw error;
  }
}

function initSwiper() {
  new Swiper('.feedbacks-slider', {
    modules: [Navigation, Pagination, Keyboard, A11y],

    slidesPerView: 1,
    spaceBetween: 24,

    navigation: {
      prevEl: prevButton,
      nextEl: nextButton,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: pagination,
      clickable: true,
      bulletClass: 'feedbacks-dot',
      bulletActiveClass: 'is-active',
    },

    a11y: {
      prevSlideMessage: 'Previous feedback',
      nextSlideMessage: 'Next feedback',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });
}

async function init() {
  try {
    await renderFeedbacks();
    initSwiper();
  } catch (error) {
    console.error(error);
  }
}

init();
