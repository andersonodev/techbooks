
import React from "react";
import { Download } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  description: string;
  year: string;
  category: string;
  downloadUrl: string;
  onClick: () => void;
}

const BookCard = ({ title, author, cover, description, year, category, downloadUrl, onClick }: BookCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('a')) {
      onClick();
    }
  };

  return (
    <div 
      className="group relative bg-accent rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 h-full cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-[3/4] relative w-full max-w-[200px] mx-auto md:max-w-none">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-3">
        <p className="text-xs text-primary mb-1">{category}</p>
        <h3 className="text-sm font-semibold text-foreground line-clamp-1">{title}</h3>
        <p className="text-xs text-foreground/70 mb-1">{author}</p>
        <p className="text-xs text-foreground/50 mb-1">{year}</p>
        <p className="text-xs text-foreground/70 line-clamp-2 mb-3">{description}</p>
        <a
          href={downloadUrl}
          className="mt-auto flex items-center justify-center w-full gap-1 bg-primary/10 hover:bg-primary/20 text-primary py-1.5 rounded-md transition-colors text-xs"
        >
          <Download className="w-3 h-3" />
          Download
        </a>
      </div>
    </div>
  );
};

export default BookCard;
