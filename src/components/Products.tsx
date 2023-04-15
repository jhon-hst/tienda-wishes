import ProductsList from "../assets/data/products.json";
import CardProduct from "./CardProduct";
import { ProductType } from "../types";

const Products: Array<ProductType> = ProductsList;

export default function Product() {
  return (
    <>
      {Products.map((product, index) => (
        <CardProduct product={product} key={index} />
      ))}
    </>
  );
}
