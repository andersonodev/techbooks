
import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Pesquisar livros..."
        className="w-full px-4 py-2 pl-10 bg-accent rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-2.5 w-5 h-5 text-foreground/50" />
    </div>
  );
};

export default SearchBar;
