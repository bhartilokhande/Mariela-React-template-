import React from 'react';
import Img2 from '../../Asset/Image/img2.png';
import Slider1 from '../../Asset/Image/slide1.png';



function Slider() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="slider">

                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="left">
                                        <img src={Img2}></img>
                                    </div>
                                    <div classNameName="right">
                                        <div className="right_title"> </div>
                                        <h1></h1>
                                        <div className="right_link">
                                            <a><u></u></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                <div className="left">
                                        <img src={Slider1}></img>
                                    </div>
                                    <div classNameName="right">
                                        <div className="right_title"> </div>
                                        <h1></h1>
                                        <div className="right_link">
                                            <a><u></u></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              
                            </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Slider;