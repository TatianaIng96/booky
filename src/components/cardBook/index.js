import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./card.module.css";
import React, { Component, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { showAlert } from "@/store/alerts/alertsSlice";
import { cartActions } from "@/store/cart/cartSlice";
import { useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const CardBook = ({ data }) => {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const message = useSelector((state) => state.alerts.message);

  const handleClick = (product) => {
    if (disable) {
      dispatch(
        showAlert({
          active: true,
          message: "The product could not be added - offer time is out",
          type: "error",
        })
      );
    } else {
      dispatch(
        showAlert({
          active: true,
          message: "The product was added successfully",
          type: "success",
        })
      );
      dispatch(
        cartActions.addItemToCart({
          title: product.title,
          price: product.price,
          id: product._id,
          image: product.image,
        })
      );
    }
    Swal.fire(message, "success");
  };

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
                    <Button
                      variant="primary"
                      className={styles.ml}
                      onClick={() => handleClick(card)}
                    >
                      Add <Plus />
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
