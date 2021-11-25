import React from 'react';
import Gallary1 from './Gallary_child'
import Img4 from '../../Asset/Image/img4.jpg'
import Img5 from '../../Asset/Image/img5.jpg'
import Img6 from '../../Asset/Image/img6.jpg'
import Img7 from '../../Asset/Image/img7.jpg'
import Img8 from '../../Asset/Image/img8.jpg'
import Img9 from '../../Asset/Image/img9.jpg'

function Gallary() {
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 ">
                        <div className="gallary_item">
                            <Gallary1 image={Img4} price={"$ 19.99 USD"}/>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="gallary_item">
                        <Gallary1 image={Img5}  price={"$ 47.99 USD"}/>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="gallary_item">
                        <Gallary1 image={Img6}  price={"$ 67.99 USD"}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gallary_item">
                        <Gallary1 image={Img7}  price={"$ 23.99 USD"}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gallary_item">
                        <Gallary1 image={Img8}  price={"$ 89.99 USD"}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gallary_item">
                        <Gallary1 image={Img9}  price={"$ 40.99 USD"}/>
                        </div>
                    </div>
                </div>
                <div className="gallary_link">
                  < a>Back to product</a>
                </div>
            </div>

        </>

    );
}

export default Gallary;