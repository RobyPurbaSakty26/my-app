import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import david from '../../../asset/img/image/img_david.png';

function Own() {
  return (
    <OwlCarousel className="owl-theme" loop margin={10} items={1} stagePadding={300} nav>
      <div className="item ">
        <div className="card border-0 " style={{ background: '#F1F3FF' }}>
          <div className="row g-0 align-items-center justify-content-center py-3">
            <div className="col-md-4 me-4" style={{ height: '100px', width: '100px' }}>
              <img style={{ height: '100px', width: '100px' }} src={david} className="rounded-circle" alt="..." />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <div style={{ display: 'flex' }}>
                  <ul className="star-center list-group list-group-horizontal pb-3">
                    <li className="list-group-item start-rate">
                      <div className="col-1">
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                    <li className="list-group-item start-rate">
                      <div className="col-1">
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                    <li className="list-group-item start-rate">
                      <div className="col-1">
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                    <li className="list-group-item start-rate">
                      <div className="col-1">
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                    <li className="list-group-item start-rate">
                      <div className="col-1">
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="card-text">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>

                <h5>John Dee 32, Bromo</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}
export default Own;
