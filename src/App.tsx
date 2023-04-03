import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import testImg from "./assets/images/sku-1/sku-1-1-1.jpg";
import Product from "./components/Products";

export default function App() {
  return (
    <main className="container pb-5">
      <div className="header">
        <h1>Gram remate de productos</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          similique facilis neque repudiandae aperiam blanditiis, id reiciendis
          harum quo eius fugiat ipsa rem accusantium voluptatibus aliquid
          expedita, cum quidem. Dolore.
        </p>
        <Swiper
          slidesPerView={window.innerWidth > 1000 ? 5 : 1}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="headerSwiper"
        >
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
          <SwiperSlide>
            <img src={testImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={testImg} />
          </SwiperSlide>
        </Swiper>
      </div>
      <Product />
    </main>
  );
}
