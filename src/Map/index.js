import React, { useEffect, useState } from "react"
import { Map } from "maplibre-gl"
import PointDistance from "../PointDistance"
import { Container, Box } from '@material-ui/core'
import useStyles from './styles'


const Mapa = () => {
    const [map, setMap] = useState(null)
    const classes = useStyles()

    useEffect(() => {
        setMap(
            new Map({
                container: 'mapContainer',
                style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // stylesheet location
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 5 // starting zoom
            })
        )
    }, [])

    return (
        <Container className={classes.mapContainer} id="mapContainer">
            <Box>
                {map && <PointDistance map={map} />}
            </Box>
        </Container>
    )

}

export default Mapa