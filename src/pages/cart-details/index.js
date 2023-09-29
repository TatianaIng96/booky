import React from "react";
import { useSelector } from "react-redux";
import { Card, ListGroup, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./details.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
import CartCard from "../../components/cartCard";
//import Checkout from '../components/Checkout';

//const stripePromise = loadStripe('pk_test_51MyeEwIqx4vvSZsUpdrxLHB6BC7348RhkXToGdQylFjJNEyPKFQFy9xQzgSTTmZtngSDhiwDjrhht0UpD9PAUbZd00vrZKhghC');

const CartDetails = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const totalPrice = cartItems.reduce((a, b) => a + b.totalPrice, 0).toFixed(2);
  const userSession = Cookies.get("userSession");
  const sessionData = userSession ? JSON.parse(userSession) : null;
  const router = useRouter();

  if (!sessionData) {
    router.push("/login");
  } else {
    return (
      <div className={`${style.top} container`}>
        <div className="row">
          <div className={`col-lg-8`}>
            <Card className={`${style.col_one}`}>
              <Card.Header as="h5" className="text-white">
                Shopping Cart
              </Card.Header>
              <ListGroup variant="flush">
                <div className={` d-flex flex-wrap justify-content-center `}>
                  {cartItems.map((item) => (
                    <Col
                      key={item.id}
                      md={12}
                      lg={4}
                      className={`${style.list}`}
                    >
                      <CartCard
                        id={item.id}
                        quantity={item.quantity}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                      />
                    </Col>
                  ))}
                </div>
              </ListGroup>
              <Button onClick={() => router.push("/books")}>Add book</Button>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className={`${style.col_two} `}>
              <Card.Header as="h5" className="text-white">
                Cart Totals
              </Card.Header>
              <Card.Body>
                <div>
                  <p className="text-white">Total Books: {total}</p>
                </div>
                <div>
                  <p className="text-white">Total Price: ${totalPrice}</p>
                </div>
              </Card.Body>
            </Card>
            {/* Agrega aquí tu sección de pago */}
          </div>
        </div>
      </div>
    );
  }
};

export default CartDetails;
