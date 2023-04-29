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
  const convertPrice = (params: number) => {
    return params
      .toLocaleString("es-ES", {
        style: "currency",
        currency: "COL",
        minimumFractionDigits: 0,
      })
      .replace("COL", "");
  };
  return (
    <main className="container pb-5 ">
      <div className="header">
        <div className="auction-container">
          <img src={granRemate} className="auction-img" />
        </div>
        <h1 className="header-title">
          ¡Liquidación de productos de alta calidad a precio de costo!
        </h1>
        <p className="header-description">
          Aprovecha esta oportunidad única para adquirir productos de decoración
          para el hogar, encendedores eléctricos y productos de cocina de
          calidad a precio de costo. ¡Todos los productos sumados tienen un
          valor de {convertPrice(amounts.AllPriceCost)}, pero puedes comprarlos
          por solo {convertPrice(3500000)} si adquieres todo el lote! Si se
          vendieran al precio sugerido, su valor alcanzaría los{" "}
          {convertPrice(amounts.AllSalePrice)}. ¡No dejes pasar esta oferta
          increíble y adquiere productos de calidad a precios imbatibles!
        </p>
      </div>
      <Products />
      <Faq />
    </main>
  );
}
