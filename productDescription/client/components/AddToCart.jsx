import React, { useState } from 'react';

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  

  const handleDecrement = value => {
    if (value === 'decrease') {
      if (quantity <= 1) {
        setQuantity(1);
      } else {
        setQuantity(quantity - 1);
      }
    }
  };
  const handleAddToCart = (e) => {

    const cartEvent = new CustomEvent('addToCart', {details: quantity})
    window.dispatchEvent(cartEvent)
  };
  return (
    <div className = 'cartWrapper'>
     
        <div className = 'decreaseButton'onClick={() => handleDecrement('decrease')}> - </div>
        <div className = 'quantityButton'>{quantity}</div>
        <div className = 'increaseButton'onClick={() => setQuantity(quantity + 1)}> + </div>
     
      <button
        className="addToCart"
        onClick={(e) => {
			handleAddToCart();
        }}
      >
        <span className="addToCartTXT" >AddToCart</span>
      </button>
    </div>
  );
};

export default AddToCart;
