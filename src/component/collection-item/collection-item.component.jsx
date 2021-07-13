import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";

import {
  ImageContainer,
  CustomButtonContainer,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
} from "./collection-item.styles";

const CollectionItem = ({ addItem, item }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <span className="price">{price}</span>
      </CollectionFooterContainer>
      <CustomButtonContainer onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);