import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet'

import '../styles/css/marker_body.css'

import disRelTram from '../json/distances/tram - religie.json'
import disArchTram from '../json/distances/tram - architectuur.json'
import disWArtTram from '../json/distances/tram - wandkunst.json'
import disArtTram from '../json/distances/tram - kunstwerken.json'
import disMusTram from '../json/distances/tram - musea.json'
import disMonTram from '../json/distances/tram - monumenten.json'
import disEDTram from '../json/distances/tram - eet_drink.json'

import disRelED from '../json/distances/eet_drink - religie.json'
import disArchED from '../json/distances/eet_drink - architectuur.json'
import disWArtED from '../json/distances/eet_drink - wandkunst.json'
import disArtED from '../json/distances/eet_drink - kunstwerken.json'
import disMusED from '../json/distances/eet_drink - musea.json'
import disMonED from '../json/distances/eet_drink - monumenten.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrainSubway, faUtensils } from '@fortawesome/free-solid-svg-icons'


export const MarkerBody = (props) => {
    const map = useMap()

    const getClosest = (name) =>{
        let result_arch = disArchTram.features.filter(obj => obj.properties.TargetID === name)
        if(result_arch.length > 0){
            return true
        }

        let result_wart = disWArtTram.features.filter(obj => obj.properties.TargetID === name)
        if(result_wart.length > 0){
            return true
        }

        let result_art = disArtTram.features.filter(obj => obj.properties.TargetID === name)
        if(result_art.length > 0){
            return true
        }

        let result_mus = disMusTram.features.filter(obj => obj.properties.TargetID === name)
        if(result_mus.length > 0){
            return true
        }

        let result_mon = disMonTram.features.filter(obj => obj.properties.TargetID === name)
        if(result_mon.length > 0){
            return true
        }

        let result_ed = disEDTram.features.filter(obj => obj.properties.TargetID === name)
        if(result_ed.length > 0){
            return true
        }
    }

    const getClosest2 = (name) =>{
        let result_arch = disArchED.features.filter(obj => obj.properties.TargetID === name)
        if(result_arch.length > 0){
            return true
        }

        let result_wart = disWArtED.features.filter(obj => obj.properties.TargetID === name)
        if(result_wart.length > 0){
            return true
        }

        let result_art = disArtED.features.filter(obj => obj.properties.TargetID === name)
        if(result_art.length > 0){
            return true
        }

        let result_mus = disMusED.features.filter(obj => obj.properties.TargetID === name)
        if(result_mus.length > 0){
            return true
        }

        let result_mon = disMonED.features.filter(obj => obj.properties.TargetID === name)
        if(result_mon.length > 0){
            return true
        }

    }

    return(
        <section>
            {props.object.features.map((p, i) => (
                <Marker key={i}
                        position={[p.properties.LAT || p.properties.coordinates_y || p.properties.latitude, p.properties.LNG || p.properties.coordinates_x || p.properties.longitude]} icon={props.icon} eventHandlers={{ click: (e) => {
                        map.setView([p.properties.LAT || p.properties.coordinates_y || p.properties.latitude, p.properties.LNG || p.properties.coordinates_x || p.properties.longitude], 20);
                    } }}>
                        <Popup className="popup">
                            <section className="popup__body">
                                <h2>{p.properties.title || p.properties.Project || p.properties.Titel_kunstwerk || p.properties.TITEL || p.properties.display_naam || p.properties.Naam ? p.properties.title || p.properties.Project || p.properties.Titel_kunstwerk || p.properties.TITEL || p.properties.display_naam || p.properties.Naam : "Naam Onbekend"}</h2>
                                
                                {/* Adressen */}
                                <section className='adres'>
                                    <section className='adres__straat'>
                                        <p>{p.properties.Adres}</p>
                                        <p>{p.properties.Adres_gebouw}</p>
                                        <p>{p.properties.adress}</p>
                                        <p>{p.properties.STRAATNAAM}</p>
                                    </section>
                                    <section style={{ marginLeft: 'auto' }}>
                                        {getClosest2(p.properties.Project || p.properties.TITEL || p.properties.display_naam || p.properties.title || p.properties.Adres_gebouw) ? <FontAwesomeIcon style={{ color: 'red', marginLeft: 'auto', fontSize: '2rem', marginRight: '1rem' }} icon={faUtensils} /> : <FontAwesomeIcon style={{ color: 'grey', marginLeft: 'auto', fontSize: '2rem', marginRight: '1rem' }} icon={faUtensils} />}
                                        {getClosest(p.properties.Project || p.properties.TITEL || p.properties.display_naam || p.properties.title || p.properties.Adres_gebouw) ? <FontAwesomeIcon style={{ color: 'red', marginLeft: 'auto', fontSize: '2rem' }} icon={faTrainSubway} /> : <FontAwesomeIcon style={{ color: 'grey', marginLeft: 'auto', fontSize: '2rem' }} icon={faTrainSubway} />}
                                    </section>
                                </section>
                                
                                <section>
                                    {p.properties.Kunstenaar || p.properties.NAAM_KUNSTENAAR ?
                                        <p>Kunstenaar: {p.properties.Kunstenaar || p.properties.NAAM_KUNSTENAAR}</p>
                                    : null}
                                    {p.properties.Architect ? <p>Architect: {p.properties.Architect}</p> : null}
                                    {p.properties.Bouwjaar || p.properties.JAAR_VAN_PLAATSING || p.properties.Jaar ?
                                    <p>Bouwjaar: {p.properties.Bouwjaar || p.properties.JAAR_VAN_PLAATSING || p.properties.Jaar}</p>
                                    : null}
                                    {p.properties.Modaliteit ? p.properties.Lijn ? <p>{p.properties.Modaliteit} - {p.properties.Lijn}</p> : null : null}
                                </section>
                                
                                {/* Beschrijvingen */}
                                {p.properties.Info || p.properties.OMSCHRIJVING || p.properties.short_description_nl || p.properties.Kunsthistorische_waarde || p.properties.Cultuurhistorische_waarde ?
                                <section className='info'>
                                    <h2>Informatie</h2>
                                    <section className="info__body">
                                        <p>{p.properties.Info}</p>
                                        <p>{p.properties.OMSCHRIJVING}</p>
                                        <p>{p.properties.short_description_nl}</p>
                                        <p>{p.properties.Kunsthistorische_waarde}</p>
                                        <br></br>
                                        <p>{p.properties.Cultuurhistorische_waarde}</p>
                                    </section>
                                </section>
                                : null}
                                

                                {/* Links */}
                                {/* {p.properties.url ? <a href={p.properties.url}>Website</a> : null}
                                {p.properties.HYPERLINK ? <a href={p.properties.HYPERLINK}>Website</a> : null} */}

                                {p.properties.calendar_summary_nl ? 
                                <section className='tijden'>
                                    <h2>Openingstijden</h2>
                                    <p>{p.properties.calendar_summary_nl}</p>
                                </section>
                                : null }
                                <button className='btn' onClick={() => {props.addLoc({"name": p.properties.title || p.properties.Project || p.properties.Titel_kunstwerk || p.properties.TITEL || p.properties.display_naam || p.properties.Naam ? p.properties.title || p.properties.Project || p.properties.Titel_kunstwerk || p.properties.TITEL || p.properties.display_naam || p.properties.Naam : "Naam Onbekend", "latlng": [p.properties.LAT || p.properties.coordinates_y || p.properties.latitude, p.properties.LNG || p.properties.coordinates_x || p.properties.longitude]})}}>Add to Route</button>
                            </section>
                        </Popup>
                    </Marker>
            ))}
        </section>
    )
}

