import React from 'react';

function CardMobil() {
  return (
    <section id="lis-mobil">
      <div className="container layout-section">
        <div id="cars-container" className="row row-cols-3">
          <div className="col-lg-4">
            <div className="card">
              <div className="car-list">
                <img src="./asset/img/image/image_car_av.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <b>Rp 5000 /Hari</b>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                  <div className="row pb-2">
                    <div className="col-1">
                      <img src="./asset/img/icon/fi_users.png" alt="" />
                    </div>
                    <div className="col">4 Orang</div>
                  </div>
                  <div className="row pb-2">
                    <div className="col-1">
                      <img src="./asset/img/icon/fi_users.png" alt="" />
                    </div>
                    <div className="col">4 Orang</div>
                  </div>
                  <div className="row pb-4">
                    <div className="col-1">
                      <img src="./asset/img/icon/fi_users.png" alt="" />
                    </div>
                    <div className="col">4 Orang</div>
                  </div>
                  <a href="/" className="btn btn-success py-2" style={{ width: '100%' }}>
                    Pilih Mobil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardMobil;
