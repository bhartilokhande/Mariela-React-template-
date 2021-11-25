import React from 'react';

function Contact() {
    return (
        <>
            <div className="contact_sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact_sec1">
                                <div className="contact_email">
                                    Email
                                 </div>
                                <div className="email_link">
                                    <a>support@websit.com</a>
                                </div>

                                <div className="contact_phone">Phone</div>
                                <div className="phone_no">800-123-Address</div>
                                <div className="contact_address">Address</div>
                                <div className="address_text">23 Evergreen Street, San Fracncisco,California USA</div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="contact_sec2">

                                <label className="contact_address" >Address</label>
                                <p className="contact_para">Drop us your massage and I'll get back to you as soon as possible.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input placeholder="your name"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input placeholder="your company" ></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input placeholder="your phone" ></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <input placeholder="your email"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <textarea placeholder="your massage"></textarea>
                                    </div>
                                </div>

                                <div className="contact_button">
                                    <button>Let's talk</button>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
export default Contact;