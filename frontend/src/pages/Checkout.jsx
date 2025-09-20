import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useContext(CartContext)
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Pakistan',
    paymentMethod: 'card'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clear cart and redirect to success page
      clearCart()
      navigate('/checkout/success')
    } catch (error) {
      console.error('Checkout error:', error)
      setIsProcessing(false)
    }
  }

  const formatPrice = (price) => {
    return `Rs.${price.toLocaleString()}.00 PKR`
  }

  if (items.length === 0) {
    return (
      <div className="checkout">
        <div className="container">
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some fragrances to your cart before checking out.</p>
            <button onClick={() => navigate('/catalog')} className="btn btn-primary">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-header">
          <h1 className="page-title">Checkout</h1>
          <p className="page-subtitle">
            Complete your order to receive your premium fragrances
          </p>
        </div>

        <div className="checkout-content">
          <form onSubmit={handleSubmit} className="checkout-form">
            {/* Personal Information */}
            <div className="form-section">
              <h2>Personal Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="form-section">
              <h2>Shipping Address</h2>
              <div className="form-group">
                <label htmlFor="address">Street Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code *</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="UAE">UAE</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="form-section">
              <h2>Payment Method</h2>
              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                  />
                  <span className="payment-label">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                    Credit/Debit Card
                  </span>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                  />
                  <span className="payment-label">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                    Cash on Delivery
                  </span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary checkout-btn"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : `Complete Order - ${formatPrice(getTotalPrice())}`}
            </button>
          </form>

          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="order-items">
              {items.map((item) => (
                <div key={item._id} className="order-item">
                  <div className="item-image">
                    <img src={item.images?.[0] || '/placeholder-perfume.jpg'} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                    <div className="item-quantity">Qty: {item.quantity}</div>
                  </div>
                  <div className="item-price">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="total-row">
                <span>Tax</span>
                <span>Included</span>
              </div>
              <div className="total-divider"></div>
              <div className="total-row final-total">
                <span>Total</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .checkout {
          padding: 2rem 0 4rem;
          min-height: 60vh;
        }

        .checkout-header {
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

        .checkout-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 3rem;
        }

        .checkout-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-section {
          background-color: var(--white);
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .form-section h2 {
          color: var(--gray-800);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: var(--gray-700);
          font-weight: 500;
          font-size: 0.875rem;
        }

        .form-input,
        .form-select {
          padding: 0.75rem;
          border: 2px solid var(--gray-300);
          border-radius: 0.375rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: var(--primary-gold);
        }

        .payment-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .payment-option {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 2px solid var(--gray-300);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .payment-option:hover {
          border-color: var(--primary-gold);
        }

        .payment-option input[type="radio"] {
          margin: 0;
        }

        .payment-option input[type="radio"]:checked + .payment-label {
          color: var(--primary-gold);
        }

        .payment-option:has(input[type="radio"]:checked) {
          border-color: var(--primary-gold);
          background-color: rgba(212, 175, 55, 0.05);
        }

        .payment-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--gray-700);
        }

        .checkout-btn {
          width: 100%;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .checkout-btn:disabled {
          background-color: var(--gray-400);
          cursor: not-allowed;
        }

        .order-summary {
          background-color: var(--white);
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .order-summary h2 {
          color: var(--gray-800);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .order-items {
          margin-bottom: 2rem;
        }

        .order-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--gray-200);
        }

        .item-image {
          width: 60px;
          height: 60px;
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
          flex: 1;
          min-width: 0;
        }

        .item-details h3 {
          font-size: 0.875rem;
          color: var(--gray-800);
          margin-bottom: 0.25rem;
        }

        .item-details p {
          font-size: 0.75rem;
          color: var(--gray-500);
          margin-bottom: 0.25rem;
        }

        .item-quantity {
          font-size: 0.75rem;
          color: var(--gray-600);
        }

        .item-price {
          font-weight: 600;
          color: var(--gray-800);
          font-size: 0.875rem;
        }

        .order-totals {
          border-top: 1px solid var(--gray-200);
          padding-top: 1rem;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          color: var(--gray-600);
        }

        .total-divider {
          height: 1px;
          background-color: var(--gray-200);
          margin: 1rem 0;
        }

        .final-total {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-800);
        }

        .empty-cart {
          text-align: center;
          padding: 4rem 2rem;
        }

        .empty-cart h2 {
          color: var(--gray-800);
          margin-bottom: 1rem;
        }

        .empty-cart p {
          color: var(--gray-600);
          margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
          .checkout-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .order-summary {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .page-title {
            font-size: 2rem;
          }

          .form-section {
            padding: 1.5rem;
          }

          .order-summary {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Checkout
