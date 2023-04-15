import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import testImg from "./assets/images/sku-1/sku-1-1-1.jpg";
import granRemate from "./assets/gran-remate.jpeg";
import Product from "./components/Products";
import ProductsList from "./assets/data/products.json";
import Images from "./assets/images";

export default function App() {
  return (
    <main className="container pb-5">
      <div className="header">
        <div className="auction-container">
          <img src={granRemate} className="auction-img" />
        </div>
        <h1 className="header-title">Gram remate de productos</h1>
        <p className="header-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          similique facilis neque repudiandae aperiam blanditiis, id reiciendis
          harum quo eius fugiat ipsa rem accusantium voluptatibus aliquid
          expedita, cum quidem. Dolore.
        </p>
        <Swiper
          slidesPerView={window.innerWidth > 992 ? 5 : 1}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="header-swiper"
        >
          {ProductsList[0].media.map((data, i) => (
            <div key={i}>
              {data.localImage && (
                <SwiperSlide>
                  <img
                    src={Images[data.url]}
                    className="img-swiper-slide-header"
                  />
                </SwiperSlide>
              )}
            </div>
          ))}
        </Swiper>
      </div>
      <Product />
    </main>
  );
}
