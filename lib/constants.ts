export interface Restaurant {
  nombre: string;
  ubicacion: string;
  descripcion: string;
  ambiente: string;
  platosDestacados: string;
  precioPromedio: string;
  zona: string;
}

const restaurantsBerlin: Restaurant[] = [
  {
    nombre: "Rutz",
    ubicacion: "Chausseestraße 8",
    descripcion:
      "Este restaurante con tres estrellas Michelin ofrece una experiencia culinaria de primer nivel. El chef Marco Müller se especializa en crear platos innovadores utilizando ingredientes locales y de temporada.",
    ambiente: "Elegante y contemporáneo, perfecto para una cena sofisticada.",
    platosDestacados:
      "Menú degustación que cambia según la temporada, acompañado de una extensa carta de vinos.",
    precioPromedio: "€150-200 por persona (con vino)",
    zona: "Mitte",
  },
  {
    nombre: "Weinbar Rutz",
    ubicacion: "Chausseestraße 8 (junto al restaurante Rutz)",
    descripcion:
      "Un bar de vinos elegante con una impresionante selección de vinos alemanes e internacionales.",
    ambiente: "Relajado y acogedor, ideal para una tarde de vinos y tapas.",
    platosDestacados: "Tapas y platos pequeños maridados con vinos.",
    precioPromedio: "€50-80 por persona",
    zona: "Mitte",
  },
  {
    nombre: "Pauly Saal",
    ubicacion: "Auguststraße 11-13",
    descripcion:
      "Ubicado en una antigua escuela judía para niñas, este restaurante ofrece una experiencia gastronómica refinada con una notable carta de vinos.",
    ambiente:
      "Histórico y elegante, con un diseño art déco que añade un toque de sofisticación.",
    platosDestacados:
      "Cocina alemana moderna, como cordero de Pomerania y pescado del Mar Báltico.",
    precioPromedio: "€100-150 por persona (con vino)",
    zona: "Mitte",
  },
  {
    nombre: "Kaefer’s at the Reichstag",
    ubicacion: "Platz der Republik 1",
    descripcion:
      "Este restaurante elegante se encuentra en la cúpula del Reichstag y ofrece vistas impresionantes de Berlín.",
    ambiente: "Refinado y exclusivo, perfecto para una cena especial.",
    platosDestacados:
      "Cocina alemana contemporánea, como schnitzel de ternera y strudel de manzana.",
    precioPromedio: "€70-120 por persona (con vino)",
    zona: "Charlottenburg",
  },
  {
    nombre: "Heising",
    ubicacion: "Rankestraße 32",
    descripcion:
      "Un restaurante íntimo y elegante que ofrece cocina francesa clásica.",
    ambiente:
      "Romántico y nostálgico, con un servicio personalizado que hace sentir a los comensales como en casa.",
    platosDestacados: "Pato a la naranja, soufflé de chocolate.",
    precioPromedio: "€80-130 por persona (con vino)",
    zona: "Charlottenburg",
  },
  {
    nombre: "Nobelhart & Schmutzig",
    ubicacion: "Friedrichstraße 218",
    descripcion:
      "Restaurante con una estrella Michelin que ofrece un concepto único de 'cocina cerrada', centrado en ingredientes locales y de temporada.",
    ambiente:
      "Moderno y minimalista, con un enfoque en la sostenibilidad y la autenticidad.",
    platosDestacados:
      "Menú degustación basado en ingredientes locales y de temporada.",
    precioPromedio: "€130-180 por persona (con vino)",
    zona: "Kreuzberg",
  },
  {
    nombre: "Cordobar",
    ubicacion: "Große Hamburger Straße 32",
    descripcion:
      "Un bar de vinos relajado y acogedor, conocido por su excelente selección de vinos naturales.",
    ambiente:
      "Casual y vibrante, ideal para socializar y disfrutar de vinos únicos.",
    platosDestacados:
      "Tapas y platos pequeños que maridan perfectamente con los vinos naturales.",
    precioPromedio: "€40-70 por persona",
    zona: "Kreuzberg",
  },
];

export default restaurantsBerlin;
