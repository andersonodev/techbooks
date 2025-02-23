
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-accent/20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Sobre o TechBooks
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-foreground/70 mb-6">
            O TechBooks é uma biblioteca digital dedicada a fornecer acesso gratuito a livros de tecnologia, 
            programação e computação. Nossa missão é democratizar o conhecimento técnico e ajudar 
            desenvolvedores, estudantes e entusiastas a aprimorarem suas habilidades.
          </p>
          <p className="text-foreground/70 mb-6">
            Nossa coleção inclui obras fundamentais em diversas áreas da tecnologia, desde programação 
            básica até tópicos avançados como Inteligência Artificial e Ciência de Dados.
          </p>
          <p className="text-foreground/70">
            Acreditamos que o conhecimento deve ser acessível a todos, e por isso mantemos nossa 
            biblioteca constantemente atualizada com os melhores recursos educacionais disponíveis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
