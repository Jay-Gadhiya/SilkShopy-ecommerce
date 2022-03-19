import { useEffect, useState } from "react";
import axios from "axios";


// custom hook for fetch data
const useFetchData = () => {

  const [product, setProduct] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          const res = await axios.get("/api/products");
          setProduct(() => res.data.products);
        } catch (error) {
           return error;
        }
      })(),
    []
  );

  return { product };

}

export { useFetchData };