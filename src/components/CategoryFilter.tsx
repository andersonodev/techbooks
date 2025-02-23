
import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      <button
        onClick={() => onCategoryChange("todos")}
        className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
          selectedCategory === "todos"
            ? "bg-primary text-white"
            : "bg-accent text-foreground/70 hover:bg-accent/70"
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
            selectedCategory === category
              ? "bg-primary text-white"
              : "bg-accent text-foreground/70 hover:bg-accent/70"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
