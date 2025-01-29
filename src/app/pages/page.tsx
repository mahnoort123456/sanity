import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => (
  <div key={product.id} id="product"className="group relative rounded-lg bg-white">
    <div className="relative aspect-square overflow-hidden rounded-lg">
      {product.isNew && (
        <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
          New
        </Badge>
      )}
      {product.isSale && (
        <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
          Sale
        </Badge>
      )}
      <Link href={`/product/${product.id}`}>
    
          <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          aria-label={`View details of ${product.title}`}
        />
      </Link>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-medium text-[#1C1B1F]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <button
        className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
        aria-label={`Add ${product.title} to cart`}
      >
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  </div>
);

export default function AllProduct() {
  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/Image (3).png",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/Image (9).png",
      isSale: true,
    },
    { id: 3, title: "Library Stool Chair", price: 20, image: "/Image (10).png" },
    { id: 4, title: "Library Stool Chair", price: 20, image: "/Image (11).png" },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      image: "/Image (6).png",
      isNew: true,
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/Image (12).png",
      isSale: true,
    },
    { id: 7, title: "Library Stool Chair", price: 20, image: "/Image (13).png" },
    { id: 8, title: "Library Stool Chair", price: 20, image: "/Image (8).png" },
    { id: 9, title: "Library Stool Chair", price: 20, image: "/Image (5).png" },
    { id: 10, title: "Library Stool Chair", price: 20, image: "/Image (9).png" },
    { id: 11, title: "Library Stool Chair", price: 20, image: "/Image (10).png" },
    
    { id: 12, title: "Library Stool Chair", price: 20, image: "/Image (7).png" },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-semibold text-[#1C1B1F] tracking-tight mb-8">
        All Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

 <div className="bg-white">
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">
        Or Subscribe To The NewsLetter
      </h1>
      
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Email Adress..."
          className="w-full bg-gray-100  rounded underline decoration-black  focus:ring-2  text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
     
      <button
       className="text-gray-400 underline decoration-black  border-0 py-2 px-8  rounded text-lg">
        SUBMIT
      </button>
      </div>
      </div>


      <div className="container mx-auto px-4 py-20">
<h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Follow Products And Discounts On Instagram
      </h1>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
  <Image
  src={require('../../../public/Image (6).png')}
  alt=""
  width={200}
  height={200}
  />
  <Image
  src={require('../../../public/Image (5).png')}
  alt=""
  width={200}
  height={200}
  />
  <Image
  src={require('../../../public/Image (9).png')}
  alt=""
  width={200}
  height={200}
  />
  <Image
  src={require('../../../public/Image (3).png')}
  alt=""
  width={200}
  height={200}
  />
  <Image
  src={require('../../../public/Image (10).png')}
  alt=""
  width={200}
  height={200}
  />
  <Image
  src={require('../../../public/Image (7).png')}
  alt=""
  width={200}
  height={200}
  />
</div>
</div>

</section>



    </div>
      
    </div>
  );
}