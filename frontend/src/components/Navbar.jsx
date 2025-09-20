import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
// Using ImageKit URL for logo
const logoImage = 'https://ik.imagekit.io/oqa1rxy6s/assets/logo/sufianah-logo.png'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    navigate('/')
  }

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img 
              src={logoImage} 
              alt="Sufianah Fragrances" 
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-nav desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <div className="nav-dropdown">
              <span 
                className="nav-link dropdown-trigger" 
                onClick={() => handleDropdownToggle('mens')}
              >
                Men's Fragrances
              </span>
              <div className={`dropdown-menu ${activeDropdown === 'mens' ? 'active' : ''}`}>
                <Link to="/catalog/men/daily-wear" className="dropdown-link">Daily Wear</Link>
                <Link to="/catalog/men/office-wear" className="dropdown-link">Office Wear</Link>
                <Link to="/catalog/men/party-wear" className="dropdown-link">Party Wear</Link>
                <Link to="/catalog/men/premium" className="dropdown-link">Premium</Link>
                <Link to="/catalog/men/islamic" className="dropdown-link">Islamic</Link>
              </div>
            </div>
            <div className="nav-dropdown">
              <span 
                className="nav-link dropdown-trigger" 
                onClick={() => handleDropdownToggle('womens')}
              >
                Women's Fragrances
              </span>
              <div className={`dropdown-menu ${activeDropdown === 'womens' ? 'active' : ''}`}>
                <Link to="/catalog/women/daily-wear" className="dropdown-link">Daily Wear</Link>
                <Link to="/catalog/women/office-wear" className="dropdown-link">Office Wear</Link>
                <Link to="/catalog/women/party-wear" className="dropdown-link">Party Wear</Link>
                <Link to="/catalog/women/premium" className="dropdown-link">Premium</Link>
                <Link to="/catalog/women/islamic" className="dropdown-link">Islamic</Link>
              </div>
            </div>
            <div className="nav-dropdown">
              <span 
                className="nav-link dropdown-trigger" 
                onClick={() => handleDropdownToggle('islamic')}
              >
                Islamic Items
              </span>
              <div className={`dropdown-menu ${activeDropdown === 'islamic' ? 'active' : ''}`}>
                <Link to="/catalog/islamic-caps" className="dropdown-link">Islamic Caps</Link>
                <Link to="/catalog/abaya-jibabs" className="dropdown-link">Abaya & Jibabs</Link>
                <Link to="/catalog/hijabs-scarves" className="dropdown-link">Hijabs & Scarves</Link>
                <Link to="/catalog/niqabs" className="dropdown-link">Niqabs</Link>
                <Link to="/catalog/clothing" className="dropdown-link">Clothing</Link>
                <Link to="/catalog/rings" className="dropdown-link">Rings (Silver)</Link>
              </div>
            </div>
            <div className="nav-dropdown">
              <span 
                className="nav-link dropdown-trigger" 
                onClick={() => handleDropdownToggle('prayer')}
              >
                Prayer Items
              </span>
              <div className={`dropdown-menu ${activeDropdown === 'prayer' ? 'active' : ''}`}>
                <Link to="/catalog/prayer-mats" className="dropdown-link">Prayer Mats</Link>
                <Link to="/catalog/digital-tasbeeh" className="dropdown-link">Digital Tasbeeh</Link>
                <Link to="/catalog/prayer-beads" className="dropdown-link">Prayer Beads</Link>
                <Link to="/catalog/qibla-compass" className="dropdown-link">Qibla Compass</Link>
                <Link to="/catalog/miswaak" className="dropdown-link">Miswaak</Link>
                <Link to="/catalog/keychains" className="dropdown-link">Sufianah Keychains</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Right side actions */}
          <div className="navbar-actions">
            {/* Search */}
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search fragrances..." 
                className="search-input"
              />
              <button className="search-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>

            {/* Cart */}
            <Link to="/cart" className="cart-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="m1 1 4 4 14 1 4 10H6l-2-8z"></path>
              </svg>
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>

            {/* Login/Admin */}
            {isLoggedIn ? (
              <div className="user-menu">
                <Link to="/admin/dashboard" className="btn btn-outline">Admin</Link>
                <button onClick={handleLogout} className="btn btn-outline">Logout</button>
              </div>
            ) : (
              <Link to="/admin/login" className="btn btn-outline">Log in</Link>
            )}

            {/* Mobile menu button */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/catalog" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Catalog</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="mobile-nav-divider"></div>
            {isLoggedIn ? (
              <>
                <Link to="/admin/dashboard" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Admin Dashboard</Link>
                <button onClick={handleLogout} className="mobile-nav-link logout-btn">Logout</button>
              </>
            ) : (
              <Link to="/admin/login" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Log in</Link>
            )}
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar
