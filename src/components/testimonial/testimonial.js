import React from "react";
import "../../own.js";
import Card from "./carosel/card";
function Testimonial() {
  return (
    <section id="testimonial">
      <div className="contaner-fluit layout-section">
        <div className="row pb-3">
          <div className="col  text-center ">
            <h2 className="pb-3">Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
        </div>
        <div className="row">
          <Card></Card>
        </div>
      </div>
      {}
    </section>
  );
}
export default Testimonial;
