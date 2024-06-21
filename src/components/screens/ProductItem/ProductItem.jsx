import React from "react";

import MainButton from "../../ui/Button";
const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };
  return (
    <div>
      <div />

      <img
        src={process.env.REACT_APP_URL + product.image}
        alt=""
        className="h-[218px] w-[165px] rounded-[14px] image-like-bg"
      />
      <div className="p-[8px]">
        <div className="text-base font-semibold mb-1">{product.title}</div>
        <div className="text-[#627281] font-normal">{product.description}</div>
      </div>
      <div className="mt-3">
        <b className="text-[#562B1A] text-xl">₽ {product.price}</b>
      </div>
      <MainButton onClick={onAddHandler}>Добавить в корзину</MainButton>
    </div>
  );
};

export default ProductItem;
