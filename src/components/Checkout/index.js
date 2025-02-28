import React, { Component } from 'react';
import './index.css';
class Checkout extends Component {
  render() {
    return (
      <div className="checkout-container">
        <h1 className="checkout-heading">Checkout</h1>
        <p className="checkout-description">
          Thank you for shopping with us!
        </p>
        <p className="checkout-description">
          Your order will be delivered within 3 days.
        </p>
      </div>
    );
  }
}   
export default Checkout;