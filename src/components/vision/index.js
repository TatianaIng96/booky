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
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://th.bing.com/th/id/R.6454e3fb5600a74863b567ae35c39840?rik=xr0jHsGUwv0CRw&riu=http%3a%2f%2fedcingenieros.com%2fimages%2fImagenesderechas%2fMisionVison.png&ehk=GqASY4KA5SFIYdgUYatXOKlQYiHj22EKLrEq9jDvtj0%3d&risl=&pid=ImgRaw&r=0"
            alt="Imagen"
            className="img-fluid"
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
