export const useMap = () => {
    async function initMap() {
        await ymaps3.ready;

        const { YMap, YMapDefaultSchemeLayer } = ymaps3;

        const map = new YMap(document.getElementById('map'), {
            location: {
                center: [10, 25],
                zoom: 1.5,
            },
        });

        map.addChild(new YMapDefaultSchemeLayer());

        const content = document.querySelector('.marker');
        map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));
        map.addChild(
            new YMapMarker(
                {
                    coordinates: [-24.404614, 136.499318],
                    draggable: true,
                },
                content,
            ),
        );
    }

    initMap();
};
