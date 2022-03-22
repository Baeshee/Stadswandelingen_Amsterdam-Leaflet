import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server'
import { connect } from "react-redux";
import '../styles/css/markers.css'

import MarkerClusterGroup from 'react-leaflet-markercluster'
import _ from 'lodash';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrainSubway, faMuseum, faMonument, faBuilding, faUtensils } from '@fortawesome/free-solid-svg-icons'

import { MarkerBody, MarkerBodyAlt1, MarkerBodyAlt2 } from './marker_body'

import tramMetro from '../json/locations/Tram_Metro.json'
import museaGalleries from '../json/locations/Musea_Galleries.json';
import architecture from '../json/locations/Architectuur.json';
import monuments from '../json/locations/Monumenten.json';
import eatDrink from '../json/locations/Eet_Drink.json'

class Markers extends Component{

    tmIcon = new L.divIcon({
      html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faTrainSubway} />),
      className: "icon tm"
    });

    mgIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMuseum} />),
        className: "icon mg"
      });

    aIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faBuilding} />),
        className: "icon a"
    });

    mIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMonument} />),
        className: "icon m"
    });

    edIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faUtensils} />),
        className: "icon ed"
    });

    ccIcon = (cluster) => {
        let count = cluster.getChildCount();
        let cn = "";
        switch(true){
            case (count <= 20):
                cn = "ccIcon c20"
                break;
            case (count <= 50):
                cn = "ccIcon c50"
                break;
            case (count <= 100):
                cn = "ccIcon c100"
                break;
            default: 
                cn = "ccIcon"
        }

        return L.divIcon({
          html: `<span>${cluster.getChildCount()}</span>`,
          className: cn,
          iconSize: L.point(30, 30, true),
        });
      }

    render(){
        return (
            <MarkerClusterGroup iconCreateFunction={this.ccIcon}>
                <MarkerBody object={tramMetro} icon={this.tmIcon} />
                <MarkerBody object={museaGalleries} icon={this.mgIcon} />
                <MarkerBody object={architecture} icon={this.aIcon} />
                <MarkerBodyAlt2 object={monuments} icon={this.mIcon} />
                <MarkerBodyAlt1 object={eatDrink} icon={this.edIcon} />
            </MarkerClusterGroup>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showTM: state.showStations,
        showArch: state.showArchitecture,
        showMonu: state.showMonuments,
        showArt: state.showArt,
        showWArt: state.showWallArt,
        showED: state.showEatDrink,
        showC: state.showChurches,
        showMus: state.showMusea,
    }
}

// export default connect(mapStateToProps, {

// })(Markers);

export default Markers;