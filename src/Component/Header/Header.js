import React from 'react';
import Logo from '../../Asset/Image/Logo.png';
import Cart from '../../Asset/Image/cart.png';


function Header() {
  return (
    <>
    {/* navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={Logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact me</a>
              </li>
            </ul>
            <div className="cart">
              <button className="cart_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" ><img className="cart_img" src={Cart} /></button>
            </div>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Your Cart</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          ...
        </div>
      </div>
      {/* Navbar end */}
    </>

  );
}

export default Header;