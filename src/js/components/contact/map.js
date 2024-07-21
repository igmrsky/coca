export const useMap = () => {
    async function initMap() {
        await ymaps3.ready;

        const { YMap, YMapDefaultSchemeLayer } = ymaps3;

        const map = new YMap(document.getElementById('map'), {
            location: {
                center: [139, -26],
                zoom: 3.5,
            },
        });

        map.addChild(new YMapDefaultSchemeLayer());

        const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
        map.addChild(
            new YMapDefaultMarker({
                coordinates: [139, -26],
                title: 'Hello World!',
                subtitle: 'kind and bright',
                color: 'blue',
            }),
        );
    }

    initMap();
};
