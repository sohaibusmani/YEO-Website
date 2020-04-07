import React from 'react';

// Assets
import us20 from '../../Assets/Images/us20.jpg'

class LandingPageComponent4 extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <div style={{
                    backgroundImage: `url(${us20})`,
                    width: '100%',
                    height: '600px',
                    backgroundSize: '100% 100%',
                    

                }}>


                </div>
            </React.Fragment>
        )
    }
}

export default LandingPageComponent4;