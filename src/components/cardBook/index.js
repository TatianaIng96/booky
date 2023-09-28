import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./card.module.css";
import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";

const CardBook = ({ data }) => {
  return (
    <div className="container">
      <Row>
        {data.map((card) => (
          <Col key={card._id}>
            <div className={`${styles.wh} card`}>
              <Card
                style={{ width: "18rem" }}
                className={`${styles.wcard} text-white`}
              >
                <img
                  alt={card.title}
                  src={card.image}
                  width="248" // Ancho deseado de la imagen
                  height="230"
                  className={`${styles.radius} card-img-top`}
                />
                <Card.Body>
                  <h6>{card.title}</h6>
                  <p> PRICE: {card.price}</p>
                  <div className="col">
                    <Button variant="primary">Details</Button>
                    <Button variant="primary">
                      <Cart />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardBook;
