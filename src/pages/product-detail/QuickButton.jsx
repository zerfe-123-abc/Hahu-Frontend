import Button from "@/components/ui/Button";
import products from "@/data/products";
import { useCart } from "@/store/cartStore";
import { useWishlist } from "@/store/wishlistStore";
import { Eye, Heart, Send, ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const QuickButton = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const navigate = useNavigate();

  const { addToWishlist, wishlist } = useWishlist();

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const goToChat = () => {
    navigate("/app/chat");
  };

  const goToSeller = () => {
    navigate("/app/sellerdetail");
  };

  return (
    <div className="flex gap-2 w-2xl m-3 p-3">
      <Button variant="primary" size="sm" onClick={() => addToCart(product)}>
        <ShoppingCart className="pr-3 size-8" /> Add to Cart
      </Button>

      <Button
        variant="primary"
        size="sm"
        onClick={() => addToWishlist(product)}
        disabled={isWishlisted}
        className={`w-2xl  ${
          isWishlisted
            ? "bg-red-100 text-red-600 cursor-not-allowed"
            : "hover:bg-gray-600"
        }`}
      >
        <Heart
          size={18}
          className={`pr-3 size-8 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
        />

        {isWishlisted ? "Saved" : "Add to Wishlist"}
      </Button>

      <Button variant="primary" size="sm" lassName="w-2xl " onClick={goToChat}>
        <Send size={18} className="pr-3 size-8" />
        chat with seller
      </Button>
      <Button
        onClick={goToSeller}
        variant="primary"
        size="sm"
        className="w-2xl"
      >
        <Eye size={18} className="pr-3 size-8" /> seller detail
      </Button>
    </div>
  );
};

export default QuickButton;
