import ProductsList from "../../assets/data/products.json";
import CardProduct from "./CardProduct";
import { ProductType } from "../../types";

const ListProducts: Array<ProductType> = ProductsList;

export default function Products() {
  return (
    <>
      <div className="row g-5 px-3 px-lg-0 ">
        {ListProducts.map((product, index) => (
          <CardProduct product={product} key={index} />
        ))}
      </div>
    </>
  );
}
