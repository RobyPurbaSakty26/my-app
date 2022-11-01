import React from 'react';

function Cari() {
  return (
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
            <input type="date" className="form-control" id="date" />
          </div>

          <div className="col-sm">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Waktu jemput/ambil
            </label>
            <input type="time" className="form-control" id="time" />
          </div>

          <div className="col-sm">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Jumlah
            </label>
            <div className="input-group mb-3">
              <input type="number" className="form-control" id="jumlah" placeholder="1" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span className="input-group-text bg-white" id="jumlah">
                <img src="./asset/img/icon/fi_users.png" alt="" />
              </span>
            </div>
          </div>
          <div className="col-sm-2" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-center', paddingBottom: '20px' }}>
            <button type="button" id="btn-cari" className="btn btn-success px-4">
              Cari mobil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cari;
