import React, { Component }from 'react';
import { connect } from "react-redux";
import { changeToast } from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose  } from '@fortawesome/free-solid-svg-icons'

import '../styles/css/toast.css'

class Toast extends Component {
    closeHandler = () => {
        this.props.changeToast(!this.props.t)
    }

    removeToast = () => {
        if(this.props.t){
            setTimeout(() => {
                this.closeHandler()
            }, 6000)
        }        
    }

    componentDidMount = () => {
        if(this.props.t) this.removeToast();
    }
        

    render() {
        if (!this.props.t) return null;
        return(
            <section className="toast">
                <FontAwesomeIcon className="toast__close" onClick={() => this.closeHandler()} icon={faClose} />
                <p className='toast__text'>Succesvol toegevoegd!</p>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        t: state.toast,
    }
}

export default connect(mapStateToProps, {changeToast: changeToast})(Toast);