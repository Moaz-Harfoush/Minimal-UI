"use client";

import { useState, useMemo, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/app/components/ui/Button";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const range = useMemo(() => {
    const arr = [];
    const showLeftDots = currentPage > 4;
    const showRightDots = currentPage < totalPages - 3;

    if (!showLeftDots && showRightDots) {
      arr.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (showLeftDots && !showRightDots) {
      arr.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else if (showLeftDots && showRightDots) {
      arr.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    } else {
      for (let i = 1; i <= totalPages; i++) {
        arr.push(i);
      }
    }
    return arr;
  }, [currentPage, totalPages]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-12">
      <Button
        variant="icon"
        aria-label="Previous page"
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="w-7 h-7 text-black disabled:cursor-auto disabled:opacity-30 disabled:hover:bg-transparent"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <ul className="flex items-center gap-1">
        {range.map((item, index) => {
          if (item === "...") {
            return (
              <li
                key={`dots-${index}`}
                className="w-7 h-7 flex items-center justify-center text-gray-400 select-none text-sm"
              >
                ...
              </li>
            );
          }

          const isActive = item === currentPage;
          return (
            <li key={item}>
              <button
                onClick={() => {
                  if (typeof item === "number") {
                    setCurrentPage(item);
                  }
                }}
                className={`w-9 h-9 flex items-center justify-center rounded-full font-medium text-sm transition-all cursor-pointer outline-none ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>

      <Button
        variant="icon"
        aria-label="Next page"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="w-9 h-9 text-black disabled:cursor-auto disabled:opacity-30 disabled:hover:bg-transparent"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default memo(Pagination);
