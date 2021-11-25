import React from 'react';
import Contact from './Contact';
import Newsletter from './Newsletter';
import Footer1 from './Footer1';
import Footer_Logo from '../../Asset/Image/footer_logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faTruckPickup, faThumbsUp} from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <>
            <Contact />
            <Newsletter />

            <div className="footer_sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                       <Footer1 icon={faHome}/>
                        </div>
                        <div className="col-lg-4">
                        <Footer1 icon={faTruckPickup}/>
                        </div>
                        <div className="col-lg-4">
                        <Footer1 icon={faThumbsUp}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_sec2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                          <a>
                              <img className="footer_logo" src={Footer_Logo}/>
                              
                          </a>
                          <div className="footer_nav">                                                                                                                                             
                              <ul className="footer_menu">
                                  <li className="footer_menu_item">Home</li>                                                                                                                                                                                                                                                                                                                 
                                  <li  className="footer_menu_item">About me</li>
                                  <li  className="footer_menu_item">Products</li>
                                  <li  className="footer_menu_item">Contact me</li>
                              </ul>
                          </div>
                          <div className="footer_icon">
                          {/* <FontAwesomeIcon icon={} color="white"/> */}
                          </div>
                       
                         
                        </div>
                        <div className="footer_copyright">
                          <a>Version 1.2</a>
                          &nbsp; |
                          <a>Image <b>Licensing</b></a>
                          &nbsp; |
                          <a> Made By <b>Pablo Ramos</b></a>
                          &nbsp; |
                          <a>Visit My <b>Templates</b> </a>
                          &nbsp; |
                          <a> Powered By  <b>Webflow</b></a>
                        </div>
                    </div>
                </div> 
            </div>

        </>
    );

}
export default Footer;