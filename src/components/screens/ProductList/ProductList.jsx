import React, { useState } from "react";
import { useCallback, useEffect } from "react";
import useProductList from './UseProductList';
import { UseTelegram } from "../../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";
import useCreateOrder from "./UseCreateOrder";
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);
  };
  
  const ProductList = () => {
    const { products } = useProductList();
    const [addedItems, setAddedItems] = useState([]);
    const { tg, user } = UseTelegram();
    const { createOrder } = useCreateOrder();
    const [totalPrice, setTotalPrice] = useState(0);
  
    // Обновление totalPrice при изменении addedItems
    useEffect(() => {
      const price = getTotalPrice(addedItems);
      setTotalPrice(price);
    }, [addedItems]);
  
    const handleCreateOrder = async () => {
        const orderDto = {
          totalPrice: totalPrice,
          products: addedItems.map(item => item._id),
          user: user,
        };
        const createdOrder = await createOrder(orderDto);
       
      
    };

    useEffect(() => {
      tg.onEvent("mainButtonClicked", handleCreateOrder);
      return () => {
        tg.offEvent("mainButtonClicked", handleCreateOrder);
      };
    }, [handleCreateOrder]);
  
    const onAdd = (product) => {
      const alreadyAdded = addedItems.find((item) => item._id === product._id);
      let newItems = [];
  
      if (alreadyAdded) {
        newItems = addedItems.filter((item) => item._id !== product._id);
      } else {
        newItems = [...addedItems, product];
      }
  
      setAddedItems(newItems);
  
      if (newItems.length === 0) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
        tg.MainButton.setParams({
          text: `Купить ${getTotalPrice(newItems)}`,
        });
      }
    };
  
    return (
      <div className="px-4 grid grid-cols-2 gap-4">
        {products.map((item) => (
          <ProductItem key={item._id} product={item} onAdd={onAdd} />
        ))}
      </div>
    );
  };
  
  export default ProductList;