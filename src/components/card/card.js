import React, { useEffect } from 'react';
import { useState } from 'react';
import imgUser from '../../asset/img/icon/fi_users.png';
import imgSetting from '../../asset/img/icon/fi_settings.png';
import imgCalendar from '../../asset/img/icon/fi_calendar.png';

function CardMobil() {
  const [cars, setCar] = useState([]);
  const [jumlah, setJumlah] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [dispalCar, setDisplayCar] = useState([]);

  const handleSearch = () => {
    let newDate = new Date(`${date} ${time}`);

    const filterCars = cars.filter((items) => {
      const dateCar = new Date(items.availableAt);
      let filterJumlah = jumlah;
      if (jumlah == undefined) filterJumlah = 0;
      if (newDate == 'Invalid Date') newDate = new Date();

      return items.capacity >= filterJumlah && dateCar >= newDate;
    });
    console.log('filterCars', filterCars);
    setDisplayCar(filterCars);
  };

  useEffect(() => {
    fetch(' https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
      })
      .catch((err) => {
        console.log('err ', err);
      });
  });
  return (
    <>
      {/* from */}
      <div>
        <div className="container bg-blue fm-cr">
          <div className="row">
            <div className="col-sm">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Tipe Driver
              </label>
              <select className="form-select" aria-label="Default select example">
                <option value="Dengan Sopir">Dengan Sopir</option>
                <option value="Tanpa Sopir">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>

            <div className="col-sm">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Tanggal
              </label>
              <input type="date" className="form-control" id="date" onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="col-sm">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Waktu jemput/ambil
              </label>
              <input type="time" className="form-control" id="time" onChange={(e) => setTime(e.target.value)} />
            </div>

            <div className="col-sm">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Jumlah
              </label>
              <div className="input-group mb-3">
                <input type="number" className="form-control" id="jumlah" placeholder="1" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setJumlah(e.target.value)} />
                <span className="input-group-text bg-white" id="jumlah">
                  <img src="./asset/img/icon/fi_users.png" alt="" />
                </span>
              </div>
            </div>
            <div className="col-sm-2" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-center', paddingBottom: '20px' }}>
              <button type="button" id="btn-cari" className="btn btn-success px-4" onClick={handleSearch}>
                Cari mobil
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* form akhir */}

      <section id="lis-mobil">
        <div className="container layout-section">
          <div id="cars-container" className="row ">
            {/* cars */}
            {dispalCar.length > 0 ? (
              dispalCar.map((items) => (
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
              ))
            ) : (
              <h1 className="text-center"> Data Tidak Ditemukan</h1>
            )}
            {/* akhir cars */}
          </div>
        </div>
      </section>
    </>
  );
}

export default CardMobil;
