import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice';
import './Header.css';

function Header({ currentView, onNavigate }) {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <header className="site-header">
      <div className="site-header__brand" onClick={() => onNavigate('landing')}>
        Paradise Nursery
      </div>
      <nav className="site-header__nav">
        <button
          className={currentView === 'landing' ? 'is-active' : ''}
          onClick={() => onNavigate('landing')}
        >
          Accueil
        </button>
        <button
          className={currentView === 'products' ? 'is-active' : ''}
          onClick={() => onNavigate('products')}
        >
          Plantes
        </button>
        <button
          className="site-header__cart"
          onClick={() => onNavigate('cart')}
          aria-label={`Panier, ${totalQuantity} article(s)`}
        >
          Panier
          <span className="site-header__badge">{totalQuantity}</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
