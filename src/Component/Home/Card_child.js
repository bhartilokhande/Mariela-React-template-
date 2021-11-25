import React from 'react';



function Card_1(props) {
    return (
        <>
            <div class="card">
                <img src={props.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text"><i>Learn more</i></p> 
                </div>
            </div>

        </>


    );
}
export default Card_1;