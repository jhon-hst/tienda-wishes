import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types";
import Images from "../../assets/images";

export default function CardProduct({ product }: { product: ProductType }) {
  const mainImage = product.media.find((med) => med.main);
  const navigate = useNavigate();

  return (
    <>
      {mainImage && (
        <div
          className="col-12 col-md-6 col-lg-3 px-1"
          onClick={() => navigate(`product/${product.sku}`)}
        >
          <div className="card-list-product">
            <img
              className="card-list-product-image mt-2"
              src={Images[mainImage?.url]}
            />
            <h5 className="my-3">{product.title}</h5>
          </div>
        </div>
      )}
    </>
  );
}
