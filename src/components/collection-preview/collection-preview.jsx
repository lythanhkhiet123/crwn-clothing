import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewDiv,
  H1Container,
  PreviewDiv,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewDiv>
    <H1Container>{title.toUpperCase()}</H1Container>
    <PreviewDiv>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewDiv>
  </CollectionPreviewDiv>
);

export default CollectionPreview;
