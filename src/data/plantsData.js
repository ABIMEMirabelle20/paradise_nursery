// Catalogue de Paradise Nursery : 3 catégories, 6 plantes chacune (18 au total)
// Chaque catégorie a une photo réelle (Wikimedia Commons, libre de droits),
// utilisée comme image de fond pour les plantes qui la composent.
export const plantsData = [
  {
    category: 'Succulentes & Cactus',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Succulent_containers_%287230454932%29.jpg',
    plants: [
      {
        name: 'Aloe Vera',
        price: 15,
        color: '#7c9885',
        description: 'Feuilles charnues apaisantes, quasiment increvable.',
      },
      {
        name: 'Echeveria',
        price: 12,
        color: '#9bb3a0',
        description: 'Rosette compacte aux teintes pastel, adore la lumière.',
      },
      {
        name: 'Plante de Jade',
        price: 18,
        color: '#5f8465',
        description: 'Feuilles épaisses et luisantes, symbole de prospérité.',
      },
      {
        name: 'Cactus Boule',
        price: 14,
        color: '#6e8c5a',
        description: 'Silhouette ronde et graphique, arrosage minimal.',
      },
      {
        name: 'Haworthia Zébrée',
        price: 11,
        color: '#87a17e',
        description: 'Petites rayures blanches, parfaite pour un bureau.',
      },
      {
        name: 'Collier de Perles',
        price: 16,
        color: '#a3b98f',
        description: 'Tiges retombantes en forme de billes, idéale suspendue.',
      },
    ],
  },
  {
    category: 'Plantes Dépolluantes',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Beautiful_indoor_plants_at_Madrid_Atocha_railway_station,_Spain_01.jpg',
    plants: [
      {
        name: 'Sansevieria',
        price: 20,
        color: '#1f3d2e',
        description: "Feuilles dressées et robustes, purifie l'air la nuit.",
      },
      {
        name: 'Lys de la Paix',
        price: 22,
        color: '#2f5240',
        description: 'Belles fleurs blanches, tolère les pièces peu éclairées.',
      },
      {
        name: 'Chlorophytum',
        price: 16,
        color: '#3c6b4f',
        description: 'Feuillage retombant rayé, facile et généreux.',
      },
      {
        name: 'Palmier Areca',
        price: 28,
        color: '#274737',
        description: 'Grandes palmes élégantes, apporte une ambiance tropicale.',
      },
      {
        name: 'Fougère de Boston',
        price: 18,
        color: '#355c42',
        description: "Feuillage dense et vaporeux, aime l'humidité.",
      },
      {
        name: 'Ficus Elastica',
        price: 24,
        color: '#204030',
        description: 'Grandes feuilles brillantes, croissance rapide.',
      },
    ],
  },
  {
    category: 'Herbes Aromatiques',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Herbesdeprovence.jpg',
    plants: [
      {
        name: 'Lavande',
        price: 14,
        color: '#a65e2e',
        description: "Parfum apaisant, fleurs violettes tout l'été.",
      },
      {
        name: 'Romarin',
        price: 13,
        color: '#8a6a3a',
        description: 'Arbuste aromatique parfait pour les grillades.',
      },
      {
        name: 'Menthe',
        price: 10,
        color: '#b97a3f',
        description: 'Croissance vigoureuse, idéale pour les infusions.',
      },
      {
        name: 'Basilic',
        price: 9,
        color: '#c98e4a',
        description: 'Indispensable en cuisine, feuilles tendres et parfumées.',
      },
      {
        name: 'Thym',
        price: 11,
        color: '#9c6b35',
        description: 'Petites feuilles persistantes, très parfumées.',
      },
      {
        name: 'Mélisse',
        price: 12,
        color: '#af7940',
        description: 'Notes citronnées, agréable en tisane relaxante.',
      },
    ],
  },
];
