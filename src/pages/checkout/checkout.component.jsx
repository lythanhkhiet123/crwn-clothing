import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import {
  CheckOutPageDiv,
  CheckOutHeaderDiv,
  HeaderBlockDiv,
  TotalDiv,
  TestWarningDiv,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckOutPageDiv>
    <CheckOutHeaderDiv>
      <HeaderBlockDiv>
        <span>Product</span>
      </HeaderBlockDiv>
      <div>
        <span>Description</span>
      </div>
      <HeaderBlockDiv>
        <span>Quantity</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Price</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Remove</span>
      </HeaderBlockDiv>
    </CheckOutHeaderDiv>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalDiv>TOTAL: ${total}</TotalDiv>
    <StripeCheckoutButton price={total} />
    <TestWarningDiv>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </TestWarningDiv>
  </CheckOutPageDiv>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
