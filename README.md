# Paradise Nursery

Application panier d'achat pour une pépinière en ligne, construite avec
**React**, **Vite** et **Redux Toolkit**.

## Nom du projet

**Paradise Nursery** — plateforme de vente de plantes d'intérieur.

## Fonctionnalités

- Page d'accueil avec présentation de l'entreprise (`AboutUs.jsx`) et image
  de fond.
- Page de liste de produits (`ProductList.jsx`) : 18 plantes réparties en
  3 catégories (Succulentes & Cactus, Plantes Dépolluantes, Herbes
  Aromatiques), chacune avec miniature, nom et prix.
- Ajout au panier avec désactivation du bouton une fois l'article ajouté,
  et mise à jour de l'icône du panier dans l'en-tête.
- Page panier (`CartItem.jsx`) : quantités modifiables, sous-totaux par
  article, coût total, suppression d'articles, bouton de paiement ("À
  venir") et bouton de retour vers la liste des produits.
- Gestion de l'état global du panier via Redux Toolkit (`CartSlice.jsx`).

## Structure du projet

```
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── data/
    │   └── plantsData.js
    ├── redux/
    │   ├── store.js
    │   └── CartSlice.jsx
    └── components/
        ├── AboutUs.jsx
        ├── Header.jsx / Header.css
        ├── PlantIcon.jsx
        ├── ProductList.jsx / ProductList.css
        └── CartItem.jsx / CartItem.css
```

## Installation et lancement

```bash
npm install
npm run dev
```

L'application est ensuite accessible sur `http://localhost:5173`.

## Stack technique

- React 18
- Vite
- Redux Toolkit + React-Redux
