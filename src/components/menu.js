import React, { Component } from 'react';
import { connect } from "react-redux";

import '../styles/css/filters.css'

import {changeShowWallArt,
        changeShowArt,
        changeShowMusea,
        changeShowArchitecture,
        changeShowChurches,
        changeShowMonuments,
        changeShowEatDrink,
        changeShowStations,
        changeDarkMode} from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrainSubway, faMuseum, faMonument, faBuilding, faUtensils, faPaintBrush, faChurch, faObjectGroup, faFilter, faRoute, faGear } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {

    state = {
        menuOpen: false,
        filters: false,
        route: false,
        options: false,
        checked: [true, true, true, true, true, true, true]
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

    setCheckBox(i){
        this.setState({checked: !this.state.checked[i]})
    }

    render() {
        return (
            <article className={this.state.menuOpen ? "menu" : "menu closed"}>
                <section className="menu__tabs">
                    {this.state.menuOpen ? 
                        <section className="menu__filters">
                            <FontAwesomeIcon className={!this.state.filters ? "icon" : "icon-active"} icon={faFilter} onClick={() => this.toggleFilter()} />
                        </section> : ""}
                    
                    {this.state.menuOpen ? 
                        <section className="menu__route">
                            <FontAwesomeIcon className={!this.state.route ? "icon" : "icon-active"} icon={faRoute} onClick={() => this.toggleRoute()} />
                        </section> : ""}
                    
                    {/* {this.state.menuOpen ? 
                        <section className="menu__options">
                            <FontAwesomeIcon className={!this.state.options ? "icon" : "icon-active"} icon={faGear} onClick={() => this.toggleOptions()} />
                        </section> : ""} */}
                    
                    <section className="menu__open__close">
                        <div class="menu-icon" onClick={() => this.toggleMenu()}>
                            <input class="menu-icon__cheeckbox" type="checkbox" />
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </section>
                </section>
                {this.state.filters
                    ? <form>
                    <table className="table">
                        <h2>Filters</h2>
                        <tbody>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faMuseum} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.state.checked[0]} onClick={() => {this.props.changeShowMusea(!this.props.showMus); this.setCheckBox(0)}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Musea & Galerijen</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faMonument} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.state.checked[1]} onClick={() => {this.props.changeShowMonuments(!this.props.showMonu); this.setCheckBox(1)}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Monumenten</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faBuilding} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.state.checked[2]} onClick={() => {this.props.changeShowArchitecture(!this.props.showArch); this.setCheckBox(2)}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Architectuur</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faPaintBrush} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.state.checked[4]} onClick={() => {this.props.changeShowArt(!this.props.showArt); this.setCheckBox(4)}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Kunst</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faObjectGroup} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.state.checked[5]} onClick={() => {this.props.changeShowWallArt(!this.props.showWArt); this.setCheckBox(5)}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Wandkunst</p></td>
                            </tr>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faChurch} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.state.checked[6]} onClick={() => {this.props.changeShowChurches(!this.props.showC); this.setCheckBox(6)}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Religie</p></td>
                            </tr>

                            <h2 className="table__subtitle">Plekken om uit te rusten</h2>
                            <tr className="table__row">
                                <td className="table__row__cel1"><FontAwesomeIcon icon={faUtensils} /></td>
                                <td className="table__row__cel2"><input type="checkbox" className="input-button" checked={this.state.checked[3]} onClick={() => {this.props.changeShowEatDrink(!this.props.showED); this.setCheckBox(3)}}/></td>
                                <td className="table__row__cel3"><p className="table__row__text">Cafés & Restaurants</p></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                : ""}
                {/* {this.state.options ?
                    <section>
                        <div className={this.props.dm ? "slider s_dark" : "slider s_light"}>
                            <div className={this.props.dm ? "slider__thumb dark" : "slider__thumb light"} onClick={() => {this.props.changeDarkMode(!this.props.darkMode)}}></div>
                        </div>
                    </section>
                : ""} */}
            </article>
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
        dm: state.darkMode
    }
}

export default connect(mapStateToProps, {
    changeShowWallArt: changeShowWallArt,
    changeShowArt:changeShowArt,
    changeShowMusea:changeShowMusea,
    changeShowArchitecture:changeShowArchitecture,
    changeShowChurches:changeShowChurches,
    changeShowMonuments:changeShowMonuments,
    changeShowEatDrink:changeShowEatDrink,
    changeShowStations:changeShowStations,
    changeDarkMode:changeDarkMode,
})(Menu);