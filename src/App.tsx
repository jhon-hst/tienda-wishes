import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

import "./styles.css";

import testImg from "./assets/images/sku-1/sku-1-1-1.jpg";
import granRemate from "./assets/gran-remate.jpeg";
import Product from "./components/Products";
import ProductsList from "./assets/data/products.json";
import Images from "./assets/images";
import { useEffect } from "react";
import { ProductType, VariationType } from "./types";

export default function App() {
  // const saveProducts = () => {
  //   type SkuGroup = {
  //     sku: string;
  //     images: Array<string>;
  //   };

  //   const skus = Object.keys(Images);
  //   const groupBySku = skus.reduce((acc: Array<SkuGroup>, sku: string) => {
  //     const skuRefact = sku.split("A")[0].replace("sku", "sku-");
  //     const indexExistSku = acc.findIndex((a) => a.sku === skuRefact);

  //     if (indexExistSku !== -1) {
  //       acc[indexExistSku].images.push(sku);
  //       return acc;
  //     }

  //     const model = {
  //       sku: skuRefact,
  //       images: [sku],
  //     };
  //     return [...acc, model];
  //   }, []);

  //   const products: ProductType[] = groupBySku.map((group) => {
  //     const product: ProductType = {
  //       category: 0,
  //       title: group.sku,
  //       description: "",
  //       priceCost: 0,
  //       salePrice: 0,
  //       stock: 0,
  //       sku: group.sku,
  //       media: group.images.map((img, index) => ({
  //         localImage: true,
  //         type: "image",
  //         key: index + 1,
  //         url: img,
  //       })),
  //     };
  //     const hasVariations = (group.images[0].match(/A/g) || []).length >= 2;
  //     if (hasVariations) {
  //       product.variations = group.images.reduce(
  //         (acc: Array<VariationType>, img, index) => {
  //           const removeA = img.replace("sku", "sku-").replace("A", "-");
  //           const removeLastTwoLetters = removeA.substring(
  //             0,
  //             removeA.length - 2
  //           );

  //           const variationSku = removeLastTwoLetters;
  //           const indexExistSku = acc.find((a) => a.sku === variationSku);
  //           const hasB = (img.match(/b/g) || []).length;

  //           if (!indexExistSku && !hasB) {
  //             const variation = {
  //               title: "",
  //               icon: {
  //                 type: "image",
  //                 key: index + 1,
  //               },
  //               stock: 0,
  //               sku: variationSku,
  //             };
  //             acc.push(variation);
  //           }
  //           return acc;
  //         },
  //         []
  //       );
  //     }
  //     return product;
  //   });

  //   console.log(products);
  // };

  // useEffect(() => {
  //   saveProducts();
  // }, []);

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
