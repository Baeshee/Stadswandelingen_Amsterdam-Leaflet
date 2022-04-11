import React, { Component } from 'react';
import { connect } from "react-redux";

import '../styles/css/filters.css'

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import {changeReligionFilters,
        changeFilters, changeLocations} from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faTrainSubway, faMuseum, faMonument, faBuilding, faUtensils, faPaintBrush, faChurch, faObjectGroup, faFilter, faRoute, faGear, faKhanda, faStarOfDavid, faDharmachakra, faStarAndCrescent, faOm  } from '@fortawesome/free-solid-svg-icons'

// import { DragList } from './drag_list'

class Menu extends Component {
    state = {
        menuOpen: false,
        filters: false,
        route: false,
        options: false
    }

    toggleMenu = () =>{
        if(this.state.menuOpen) this.setState({filters: false, route: false})
        this.setState({menuOpen: !this.state.menuOpen})
    }

    toggleFilter = () => {
        if(!this.state.filters) this.setState({route: false, options: false, })
        this.setState({filters: !this.state.filters})
    }

    toggleRoute = () => {
        if(!this.state.route) this.setState({filters: false, options: false})
        this.setState({route: !this.state.route})
    }

    toggleOptions = () => {
        if(!this.state.options) this.setState({filters: false, route: false})
        this.setState({options: !this.state.options})
    }

    setFilters(i){
        let l = []
        for (let i=0; i<this.props.fltr.length; i++){
            l.push(this.props.fltr[i])
        }

        l.splice(i, 1, !l[i]);
        this.props.changeFilters(l)
    }

    setRFilters(i){
        let l = []
        for (let i=0; i<this.props.rf.length; i++){
            l.push(this.props.rf[i])
        }

        l.splice(i, 1, !l[i]);
        this.props.changeReligionFilters(l)
    }

    removeLocation(i){
        let l = []
        for (let i=0; i<this.props.lc.length; i++){
            l.push(this.props.lc[i])
        }

        l.splice(i, 1);
        this.props.changeLocations(l)
    }

    render() {
        return (
            <article className={this.state.menuOpen ? "menu" : "menu closed"}>
                <section className="menu__tabs">
                    {this.state.menuOpen ? 
                        <section className="menu__filters">
                            <FontAwesomeIcon className={!this.state.filters ? "icon" : "icon-active"} icon={faFilter} onClick={() => this.toggleFilter()} />
                        </section> : null}
                    
                    {this.state.menuOpen ? 
                        <section className="menu__route">
                            <FontAwesomeIcon className={!this.state.route ? "icon" : "icon-active"} icon={faRoute} onClick={() => this.toggleRoute()} />
                        </section> : null}
                    
                    {/* {this.state.menuOpen ? 
                        <section className="menu__options">
                            <FontAwesomeIcon className={!this.state.options ? "icon" : "icon-active"} icon={faGear} onClick={() => this.toggleOptions()} />
                        </section> : null} */}
                    
                    <section className="menu__open__close">
                        <div className="menu-icon" onClick={() => this.toggleMenu()}>
                            <input className="menu-icon__cheeckbox" type="checkbox" />
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </section>
                </section>
                {this.state.filters
                    ? <section className="table-holder">
                    <h2 style={{ marginTop: '0.5rem' }}>Filters</h2>
                    <table className="table">
                        <tbody>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faMuseum} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.fltr[0]} onClick={() => this.setFilters(0)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Musea & Galerijen</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faMonument} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.fltr[1]} onClick={() => this.setFilters(1)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Monumenten</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faBuilding} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.fltr[2]} onClick={() => this.setFilters(2)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Architectuur</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faPaintBrush} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.fltr[4]} onClick={() => this.setFilters(4)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Kunst</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faObjectGroup} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.fltr[5]} onClick={() => this.setFilters(5)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Wandkunst</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faChurch} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.fltr[6]} onClick={() => this.setFilters(6)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Religie</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faStarAndCrescent} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.rf[0]} onClick={() => this.setRFilters(0)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Moskeeën</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faDharmachakra} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.rf[1]} onClick={() => this.setRFilters(1)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Boeddhistische Tempels</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faChurch} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.rf[2]} onClick={() => this.setRFilters(2)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Westerse Kerken</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faOm} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.rf[3]} onClick={() => this.setRFilters(3)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Hindoeistische Tempels</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faStarOfDavid} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.rf[4]} onClick={() => this.setRFilters(4)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Joodse Synagogen</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel0"></td>
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faKhanda} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.rf[5]} onClick={() => this.setRFilters(5)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Sikh Tempels</p></td>
                            </tr>

                            <tr>
                                <td>
                                    <h2 className="table__subtitle">Plekken om uit te rusten</h2>
                                </td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faUtensils} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.fltr[3]} onClick={() => this.setFilters(3)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Cafés & Restaurants</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faTrainSubway} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.props.fltr[7]} onClick={() => this.setFilters(7)} onChange={() => {return}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Openbaar vervoer</p></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                : null}
                {this.state.route ?
                    <section>
                        <h2 style={{ marginTop: '0.5rem' }}>Route</h2>
                        {this.props.lc.map((l, i) => (
                            <section className="container">
                                <p className="location">{l.name}</p>
                                <FontAwesomeIcon className="remove" onClick={() =>this.removeLocation(i)} icon={faClose} />
                            </section>
                        ))}
                    </section>
                    
                : null}
            </article>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        fltr: state.filters,
        rf: state.religionFilters,
        lc: state.locations
    }
}

export default connect(mapStateToProps, {
    changeFilters:changeFilters,
    changeReligionFilters: changeReligionFilters,
    changeLocations: changeLocations
})(Menu);