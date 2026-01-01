import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { addToCart } from "../features/cart/cartSlice";
const products = [
  {
    id: 1,
    name: "Luxe Serum",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    description:
      "A premium serum inspired by haute couture skincare.",
  },
  {
    id: 2,
    name: "Velvet Cream",
    price: "$95",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
    description:
      "Silky texture cream for deep hydration and glow.",
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) return <p>Product not found</p>;

  return (
    <motion.section
      className="dior-product"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.img
        src={product.image}
        alt={product.name}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="dior-info">
        <h1>{product.name}</h1>
        <span className="price">{product.price}</span>

        <p>{product.description}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.section>
  );
}
