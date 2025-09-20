import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getAllProducts } from '../data/islamicProducts'
import './Home.css'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for now - will be replaced with API call
    const mockProducts = [
      {
        _id: '1',
        title: 'Blue Desert',
        slug: 'blue-desert',
        description: 'A captivating fragrance that captures the essence of desert nights',
        price: 890,
        originalPrice: 1770,
        images: ['https://ik.imagekit.io/oqa1rxy6s/assets/men/featured-perfume-1.jpg'],
        category: 'Men',
        isOnSale: true,
        stock: 50
      },
      {
        _id: '2',
        title: 'COFFICCO',
        slug: 'cofficco',
        description: 'Rich coffee-inspired fragrance for the modern connoisseur',
        price: 890,
        originalPrice: 1770,
        images: ['https://ik.imagekit.io/oqa1rxy6s/assets/men/featured-perfume-1.jpg'],
        category: 'Unisex',
        isOnSale: true,
        stock: 30
      },
      {
        _id: '3',
        title: 'LUXE MIST',
        slug: 'luxe-mist',
        description: 'Elegant and sophisticated mist for special occasions',
        price: 890,
        originalPrice: 1680,
        images: ['https://ik.imagekit.io/oqa1rxy6s/assets/men/featured-perfume-1.jpg'],
        category: 'Women',
        isOnSale: true,
        stock: 25
      },
      {
        _id: '4',
        title: 'MARJAN',
        slug: 'marjan',
        description: 'Exotic and alluring fragrance inspired by precious stones',
        price: 890,
        originalPrice: 1770,
        images: ['https://ik.imagekit.io/oqa1rxy6s/assets/men/featured-perfume-1.jpg'],
        category: 'Women',
        isOnSale: true,
        stock: 40
      },
      {
        _id: '5',
        title: 'MARYAM',
        slug: 'maryam',
        description: 'Floral and delicate, perfect for everyday elegance',
        price: 890,
        originalPrice: 1680,
        images: ['https://ik.imagekit.io/oqa1rxy6s/assets/men/featured-perfume-1.jpg'],
        category: 'Women',
        isOnSale: true,
        stock: 35
      },
      {
        _id: '6',
        title: 'SENORITA',
        slug: 'senorita',
        description: 'Bold and confident fragrance for the modern woman',
        price: 890,
        originalPrice: 1680,
        images: ['https://ik.imagekit.io/oqa1rxy6s/assets/men/featured-perfume-1.jpg'],
        category: 'Women',
        isOnSale: true,
        stock: 20
      }
    ]

    // Get featured Islamic products
    const allProducts = getAllProducts()
    
    // Select featured products (mix of different categories)
    const featured = [
      allProducts.find(p => p.id === 'mens-daily-1'), // Blue Desert
      allProducts.find(p => p.id === 'mens-daily-2'), // Marjan
      allProducts.find(p => p.id === 'womens-daily-1'), // Floral Green
      allProducts.find(p => p.id === 'womens-daily-2'), // Senorita
      allProducts.find(p => p.id === 'unisex-1') // Luxe
    ].filter(Boolean) // Remove any undefined products

    // Simulate API call
    setTimeout(() => {
      setFeaturedProducts(featured)
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">Welcome to Sufianah Islamic Store</h1>
            <p className="hero-subtitle">
              Your trusted destination for premium Islamic fragrances, modest clothing, and essential prayer items
            </p>
            <div className="hero-actions">
              <Link to="/catalog" className="btn btn-primary">
                Explore Collection
              </Link>
              <Link to="/catalog/prayer-mats" className="btn btn-outline">
                Prayer Items
              </Link>
            </div>
          </div>
        </div>
          </section>

          {/* Fragrance Showcase Section */}
          <section className="fragrance-showcase-section">
            <div className="container">
              <h2 className="showcase-title">Sufianah Elegant Collection</h2>
              <p className="showcase-subtitle">
                Experience the perfect blend of tradition and luxury with our signature fragrance collection
              </p>
              
              <div className="showcase-grid">
                <div className="showcase-item">
                  <div className="showcase-image-container">
                    <img 
                      src="https://ik.imagekit.io/oqa1rxy6s/assets/showcase/blackbox.jpeg" 
                      alt="Sufianah Elegant Black Box" 
                      className="showcase-image"
                    />
                    <div className="showcase-overlay">
                      <h3 className="showcase-item-title">Elegant Black</h3>
                      <p className="showcase-item-description">Premium black box collection - sophisticated and timeless</p>
                    </div>
                  </div>
                </div>
                
                <div className="showcase-item">
                  <div className="showcase-image-container">
                    <img 
                      src="https://ik.imagekit.io/oqa1rxy6s/assets/showcase/whitebox.jpeg" 
                      alt="Sufianah Elegant White Box" 
                      className="showcase-image"
                    />
                    <div className="showcase-overlay">
                      <h3 className="showcase-item-title">Elegant White</h3>
                      <p className="showcase-item-description">Pure white box collection - elegant and refined</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Categories Section */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Our Islamic Collections</h2>
          <p className="text-center mb-8" style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
            Discover our comprehensive range of Islamic products and fragrances
          </p>
          
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">🌸</div>
              <h3>Men's Fragrances</h3>
              <p>Premium Islamic and traditional fragrances for daily wear, office, and special occasions</p>
              <Link to="/catalog/men" className="btn btn-outline">Explore</Link>
            </div>
            <div className="category-card">
              <div className="category-icon">🌺</div>
              <h3>Women's Fragrances</h3>
              <p>Elegant and subtle fragrances perfect for Muslim women's daily and special occasions</p>
              <Link to="/catalog/women" className="btn btn-outline">Explore</Link>
            </div>
            <div className="category-card">
              <div className="category-icon">🧕</div>
              <h3>Modest Clothing</h3>
              <p>Beautiful abayas, hijabs, jibabs, and Islamic caps for men and women</p>
              <Link to="/catalog/islamic-caps" className="btn btn-outline">Explore</Link>
            </div>
            <div className="category-card">
              <div className="category-icon">🕌</div>
              <h3>Prayer Essentials</h3>
              <p>Prayer mats, digital tasbeeh, miswaak, and other essential Islamic items</p>
              <Link to="/catalog/prayer-mats" className="btn btn-outline">Explore</Link>
            </div>
            <div className="category-card">
              <div className="category-icon">💍</div>
              <h3>Silver Jewelry</h3>
              <p>Beautiful silver rings and accessories for both men and women</p>
              <Link to="/catalog/rings" className="btn btn-outline">Explore</Link>
            </div>
            <div className="category-card">
              <div className="category-icon">🌿</div>
              <h3>Miswaak Collection</h3>
              <p>Natural miswaak from various trees - Arak, Olive, Neem, and more</p>
              <Link to="/catalog/miswaak" className="btn btn-outline">Explore</Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/catalog" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Islamic Products Section */}
      <section className="featured-products-section">
        <div className="container">
          <h2 className="section-title">Featured Islamic Products</h2>
          <p className="text-center mb-8" style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
            Discover our most popular Islamic fragrances and essential items
          </p>
          
          {loading ? (
            <div className="loading">
              <p>Loading featured products...</p>
            </div>
          ) : (
            <div className="product-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link to="/catalog" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Men's Fragrances Section */}
      <section className="mens-fragrances-section">
        <div className="container">
          <h2 className="section-title">Men's Fragrances</h2>
          <p className="text-center mb-8" style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
            Discover our premium collection of Islamic and traditional fragrances for men
          </p>
          
          <div className="product-grid">
            {getAllProducts()
              .filter(product => product.category === 'Men' && !product.isComingSoon)
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/catalog/men" className="btn btn-primary">
              View All Men's Fragrances
            </Link>
          </div>
        </div>
      </section>

      {/* Women's Fragrances Section */}
      <section className="womens-fragrances-section">
        <div className="container">
          <h2 className="section-title">Women's Fragrances</h2>
          <p className="text-center mb-8" style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
            Elegant and subtle fragrances perfect for Muslim women's daily and special occasions
          </p>
          
          <div className="product-grid">
            {getAllProducts()
              .filter(product => product.category === 'Women' && !product.isComingSoon)
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/catalog/women" className="btn btn-primary">
              View All Women's Fragrances
            </Link>
          </div>
        </div>
      </section>

      {/* Unisex Fragrances Section */}
      <section className="unisex-fragrances-section">
        <div className="container">
          <h2 className="section-title">Unisex Fragrances</h2>
          <p className="text-center mb-8" style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
            Versatile fragrances suitable for both men and women
          </p>
          
          <div className="product-grid">
            {getAllProducts()
              .filter(product => product.category === 'Unisex' && !product.isComingSoon)
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/catalog" className="btn btn-primary">
              View All Unisex Fragrances
            </Link>
          </div>
        </div>
      </section>

      {/* Gift Sets Section */}
      <section className="gift-sets-section" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Premium Gift Sets</h2>
          <p className="text-center mb-8" style={{ color: 'var(--gray-600)', fontSize: '1.125rem' }}>
            Perfect gifts for your loved ones
          </p>
          
          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            <div className="gift-set-card hover-lift" style={{ 
              backgroundColor: 'var(--gray-100)', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--gray-800)', marginBottom: '1rem' }}>Sufianah Premium Gift Set for Men</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                A curated collection of our finest men's fragrances
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ 
                  textDecoration: 'line-through', 
                  color: 'var(--gray-500)', 
                  marginRight: '0.5rem' 
                }}>
                  Rs.4,000.00 PKR
                </span>
                <span className="gift-price">
                  From Rs.2,550.00 PKR
                </span>
              </div>
              <Link to="/catalog" className="btn btn-primary">View Details</Link>
            </div>

            <div className="gift-set-card hover-lift" style={{ 
              backgroundColor: 'var(--gray-100)', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--gray-800)', marginBottom: '1rem' }}>Sufianah Premium Gift Set for Women</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                An elegant selection of our most beloved women's fragrances
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ 
                  textDecoration: 'line-through', 
                  color: 'var(--gray-500)', 
                  marginRight: '0.5rem' 
                }}>
                  Rs.4,700.00 PKR
                </span>
                <span className="gift-price">
                  From Rs.2,550.00 PKR
                </span>
              </div>
              <Link to="/catalog" className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2 className="newsletter-title">Subscribe to our emails</h2>
          <p className="newsletter-subtitle">
            Stay updated with our latest fragrances and exclusive offers
          </p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
