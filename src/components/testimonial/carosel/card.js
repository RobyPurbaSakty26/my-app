import React, { useEffect } from 'react';
import david from '../../../asset/img/image/img_david.png';
import $ from 'jquery';
// import 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
// import '../../../own';
function Card() {
  return (
    <div className=" px-md-5 px-4">
      <div id="carouselExampleDark" className="carousel slide carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active ">
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
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>

                      <h5>John Dee 32, Bromo</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
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
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>

                      <h5>John Dee 32, Bromo</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
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
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>

                      <h5>John Dee 32, Bromo</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
