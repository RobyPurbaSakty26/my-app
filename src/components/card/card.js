import React, { useEffect } from 'react';
import { useState } from 'react';
import imgUser from '../../asset/img/icon/fi_users.png';
import imgSetting from '../../asset/img/icon/fi_settings.png';
import imgCalendar from '../../asset/img/icon/fi_calendar.png';

function CardMobil() {
  const [cars, setCar] = useState([]);

  useEffect(() => {
    fetch(' https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('data  ', data);
        setCar(data);
      })
      .catch((err) => {
        console.log('err ', err);
      });
  });
  return (
    <>
      {/* {cars.map((items) => (
        <h1 key={items.id}> {items.model}</h1>
      ))} */}
      <section id="lis-mobil">
        <div className="container layout-section">
          <div id="cars-container" className="row ">
            {/* cars */}
            {cars.map((items) => (
              <div className="col-lg-4 my-3" key={items.id}>
                <div className="card">
                  <div className="car-list">
                    <img id="imgCar" src={items.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{items.model}</h5>
                      <b>Rp {items.rentPerDay} /Hari</b>
                      <p className="card-text" style={{ minHeight: '100px' }}>
                        {items.description}
                      </p>

                      <div className="row pb-2">
                        <div className="col-1">
                          <img src={imgUser} alt="" />
                        </div>
                        <div className="col">{items.capacity} Orang</div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-1">
                          <img src={imgSetting} alt="" />
                        </div>
                        <div className="col"> {items.transmission} </div>
                      </div>
                      <div className="row pb-4">
                        <div className="col-1">
                          <img src={imgCalendar} alt="" />
                        </div>
                        <div className="col"> {items.availableAt} </div>
                      </div>
                      <a href="/" className="btn btn-success py-2" style={{ width: '100%' }}>
                        Pilih Mobil
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* akhir cars */}
          </div>
        </div>
      </section>
    </>
  );
}

export default CardMobil;
