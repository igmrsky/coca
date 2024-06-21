import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useHeroSlider = () => {
    new Swiper('.hero__slider', {
        modules: [Navigation],
        navigation: {
            prevEl: '.hero__btn--prev',
            nextEl: '.hero__btn--next',
        },
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
    });
};
