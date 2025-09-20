import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Product = () => {
  const { slug } = useParams()
  const { addToCart } = useContext(CartContext)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    // Mock data - will be replaced with API call
    const mockProducts = [
      {
        _id: '1',
        title: 'Blue Desert',
        slug: 'blue-desert',
        description: 'A captivating fragrance that captures the essence of desert nights. This sophisticated blend combines warm amber notes with fresh citrus undertones, creating a scent that is both mysterious and alluring. Perfect for evening wear and special occasions.',
        longDescription: 'Blue Desert is our signature fragrance that transports you to the vast, starlit landscapes of the Arabian desert. Crafted with the finest ingredients, this perfume opens with bright bergamot and lemon, evolves into a heart of jasmine and rose, and settles into a warm base of amber, sandalwood, and musk. The result is a timeless scent that embodies luxury and sophistication.',
        price: 890,
        originalPrice: 1770,
        images: ['/placeholder-perfume.jpg', '/placeholder-perfume-2.jpg', '/placeholder-perfume-3.jpg'],
        category: 'Men',
        isOnSale: true,
        stock: 50,
        sizes: ['30ml', '50ml', '100ml'],
        notes: {
          top: ['Bergamot', 'Lemon', 'Grapefruit'],
          middle: ['Jasmine', 'Rose', 'Lavender'],
          base: ['Amber', 'Sandalwood', 'Musk']
        }
      }
    ]

    setTimeout(() => {
      const foundProduct = mockProducts.find(p => p.slug === slug)
      setProduct(foundProduct || null)
      setLoading(false)
    }, 1000)
  }, [slug])

  const handleAddToCart = async () => {
    if (!product || isAdding) return
    
    setIsAdding(true)
    try {
      await addToCart(product, quantity)
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

  if (loading) {
    return (
      <div className="product">
        <div className="container">
          <div className="loading">
            <p>Loading product...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="product">
        <div className="container">
          <div className="error">
            <h2>Product not found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/catalog" className="btn btn-primary">Browse Products</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="product">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/catalog">Catalog</Link>
          <span>/</span>
          <span>{product.title}</span>
        </nav>

        <div className="product-content">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.images[selectedImage] || '/placeholder-perfume.jpg'} 
                alt={product.title}
              />
              {product.isOnSale && (
                <div className="sale-badge">Sale</div>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="image-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.title} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-header">
              <h1 className="product-title">{product.title}</h1>
              <div className="product-category">{product.category}</div>
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

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            {/* Fragrance Notes */}
            {product.notes && (
              <div className="fragrance-notes">
                <h3>Fragrance Notes</h3>
                <div className="notes-grid">
                  <div className="note-category">
                    <h4>Top Notes</h4>
                    <p>{product.notes.top.join(', ')}</p>
                  </div>
                  <div className="note-category">
                    <h4>Middle Notes</h4>
                    <p>{product.notes.middle.join(', ')}</p>
                  </div>
                  <div className="note-category">
                    <h4>Base Notes</h4>
                    <p>{product.notes.base.join(', ')}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="size-selection">
                <h3>Size</h3>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button key={size} className="size-option">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="quantity-selection">
              <h3>Quantity</h3>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  className="quantity-input"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="product-actions">
              <button 
                className="btn btn-primary add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={isAdding || product.stock === 0}
              >
                {isAdding ? 'Adding...' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
              
              <div className="stock-info">
                {product.stock > 0 ? (
                  <span className="in-stock">✓ In Stock ({product.stock} available)</span>
                ) : (
                  <span className="out-of-stock">Out of Stock</span>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="product-details">
              <h3>Product Details</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Brand:</span>
                  <span className="detail-value">Sufianah</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Category:</span>
                  <span className="detail-value">{product.category}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Volume:</span>
                  <span className="detail-value">50ml</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Concentration:</span>
                  <span className="detail-value">Eau de Parfum</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Long Description */}
        {product.longDescription && (
          <div className="product-description-section">
            <h2>About This Fragrance</h2>
            <p>{product.longDescription}</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .product {
          padding: 2rem 0 4rem;
          min-height: 60vh;
        }

        .breadcrumb {
          margin-bottom: 2rem;
          font-size: 0.875rem;
        }

        .breadcrumb a {
          color: var(--gray-600);
          text-decoration: none;
        }

        .breadcrumb a:hover {
          color: var(--primary-gold);
        }

        .breadcrumb span {
          color: var(--gray-400);
          margin: 0 0.5rem;
        }

        .product-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .product-images {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .main-image {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 0.5rem;
          overflow: hidden;
          background-color: var(--gray-100);
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sale-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background-color: var(--primary-gold);
          color: var(--white);
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .image-thumbnails {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
        }

        .thumbnail {
          width: 80px;
          height: 80px;
          border: 2px solid transparent;
          border-radius: 0.375rem;
          overflow: hidden;
          background: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .thumbnail.active {
          border-color: var(--primary-gold);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .product-header {
          margin-bottom: 1rem;
        }

        .product-title {
          font-size: 2.5rem;
          color: var(--gray-800);
          margin-bottom: 0.5rem;
        }

        .product-category {
          background-color: var(--gray-100);
          color: var(--gray-700);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: inline-block;
        }

        .product-pricing {
          margin-bottom: 1rem;
        }

        .price-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .current-price {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-gold);
        }

        .original-price {
          font-size: 1.25rem;
          color: var(--gray-500);
          text-decoration: line-through;
        }

        .price-label {
          font-size: 0.875rem;
          color: var(--gray-500);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .product-description p {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--gray-600);
        }

        .fragrance-notes {
          background-color: var(--gray-100);
          padding: 1.5rem;
          border-radius: 0.5rem;
        }

        .fragrance-notes h3 {
          color: var(--gray-800);
          margin-bottom: 1rem;
        }

        .notes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .note-category h4 {
          color: var(--gray-700);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .note-category p {
          color: var(--gray-600);
          font-size: 0.875rem;
          margin: 0;
        }

        .size-selection h3,
        .quantity-selection h3 {
          color: var(--gray-800);
          margin-bottom: 0.75rem;
          font-size: 1.125rem;
        }

        .size-options {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .size-option {
          padding: 0.5rem 1rem;
          border: 2px solid var(--gray-300);
          background: none;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .size-option:hover {
          border-color: var(--primary-gold);
          color: var(--primary-gold);
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          border: 2px solid var(--gray-300);
          border-radius: 0.375rem;
          overflow: hidden;
          width: fit-content;
        }

        .quantity-btn {
          background: none;
          border: none;
          padding: 0.75rem 1rem;
          cursor: pointer;
          color: var(--gray-600);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .quantity-btn:hover {
          background-color: var(--gray-100);
          color: var(--primary-gold);
        }

        .quantity-input {
          width: 80px;
          padding: 0.75rem;
          border: none;
          text-align: center;
          font-weight: 600;
          background-color: var(--white);
        }

        .quantity-input:focus {
          outline: none;
        }

        .product-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .add-to-cart-btn {
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .add-to-cart-btn:disabled {
          background-color: var(--gray-400);
          cursor: not-allowed;
        }

        .stock-info {
          font-size: 0.875rem;
        }

        .in-stock {
          color: #059669;
        }

        .out-of-stock {
          color: #dc2626;
        }

        .product-details {
          background-color: var(--gray-100);
          padding: 1.5rem;
          border-radius: 0.5rem;
        }

        .product-details h3 {
          color: var(--gray-800);
          margin-bottom: 1rem;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-label {
          color: var(--gray-600);
          font-weight: 500;
        }

        .detail-value {
          color: var(--gray-800);
          font-weight: 600;
        }

        .product-description-section {
          background-color: var(--gray-100);
          padding: 3rem;
          border-radius: 0.5rem;
          margin-top: 2rem;
        }

        .product-description-section h2 {
          color: var(--gray-800);
          margin-bottom: 1.5rem;
        }

        .product-description-section p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--gray-600);
        }

        @media (max-width: 768px) {
          .product-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .main-image {
            height: 400px;
          }

          .product-title {
            font-size: 2rem;
          }

          .current-price {
            font-size: 1.5rem;
          }

          .notes-grid {
            grid-template-columns: 1fr;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .product-description-section {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Product
