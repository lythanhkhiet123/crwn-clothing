import React from 'react';

import {
  PriceSpan,
  CartItemDiv,
  ItemDetailsDiv,
  NameSpan,
  Images,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemDiv>
    <Images src={imageUrl} alt="item" />
    <ItemDetailsDiv>
      <NameSpan>{name}</NameSpan>
      <PriceSpan>
        {quantity} x ${price}
      </PriceSpan>
    </ItemDetailsDiv>
  </CartItemDiv>
);

export default CartItem;
