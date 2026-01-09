import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import './Catalog.css'
export default function Catalog() {
  const products = [
    {
      id: 1,
      name: "Shik Perfect Liquid Contour 01",
      price: "5000с ",
      image:
        "https://static.insales-cdn.com/images/products/1/2776/666749656/large_fs8rl4c1cuphkusiuq2z26z0om6e4kt9.webp",
    },
    {
      id: 2,
      name: "Charlotte Tilbury Filmstar Bronze & Glow Light To Medium",
      price: "3800с",
      image:
        "https://static.insales-cdn.com/images/products/1/820/502522676/large_CHARLOTTE_TILBURY-FILM_STAR-CLOSED-PACKSHOT.jpg",
    },
    {
      id: 3,
      name: "Too Faced Natural Face Highlight, Blush, Bronzing Veil Face Palette",
      price: "3000с",
      image:
        "https://static.insales-cdn.com/images/products/1/6941/705166109/large_p429604-av-01-zoom.webp",
    },
    {
      id: 4,
      name: "Kiko Sculpting Touch Creamy Stick Contour",
      price: "2300с",
      image:
        "https://static.insales-cdn.com/images/products/1/5604/502519268/large_8025272606356.jpg",
    },
    {
      id: 5,
      name: "NYX 3 Steps To Sculp",
      price: "8000с",
      image:
        "https://static.insales-cdn.com/images/products/1/2514/676768210/large_3sts01-1000x1000.jpg",
    },
    {
      id: 6,
      name: "Essence Cookies & Cream Nail Polish + Sticker On Pack ",
      price: "2200с",
      image:
        "https://1beautynews.ru/wp-content/uploads/2014/02/Essence-Spring-2014-Cookies-Cream-Collection-Shimmer-Pearls-2.jpg",
    },
    {
      id: 7,
      name: "GA-DE HIGH PRECISION STYLO подводка",
      price: "4200с",
      image:
        "https://www.starbeauty.kz/cms/uploads/file_1703090622_894227579.jpg",
    },
    {
      id: 8,
      name: "FENTY BEAUTY",
      price: "890с ",
      image:
        "https://beautyhack.ru/assets/images/2020/09/z3.jpg",
    },
    {
      id: 9,
      name: "ANASTASIA BEVERLY",
      price: "2600с",
      image:
        "https://beautyisland.kz/image/cache/catalog/ANASTASIA%20BEVERLY%20HILLS/AB000678_1-600x726.jpg",
    },
    {
      id: 10,
      name: "CABARET P",
      price: "2260с",
      image:
        "https://beautyisland.kz/image/cache/catalog/VIVIENNE%20SABO/VM003410-1-600x726.jpg",
    },
    {
      id: 11,
      name: "MAC",
      price: "5803с",
      image:
        "https://thumbs.dreamstime.com/b/london-uk-march-mac-cosmetics-skin-powder-foundation-container-white-background-was-founded-toronto-ontario-88715531.jpg",
    },
    {
      id: 12,
      name: "Rare Beauty",
      price: "1092с",
      image:
        "https://static.beautyinsider.ru/2020/09/pomada.jpg",
    },
    {
      id: 13,
      name: "Полетка теней",
      price: "2532с",
      image:
        "https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/254008/DhHSGrRrBHGFlR2Qlvytdw.jpg",
    },
    {
      id: 14,
      name: "Chance Eau Fraiche Chanel аромат ",
      price: "1990с",
      image:
        "https://fimgs.net/mdimg/perfume-thumbs/375x500.83980.jpg",
    },
    {
      id: 15,
      name: "CHRISTIAN DIOR",
      price: "9100с",
      image:
        "https://ezebra.com.ua/hpeciai/8a1b3f1602d3f1eca9d5dcf3d03a676b/rus_pl_CHRISTIAN-DIOR-J-ADORE-PARFIUMIROVANNAIA-VODA-100ML-103720_1.webp",
    },
    {
      id: 16,
      name: "Тональный крем CLINIQUE Superbalanced Makeup",
      price: "1890с",
      image:
        "https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/576623/xYbbqoaxfdGnNCL6tXX9Q.jpg" ,
    },
    {
      id: 18,
      name: "Тональный крем Lancome Teint Miracle",
      price: "2370с",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Hfzmy_jkaQRiuIlVfNdNjbvT12tqE-bLgQ&s",
    },
    {
      id: 19,
      name: "Lancome Tresor La Nuit Eau de Parfum ",
      price: "7660с",
      image:
        "https://ovico.md/media/catalog/product/cache/1/image/630x/49b3216a00853856695f75be12b817bb/4/b/4b.tresor_la_nuit_nude2.jpg",
    },
    
  ];

  
  const likedItems = useSelector((state) => state.likes.items);

  return (
    <section className="lux-catalog">
      <h2 className="lux-catalog-title">Наша коллекция</h2>
         <p className="lux-catalog-subtitle">Премиальная косметика для вашего ухода</p>
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




