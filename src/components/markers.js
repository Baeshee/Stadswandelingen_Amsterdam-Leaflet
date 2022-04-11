import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server'
import { connect } from "react-redux";
import '../styles/css/markers.css'

import MarkerClusterGroup from 'react-leaflet-markercluster'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import {changeLocations, changeToast} from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrainSubway, faMuseum, faMonument, faBuilding, faUtensils, faPaintBrush, faChurch, faObjectGroup, faKhanda, faStarOfDavid, faDharmachakra, faStarAndCrescent, faOm } from '@fortawesome/free-solid-svg-icons'

import { MarkerBody, MarkerBodyAlt, MarkerBodyStation } from './marker_body'

import tramMetro from '../json/locations/Tram_Metro.json'
import museaGalleries from '../json/locations/Musea_Galleries.json';
import architecture from '../json/locations/Architectuur.json';
import monuments from '../json/locations/Monumenten.json';
import eatDrink from '../json/locations/Eet_Drink.json'
import art from '../json/locations/Kunstwerken.json'
import wallart from '../json/locations/Wandkunstwerken.json'
import religion from '../json/locations/Religie.json'

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

    artIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faPaintBrush} />),
        className: "icon art"
    });

    wartIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faObjectGroup} />),
        className: "icon wart"
    });

    cIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faChurch} />),
        className: "icon rel"
    });

    sikhIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faKhanda} />),
        className: "icon rel"
    });

    jIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faStarOfDavid} />),
        className: "icon rel"
    });

    bIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faDharmachakra} />),
        className: "icon rel"
    });

    mosIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faStarAndCrescent} />),
        className: "icon rel"
    });

    hIcon = new L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faOm} />),
        className: "icon rel"
    });

    ccIcon = (cluster) => {
        let count = cluster.getChildCount();
        let cn = null;
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

    addLocation = (loc) => {
        let l = []
        for (let i = 0; i < this.props.lc.length; i++){
            l.push(this.props.lc[i])
        }

        l.push(loc);
        this.props.changeLocations(l);
        this.props.changeToast(!this.props.t);
    }

    render(){
        const m = religion.features.filter(feature => feature.properties.Categorie === "Marokkaanse Moskee" || feature.properties.Categorie === "Turkse Moskee" || feature.properties.Categorie === "Surinaamse / Pakistaanse Moskee")
        const bt = religion.features.filter(feature => feature.properties.Categorie === "Boeddhistische tempel")
        let wk = religion.features.filter(feature => feature.properties.Categorie === "Christelijke kerk overig" || feature.properties.Categorie === "Evagelische- of Pinksterkerk" || feature.properties.Categorie === "Gereformeerde kerk" || feature.properties.Categorie === "Protestantse Kerk Nederland (PKN)" || feature.properties.Categorie === "Rooms Katholieke kerk"); // kerken (westers)
        let ht = religion.features.filter(feature => feature.properties.Categorie === "Hindoeistische tempel");
        let syn = religion.features.filter(feature => feature.properties.Categorie === "Joodse synagoge");
        let st = religion.features.filter(feature => feature.properties.Categorie === "Sikh tempel");

        return (
            <MarkerClusterGroup iconCreateFunction={this.ccIcon}>
                {/* <MarkerBody object={tramMetro} icon={this.tmIcon} /> */}
                {this.props.filters[0] ? <MarkerBody object={museaGalleries} icon={this.mgIcon} addLoc={this.addLocation.bind(this)} /> : null}
                {this.props.filters[2] ? <MarkerBody object={architecture} icon={this.aIcon} addLoc={this.addLocation.bind(this)} /> : null}
                {this.props.filters[1] ? <MarkerBody object={monuments} icon={this.mIcon} addLoc={this.addLocation.bind(this)} /> : null}
                {this.props.filters[3] ? <MarkerBody object={eatDrink} icon={this.edIcon} addLoc={this.addLocation.bind(this)} /> : null}
                {this.props.filters[4] ? <MarkerBody object={art} icon={this.artIcon} addLoc={this.addLocation.bind(this)} /> : null}
                {this.props.filters[5] ? <MarkerBody object={wallart} icon={this.wartIcon} addLoc={this.addLocation.bind(this)} /> : null}
                {this.props.filters[7] ? <MarkerBodyStation object={tramMetro} icon={this.tmIcon} addLoc={this.addLocation.bind(this)} /> : null}

                {this.props.filters[6] ? this.props.rf[0] ? <MarkerBodyAlt object={m} icon={this.mosIcon} addLoc={this.addLocation.bind(this)} /> : null : null}
                {this.props.filters[6] ? this.props.rf[1] ? <MarkerBodyAlt object={bt} icon={this.bIcon} addLoc={this.addLocation.bind(this)} /> : null : null}
                {this.props.filters[6] ? this.props.rf[2] ? <MarkerBodyAlt object={wk} icon={this.cIcon} addLoc={this.addLocation.bind(this)} /> : null : null}
                {this.props.filters[6] ? this.props.rf[3] ? <MarkerBodyAlt object={ht} icon={this.hIcon} addLoc={this.addLocation.bind(this)} /> : null : null}
                {this.props.filters[6] ? this.props.rf[4] ? <MarkerBodyAlt object={syn} icon={this.jIcon} addLoc={this.addLocation.bind(this)} /> : null : null}
                {this.props.filters[6] ? this.props.rf[5] ? <MarkerBodyAlt object={st} icon={this.sikhIcon} addLoc={this.addLocation.bind(this)} /> : null : null}

            </MarkerClusterGroup>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        rf: state.religionFilters,
        lc: state.locations,
        t: state.toast
    }
}

export default connect(mapStateToProps, {changeLocations: changeLocations, changeToast: changeToast})(Markers);