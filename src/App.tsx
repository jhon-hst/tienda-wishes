// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import CardProduct from "./components/cardProduct";

export default function App() {
  return (
    <main className="container">
      <div className="header">
        <h1>Gram remate de productos</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          similique facilis neque repudiandae aperiam blanditiis, id reiciendis
          harum quo eius fugiat ipsa rem accusantium voluptatibus aliquid
          expedita, cum quidem. Dolore.
        </p>
        <Swiper
          slidesPerView={window.innerWidth > 1000 ? 3 : 1}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" />
          </SwiperSlide>
        </Swiper>
      </div>
      <CardProduct />
    </main>
  );
}