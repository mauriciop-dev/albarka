import React from 'react';

const declarations = [
  { title: 'Política Ambiental', link: '/documentos/politica-ambiental.pdf' },
  { title: 'Compromiso de Sostenibilidad', link: '/documentos/compromiso-sostenibilidad.pdf' },
  { title: 'Compromiso Igualdad de Género', link: '/documentos/compromiso-igualdad-genero.pdf' },
  { title: 'Declaración Propiedad Femenina', link: '/documentos/propiedad-mayoritaria-femenina.pdf' },
];

export const DeclarationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Compromisos y Declaraciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {declarations.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex flex-col justify-between"
            >
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <span className="text-blue-600 font-medium">Ver documento →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
