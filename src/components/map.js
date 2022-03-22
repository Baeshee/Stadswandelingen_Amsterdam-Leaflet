import React, { Component, createRef, useRef } from 'react'
import { MapContainer, TileLayer, ZoomControl, ScaleControl, useMapEvent, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Markers from '../components/markers'

const SetViewOnClick = (animateRef) => {
    const map = useMapEvent('click', (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      })
    })
  
    return null
  }

class Map extends Component {
    state = {
        lat: 52.3676,
        lng: 4.9041,
        zoom: 13,
        scrollWheel: true,
        darkMode: false,
    }

    animateRef = createRef(() => false);

    render() {
        return (
            <MapContainer center={[this.state.lat, this.state.lng]} zoom={this.state.zoom} zoomControl={false} scrollWheelZoom={this.state.scrollWheel} style={{ width: '100%', height: '400px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={!this.state.darkMode ? "https://api.mapbox.com/styles/v1/baeshee/cl0s994gl00e314jzwp9u4odl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmFlc2hlZSIsImEiOiJjbDByejBrMmgwODJ6M2NxbzZnbHFtN2ppIn0.ji3kfWiNhBrq0PHfK2saTA" :
                                                "https://api.mapbox.com/styles/v1/baeshee/cl0s950qk000115nqmr6t6g69/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmFlc2hlZSIsImEiOiJjbDByejBrMmgwODJ6M2NxbzZnbHFtN2ppIn0.ji3kfWiNhBrq0PHfK2saTA"
                        }
                />
                <ScaleControl position="bottomright" imperial={false} metric={true} />
                <ZoomControl position="bottomright"/>

                <Markers />
                <SetViewOnClick animateRef={this.animateRef} />

            </MapContainer>
        )
    }
}



export default Map;