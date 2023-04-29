import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

import granRemate from "../../assets/gran-remate.jpeg";
import Products from "./Products";
import Faq from "./Faq";
import ProductsList from "../../assets/data/products.json";
import { ProductType, VariationType } from "../../types";

const ListProducts: Array<ProductType> = ProductsList;

type amountsType = {
  AllPriceCost: number;
  AllSalePrice: number;
};

const amounts = ListProducts.reduce(
  (accu: amountsType, product: ProductType) => {
    let productStock = product.stock ?? 0;

    if (product.variations?.length) {
      productStock = product.variations.reduce(
        (acc: number, variation: VariationType) => acc + variation.stock,
        0
      );
    }
    return {
      AllPriceCost: productStock * product.priceCost + accu.AllPriceCost,
      AllSalePrice: productStock * product.salePrice + accu.AllSalePrice,
    };
  },
  {
    AllPriceCost: 0,
    AllSalePrice: 0,
  }
);

export default function List() {
  return (
    <main className="container pb-5 ">
      <div className="header">
        <div className="auction-container">
          <img src={granRemate} className="auction-img" />
        </div>
        <h1 className="header-title">Gram remate de productos</h1>
        <p className="header-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          similique facilis neque repudiandae aperiam blanditiis, id reiciendis
          harum quo eius fugiat ipsa rem accusantium voluptatibus aliquid
          expedita, cum quidem. Dolore.
        </p>
      </div>
      <Products />
      <Faq />
    </main>
  );
}