export const MarkerBodyStation = (props) => {
    const map = useMap()

    return(
        <section>
            {props.object.features.map((p, i) => (
                <Marker key={i}
                        position={[p.properties.LAT, p.properties.LNG]} icon={props.icon} eventHandlers={{ click: (e) => {
                        map.setView([p.properties.LAT, p.properties.LNG], 20);
                    } }}>
                        <Popup className="popup">
                            <section className="popup__body">
                                <h2 style={{ marginRight: '5rem' }}><FontAwesomeIcon style={{ color: '#2368d7', marginRight: '5rem', fontSize: '2rem' }} icon={faTrainSubway} /> {p.properties.Naam ? p.properties.Naam : "Naam Onbekend"} </h2>
                                
                                <section>
                                    {p.properties.Modaliteit ? p.properties.Lijn ? <p>{p.properties.Modaliteit} - {p.properties.Lijn}</p> : null : null}
                                </section>
                            </section>

                            <button className='btn' onClick={() => {props.addLoc({"name": p.properties.Naam ? p.properties.Naam : "Naam Onbekend", "latlng": [p.properties.LAT, p.properties.LNG]})}}>Add to Route</button>
                        </Popup>
                    </Marker>
            ))}
        </section>
    )
}

export const MarkerBodyAlt = (props) => {
    const map = useMap()

    const getClosest = (name) =>{
        let result = disRelTram.features.filter(obj => obj.properties.TargetID === name && obj.properties.Distance <= 200)
        if(result.length > 0){
            return true
        }
    }

    const getClosest2 = (name) =>{
        let result = disRelED.features.filter(obj => obj.properties.TargetID === name && obj.properties.Distance <= 200)
        if(result.length > 0){
            return true
        }
    }

    return(
        <section>
            {props.object.map((p, i) => (
                <Marker key={i}
                        position={[p.properties.LAT, p.properties.LNG]} icon={props.icon} eventHandlers={{ click: (e) => {
                        map.setView([p.properties.LAT, p.properties.LNG], 20);
                    } }}>
                        <Popup>
                            <section>
                                <h2>{p.properties.Gebouwnaam}</h2>
                                <section className='adres geloof'>
                                    <p>{p.properties.Adres}</p>
                                    <section style={{ marginLeft: 'auto' }}>
                                        {getClosest2(p.properties.Gebouwnaam) ? <FontAwesomeIcon style={{ color: 'red', marginLeft: 'auto', fontSize: '2rem', marginRight: '1rem' }} icon={faUtensils} /> : <FontAwesomeIcon style={{ color: 'grey', marginLeft: 'auto', fontSize: '2rem', marginRight: '1rem' }} icon={faUtensils} />}
                                        {getClosest(p.properties.Gebouwnaam) ? <FontAwesomeIcon style={{ color: 'red', marginLeft: 'auto', fontSize: '2rem' }} icon={faTrainSubway} /> : <FontAwesomeIcon style={{ color: 'grey', marginLeft: 'auto', fontSize: '2rem' }} icon={faTrainSubway} />}
                                    </section>
                                </section>
                                
                                <section className='info geloof'>
                                    <h2>Gebouw Informatie</h2>
                                    <p>Type gebouw: {p.properties.Gebouwtype != null ? p.properties.Gebouwtype : "Onbekend"}</p>
                                    <p>Genootschap: {p.properties.Genootschap != null ? p.properties.Genootschap : "Niet aangesloten"}</p>
                                    <p>Gebruik: {p.properties.Categorie}</p>
                                </section>
                                <br></br>
                                {/* {p.properties.Website != null ? <a href={p.properties.Website}>Website</a> : null} */}


                                <button className='btn' onClick={() => {props.addLoc({"name": p.properties.Gebouwnaam, "latlng": [p.properties.LAT, p.properties.LNG]})}}>Add to Route</button>
                            </section>
                        </Popup>
                    </Marker>
            ))}
        </section>
    )
}