import React , {Component} from 'react';

// Components

import Navbar from '../../../Components/Navbar/Navbar';

// Assets

import logo from '../../../Assets/Images/event1.jpg'

class PackageDetails extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div>
                <div style={{backgroundImage:`url(${logo})`,
             width: '100%',
             height: '400px',
             backgroundSize:'100% 100%'}}>

              </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PackageDetails;