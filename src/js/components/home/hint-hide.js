export const useHintHide = () => {
    const insightSlider = document.querySelector('.insight__slider');
    const hint = document.querySelector('.insight__slider-hint');

    insightSlider.addEventListener('mousemove', () => {
        hint.classList.add('insight__slider-hint--hidden');
    });

    insightSlider.addEventListener('mouseout', () => {
        hint.classList.remove('insight__slider-hint--hidden');
    });
};
