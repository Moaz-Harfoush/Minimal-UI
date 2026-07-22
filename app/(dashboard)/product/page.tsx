import dynamic from "next/dynamic";
import { PRODUCTS_DATA } from "@/app/(dashboard)/product/_components/productData";
import { ShoppingBag } from "lucide-react";
import { Metadata } from "next";
import Button from "@/app/components/ui/Button";
import { ListFilterIcon } from "lucide-react";

const ProductCard = dynamic(
  () => import("@/app/(dashboard)/product/_components/ProductCard"),
);
const ProductSort = dynamic(
  () => import("@/app/(dashboard)/product/_components/ProductSort"),
);
const Pagination = dynamic(() => import("@/app/components/ui/Pagination"));

export const metadata: Metadata = {
  title: "Products - Minimal-UI",
  description:
    "Explore our exclusive collection of high-quality products. Find the best deals, browse top categories, and enjoy a seamless online shopping experience.",
};

const productPage = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex w-full justify-between items-center">
        <h2 className="font-bold text-2xl text-dark-gray">Products</h2>
      </div>

      <div className="fixed right-0 top-1/5 z-30">
        <div className="relative flex h-11 w-15 cursor-pointer items-center justify-center rounded-l-xl bg-pure-white p-2 text-dark-gray shadow-[-4px_4px_12px_rgba(0,0,0,0.15)] border-y border-l border-border-gray hover:bg-soft-gray hover:text-black transition-all group duration-200">
          <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />

          <span className="absolute top-1 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-very-dark-gray text-[11px] font-bold text-white shadow-sm ring-2 ring-white">
            8
          </span>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-end gap-4 w-full py-4">
        <Button variant="secondary">
          Filter <ListFilterIcon className="w-4 h-4 " />
        </Button>
        <ProductSort />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {PRODUCTS_DATA.map((product) => (
          <ProductCard product={product} key={product.id} index={product.id} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default productPage;
