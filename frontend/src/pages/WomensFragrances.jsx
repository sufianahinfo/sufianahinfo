import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProductsByCategory } from '../data/islamicProducts'
import './CategoryPage.css'

const WomensFragrances = () => {
  const { subcategory } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('name')
  const [searchTerm, setSearchTerm] = useState('')

  const subcategories = {
    'daily-wear': 'Daily Wear',
    'office-wear': 'Office Wear', 
    'party-wear': 'Party Wear',
    'premium': 'Premium',
    'islamic': 'Islamic'
  }

  const currentSubcategory = subcategories[subcategory] || 'All Women\'s Fragrances'

  useEffect(() => {
    const allProducts = getProductsByCategory('Women')
    let filteredProducts = allProducts

    if (subcategory && subcategories[subcategory]) {
      filteredProducts = allProducts.filter(product => 
        product.subcategory === subcategories[subcategory]
      )
    }

    setTimeout(() => {
      setProducts(filteredProducts)
      setLoading(false)
    }, 500)
  }, [subcategory])

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
          <h1 className="category-title">Women's Fragrances</h1>
          <p className="category-subtitle">
            Elegant and subtle fragrances perfect for Muslim women's daily and special occasions
          </p>
          <div className="breadcrumb">
            <span>Home</span> / <span>Women's Fragrances</span>
            {subcategory && <span> / {currentSubcategory}</span>}
          </div>
        </div>

        <div className="category-filters">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search women's fragrances..."
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

        <div className="subcategory-nav">
          <a href="/catalog/women" className={`subcategory-link ${!subcategory ? 'active' : ''}`}>
            All Women's
          </a>
          <a href="/catalog/women/daily-wear" className={`subcategory-link ${subcategory === 'daily-wear' ? 'active' : ''}`}>
            Daily Wear
          </a>
          <a href="/catalog/women/office-wear" className={`subcategory-link ${subcategory === 'office-wear' ? 'active' : ''}`}>
            Office Wear
          </a>
          <a href="/catalog/women/party-wear" className={`subcategory-link ${subcategory === 'party-wear' ? 'active' : ''}`}>
            Party Wear
          </a>
          <a href="/catalog/women/premium" className={`subcategory-link ${subcategory === 'premium' ? 'active' : ''}`}>
            Premium
          </a>
          <a href="/catalog/women/islamic" className={`subcategory-link ${subcategory === 'islamic' ? 'active' : ''}`}>
            Islamic
          </a>
        </div>

        <div className="products-section">
          {loading ? (
            <div className="loading">Loading products...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>No products found in this category.</p>
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

export default WomensFragrances
