import React, { Component, createRef, useEffect, useState, useCallback, useRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import { connect } from "react-redux";

import L from 'leaflet'
import { MapContainer, TileLayer, ZoomControl, ScaleControl, useMapEvent, useMap } from 'react-leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

import 'leaflet/dist/leaflet.css'

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import Markers from '../components/markers'
import Toast from '../components/toast'

const SetViewOnClick = (animateRef) => {
    const map = useMapEvent('click', (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      })      
    }) 

    return null
  }

const Routing = (points) => {
  const map = useMap();
 
  useEffect(() => {
    if (!map) return;

    let arr = [];
    points.points.map((p) => {
      arr.push(p.latlng)
    })

    const accessToken = '{Mapbox Key}'
    const mapboxRouting = L.Routing.mapbox(accessToken, { profile : 'mapbox/walking' });
    
    const routingControl = L.Routing.control({
      position: 'bottomleft',
      waypoints: arr,
      // geocoder: L.Control.Geocoder.nominatim(),
      routeWhileDragging: true,
      router: mapboxRouting,
      lineOptions: {
        styles: [{ color: 'blue', opacity: 0.5, weight: 5 }]
      },
      createMarker: function(i, waypoint, n) { 
        return null;
      }
    }).addTo(map);

    return() => map.removeControl(routingControl);
    
  }, [points]);

  return null;
}

class Map extends Component {
    animateRef = createRef(() => false);

    render() {
        return (
          <article>
            <Toast />
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
                <Routing points={this.props.lc} />

            </MapContainer>
          </article>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      crntLoc: state.currentLocation,
      t: state.toast,
      lc: state.locations
  }
}


export default connect(mapStateToProps)(Map);
