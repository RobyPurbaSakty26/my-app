import React from 'react';
import imgServie from '../../asset/img/image/img_service.png';

function AurService() {
  return (
    <section id="our-service">
      <div className="container layout-section">
        <div className="row ">
          <div className="col-sm-12 col-lg-6 " style={{ display: 'flex' }}>
            <img className="img-service-size" src={imgServie} alt="img-service" />
          </div>
          <div className="col-sm-12 col-lg-6 pt-5" style={{ display: 'flex' }}>
            <div className="text-service">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>

              <p>
                <i className="bi bi-check-lg bi-check-lg-style me-3 icon-check"></i> Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p>
                <i className="bi bi-check-lg bi-check-lg-style me-3 icon-check"></i>Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p>
                <i className="bi bi-check-lg bi-check-lg-style me-3 icon-check"></i>Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p>
                <i className="bi bi-check-lg bi-check-lg-style me-3 icon-check"></i>Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p>
                <i className="bi bi-check-lg bi-check-lg-style me-3 icon-check"></i>Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AurService;
