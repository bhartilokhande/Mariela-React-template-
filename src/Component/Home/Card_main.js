import React from 'react';
import Card_1 from './Card_child';
import Img2 from '../../Asset/Image/img2.png';
import Img3 from '../../Asset/Image/img3.png';
import Slide1 from '../../Asset/Image/slide1.png';


function Card() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="container_title">

                            <div className="t1"> I'M A CUSHION DESIFNER</div>
                            <div className="title_para">
                                <p>Based in San Francisco, California I design trendy and fashion Cushions,<br></br> since I have memory I always had a tendency to design and illustration.</p>
                            </div>
                            <div className="title_button">
                                <button>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                     <Card_1 title="About me" image={Img2}/>
                    </div>
                    <div className="col-lg-4">
                    <Card_1 title="My product" image={Img3}/>
                    </div>
                    <div className="col-lg-4">
                    <Card_1  title="Contact me" image={Slide1}/>
                    </div>
                </div>
            </div>
        </>

    );


}
export default Card;