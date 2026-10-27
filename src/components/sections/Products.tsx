import Image from "next/image";
import { Star } from "lucide-react";
import Button from "@/components/ui/Button";
import { WithStringifiedURLs } from "next/dist/lib/metadata/types/metadata-interface";
import Badge from './../ui/Badge';
import { cn } from './../../utils/cn';

interface Product {
  id: number;
  color: Color;
  name: string;
  badge: string;
  badgeType: string;
  category: string;
  reviews: string;
  stars: number;
  description: string;
  price: string;
  image: string;
  buyVariant: string;
}

interface ColorsType {
  primary: string;
  secondary: string;
  neutral: string;
}

type Color = 'primary' | "secondary" | "neutral";

const Colorbg: ColorsType = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  neutral: "bg-neutral",
};





const products: Product[] = [
  {
    id: 1,
    color:"primary",
    name: "SonicArc Pro X1",
    badge: "In Stock",
    badgeType: "instock",
    category: "Over-ear / Wireless",
    reviews: "2.3K Reviews",
    stars: 4,
    description:
      "Premium wireless headphones with 40mm custom drivers, 40-hour battery, and active noise cancellation up to 35dB. Memory foam cushions and quick-charge support make it the perfect companion for long commutes and focused work sessions.",
    price: "$149.99",
    image: "/headphones/first-product.png",
    buyVariant: "buy-pink",
  },
  {
    id: 2,
    color:"secondary",
    name: "BassLine Studio 3",
    badge: "In Stock",
    badgeType: "instock",
    category: "Over-ear / Wired",
    reviews: "1.8K Reviews",
    stars: 3,
    description:
      "Studio-grade closed-back headphones built for audio professionals. Flat frequency response, 50mm neodymium drivers, and 28dB passive isolation deliver accurate sound reproduction. Includes detachable braided cable with 3.5mm and 6.35mm adapters.",
      price: "$89.99",
    image: "/headphones/second-product.png",
    buyVariant: "buy-blue",
  },
  {
    id: 3,
    color:"neutral",
    name: "AirVibe Lite",
    badge: "Limited Stock",
    badgeType: "limited",
    category: "On-ear / Wireless",
    reviews: "987 Reviews",
    stars: 4,
    description:
      "Ultralight wireless headphones at just 168g with Bluetooth 5.3 and 20-hour playback. Built-in echo-cancellation mic handles calls clearly in noisy environments. Available in six colorways for everyday style and comfort.",
    price: "$59.99",
    image: "/headphones/third-product.png",
    buyVariant: "buy-red",
  },
];

function renderStars(count: number) {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={cn("size-5 sm:size-8 md:size-10",
        i < count ? "text-[#FDD15C] fill-[#FDD15C]" : "text-[#FDD15C]/30 fill-[#FDD15C]/10"
      )}
    />
  ));
}

export default function Products() {
  return (
    <section
      id="products-section"
      className=" bg-tertiary grid md:grid-cols-8 grid-rows-1 max-w-7xl w-full overflow-hidden"
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          data-index={index}
          className={cn("gsap-product-card relative col-span-8  md:h-full grid ", index ==0 ? "md:col-span-6" : "md:col-span-1")}
        >
          <div className={cn("absolute top-0 z-0", Colorbg[product.color], index !== 0 ? "h-full w-full" : "md:h-[80%] h-[75%] w-full ")}/>

          
        <div className={cn("z-10 gsap-main-content h-160 md:h-full flex p-5 flex-col md:gap-5 justify-start ", index !== 0 && "hidden")}>
           <div className="flex items-center  justify-between">
             <Badge variant={product.badgeType as "instock" | "limited"} label={product.badge} index={index} />
             <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                {renderStars(product.stars)}
              </div>
              <span className={cn("text-[#FAD678] text-base font-semibold", index !== 0 && "hidden")}>
                    {product.reviews}
               </span>
              </div>
           </div>
         <div className="flex  z-10 flex-col  justify-start sm:justify-center items-center md:flex-row md:items-start  md:justify-between ">
        <h2 className={cn("gsap-product-name text-center md:text-justify text-2xl md:text-4xl p-3 lg:text-5xl font-black text-white leading-tight", index !== 0 && "hidden")}>
              {product.name.split(" ").slice(0,1).join(" ")}
              <br />
            {product.name.split(" ").slice(1,3).join(" ")}
         </h2>
         <div className="flex flex-col px-1 h-[50%] justify-start items-end gap-2">

        <span className={cn("text-light text-xl font-semibold", index !== 0 && "hidden")}>
                 {product.category}
        </span>
            
         </div>
         </div>


          <div className="flex relative justify-center  md:items-start items-start">
    
            <p
               className={`gsap-product-desc text-white/80  text-sm xl:text-[28px]  mt-9 lg:text-[23px] md:text-[18px] font-semibold leading-relaxed ${
                   index !== 0 ? "hidden" : "md:flex hidden"
                 }`}
             >
               {product.description}
             </p>
               <img
                     src={product.image}
                   alt={product.name}
className={cn(
  "md:object-cover z-25 md:max-w-[45%]",
  "w-auto h-auto h-[250px] md:h-[386px] lg:h-[460px] xl:h-[600px]",  // fixed px heights per breakpoint
  "scale-135 md:scale-110 xl:scale-120 lg:scale-120",
  "origin-center transform transition-all duration-500 ease-out",
  index !== 0 && "hidden"
)}                   />
             </div> 
        </div>
          <div
            className={`gsap-product-footer w-full absolute bottom-3 max-h-[25%] md:max-h-[20%]  flex flex-col md:items-start items-center justify-end  md:justify-between gap-5 ${
              index !== 0 ? "hidden" : ""
            }`}
          >
            <span className=" w-1/2 flex justify-center md:justify-end md:items-start items-end   text-h3 md:text-h2  xl:text-h1 font-black text-primary">
              {product.price}
            </span>


            <div className="p-3">
            <Button
              variant={
                product.buyVariant as "buy-pink" | "buy-blue" | "buy-red"
              }
            >
              Buy
            </Button>
            </div>
          </div>
        </div>
        
      ))}
    </section>
  );
}



      

        // <div className="">

        //     </div>