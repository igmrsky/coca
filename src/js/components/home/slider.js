import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        modules: [Scrollbar],
        slidesPerView: 2,
        spaceBetween: 32,
        grabCursor: true,
        loop: true,
        scrollbar: {
            el: '.insight__scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                centeredSlides: true,
                loop: false,
            },
            993: {
                slidesPerView: 2,
            },
        },
    });
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials__slider', {
        modules: [Navigation],
        spaceBetween: 30,
        slidesPerView: 1,
        grabCursor: true,
        navigation: {
            prevEl: '.testimonials__btn--prev',
            nextEl: '.testimonials__btn--next',
        },
    });
};
