import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Typewriter from "typewriter-effect";
import './css/banner.css';
import store from './redux/store';
import { updateValue } from './redux/valueAction';



export default class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pinValue: ''
        }
        this.handlePin = this.handlePin.bind(this);
    }

    handlePin(e) {

        this.setState({ pinValue: e.target.value })
       // let pinValue = this.state.pinValue;
        store.dispatch(updateValue(e.target.value));
    }


    render() {
        const { pinValue } = this.state;
        return (
            <>
                <div className="banner-bg">
                    <div className="banner-txt col-md-6">
                        <h1>Search Your</h1>
                        <h2>Future</h2>

                        <Typewriter

                            options={{
                                strings: ['Schools', 'Colleges'],
                                autoStart: true,
                                loop: true,
                            }}

                        />
                        <br />
                        <div className="container">
                            <div className="container__item">
                                <form className="form">
                                    <input type="number" className="form__field" placeholder="Enter Pin-Code"
                                        value={pinValue}
                                        onChange={this.handlePin}
                                        required
                                    />
                                    <NavLink to='/search' className="btn btn--primary btn--inside upprcase">Search</NavLink>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

