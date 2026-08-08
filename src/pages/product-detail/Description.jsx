import products from "@/data/products";
import { Check, Clock3, MapPin } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

const Description = () => {
  const { id } = useParams();

  // Find product
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }
  return (
    <div>
      <span className="text-blue-600 font-medium">{product.category}</span>

      <h1 className="text-5xl font-bold mt-2">{product.title}</h1>

      <p className="text-4xl font-bold text-blue-600 mt-5">
        {product.price} ETB
      </p>

      {/* Description */}

      <div className="mt-8 pt-6">
        <h1 className="text-xl font-bold mb-3">Description</h1>

        <p className="leading-8 text-slate-600">{product.description}</p>
      </div>

      {/* Product Highlights */}

      <div className="grid grid-cols-1 gap-4 mt-8">
        <div className="flex items-center gap-3">
          <Check className="text-green-600" size={20} />
          <span>Excellent Condition</span>
        </div>

        <div className="flex items-center gap-3">
          <Check className="text-green-600" size={20} />
          <span>Original Product</span>
        </div>

        <div className="flex items-center gap-3">
          <Check className="text-green-600" size={20} />
          <span>Fast Delivery</span>
        </div>

        <div className="flex items-center gap-3">
          <Check className="text-green-600" size={20} />
          <span>7-Day Return</span>
        </div>
      </div>

      {/* Location */}

      <div className="flex items-center gap-3 mt-8 text-slate-600">
        <MapPin size={20} />
        {product.place}
      </div>

      {/* Time */}

      <div className="flex items-center gap-3 mt-3 text-slate-600">
        <Clock3 size={20} />
        {product.time_served}
      </div>
    </div>
  );
};

export default Description;
