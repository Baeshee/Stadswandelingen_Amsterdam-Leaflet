import React, { Component } from 'react';
import { connect } from "react-redux";

import '../styles/css/filters.css'

import {changeShowWallArt,
        changeShowArt,
        changeShowMusea,
        changeShowArchitecture,
        changeChurches,
        changeShowMonuments,
        changeShowEatDrink,
        changeShowStations} from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrainSubway, faMuseum, faMonument, faBuilding, faUtensils, faFilter, faRoute } from '@fortawesome/free-solid-svg-icons'

class Filters extends Component {

    state = {
        filtersOpen: false,
        routeOpen: false,
        legendOpen: false,
    }

    toggleFilter = () => {
        if(!this.state.filtersOpen) this.setState({routeOpen: false, legendOpen: false})
        this.setState({filtersOpen: !this.state.filtersOpen})
    }

    toggleRoute = () => {
        if(!this.state.routeOpen) this.setState({filtersOpen: false, legendOpen: false})
        this.setState({routeOpen: !this.state.routeOpen})
    }

    render() {
        return (
            <article className="menu">
                <section className="menu__tabs">
                    <section className="menu__filters">
                        <FontAwesomeIcon className={!this.state.filtersOpen ? "icon" : "icon-active"} icon={faFilter} onClick={() => this.toggleFilter()} />
                    </section>
                    <section className="menu__route">
                        <FontAwesomeIcon className={!this.state.routeOpen ? "icon" : "icon-active"} icon={faRoute} onClick={() => this.toggleRoute()} />
                    </section>
                </section>
                {this.state.filtersOpen
                    ? <form>
                    <table className="table">
                        <h2>Filters</h2>
                        <tbody>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faMuseum} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" /></td>
                                <td className="table__row__cel3"><p className="table__row__text">Musea & Galleries</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faMonument} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" /></td>
                                <td className="table__row__cel3"><p className="table__row__text">Monuments</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faBuilding} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" /></td>
                                <td className="table__row__cel3"><p className="table__row__text">Architecture</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faUtensils} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" /></td>
                                <td className="table__row__cel3"><p className="table__row__text">Cafés & Restaurants</p></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                : ""}
            </article>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(Filters);