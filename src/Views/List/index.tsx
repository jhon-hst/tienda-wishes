import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

import granRemate from "../../assets/gran-remate.jpeg";
import Products from "./Products";

export default function List() {
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
      </div>
      <Products />
    </main>
  );
}
