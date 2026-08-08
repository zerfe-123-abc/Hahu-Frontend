import products from "@/data/products";
import { useParams } from "react-router-dom";

const ProductGallery = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }
  return (
    <div className="rounded-2xl flex flex-1">
      <div className="flex flex-col gap-2 m-3 p-3">
        <h1 className="text-lg font-semibold">
          Sell and Buy Hahu, Make Your life Easy and enjoy with products
        </h1>
        <img
          src={product.images}
          alt={product.title}
          className="w-2xl h-[650px] rounded-2xl object-contain"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
