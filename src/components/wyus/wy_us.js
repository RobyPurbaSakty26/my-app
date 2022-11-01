import React from 'react';

function WyUs() {
  return (
    <section id="why-us">
      <div className="container layout-section">
        <div className="row">
          <div className="col-sm-6 col-lg-3" style={{ display: 'flex' }}>
            <div className="text-wy-us">
              <h2>Why Us</h2>
              <p className="py-3">Mengapa harus pilih Binar Car Rental?</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card bi-hand-thumbs-up-hover">
              <div className="card-body p-4">
                <i className="bi bi-hand-thumbs-up bi-hand-thumbs-up-style icon-whyus"></i>
                <h5 className="card-title pt-3">Mobil Lengkap</h5>
                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card bi-tag-hover">
              <div className="card-body p-4">
                <i className="bi bi-tag bi-tag-style icon-whyus"></i>
                <h5 className="card-title pt-3">Harga Murah</h5>
                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card clock-hover">
              <div className="card-body p-4">
                <i className="bi bi-clock bi-clock-style icon-whyus"></i>
                <h5 className="card-title pt-3">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card bi-award-hover">
              <div className="card-body p-4">
                <i className="bi bi-award bi-award-style icon-whyus "></i>
                <h5 className="card-title pt-3">Sopir Profesional</h5>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WyUs;
