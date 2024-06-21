export const useHeroHintHide = () => {
    const heroSlider = document.querySelector('.hero__slider');
    const hint = document.querySelector('.hero__slider-hint');

    heroSlider.addEventListener('mousemove', () => {
        hint.classList.add('hero__slider-hint--hidden');
    });

    heroSlider.addEventListener('mouseout', () => {
        hint.classList.remove('hero__slider-hint--hidden');
    });
};
