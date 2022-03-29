import React from 'react';
import { Marker, useMap } from 'react-leaflet'



export const MarkerBody = (props) => {
    const map = useMap()
    return(
        <section>
            {props.object.features.map((p) => (
                <Marker key={p.properties.OBJECTNUMMER}
                        position={[p.properties.LAT, p.properties.LNG]} icon={props.icon} eventHandlers={{ click: (e) => {
                        map.setView([p.properties.LAT, p.properties.LNG], 20);
                        console.log([p.properties.LAT, p.properties.LNG])
                    } }} />
            ))}
        </section>
    )
}

export const MarkerBodyAlt1 = (props) => {
    const map = useMap()
    return(
        <section>
            {props.object.features.map((p) => (
                <Marker key={p.properties.field_1}
                        position={[p.properties.LAT, p.properties.LNG]} icon={props.icon} eventHandlers={{ click: (e) => {
                        map.setView([p.properties.LAT, p.properties.LNG], 20)
                    } }} />
            ))}
        </section>
    )
}


export const MarkerBodyAlt2 = (props) => {
    const map = useMap()
    return(
        <section>
            {props.object.features.map((p) => (
                <Marker key={p.properties.id}
                        position={[p.properties.coordinates_y, p.properties.coordinates_x]} icon={props.icon} eventHandlers={{ click: (e) => {
                        map.setView([p.properties.coordinates_y, p.properties.coordinates_x], 20)
                    } }} />
            ))}
        </section>
    )
}

export const MarkerBodyAlt3 = (props) => {
    const map = useMap()
    return(
        <section>
            {props.object.features.map((p) => (
                <Marker key={p.properties.id}
                        position={[p.properties.latitude, p.properties.longitude]} icon={props.icon} eventHandlers={{ click: (e) => {
                        map.setView([p.properties.latitude, p.properties.longitude], 20)
                    } }} />
            ))}
        </section>
    )
}