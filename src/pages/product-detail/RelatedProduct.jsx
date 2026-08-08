import products from "@/data/products";
import React from "react";
import { Link, useParams } from "react-router-dom";

const RelatedProduct = () => {
  const { id } = useParams();

  // Find product
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products
          .filter((p) => p.category === product.category && p.id !== product.id)
          .map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-all duration-500 hover:translate-x-1"
            >
              <img
                src={item.images}
                alt={item.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>

                <p className="text-blue-600 font-bold mt-2">{item.price} ETB</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
