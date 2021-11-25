import React from 'react';
import Img13 from '../../Asset/Image/slide1.png';

function Slider1() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="slider1">

                        <div className="slider1_left">
                        <div className="slider1_left_title"> ABOUT ME</div>
                            <h1>I'm a tready Cushion Designer</h1>
                            <div className="slider1_left_link">
                                <a><u>LEARN MORE</u></a>
                            </div>
                          
                        </div>
                        <div className="slider1_right">
                            <img src={Img13}></img>
                        </div>
                    </div>
                </div>
          </div>
        </>
    );
}
export default Slider1;