import React from 'react';


function Gallary1(props) {
    return (
        <>
        <div class="gallary_card">
                <img src={props.image} class="gallary_card-img-top" alt="..." />
                <div class="gallary_card_body">
                    <h5 class="gallary_card_title">Plated Cushion</h5>
                    <p class="gallary_card_text">{props.price}</p> 
                </div>
            </div>
            
        </>
    );
}
export default Gallary1;