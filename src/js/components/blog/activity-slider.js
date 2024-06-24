import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useActivitySlider = () => {
    new Swiper('.activity__slider', {
        modules: [Navigation],
        navigation: {
            prevEl: '.activity__btn--prev',
            nextEl: '.activity__btn--next',
        },
        loopAddBlankSlides: false,
        spaceBetween: 32,
        slidesPerView: 1,
        autoHeight: false,
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            993: {
                slidesPerView: 2,
            },
            1201: {
                slidesPerView: 2.5,
            },
        },
    });
};
