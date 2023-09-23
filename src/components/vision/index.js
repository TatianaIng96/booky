import React from "react";
import Container from "react-bootstrap/Container";

const Vision = () => {
  const text = [
    {
      title: "Our Vision",
      description:
        " At Booky, our vision is to foster a love of reading and literature around the world. We believe in the importance of sharing andenjoying unforgettable stories. We want to connect book lovers everywhere, making it easy to buy and sell used and new books in anaccessible and reliable way.",
      beneficio: [],
    },
  ];
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/vision.jpg"
            alt="Imagen"
            className="img-fluid rounded-circle"
            width="400"
            height="400"
          />
        </div>
        <div className="col-md-6 text-white d-flex flex-column justify-content-center m-12 p12">
          <h3>{text[0].title}</h3>
          <p> {text[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
