"use client";

import { useState, memo } from "react";
import { BLOG_SORT_OPTIONS } from "@/app/(dashboard)/blog/_components/blogConfig";
import SortDropdown from "@/app/components/ui/SortDropdown";

const BlogSort = () => {
  const [selectedSort, setSelectedSort] = useState(BLOG_SORT_OPTIONS[0]);

  return (
    <SortDropdown
      options={BLOG_SORT_OPTIONS}
      selectedOption={selectedSort}
      onSelectOption={setSelectedSort}
    />
  );
};

export default memo(BlogSort);
