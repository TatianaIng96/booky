import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./cartCard.module.css";

const CartCard = ({ quantity, image, title, price, id }) => {
  const dispatch = useDispatch();

  const handleMinus = () => {
    dispatch(cartActions.removeItem(id));
  };
  const handlePlus = () => {
    dispatch(cartActions.addItemToCart({ id, image, title, price }));
  };

  return (
    <div className={`${style.cartCard}`}>
      <div className={`${style.img}`}>
        <img
          src={image}
          alt={title}
          className={`${style.img}`}
          loading="lazy"
        />
        <p className={`${style.cartCard__info} text-white`}>{title}</p>
        <p className={`${style.cartCard__info} text-white`}>Price: ${price}</p>
        <div className={`${style.cartCard__icons}`}>
          <button onClick={handleMinus} className={`${style.button}`}>
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
          <span className="text-white">{quantity}</span>
          <button onClick={handlePlus} className={`${style.button}`}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
