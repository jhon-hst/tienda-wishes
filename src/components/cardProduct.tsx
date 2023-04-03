import { useState } from "react";
import { createPortal } from "react-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { Pagination, Navigation } from "swiper";
import Images from "../assets/images";
import { MediaType, ProductType } from "../types";

export default function CardProduct({
  product,
  index,
}: {
  product: ProductType;
  index: number;
}) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const getImageToVariation = (product: ProductType, key: number) => {
    const media = product.media.find((item) => item.key === key);
    return media ?? null;
  };

  const slideImageTo = (media: MediaType) => {
    const getIndex = product.media.findIndex((item) => item.key === media.key);
    swiperInstance?.slideTo(getIndex);
  };

  return (
    <section className="row sectionProduct mx-2">
      <div className={"col-12 col-lg-5 order-3"}>
        <h2>{product.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
      <div className={"col-12 col-lg-1 order-2"}>
        {product.variations &&
          product.variations.map((variation, i) => {
            const media = getImageToVariation(product, variation.icon.key);
            return (
              <>
                {media && (
                  <div onClick={() => slideImageTo(media)}>
                    {variation.icon.type === "image" && (
                      <img
                        className="img-variation"
                        key={i}
                        src={media.localImage ? Images[media.url] : media.url}
                      />
                    )}
                    {variation.icon.type === "color" && (
                      <div
                        className="color-variation"
                        style={{ backgroundColor: variation.icon.color }}
                      />
                    )}
                  </div>
                )}
              </>
            );
          })}
      </div>
      <div className={"col-12 col-lg-5 order-1"}>
        <Swiper
          onSwiper={(sw) => setSwiperInstance(sw)}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="cardProductSwiper"
        >
          {product.media.map((media, ind) => (
            <SwiperSlide key={ind} className="swiper-slide-product">
              {media.type === "image" && (
                <img src={media.localImage ? Images[media.url] : media.url} />
              )}
              {media.type === "video" && !media.youtube && (
                <video controls src={media.url} />
              )}
              {media.type === "video" && media.youtube && (
                <iframe
                  width="560"
                  height="315"
                  src={media.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
