import React from 'react';
import Img12 from '../../Asset/Image/img12.jpg';

function Section4() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <img className="sec4_img" src={Img12}></img>  
                    </div>
                    <div className="col-lg-6">
                    <div className="sec4_para">
                            <div className="sec4_para_title">
                                Carrer
                           </div>
                           <div className="sec4_para_text">
                                <p>
                                    Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences.
                               </p>
                                <p>
                                    Dramatically synthesize integrated schemas. with optimal networks.
                               </p>
                            </div>
                            <div className="sec4_button">
                                <a>LEARN MORE</a>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section4;

