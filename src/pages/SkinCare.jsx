import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function SkinCare() {
  const products = [
    {
      id: 1,
      name: "Dr.Ceuracle",
      price: "$3630",
      image:
        "https://koreacosmetic.com.ua/files/uploads/Dr_Ceuracle/5_Control.jpg",
    },
    {
      id: 2,
      name: "Velvet Cream",
      price: "$1543",
      image:
        "https://hollyshop.ru/upload/iblock/eee/x10iv0jppmet2hgckuqk2jd0gcymz0up/ridlshot.jpg",
    },
    {
      id: 3,
      name: "Golden Oil",
      price: "$2999",
      image:
        "https://ticlub.asia/wp-content/uploads/2016/07/jsm-korea-ulitochnyy-krem.jpg",
    },
    {
      id: 4,
      name: "Golden Oil",
      price: "$2765",
      image:
        "https://static.insales-cdn.com/images/collections/1/6539/1759627/aqua__1_.jpg",
    },
    {
      id: 5,
      name: "Golden Oil",
      price: "$3603",
      image:
        "https://hollyshop.ru/upload/iblock/93f/ikoht90s74n3oci6cuu1w18mfr4noumi/Hollyshop_32_1_-_1_.png",
    },
    {
      id: 6,
      name: "Golden Oil",
      price: "$1099",
      image:
        "https://cosmetea.com.ua/image/catalog/[missha]timerevolutionvitalityoil30ml_dscr.jpg",
    },
    {
      id: 7,
      name: "Golden Oil",
      price: "$999",
      image:
        "https://premiumkorea.ru/upload/beauty_blog_store/manyo.jpg",
    },
    {
      id: 8,
      name: "Golden Oil",
      price: "$139 ",
      image:
        "https://rixincosmetics.com/wp-content/uploads/2024/05/Types-of-Luxury-Private-Label-Cosmetics-.webp",
    },
    {
      id: 9,
      name: "Golden Oil",
      price: "$193",
      image:
        "https://lotana.com.ua/wp-content/uploads/2022/09/psa_group.jpg",
    },
    {
      id: 10,
      name: "Golden Oil",
      price: "$226",
      image:
        "https://avatars.mds.yandex.net/get-mpic/1863454/2a00000196014ec68b9ea7e406ef860b7960/orig",
    },
    {
      id: 11,
      name: "Golden Oil",
      price: "58.8 €",
      image:
        "https://lecreme.ru/upload/resize_cache/webp/resize_cache/iblock/5de/1000_1000_240cd750bba9870f18aada2478b24840a/04w45gjehflzuzts24i3q1biwwno7ksp.webp",
    },
    {
      id: 12,
      name: "Golden Oil",
      price: "29.5 €",
      image:
        "https://yoko.lv/cdn/shop/collections/round_lab.webp?v=1674689403",
    },
  ];

  
  const likedItems = useSelector((state) => state.likes.items);

  return (
    <section className="lux-catalog">
      <h2 className="lux-catalog-title">Наша коллекция</h2>

      <div className="lux-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            liked={likedItems.some(
              (item) => item.id === product.id
            )}
          />
        ))}
      </div>
    </section>
  );
}