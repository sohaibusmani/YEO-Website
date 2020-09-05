import React , {Component} from 'react';
import {Container } from '@material-ui/core';

import pcover from '../../Assets/Images/us14.jpg';

class BreakupPackages extends Component {
    render(){
        return(
            <React.Fragment>
                <Container>
                    <div style={{
                        backgroundImage: `url(${pcover})`,
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100% 100%',

                    }}>
                             </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default BreakupPackages;