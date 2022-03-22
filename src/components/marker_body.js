import React from 'react';
import { Marker, useMap, useMapEvent } from 'react-leaflet'

export const MarkerBody = (props) => {
    return(
        <section>
            {props.object.features.map((p) => (
                <Marker key={p.properties.OBJECTNUMMER}
                        position={[p.properties.LAT, p.properties.LNG]} icon={props.icon} />
            ))}
        </section>
    )
}

export const MarkerBodyAlt1 = (props) => {
    return(
        <section>
            {props.object.features.map((p) => (
                <Marker key={p.properties.field_1}
                        position={[p.properties.LAT, p.properties.LNG]} icon={props.icon} />
            ))}
        </section>
    )
}


export const MarkerBodyAlt2 = (props) => {
    return(
        <section>
            {props.object.features.map((p) => (
                <Marker key={p.properties.id}
                        position={[p.properties.coordinates_y, p.properties.coordinates_x]} icon={props.icon} />
            ))}
        </section>
    )
}