import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useTeamSlider = () => {
    new Swiper('.team__slider', {
        modules: [Navigation],
        navigation: {
            prevEl: '.team__btn--prev',
            nextEl: '.team__btn--next',
        },
        slidesPerView: 'auto',
        spaceBetween: 50,
        loop: true,
        roundLengths: true,
        breakpoints: {
            321: {
                slidesPerView: 1,
            },
            577: {
                slidesPerView: 2,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            993: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
    });
};
