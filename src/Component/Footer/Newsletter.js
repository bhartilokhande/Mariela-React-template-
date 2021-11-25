import React from 'react';

function Newsletter() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="newsletter">
                            <div className="newsletter_title">
                                <p>Newsletter</p>
                            </div>
                            <div className="newsletter_subtitle">
                                <p>Get promotion & update!</p>
                            </div>
                            <div class="input_group ">
                                <input type="text" placeholder="your name" />
                                <input type="text" placeholder="your email" />
                                <button className="input_btn" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Newsletter;