export const useMap = () => {
    async function initMap() {
        await ymaps3.ready;

        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
        const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

        const map = new YMap(document.getElementById('map'), {
            location: {
                center: [139, -26],
                zoom: 2,
            },
        });

        map.addChild(new YMapDefaultFeaturesLayer());
        map.addChild(new YMapDefaultSchemeLayer());
        
        map.addChild(
            new YMapDefaultMarker({
                coordinates: [139, -26],
                title: 'Hello World!',
                subtitle: 'kind and bright',
                color: 'blue',
            }),
        );

        window.map = map;
    }

    initMap();
};
