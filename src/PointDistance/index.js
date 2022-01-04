import { useEffect } from 'react'

const geojsonPuntoSource = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-58.45, -34.62]
            }
        }
    ]
}


const PointDistance = ({ map }) => {
    useEffect(() => {
        map.on("load", () => {
            map.addSource("PuntoSource", {
                type: "geojson",
                data: geojsonPuntoSource,
            });
            map.addLayer({
                id: "PuntoSource",
                type: "circle",
                source: "PuntoSource",
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#3887be'
                },
            })

        })
    }, [map])

    return null
}

export default PointDistance