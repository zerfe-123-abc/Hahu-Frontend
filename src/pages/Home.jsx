import { useCategory } from "@/store/categoryStore";
import { useProducts } from "@/store/productStore";
import { Link } from "react-router-dom";
import { useSearch } from "@/store/searchStore";

import CategorySection from "@/components/CategorySection";

const Home = () => {
  const { products } = useProducts();

  const approvedProducts = products.filter(
    (product) => product.status === "APPROVED",
  );

  const phones = approvedProducts.filter(
    (product) => product.category === "Phones",
  );

  const electronics = approvedProducts.filter(
    (product) => product.category === "Electronics",
  );
  const furniture = approvedProducts.filter(
    (product) => product.category === "Furniture",
  );

  const clothes = approvedProducts.filter(
    (product) => product.category === "Clothes",
  );

  return (
    <div className="p-6 w-full ml-6">
      <h1 className="text-3xl font-bold mb-8">Welcome to Hahu Marketplace</h1>

      <CategorySection title="Phones" products={phones} />

      <CategorySection title="Electronics" products={electronics} />

      <CategorySection title="Furniture" products={furniture} />

      <CategorySection title="Clothes" products={clothes} />
    </div>
  );
};

export default Home;
