"use client";

import { useState, memo } from "react";
import SortDropdown from "@/app/components/ui/SortDropdown";

const PRODUCT_SORT_OPTIONS = [
  { value: "Featured", label: "Featured" },
  { value: "Newest", label: "Newest" },
  { value: "Price: High-Low", label: "Price: High-Low" },
  { value: "Price: Low-High", label: "Price: Low-High" },
];

const ProductSort = () => {
  const [selectedSort, setSelectedSort] = useState(PRODUCT_SORT_OPTIONS[0]);

  return (
    <SortDropdown
      options={PRODUCT_SORT_OPTIONS}
      selectedOption={selectedSort}
      onSelectOption={setSelectedSort}
    />
  );
};

export default memo(ProductSort);
