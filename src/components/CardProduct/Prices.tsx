import type { Swiper as SwiperType } from "swiper";

import Images from "../../assets/images";
import { MediaType, ProductType } from "../../types";
import { useEffect, useState } from "react";
import { VariationType } from "../../types";

export default function Prices({ product }: { product: ProductType }) {
  const [unitsAvailable, setUnitsAvailable] = useState(0);
  const [priceCostPerUnit, setPriceCostPerUnit] = useState(0);
  const [suggestedSalePricePerUnit, setSuggestedSalePricePerUnit] = useState(0);

  useEffect(() => {
    if (product.variations) {
      const sumUnitsAvailable = product.variations.reduce(
        (accumulator, variation) => accumulator + variation.stock,
        0
      );
      setUnitsAvailable(sumUnitsAvailable);
    } else {
      setUnitsAvailable(product.stock ?? 0);
    }
    setPriceCostPerUnit(product.priceCost);
    setSuggestedSalePricePerUnit(product.salePrice);
  }, [product]);

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
    <>
      <div className="card-price mt-5">
        <p>
          Unidades disponibles: <span>{unitsAvailable}</span>
        </p>
      </div>
      <div className="card-price">
        <p>
          Precio costo por unidad:{" "}
          <span> $ {convertPrice(priceCostPerUnit)}</span>
        </p>
      </div>
      <div className="card-price">
        <p>
          Total a precio costo de todas las unidades:
          <span> $ {convertPrice(priceCostPerUnit * unitsAvailable)}</span>
        </p>
      </div>
      <div className="card-price">
        <p>
          Precio sugerido de venta por unidad:
          <span> $ {convertPrice(suggestedSalePricePerUnit)}</span>
        </p>
      </div>
      <div className="card-price">
        <p>
          Total a precio sugerido de todas las unidades:
          <span>
            {" "}
            $ {convertPrice(suggestedSalePricePerUnit * unitsAvailable)}
          </span>
        </p>
      </div>
    </>
  );
}
