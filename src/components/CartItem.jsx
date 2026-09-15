import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartItems,
  selectTotalCost,
} from '../redux/CartSlice';
import PlantIcon from './PlantIcon';
import Header from './Header';
import './CartItem.css';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalCost = useSelector(selectTotalCost);

  const handleCheckout = () => {
    alert('Le paiement en ligne arrive bientôt !');
  };

  return (
    <div className="cart-page">
      <Header currentView="cart" onNavigate={onNavigate} />

      <div className="cart-page__body">
        <h1>Votre panier</h1>

        {items.length === 0 ? (
          <p className="cart-page__empty">
            Votre panier est vide pour le moment.
          </p>
        ) : (
          <ul className="cart-list">
            {items.map((item) => (
              <li className="cart-list__row" key={item.name}>
                <div className="cart-list__thumb">
                  <PlantIcon color={item.color} size={48} />
                </div>
                <div className="cart-list__info">
                  <h3>{item.name}</h3>
                  <p>{item.price} € / unité</p>
                </div>
                <div className="cart-list__quantity">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.name))}
                    aria-label={`Diminuer la quantité de ${item.name}`}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.name))}
                    aria-label={`Augmenter la quantité de ${item.name}`}
                  >
                    +
                  </button>
                </div>
                <p className="cart-list__subtotal">
                  {(item.price * item.quantity).toFixed(2)} €
                </p>
                <button
                  className="cart-list__remove"
                  onClick={() => dispatch(removeItem(item.name))}
                  aria-label={`Retirer ${item.name} du panier`}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-page__total">
          <span>Total</span>
          <strong>{totalCost.toFixed(2)} €</strong>
        </div>

        <div className="cart-page__actions">
          <button
            className="cart-page__continue"
            onClick={() => onNavigate('products')}
          >
            Continuer vos achats
          </button>
          <button
            className="cart-page__checkout"
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
            Passer au paiement
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
