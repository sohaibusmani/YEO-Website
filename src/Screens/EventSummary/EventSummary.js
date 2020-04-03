import React,{ Component } from "react";

// Components
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

class EventSummary extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <h1>Summary</h1>
            </React.Fragment>
        )
    }
}

export default EventSummary;