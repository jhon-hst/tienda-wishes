import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { redirect, useNavigate, useParams } from "react-router-dom";

import { ProductType } from "../../types";
import SwiperImages from "./SwiperImages";
import Description from "./Description";

import ProductsList from "../../assets/data/products.json";

const ListProducts: Array<ProductType> = ProductsList;

export default function Product() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const { sku } = useParams();
  const product = ListProducts.find((prod) => prod.sku === sku);
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate("/tienda-wishes/");
  };
  return (
    <>
      {product && (
        <section className="row  mx-1 justify-content-center align-items-center">
          <div onClick={() => onGoBack()} style={{ backgroundColor: "red" }}>
            <span className="material-symbols-outlined">
              keyboard_backspace
            </span>
          </div>
          <div className={"col-12 col-lg-6"}>
            <h2 className="d-lg-none text-center my-2">{product.title}</h2>
            <SwiperImages
              product={product}
              setSwiperInstance={setSwiperInstance}
            />
          </div>
          <div className={"col-12 col-lg-6"}>
            <Description product={product} swiperInstance={swiperInstance} />
          </div>
        </section>
      )}
    </>
  );
}
