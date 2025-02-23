
import React from "react";
import { BookOpen, X } from "lucide-react";

interface BookDetailModalProps {
  book: {
    title: string;
    author: string;
    cover: string;
    description: string;
    year: string;
    category: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookDetailModal = ({ book, isOpen, onClose }: BookDetailModalProps) => {
  if (!book || !isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-accent rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {book.title}
            </h2>
            <button
              onClick={onClose}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full rounded-lg object-cover aspect-[3/4]"
              />
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <BookOpen className="w-4 h-4" />
                <span>{book.category}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Sobre o Autor</h3>
                <p className="text-foreground/70">
                  {book.author} é um renomado autor na área de {book.category}, 
                  com vasta experiência e contribuições significativas para o campo.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Ano de Publicação</h3>
                <p className="text-foreground/70">{book.year}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Descrição</h3>
                <p className="text-foreground/70">{book.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Resumo Detalhado</h3>
                <p className="text-foreground/70">
                  Este livro oferece uma perspectiva abrangente sobre {book.category}, 
                  apresentando conceitos fundamentais e práticos. É uma leitura essencial 
                  para profissionais e estudantes que desejam aprofundar seus conhecimentos 
                  na área.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
