
import React from "react";
import { BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="inline-block p-2 bg-accent/30 rounded-full mb-6 animate-fade-in">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-up">
          Biblioteca Digital de Tecnologia
        </h1>
        <p 
          className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-up" 
          style={{ animationDelay: "0.1s" }}
        >
          Explore nossa coleção de livros de computação e programação. 
          Download gratuito para expandir seu conhecimento.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
