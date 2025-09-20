import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { getProductsByCategory } from '../data/islamicProducts'
import './CategoryPage.css'

const Miswaak = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('name')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')

  const miswaakTypes = [
    'all',
    'Arak Miswak (peelu)',
    'Olive Miswak (Zaintoon)',
    'Neem Miswak',
    'Drumstick Miswak (Sukhchain)',
    'Moringa Tree Miswaak'
  ]

  useEffect(() => {
    const allProducts = getProductsByCategory('Prayer Items')
    const miswaakProducts = allProducts.filter(product => 
      product.subcategory === 'Miswaak'
    )

    setTimeout(() => {
      setProducts(miswaakProducts)
      setLoading(false)
    }, 500)
  }, [])

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = selectedType === 'all' || product.type === selectedType
    
    return matchesSearch && matchesType
  }).sort((a, b) => {
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
          <h1 className="category-title">Miswaak Collection</h1>
          <p className="category-subtitle">
            Natural miswaak from various trees - traditional oral hygiene for Muslims
          </p>
          <div className="breadcrumb">
            <span>Home</span> / <span>Prayer Items</span> / <span>Miswaak</span>
          </div>
        </div>

        <div className="category-filters">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search miswaak..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-section">
            <label>Miswaak Type:</label>
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              {miswaakTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
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
            <h3>Available Types</h3>
            <p>Arak, Olive, Neem, Drumstick, Moringa</p>
          </div>
          <div className="info-card">
            <h3>Benefits</h3>
            <p>Natural, Antibacterial, Traditional</p>
          </div>
          <div className="info-card">
            <h3>Usage</h3>
            <p>Daily Oral Hygiene, Sunnah Practice</p>
          </div>
        </div>

        <div className="products-section">
          {loading ? (
            <div className="loading">Loading miswaak collection...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>No miswaak found.</p>
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

export default Miswaak
