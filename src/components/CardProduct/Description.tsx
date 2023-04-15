import type { Swiper as SwiperType } from "swiper";

import Images from "../../assets/images";
import { MediaType, ProductType } from "../../types";
import { useState } from "react";
import { VariationType } from "../../types";
import Prices from "./Prices";

export default function Description({
  product,
  swiperInstance,
}: {
  product: ProductType;
  swiperInstance: SwiperType | null;
}) {
  const [variationSelected, setVariationSelected] =
    useState<VariationType | null>(null);

  const getImageToVariation = (product: ProductType, key: number) => {
    const media = product.media.find((item) => item.key === key);
    return media ?? null;
  };

  const slideImageTo = (media: MediaType, variation: VariationType) => {
    setVariationSelected(variation);
    const getIndex = product.media.findIndex((item) => item.key === media.key);
    swiperInstance?.slideTo(getIndex);
  };

  return (
    <div className="row">
      <div className="col-12 order-2 order-lg-1">
        <h2 className="d-none d-lg-block">{product.title}</h2>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
      <div className={"col-12 order-1 order-lg-2"}>
        {product.variations && (
          <div className="variations-container">
            <div className="d-flex flex-wrap align-items-center">
              {product.variations.map((variation, i) => {
                const media = getImageToVariation(product, variation.icon.key);
                return (
                  <div key={i}>
                    {media && (
                      <div
                        className="container-variation-icon"
                        onClick={() => slideImageTo(media, variation)}
                      >
                        {variation.icon.type === "image" && (
                          <img
                            className="img-variation"
                            src={
                              media.localImage ? Images[media.url] : media.url
                            }
                          />
                        )}
                        {variation.icon.type === "color" && (
                          <div
                            className="color-variation"
                            style={{
                              backgroundColor: variation.icon.color,
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {variationSelected && (
              <div className="AvailableUnitPerVariation">
                <p className="my-2">
                  {`Unidades disponibles en ${variationSelected?.title}:`}{" "}
                  <span>{variationSelected?.stock}</span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className={"col-12 order-3"}>
        <Prices product={product} />
      </div>
    </div>
  );
}
