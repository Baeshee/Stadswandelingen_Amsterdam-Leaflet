import React, { Component, createRef, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server'
import { connect } from "react-redux";

import L from 'leaflet'
import { MapContainer, TileLayer, ZoomControl, ScaleControl, useMapEvent, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import Markers from '../components/markers'

const SetViewOnClick = (animateRef) => {
    const map = useMapEvent('click', (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      })      
    }) 


    return null
  }

const Routing = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const icon = new L.divIcon({
      html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faLocationDot} />),
      className: 'routing-icon',
    })

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(52.384952, 4.746678), L.latLng(52.360007, 4.885185), L.latLng(52.408084, 4.855332)],
      routeWhileDragging: true,
      profile: 'foot',
      lineOptions: {
        styles: [{ color: 'red', opacity: 1, weight: 5 }]
      },
      createMarker: function(i, waypoint, n) { 
        const marker = L.marker(waypoint.latLng, {
          className: 'rounting-body',
          draggable: false,
          bounceOnAdd: true,
          bounceOnAddOptions: {
            duration: 1000,
            height: 800,
          },
          icon: icon
        }); 
        return marker;
      }
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}

class Map extends Component {
    animateRef = createRef(() => false);

    render() {
        return (
            <MapContainer center={[this.props.crntLoc.lat, this.props.crntLoc.lng]} zoom={this.props.crntLoc.zoom} zoomControl={false} scrollWheelZoom={this.props.crntLoc.scrollWheel} style={{ width: '100%', height: '400px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={!this.props.dm ? "https://api.mapbox.com/styles/v1/baeshee/cl0s994gl00e314jzwp9u4odl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmFlc2hlZSIsImEiOiJjbDByejBrMmgwODJ6M2NxbzZnbHFtN2ppIn0.ji3kfWiNhBrq0PHfK2saTA" :
                                                "https://api.mapbox.com/styles/v1/baeshee/cl0s950qk000115nqmr6t6g69/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmFlc2hlZSIsImEiOiJjbDByejBrMmgwODJ6M2NxbzZnbHFtN2ppIn0.ji3kfWiNhBrq0PHfK2saTA"
                        }
                />

                <ScaleControl position="bottomright" imperial={false} metric={true} />
                <ZoomControl position="bottomright"/>

                <Markers />

                <SetViewOnClick animateRef={this.animateRef}  />
                <Routing />

            </MapContainer>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      crntLoc: state.currentLocation,
      dm: state.darkMode
  }
}


export default connect(mapStateToProps)(Map);