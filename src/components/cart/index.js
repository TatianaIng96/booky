import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import style from "./cart.module.css";

const Cart = () => {
  const amount = useSelector((state) => state.cart.total);

  return (
    <div className={style.cart}>
      <div className={style.cart__icon}>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <div className={style.cart__info}>
        <p className={style.p}>{amount}</p>
        <p className={style.p2}>{amount === 0 ? "Empty" : "items"}</p>
      </div>
    </div>
  );
};

export default Cart;
