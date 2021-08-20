import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemDiv,
  ImageDiv,
  CollectionFooterDiv,
  AddToCardButton,
  NameSpan,
  PriceSpan,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemDiv>
      <ImageDiv className="image" imageUrl={imageUrl} />
      <CollectionFooterDiv>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </CollectionFooterDiv>
      <AddToCardButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddToCardButton>
    </CollectionItemDiv>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
