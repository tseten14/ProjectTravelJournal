import React from "react";
import Navbar from "../components/Navbar.js";
import Card from "../components/Card.js";
import data from "../data";

export default function App() {
  const CardElement = data.map((data) => {
    return (
      <div>
        <Card
          title={data.title}
          location={data.location}
          googleMapsUrl={data.googleMapsUrl}
          startDate={data.startDate}
          endDate={data.endDate}
          description={data.description}
          imageUrl={data.imageUrl}
        />

        <hr />
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      {CardElement}
    </div>
  );
}
