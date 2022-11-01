import React from 'react';
import imgCar from '../../asset/img/image/img_car.png';

function HomeCar() {
  return (
    <section id="home">
      <div className="container-fluit pt-5">
        <div className="row bg-gray">
          <div className="col-md-6 p-home-l">
            <h2 style={{ fontSize: '36px' }}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          </div>
          <div className="col-md-6">
            <div style={{ display: 'flex' }}>
              <img className="car-size" src={imgCar} alt="image" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCar;
