export const useTeamHintHide = () => {
    const teamSlider = document.querySelector('.team__slider');
    const hint = document.querySelector('.team__slider-hint');

    teamSlider.addEventListener('mousemove', () => {
        hint.classList.add('team__slider-hint--hidden');
    });

    teamSlider.addEventListener('mouseout', () => {
        hint.classList.remove('team__slider-hint--hidden');
    });
};