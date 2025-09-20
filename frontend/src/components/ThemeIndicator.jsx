import { useTheme } from '../context/ThemeContext'
import './ThemeIndicator.css'

const ThemeIndicator = () => {
  const { theme, isTransitioning } = useTheme()

  return (
    <div className="theme-indicator">
      <div className={`theme-dot ${theme} ${isTransitioning ? 'transitioning' : ''}`}>
        <div className="theme-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </div>
      <div className="theme-text">
        Magic Purple
      </div>
    </div>
  )
}

export default ThemeIndicator
