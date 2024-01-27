import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider.tsx";
import { UseProductsContextType } from "../context/ProductsProvider.tsx";

const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
