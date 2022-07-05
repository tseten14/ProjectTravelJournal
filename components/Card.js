import React from "react";

export default function Card() {
  return (
    /*This is the full component */
    <div className="FullCard">
      {/* This is the Image Component */}

      <div className="CardLeft">
        <img
          className="photo"
          src="https://source.unsplash.com/WLxQvbMyfas"
          alt="mountain"
        />
      </div>

      {/* This is the Card Component */}
      <div className="CardRight">
        <small>
          {" "}
          Japan &nbsp;
          <a href="https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!5m1!1e4">
            View on Google Maps
          </a>
        </small>
        <h1>Mount Fugi</h1>
        <p>
          {" "}
          <strong>Dec 10th 2021- Dec 20 2021 </strong>
        </p>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
