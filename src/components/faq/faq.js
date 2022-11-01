import React from 'react';

function Faq() {
  return (
    <section id="faq">
      <div className="container layout-section">
        <div className="row">
          {/* <!-- title FAQ --> */}
          <div className="col-sm-5">
            <h2 className="faq-text-center">Frequently Asked Question</h2>
            <p className="faq-text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          {/* <!-- end title FAQ --> */}
          {/* <!-- kanan faq --> */}
          <div className="col-sm-7">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-2 border">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-2 border">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-2 border">
                <h2 className="accordion-header" id="headingempat">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseempat" aria-expanded="false" aria-controls="collapseempat">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseempat" className="accordion-collapse collapse" aria-labelledby="headingempat" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>

              <div className="accordion-item border">
                <h2 className="accordion-header" id="headinglima">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapselima" aria-expanded="false" aria-controls="collapselima">
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div id="collapselima" className="accordion-collapse collapse" aria-labelledby="headinglima" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
