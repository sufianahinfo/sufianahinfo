import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isAdding) return
    
    setIsAdding(true)
    try {
      await addToCart(product, 1)
      // You could add a toast notification here
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsAdding(false)
    }
  }

  const formatPrice = (price) => {
    return `Rs.${price.toLocaleString()}.00 PKR`
  }

  const getProductUrl = () => {
    // Handle different product structures
    if (product.slug) {
      return `/product/${product.slug}`
    } else if (product.id) {
      return `/product/${product.id}`
    }
    return '/product/unknown'
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="product-card hover-lift">
      <Link to={getProductUrl()} className="product-link">
        <div className="product-image-container">
          <img 
            src={product.images?.[0] || '/placeholder-perfume.jpg'} 
            alt={product.title}
            className="product-image"
          />
          {product.isOnSale && (
            <div className="sale-badge">Sale</div>
          )}
          {discountPercentage > 0 && (
            <div className="discount-badge">-{discountPercentage}%</div>
          )}
        </div>
        
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
          
          <div className="product-category">
            <span className="category-tag">{product.category}</span>
            {product.subcategory && (
              <span className="subcategory-tag">{product.subcategory}</span>
            )}
            {product.isIslamic && (
              <span className="islamic-tag">Islamic</span>
            )}
          </div>
          
          <div className="product-pricing">
            <div className="price-container">
              <span className="current-price">{formatPrice(product.price)}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="original-price">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="price-label">Regular price</div>
            )}
          </div>
          
          <div className="product-actions">
            <button 
              className="btn btn-primary add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={isAdding || product.stock === 0}
            >
              {isAdding ? 'Adding...' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
