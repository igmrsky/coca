import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const usePaperSlider = () => {
    new Swiper('.paper__slider', {
        modules: [Navigation],
        navigation: {
            prevEl: '.paper__btn--prev',
            nextEl: '.paper__btn--next',
        },
        breakpoints: {
            320: {
                spaceBetween: 32,
                slidesPerView: 1,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
            993: {
                slidesPerView: 2.5,
                spaceBetween: 32,
            },
        },
    });
};
