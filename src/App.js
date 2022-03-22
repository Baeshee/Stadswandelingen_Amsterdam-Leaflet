import React, { Component} from 'react';
import Map from './components/map';
import { Logo } from './components/logo';
import {Provider} from "react-redux";
import Filters from './components/filters'

import { store } from './store';

import './styles/css/app.css'

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <article>
                    <Logo />
                    <Filters/>
                    <Map />
                </article>
            </Provider>
            
            
        )
    }
}

export default App;