"use client";

import { memo } from "react";
import Image from "next/image";
import { ProductCardProps } from "@/app/(dashboard)/product/_types/product.types";

const ProductCard = ({ product, index }: ProductCardProps) => {
  const isPriority = index < 4;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-border-gray bg-pure-white">
      <div className="relative aspect-square w-full overflow-hidden bg-soft-gray">
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={isPriority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />

        {product.status && (
          <span
            className={`absolute top-3 right-3 rounded-md px-2 py-1 text-sm font-bold uppercase tracking-wide ${
              product.status === "sale"
                ? "bg-dark-gray text-pure-white"
                : "bg-bright-cyan text-dark-gray"
            }`}
          >
            {product.status}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h3 className="line-clamp-1 text-sm hover:underline font-medium text-black">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center space-x-1.5">
            <div className="flex items-center -space-x-1">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="h-3.5 w-3.5 rounded-full border border-white shadow-sm ring-1 ring-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            {product.numberOfColors && (
              <span className="text-xs font-semibold text-pure-black pl-1">
                +5
              </span>
            )}
          </div>

          <span className="text-sm font-semibold text-dark-gray">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
