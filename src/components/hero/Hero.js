import React from 'react';
import car from '../../asset/img/image/img_car.png';

function Hero() {
  return (
    <section id="home">
      <div className="container-fluit pt-5">
        <div className="row bg-gray">
          <div className="col-md-6 p-home-l">
            <h2 style={{ fontSize: '36px' }}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>

            <a className="text-white bg-success px-4 py-2 rounded" href="/Cars">
              Mulai Sewa Mobil
            </a>
          </div>
          <div className="col-md-6">
            <div style={{ display: 'flex' }}>
              <img className="car-size" src={car} alt="Car" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
