import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { getAllProducts, fragranceFamilies, seasons, fragranceTypes, miswaakTypes } from '../data/islamicProducts'
import './Catalog.css'

const Catalog = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [selectedFragranceFamily, setSelectedFragranceFamily] = useState('all')
  const [selectedSeason, setSelectedSeason] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'all', 
    'Men', 
    'Women', 
    'Islamic Items', 
    'Prayer Items'
  ]

  const subcategories = {
    'Men': ['Daily Wear', 'Office Wear', 'Party Wear', 'Premium', 'Islamic'],
    'Women': ['Daily Wear', 'Office Wear', 'Party Wear', 'Premium', 'Islamic'],
    'Islamic Items': ['Islamic Caps', 'Abaya & Jibabs', 'Hijabs & Scarves', 'Niqabs', 'Clothing', 'Rings (Silver)'],
    'Prayer Items': ['Prayer Mats', 'Digital Tasbeeh', 'Prayer Beads', 'Qibla Compass', 'Miswaak', 'Sufianah Keychains']
  }

  useEffect(() => {
    // Get Islamic products data
    const allProducts = getAllProducts()
    
    // Simulate API call
    setTimeout(() => {
      setProducts(allProducts)
      setFilteredProducts(allProducts)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory)
    }

    // Filter by fragrance family
    if (selectedFragranceFamily !== 'all') {
      filtered = filtered.filter(product => product.fragranceFamily === selectedFragranceFamily)
    }

    // Filter by season
    if (selectedSeason !== 'all') {
      filtered = filtered.filter(product => product.season === selectedSeason)
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(product => product.type === selectedType)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.category && product.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
          return a.title.localeCompare(b.title)
        case 'newest':
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }, [products, selectedCategory, selectedSubcategory, selectedFragranceFamily, selectedSeason, selectedType, searchTerm, sortBy])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setSelectedSubcategory('all') // Reset subcategory when category changes
  }

  const handleClearFilters = () => {
    setSelectedCategory('all')
    setSelectedSubcategory('all')
    setSelectedFragranceFamily('all')
    setSelectedSeason('all')
    setSelectedType('all')
    setSearchTerm('')
  }

  const getAvailableSubcategories = () => {
    if (selectedCategory === 'all') return []
    return subcategories[selectedCategory] || []
  }

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog-header">
          <h1 className="catalog-title">Islamic Products Catalog</h1>
          <p className="catalog-subtitle">
            Discover our comprehensive collection of Islamic fragrances, clothing, and prayer essentials
          </p>
        </div>

        <div className="catalog-content">
          {/* Filters Sidebar */}
          <div className="filters-sidebar">
            <div className="filter-section">
              <h3 className="filter-title">Search</h3>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Category</h3>
              <div className="filter-options">
                {categories.map(category => (
                  <label key={category} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <span className="filter-label">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {getAvailableSubcategories().length > 0 && (
              <div className="filter-section">
                <h3 className="filter-title">Subcategory</h3>
                <div className="filter-options">
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="subcategory"
                      value="all"
                      checked={selectedSubcategory === 'all'}
                      onChange={() => setSelectedSubcategory('all')}
                    />
                    <span className="filter-label">All</span>
                  </label>
                  {getAvailableSubcategories().map(subcategory => (
                    <label key={subcategory} className="filter-option">
                      <input
                        type="radio"
                        name="subcategory"
                        value={subcategory}
                        checked={selectedSubcategory === subcategory}
                        onChange={() => setSelectedSubcategory(subcategory)}
                      />
                      <span className="filter-label">{subcategory}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Fragrance-specific filters */}
            {(selectedCategory === 'Men' || selectedCategory === 'Women') && (
              <>
                <div className="filter-section">
                  <h3 className="filter-title">Fragrance Family</h3>
                  <div className="filter-options">
                    <label className="filter-option">
                      <input
                        type="radio"
                        name="fragranceFamily"
                        value="all"
                        checked={selectedFragranceFamily === 'all'}
                        onChange={() => setSelectedFragranceFamily('all')}
                      />
                      <span className="filter-label">All</span>
                    </label>
                    {fragranceFamilies.map(family => (
                      <label key={family} className="filter-option">
                        <input
                          type="radio"
                          name="fragranceFamily"
                          value={family}
                          checked={selectedFragranceFamily === family}
                          onChange={() => setSelectedFragranceFamily(family)}
                        />
                        <span className="filter-label">{family}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h3 className="filter-title">Season</h3>
                  <div className="filter-options">
                    <label className="filter-option">
                      <input
                        type="radio"
                        name="season"
                        value="all"
                        checked={selectedSeason === 'all'}
                        onChange={() => setSelectedSeason('all')}
                      />
                      <span className="filter-label">All</span>
                    </label>
                    {seasons.map(season => (
                      <label key={season} className="filter-option">
                        <input
                          type="radio"
                          name="season"
                          value={season}
                          checked={selectedSeason === season}
                          onChange={() => setSelectedSeason(season)}
                        />
                        <span className="filter-label">{season}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h3 className="filter-title">Fragrance Type</h3>
                  <div className="filter-options">
                    <label className="filter-option">
                      <input
                        type="radio"
                        name="type"
                        value="all"
                        checked={selectedType === 'all'}
                        onChange={() => setSelectedType('all')}
                      />
                      <span className="filter-label">All</span>
                    </label>
                    {fragranceTypes.map(type => (
                      <label key={type} className="filter-option">
                        <input
                          type="radio"
                          name="type"
                          value={type}
                          checked={selectedType === type}
                          onChange={() => setSelectedType(type)}
                        />
                        <span className="filter-label">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Miswaak-specific filters */}
            {selectedSubcategory === 'Miswaak' && (
              <div className="filter-section">
                <h3 className="filter-title">Miswaak Type</h3>
                <div className="filter-options">
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="miswaakType"
                      value="all"
                      checked={selectedType === 'all'}
                      onChange={() => setSelectedType('all')}
                    />
                    <span className="filter-label">All</span>
                  </label>
                  {miswaakTypes.map(type => (
                    <label key={type} className="filter-option">
                      <input
                        type="radio"
                        name="miswaakType"
                        value={type}
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                      />
                      <span className="filter-label">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="filter-actions">
              <button onClick={handleClearFilters} className="clear-filters-btn">
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-section">
            <div className="products-header">
              <div className="products-count">
                {loading ? 'Loading...' : `${filteredProducts.length} products found`}
              </div>
              <div className="sort-controls">
                <label htmlFor="sort-select">Sort by:</label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="loading">
                <p>Loading products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
                <button onClick={handleClearFilters} className="btn btn-primary">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id || product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog