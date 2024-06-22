export const useActivityHintHide = () => {
    const activitySlider = document.querySelector('.activity__slider');
    const hint = document.querySelector('.activity__slider-hint');

    activitySlider.addEventListener('mousemove', () => {
        hint.classList.add('activity__slider-hint--hidden');
    });

    activitySlider.addEventListener('mouseout', () => {
        hint.classList.remove('activity__slider-hint--hidden');
    });
};