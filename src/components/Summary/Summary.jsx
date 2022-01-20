import React, { useState, useEffect } from "react";

import Product from "../Product/Product";
import imageSingle from "../../images/itemSingle.png";
import imageMultiple from "../../images/itemMultiple.png";

import "./Summary.scss";

const itemObject = [
  {
    itemCount: 3,
    itemName: "CoreProduct",
    itemPrice: 13.33,
    itemImage: imageMultiple,
    id: 1,
  },
  {
    itemCount: 1,
    itemName: "Extra CoreProduct",
    itemPrice: 9.99,
    itemImage: imageSingle,
    id: 2,
  },
];

const Summary = () => {
  const [itemData, setItemData] = useState(itemObject);

  const products = itemData.map((item, index) => (
    <Product
      {...item}
      key={index}
      setItemData={setItemData}
      itemData={itemData}
    />
  ));

  //Decided to use .reduce instead of .forEach in this situation, I left this part as a comment to showcase another option.
  //-------------------------------------------------------------------------
  // let value = 0;
  // const total = itemData.forEach((item) => (
  //   value += item.itemCount * item.itemPrice
  // ))
  // let formattedValue = (Math.round(value * 100) / 100).toFixed(2)

  const total = itemData.reduce((a, b) => b.itemPrice * b.itemCount + a, 0);
  let formattedTotal = (Math.round(total * 100) / 100).toFixed(2);

  return (
    <div className="summaryWrapper">
      {products}
      <section className="summaryWrapper__total">
        <h5>Total</h5>
        <div>
          <h3>USD</h3>
          <h6>${formattedTotal}</h6>
          {/* When using .forEach, variable "formattedValue" would substitute "formattedTotal" */}
        </div>
      </section>
    </div>
  );
};

export default Summary;
