export const useFooterAccordion = () => {
    const titles = document.querySelectorAll('.footer__item-title-wrapper');
    const contents = document.querySelectorAll('.footer__sublist');

    titles.forEach((item) =>
        item.addEventListener('click', () => {
            const activeContent = document.querySelector('#' + item.dataset.tab);

            if (activeContent.classList.contains('footer__sublist--active')) {
                activeContent.classList.remove('footer__sublist--active');
                item.classList.remove('footer__item-title-wrapper--active');
                activeContent.style.maxHeight = 0;
            } else {
                contents.forEach((element) => {
                    element.classList.remove('footer__sublist--active');
                    element.style.maxHeight = 0;
                });

                titles.forEach((element) =>
                    element.classList.remove('footer__item-title-wrapper--active'),
                );

                item.classList.add('footer__item-title-wrapper--active');
                activeContent.classList.add('footer__sublist--active');
                activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
            }
        }),
    );
};
