import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark') // Always use dark purple theme
  const [isTransitioning, setIsTransitioning] = useState(false)

  // No automatic theme switching - keep purple theme always
  const value = {
    theme,
    isTransitioning
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme-container ${theme} ${isTransitioning ? 'transitioning' : ''}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeContext
