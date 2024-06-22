export const useFilter = () => {
    const filterContents = document.querySelectorAll('.activity__article');
    const filterTab = document.querySelectorAll('.activity__tab');

    filterTab.forEach((item) =>
        item.addEventListener('click', () => {
            filterTab.forEach((element) => element.classList.remove('activity__tab--active'));

            item.classList.add('activity__tab--active');
        }),
    );

    document.querySelector('.activity__nav').addEventListener('click', (event) => {
        if (event.target.tagName !== 'LI') return false;

        let filterClass = event.target.dataset['tab'];

        filterContents.forEach((element) => {
            element.classList.remove('activity__article--hidden');
            if (!element.classList.contains(filterClass) && filterClass !== 'all') {
                element.classList.add('activity__article--hidden');
            }
        });
    });
};
