import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const img = (id) => `https://images.unsplash.com/photo-${id}?w=400&h=400&fit=crop`;

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: img('1485955900006-10f4d324d411'),
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: img('1459411552884-841db9b3cc2a'),
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: img('1463936575829-25148e1db1b8'),
        description: 'Removes mold spores and purifies the air.',
        cost: '$18',
      },
      {
        name: 'Boston Fern',
        image: img('1416879595882-3373a0480b5b'),
        description: 'Adds humidity to the air and removes toxins.',
        cost: '$20',
      },
      {
        name: 'Rubber Plant',
        image: img('1512428813834-c702c7702b78'),
        description: 'Easy to care for and effective at removing toxins.',
        cost: '$17',
      },
      {
        name: 'Areca Palm',
        image: img('1509423350716-97f9360b4e09'),
        description: 'A natural humidifier that removes carbon dioxide.',
        cost: '$25',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: img('1520412099551-62b6bafeb5bb'),
        description: 'Calming scent, used in aromatherapy.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image: img('1545241047-6083a3684587'),
        description: 'Sweet fragrance that promotes relaxation.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image: img('1592150621744-aca64f48394a'),
        description: 'Invigorating scent, often used in cooking.',
        cost: '$15',
      },
      {
        name: 'Mint',
        image: img('1614594975525-e45190c55d0b'),
        description: 'Refreshing aroma, used in teas and cooking.',
        cost: '$12',
      },
      {
        name: 'Lemon Balm',
        image: img('1600411833196-7c1f6b1a8b90'),
        description: 'Citrusy scent that relieves stress and helps sleep.',
        cost: '$14',
      },
      {
        name: 'Hyacinth',
        image: img('1572688484438-313a6e50c333'),
        description: 'Beautiful flowering plant with a rich fragrance.',
        cost: '$22',
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        image: img('1599598425947-5202edd56bdb'),
        description: 'Thrives in low light and needs minimal watering.',
        cost: '$25',
      },
      {
        name: 'Pothos',
        image: img('1632207691143-643e2a9a9361'),
        description: 'Tolerates neglect and grows in many conditions.',
        cost: '$10',
      },
      {
        name: 'Aloe Vera',
        image: img('1604762524889-3e2fcc145683'),
        description: 'Succulent with soothing gel, needs little water.',
        cost: '$14',
      },
      {
        name: 'Cast Iron Plant',
        image: img('1602923668104-8f9e03e77e62'),
        description: 'Hardy plant that tolerates low light and neglect.',
        cost: '$20',
      },
      {
        name: 'Jade Plant',
        image: img('1611211232932-da3113c5b960'),
        description: 'Long-lived succulent that stores water in its leaves.',
        cost: '$16',
      },
      {
        name: 'Echeveria',
        image: img('1587334274328-64186a80aeee'),
        description: 'Rosette succulent that loves bright light and dry soil.',
        cost: '$8',
      },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  // A plant counts as "added" while it is in the cart, so removing it
  // from the cart re-enables its Add to Cart button.
  const addedToCart = Object.fromEntries(cartItems.map((item) => [item.name, true]));

  // Total number of plants in the cart (sum of quantities) for the cart icon
  const calculateTotalQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#" className="navbar-brand" onClick={handleHomeClick}>
          <img
            src={img('1466692476868-aef1dfb1e735')}
            alt="Paradise Nursery logo"
            className="navbar-logo"
          />
          <div>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </div>
        </a>
        <div className="navbar-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handlePlantsClick}>Plants</a>
          <a href="#" className="cart-link" onClick={handleCartClick} aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="38" height="38">
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            <span className="cart-count">{calculateTotalQuantity()}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <section key={category.category} className="category-section">
              <h2 className="category-title">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={!!addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
