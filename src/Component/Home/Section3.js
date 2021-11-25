import React from 'react';
import Img10 from '../../Asset/Image/img10.jpg';

function Section3(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sec3_para">
                            <div className="sec3_para_title">
                                {props.title}
                           </div>
                           <div className="sec3_para_text">
                                <p>
                                    {props.text1}
                               </p>
                                <p>
                                   {props.text2}
                               </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    
                        <img className="sec3_img" src={Img10}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section3;