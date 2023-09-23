import React from "react";
import Container from "react-bootstrap/Container";

const TextItem = () => {
  const text = [
    {
      title: "Why Choose Booky?",
      description:
        "At Booky, we offer a unique experience for book buyers and sellers. By joining us, you will be able to enjoy the following benefits:",
      beneficio: [
        "Buy affordable books and discover new readings.",
        "Sell your used books and earn extra money.",
        "Browse through a wide variety of genres and authors.",
        "Secure transactions and buyer protection.",
      ],
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/function.png"
            alt="Imagen"
            className="img-fluid rounded-circle"
            height="500"
            width="500"
          />
        </div>
        <div className="col-md-6 text-white d-flex flex-column justify-content-center m-12 p12">
          <h3>{text[0].title}</h3>
          <p> {text[0].description}</p>
          <ul>
            <li>{text[0].beneficio[0]}</li>
            <li>{text[0].beneficio[1]}</li>
            <li>{text[0].beneficio[2]}</li>
            <li>{text[0].beneficio[3]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextItem;
