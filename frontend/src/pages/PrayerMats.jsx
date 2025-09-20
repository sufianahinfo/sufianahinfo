import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { getProductsByCategory } from '../data/islamicProducts'
import './CategoryPage.css'

const PrayerMats = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('name')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const allProducts = getProductsByCategory('Prayer Items')
    const prayerMatProducts = allProducts.filter(product => 
      product.subcategory === 'Prayer Mats'
    )

    setTimeout(() => {
      setProducts(prayerMatProducts)
      setLoading(false)
    }, 500)
  }, [])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">Prayer Mats</h1>
          <p className="category-subtitle">
            High-quality prayer mats with compass and soft padding for comfortable prayer
          </p>
          <div className="breadcrumb">
            <span>Home</span> / <span>Prayer Items</span> / <span>Prayer Mats</span>
          </div>
        </div>

        <div className="category-filters">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search prayer mats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="sort-section">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name A-Z</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="category-info">
          <div className="info-card">
            <h3>Available Colors</h3>
            <p>Green, Blue, Red, Brown</p>
          </div>
          <div className="info-card">
            <h3>Features</h3>
            <p>Compass, Soft Padding, Portable</p>
          </div>
          <div className="info-card">
            <h3>Materials</h3>
            <p>Premium Fabric, Non-slip Base</p>
          </div>
        </div>

        <div className="products-section">
          {loading ? (
            <div className="loading">Loading prayer mats...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>No prayer mats found.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PrayerMats
