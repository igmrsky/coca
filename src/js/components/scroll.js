export const useHeaderScroll = () => {
    let lastScroll = 0;
    const header = document.querySelector('.header');

    const scrollPosition = () => window.scrollY;
    const containHidden = () => header.classList.contains('header--hidden');

    window.addEventListener('scroll', () => {
        if (scrollPosition() > lastScroll && !containHidden()) {
            // scroll down
            header.classList.add('header--hidden');
        } else if (scrollPosition() < lastScroll && containHidden()) {
            // scroll top
            header.classList.remove('header--hidden');
        }

        lastScroll = scrollPosition();
    });
};
