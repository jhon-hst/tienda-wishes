import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types";
import Images from "../../assets/images";

export default function CardProduct({ product }: { product: ProductType }) {
  const mainImage = product.media.find((med) => med.localImage);
  const navigate = useNavigate();

  return (
    <>
      {mainImage && (
        <div
          className="col-12 col-md-6 col-lg-3"
          onClick={() => navigate(`product/${product.sku}`)}
        >
          <img className="swiper-product-img" src={Images[mainImage?.url]} />
          <h5>{product.title}</h5>
        </div>
      )}
    </>
  );
}
