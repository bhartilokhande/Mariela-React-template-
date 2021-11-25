import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer1(props) {    
    return(
        <>
        <div className="Footer1">
        <div className="Footer1_icon">

        <FontAwesomeIcon icon={props.icon} color="white"/>

        </div>
        <div className="Footer1_text">
        Safe shopping<br/> buy  with confidence
       
        </div>

        </div>

        </>
    );
}
export default Footer1;