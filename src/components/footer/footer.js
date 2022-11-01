import React from 'react';
import iconFacebook from '../../asset/img/icon/icon_facebook.png';
import iconInstagram from '../../asset/img/icon/icon_instagram.png';
import inconTwiter from '../../asset/img/icon/icon_twitter.png';
import mail from '../../asset/img/icon/icon_mail.png';
import iconTwich from '../../asset/img/icon/icon_twitch.png';

function Footer() {
  return (
    <footer id="footer">
      <div className="container layout-section pb-5">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-lg-2 col-sm-6">
            <p>
              <a className="text-dark" href="#our-service">
                <strong>Our services</strong>
              </a>
            </p>
            <p>
              <a className="text-dark" href="#why-us">
                <strong>Why Us</strong>
              </a>
            </p>
            <p>
              <a className="text-dark" href="#testimonial">
                <strong>Testimonial</strong>
              </a>
            </p>
            <p>
              <a className="text-dark" href="#faq">
                <strong>FAQ</strong>
              </a>
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <p>Connect with us</p>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item incon-footer">
                <a href="#">
                  <img className="footer-incon-size" src={iconFacebook} alt="..." />
                </a>
              </li>
              <li className="list-group-item incon-footer">
                <a className="text-white" href="#">
                  <img className="footer-incon-size" src={iconInstagram} alt="..." />
                </a>
              </li>
              <li className="list-group-item incon-footer">
                <a className="text-white" href="#">
                  <img className="footer-incon-size" src={inconTwiter} alt="..." />
                </a>
              </li>
              <li className="list-group-item incon-footer">
                <a className="text-white" href="#">
                  <img className="footer-incon-size" src={mail} alt="..." />
                </a>
              </li>
              <li className="list-group-item incon-footer">
                <a className="text-white" href="#">
                  <img className="footer-incon-size" src={iconTwich} alt="..." />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6">
            <p>Copyright Binar 2022</p>
            <div style={{ width: '100px', height: '34px', backgroundColor: '#0d28a6' }}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
