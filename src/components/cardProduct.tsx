// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";
import testImg from "../assets/test.webp";
import Products from "../assets/data/products.json";
import Images from "../assets/images";

export default function CardProduct() {
  return (
    <>
      {Products.map((product, index) => {
        return (
          <section key={index} className="row sectionProduct">
            <div
              className={`col-12 col-lg-6 order-${
                index % 2 === 0 && window.innerWidth > 1000 ? "1" : "2"
              }`}
            >
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <div
              className={`col-12 col-lg-6 order-${
                index % 2 !== 0 && window.innerWidth > 1000 ? "1" : "2"
              }`}
            >
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="cardProductSwiper"
              >
                {product.media.map((media, index) => (
                  <SwiperSlide key={index} className="swiper-slide-product">
                    {media.type === "image" && (
                      <img
                        src={media.localImage ? Images[media.url] : media.url}
                      />
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
      })}
    </>
  );
}
