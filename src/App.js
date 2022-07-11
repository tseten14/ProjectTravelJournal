import React from "react";
import Navbar from "../components/Navbar.js";
import Card from "../components/Card.js";
import data from "../data";

export default function App() {
  const CardElement = data.map((data) => {
    return (
      <Card
        title={data.title}
        location={data.location}
        googleMapsUrl={data.googleMapsUrl}
        startDate={data.startDate}
        endDate={data.endDate}
        description={data.description}
        imageUrl={data.imageUrl}
      />
    );
  });
  return (
    <div>
      <Navbar />
      {/* <Card
        title="Mount Fuji"
        location="Japan"
        googleMapsUrl="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
        startDate="12 Jan, 2021"
        endDate="24 Jan, 2021"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        imageUrl="https://lh3.googleusercontent.com/7qGDUPijGP5_WDcfMoD6jnbjzutgQWyXfNV_4VPIbj12RJd78LnLeflJ6Wywm_Pk"
      /> */}
      {CardElement}
      <hr className="breaker" />
    </div>
  );
}
