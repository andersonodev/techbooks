
import React from "react";
import BookCard from "@/components/BookCard";
import SearchBar from "@/components/SearchBar";

interface Book {
  title: string;
  author: string;
  cover: string;
  description: string;
  year: string;
  category: string;
  downloadUrl: string;
}

interface BooksSectionProps {
  books: Book[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onBookClick: (book: Book) => void;
}

const BooksSection = ({ books, searchQuery, setSearchQuery, onBookClick }: BooksSectionProps) => {
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <section id="books" className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <SearchBar onSearch={setSearchQuery} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BookCard {...book} onClick={() => onBookClick(book)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
