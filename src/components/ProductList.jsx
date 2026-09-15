import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from '../redux/CartSlice';
import { plantsData } from '../data/plantsData';
import PlantThumb from './PlantThumb';
import Header from './Header';
import './ProductList.css';

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAdd = (plant, category, image) => {
    dispatch(addItem({ ...plant, category, image }));
  };

  return (
    <div className="product-page">
      <Header currentView="products" onNavigate={onNavigate} />

      <div className="product-page__intro">
        <h1>Notre collection de plantes</h1>
        <p>Choisissez vos favorites parmi trois collections.</p>
      </div>

      {plantsData.map((group) => (
        <section key={group.category} className="product-category">
          <h2 id={group.category}>{group.category}</h2>
          <div className="product-grid">
            {group.plants.map((plant) => {
              const added = isInCart(plant.name);
              return (
                <article className="product-card" key={plant.name}>
                  <div className="product-card__thumb">
                    <PlantThumb
                      image={group.image}
                      alt={plant.name}
                      color={plant.color}
                      size={110}
                    />
                  </div>
                  <h3>{plant.name}</h3>
                  <p className="product-card__description">
                    {plant.description}
                  </p>
                  <p className="product-card__price">{plant.price} €</p>
                  <button
                    className="product-card__button"
                    disabled={added}
                    onClick={() => handleAdd(plant, group.category, group.image)}
                  >
                    {added ? 'Ajouté ✓' : 'Ajouter au panier'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
