import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/imgs/shopping-bag.svg";

import { CartContext } from "../../contexts/card.context";

import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
