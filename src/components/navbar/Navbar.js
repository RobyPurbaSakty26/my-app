import React from 'react';

function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg fixed-top bg-gray">
        <div className="container">
          <a className="navbar-brand bg-blue px-4 text-white rounded" href="/">
            Binar Car Rental
          </a>
          <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                BCR
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#our-service">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <div className="register-style bg-success rounded" style={{ display: 'flex' }}>
                    <a style={{ margin: 'auto' }} className="nav-link text-white" aria-current="page" href="#faq">
                      Regiter
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
