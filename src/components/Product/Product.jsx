import React from "react";
import "./Product.scss";

const Product = ({
  itemName,
  itemCount,
  itemPrice,
  itemImage,
  setItemData,
  id,
  itemData,
}) => {
  const price = itemCount * itemPrice;

  const onRemove = () => {
    setItemData(itemData.filter((item) => item.id !== id));
  };

  return (
    <section className="product">
      <div>
        <img src={itemImage} alt="" className="product__productImage"></img>
      </div>
      <div className="product__productDetails">
        <span className="product__productName">
          {itemCount}x&nbsp;<h4>{itemName}®</h4>
        </span>
        <h4>${price}</h4>
      </div>
      <span className="product__remove" onClick={onRemove}>
        Remove
      </span>
    </section>
  );
};

export default Product;
