import { useState } from 'react';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  const [view, setView] = useState('landing');

  if (view === 'products') {
    return <ProductList onNavigate={setView} />;
  }

  if (view === 'cart') {
    return <CartItem onNavigate={setView} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-page__overlay">
        <p className="landing-page__eyebrow">Pépinière & jardinerie</p>
        <h1 className="landing-page__title">Paradise Nursery</h1>
        <AboutUs />
        <button
          className="landing-page__cta"
          onClick={() => setView('products')}
        >
          Commencer
        </button>
      </div>
    </div>
  );
}

export default App;
