import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
// Using ImageKit URL for logo
const logoImage = 'https://ik.imagekit.io/oqa1rxy6s/assets/logo/sufianah-logo.png'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)
  const { cartItems } = useContext(CartContext)

  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Close mobile dropdowns when menu closes
    if (isMenuOpen) {
      setActiveMobileDropdown(null)
    }
  }

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleMobileDropdownToggle = (dropdown) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      
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
      </div>
    </nav>

    {/* Mobile Navigation Sidebar */}
    <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
      {/* Close Button */}
      <div className="mobile-nav-header">
        <h3 className="mobile-nav-title">Menu</h3>
        <button className="mobile-nav-close" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
      
      {/* Mobile Men's Fragrances */}
      <div className={`mobile-dropdown ${activeMobileDropdown === 'mens' ? 'open' : ''}`}>
        <span 
          className="mobile-dropdown-trigger" 
          onClick={() => handleMobileDropdownToggle('mens')}
        >
          Men's Fragrances
        </span>
        <div className="mobile-dropdown-content">
          <Link to="/catalog/men/daily-wear" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Daily Wear</Link>
          <Link to="/catalog/men/office-wear" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Office Wear</Link>
          <Link to="/catalog/men/party-wear" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Party Wear</Link>
          <Link to="/catalog/men/premium" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Premium</Link>
          <Link to="/catalog/men/islamic" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Islamic</Link>
        </div>
      </div>

      {/* Mobile Women's Fragrances */}
      <div className={`mobile-dropdown ${activeMobileDropdown === 'womens' ? 'open' : ''}`}>
        <span 
          className="mobile-dropdown-trigger" 
          onClick={() => handleMobileDropdownToggle('womens')}
        >
          Women's Fragrances
        </span>
        <div className="mobile-dropdown-content">
          <Link to="/catalog/women/daily-wear" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Daily Wear</Link>
          <Link to="/catalog/women/office-wear" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Office Wear</Link>
          <Link to="/catalog/women/party-wear" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Party Wear</Link>
          <Link to="/catalog/women/premium" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Premium</Link>
          <Link to="/catalog/women/islamic" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Islamic</Link>
        </div>
      </div>

      {/* Mobile Islamic Items */}
      <div className={`mobile-dropdown ${activeMobileDropdown === 'islamic' ? 'open' : ''}`}>
        <span 
          className="mobile-dropdown-trigger" 
          onClick={() => handleMobileDropdownToggle('islamic')}
        >
          Islamic Items
        </span>
        <div className="mobile-dropdown-content">
          <Link to="/catalog/islamic-caps" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Islamic Caps</Link>
          <Link to="/catalog/abaya-jibabs" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Abaya & Jibabs</Link>
          <Link to="/catalog/hijabs-scarves" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Hijabs & Scarves</Link>
          <Link to="/catalog/niqabs" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Niqabs</Link>
          <Link to="/catalog/rings" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Rings (Silver)</Link>
        </div>
      </div>

      {/* Mobile Prayer Items */}
      <div className={`mobile-dropdown ${activeMobileDropdown === 'prayer' ? 'open' : ''}`}>
        <span 
          className="mobile-dropdown-trigger" 
          onClick={() => handleMobileDropdownToggle('prayer')}
        >
          Prayer Items
        </span>
        <div className="mobile-dropdown-content">
          <Link to="/catalog/prayer-mats" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Prayer Mats</Link>
          <Link to="/catalog/digital-tasbeeh" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Digital Tasbeeh</Link>
          <Link to="/catalog/prayer-beads" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Prayer Beads</Link>
          <Link to="/catalog/qibla-compass" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Qibla Compass</Link>
          <Link to="/catalog/miswaak" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Miswaak</Link>
          <Link to="/catalog/keychains" className="mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>Sufianah Keychains</Link>
        </div>
      </div>

      <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      
      <div className="mobile-nav-divider"></div>
      
      {/* Mobile Search */}
      <div className="mobile-search-container">
        <input 
          type="text" 
          placeholder="Search fragrances..." 
          className="mobile-search-input"
        />
        <button className="mobile-search-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </div>

    </div>
    </>
  )
}

export default Navbar
