import { useState } from "react";
import { orderService } from "../../../services/order/order.service";

const useCreateOrder = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const createOrder = async (orderDto) => {
        console.log(orderDto)
      setLoading(true);
      try {
        const response = await orderService.create(orderDto);
        setLoading(false);
        return response.data; 
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message || 'Something went wrong');
        throw error;
      }
    };
  
    return { loading, error, createOrder };
  };
  
  export default useCreateOrder;