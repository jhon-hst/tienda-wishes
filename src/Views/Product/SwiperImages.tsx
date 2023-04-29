import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation } from "swiper";

import Images from "../../assets/images";
import { ProductType } from "../../types";
import "react-medium-image-zoom/dist/styles.css";

export default function SwiperImages({
  setSwiperInstance,
  product,
}: {
  setSwiperInstance: (value: SwiperType | null) => void;
  product: ProductType;
}) {
  return (
    <Swiper
      onSwiper={(sw) => setSwiperInstance(sw)}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiper-slide-product"
    >
      {product.media.map((media, ind) => (
        <SwiperSlide key={ind}>
          <div className="">
            {media.type === "image" && (
              <img
                className="swiper-product-img"
                src={media.localImage ? Images[media.url] : media.url}
              />
            )}
            {media.type === "video" && !media.youtube && (
              <video
                className="swiper-product-video"
                controls
                src={media.url}
              />
            )}
            {media.type === "video" && media.youtube && (
              <iframe
                className="swiper-product-youtube-video"
                src={media.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
