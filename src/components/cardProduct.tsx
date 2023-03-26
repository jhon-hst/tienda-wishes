// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";
import testImg from "../assets/test.webp";

export default function CardProduct() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((_, index) => {
        return (
          <section key={index} className="row sectionProduct">
            <div
              className={`col-12 col-lg-6 order-${
                index % 2 === 0 && window.innerWidth > 1000 ? "1" : "2"
              }`}
            >
              <h2>Title del producto</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, asperiores laboriosam consequuntur laborum
                consectetur quibusdam officiis saepe optio fuga autem placeat
                sed cum reprehenderit illum ut animi eaque hic suscipit!
              </p>
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
                <SwiperSlide className="swiper-slide-product">
                  <img src={testImg} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={testImg} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={testImg} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={testImg} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={testImg} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={testImg} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={testImg} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={testImg} />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        );
      })}
    </>
  );
}
