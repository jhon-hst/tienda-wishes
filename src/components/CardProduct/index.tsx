import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import { ProductType } from "../../types";
import SwiperImages from "./SwiperImages";
import Description from "./Description";

export default function CardProduct({ product }: { product: ProductType }) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="row section-product mx-1 justify-content-center align-items-center">
      <div className={"col-12 col-lg-6"}>
        <h2 className="d-lg-none text-center my-2">{product.title}</h2>
        <SwiperImages product={product} setSwiperInstance={setSwiperInstance} />
      </div>
      <div className={"col-12 col-lg-6"}>
        <Description product={product} swiperInstance={swiperInstance} />
      </div>
    </section>
  );
}
