import { useState } from "react";
import style from "./checkout.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart/cartSlice";

import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const Checkout = ({ amount, books, sellerId, buyerId }) => {
  const [messageExists, setMessageExists] = useState(false);
  const [message, setMessage] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const route = useRouter();
  const dispatch = useDispatch();

  const transactionErrors = {
    "Your card has insufficient funds.": () =>
      alert("No tienes fondos suficientes"),
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(
          CardNumberElement,
          CardExpiryElement,
          CardCvcElement
        ),
      });
      if (error) {
        setMessageExists(true);
        setMessage(`Error: ${error.message}`);
        return;
      }
      const fetchConfig = {
        method: "POST",
        body: JSON.stringify({
          paymentMethod,
          totalAmount: amount,
          sellerId,
          buyerId,
          books,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `http://localhost:8080/api/transactions`,
        fetchConfig
      );
      if (response.ok) {
        setMessageExists(true);
        setMessage("Payment successful");
        Swal.fire("Payment successful", "success");
      } else {
        transactionErrors["Your card has insufficient funds."]();
      }
    } catch (error) {
      transactionErrors["Your card has insufficient funds."]();
    } finally {
      elements
        .getElement(CardNumberElement, CardExpiryElement, CardCvcElement)
        .clear();
    }
    dispatch(cartActions.resetCart());
    route.push("/books");
  };
  return (
    <div className={style.checkout}>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number
          <CardNumberElement className={style.stripe_input} />
        </label>

        <label>
          Expiration Date
          <CardExpiryElement className={style.stripe_input} />
        </label>

        <label>
          CVC
          <CardCvcElement className={style.stripe_input} />
        </label>

        <label className={style.bid}>
          Amount:{" "}
          <span className={style.amount}>
            {amount}
            <span className={style.currency}>Dollars</span>
          </span>
        </label>

        <button type="submit" className={style.payButton}>
          {" "}
          Pay{" "}
        </button>
      </form>
      {messageExists && (
        <div className="text-white">
          {message}
          <button
            type="button"
            onClick={() => {
              return setMessageExists(false);
            }}
            className=" btn btn-primary"
          >
            Ok
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
