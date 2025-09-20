import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext)

  const formatPrice = (price) => {
    return `Rs.${price.toLocaleString()}.00 PKR`
  }

  if (items.length === 0) {
    return (
      <div className="cart">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="m1 1 4 4 14 1 4 10H6l-2-8z"></path>
              </svg>
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any fragrances to your cart yet.</p>
            <Link to="/catalog" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>

        <style jsx>{`
          .cart {
            padding: 4rem 0;
            min-height: 60vh;
          }

          .empty-cart {
            text-align: center;
            padding: 4rem 2rem;
          }

          .empty-cart-icon {
            color: var(--gray-400);
            margin-bottom: 2rem;
          }

          .empty-cart h2 {
            color: var(--gray-800);
            margin-bottom: 1rem;
          }

          .empty-cart p {
            color: var(--gray-600);
            margin-bottom: 2rem;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-header">
          <h1 className="page-title">Shopping Cart</h1>
          <p className="page-subtitle">
            Review your selected fragrances and proceed to checkout
          </p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="item-image">
                  <img 
                    src={item.images?.[0] || '/placeholder-perfume.jpg'} 
                    alt={item.title}
                  />
                </div>

                <div className="item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-category">{item.category}</p>
                  <div className="item-price">{formatPrice(item.price)}</div>
                </div>

                <div className="item-quantity">
                  <label htmlFor={`quantity-${item._id}`}>Qty:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="quantity-btn"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id={`quantity-${item._id}`}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item._id, parseInt(e.target.value) || 1)}
                      min="1"
                      className="quantity-input"
                    />
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  <div className="item-total-price">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>

                <div className="item-actions">
                  <button 
                    onClick={() => removeFromCart(item._id)}
                    className="remove-btn"
                    title="Remove item"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3,6 5,6 21,6"></polyline>
                      <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal ({items.length} item{items.length !== 1 ? 's' : ''})</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              
              <div className="summary-row">
                <span>Tax</span>
                <span>Included</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>

              <div className="summary-actions">
                <Link to="/checkout" className="btn btn-primary checkout-btn">
                  Proceed to Checkout
                </Link>
                <button onClick={clearCart} className="btn btn-outline clear-btn">
                  Clear Cart
                </button>
              </div>

              <div className="continue-shopping">
                <Link to="/catalog">← Continue Shopping</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cart {
          padding: 2rem 0 4rem;
          min-height: 60vh;
        }

        .cart-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-title {
          font-size: 3rem;
          color: var(--gray-800);
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.125rem;
          color: var(--gray-600);
        }

        .cart-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 3rem;
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto auto auto;
          gap: 1.5rem;
          align-items: center;
          padding: 1.5rem;
          background-color: var(--white);
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .item-image {
          width: 100px;
          height: 100px;
          border-radius: 0.375rem;
          overflow: hidden;
          background-color: var(--gray-100);
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-details {
          min-width: 0;
        }

        .item-title {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          color: var(--gray-800);
          margin-bottom: 0.25rem;
        }

        .item-category {
          color: var(--gray-500);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .item-price {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--primary-gold);
        }

        .item-quantity {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .item-quantity label {
          font-size: 0.875rem;
          color: var(--gray-600);
          font-weight: 500;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          border: 2px solid var(--gray-300);
          border-radius: 0.375rem;
          overflow: hidden;
        }

        .quantity-btn {
          background: none;
          border: none;
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          color: var(--gray-600);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .quantity-btn:hover:not(:disabled) {
          background-color: var(--gray-100);
          color: var(--primary-gold);
        }

        .quantity-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quantity-input {
          width: 60px;
          padding: 0.5rem;
          border: none;
          text-align: center;
          font-weight: 600;
          background-color: var(--white);
        }

        .quantity-input:focus {
          outline: none;
        }

        .item-total {
          text-align: right;
        }

        .item-total-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-800);
        }

        .item-actions {
          display: flex;
          justify-content: center;
        }

        .remove-btn {
          background: none;
          border: none;
          color: var(--gray-400);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }

        .remove-btn:hover {
          color: #dc2626;
          background-color: #fef2f2;
        }

        .cart-summary {
          position: sticky;
          top: 2rem;
          height: fit-content;
        }

        .summary-card {
          background-color: var(--white);
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .summary-card h3 {
          color: var(--gray-800);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          color: var(--gray-600);
        }

        .summary-row.total {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-800);
        }

        .summary-divider {
          height: 1px;
          background-color: var(--gray-200);
          margin: 1rem 0;
        }

        .summary-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }

        .checkout-btn {
          width: 100%;
          padding: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .clear-btn {
          width: 100%;
        }

        .continue-shopping {
          text-align: center;
          margin-top: 1rem;
        }

        .continue-shopping a {
          color: var(--gray-600);
          text-decoration: none;
          font-weight: 500;
        }

        .continue-shopping a:hover {
          color: var(--primary-gold);
        }

        @media (max-width: 1024px) {
          .cart-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .cart-summary {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .cart-item {
            grid-template-columns: 80px 1fr;
            gap: 1rem;
          }

          .item-quantity,
          .item-total,
          .item-actions {
            grid-column: 1 / -1;
            justify-self: center;
            margin-top: 1rem;
          }

          .item-quantity {
            flex-direction: row;
            gap: 1rem;
          }

          .page-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .cart-item {
            padding: 1rem;
          }

          .item-image {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </div>
  )
}

export default Cart
