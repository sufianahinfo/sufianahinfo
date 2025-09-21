import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'

// Men's Fragrances
import MensFragrances from './pages/MensFragrances'

// Women's Fragrances  
import WomensFragrances from './pages/WomensFragrances'

// Islamic Items
import IslamicCaps from './pages/IslamicCaps'
import AbayaJibabs from './pages/AbayaJibabs'
import HijabsScarves from './pages/HijabsScarves'
import Niqabs from './pages/Niqabs'
import Rings from './pages/Rings'

// Prayer Items
import PrayerMats from './pages/PrayerMats'
import DigitalTasbeeh from './pages/DigitalTasbeeh'
import Miswaak from './pages/Miswaak'

// Admin
import AdminLogin from './pages/Admin/Login'
import AdminDashboard from './pages/Admin/Dashboard'
import AdminProducts from './pages/Admin/Products'
import AdminOrders from './pages/Admin/Orders'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    {/* Men's Fragrances */}
                    <Route path="/catalog/men" element={<MensFragrances />} />
                    <Route path="/catalog/men/daily-wear" element={<MensFragrances />} />
                    <Route path="/catalog/men/office-wear" element={<MensFragrances />} />
                    <Route path="/catalog/men/party-wear" element={<MensFragrances />} />
                    <Route path="/catalog/men/premium" element={<MensFragrances />} />
                    <Route path="/catalog/men/islamic" element={<MensFragrances />} />
                    
                    {/* Women's Fragrances */}
                    <Route path="/catalog/women" element={<WomensFragrances />} />
                    <Route path="/catalog/women/daily-wear" element={<WomensFragrances />} />
                    <Route path="/catalog/women/office-wear" element={<WomensFragrances />} />
                    <Route path="/catalog/women/party-wear" element={<WomensFragrances />} />
                    <Route path="/catalog/women/premium" element={<WomensFragrances />} />
                    <Route path="/catalog/women/islamic" element={<WomensFragrances />} />
                    
                    {/* Islamic Items */}
                    <Route path="/catalog/islamic-caps" element={<IslamicCaps />} />
                    <Route path="/catalog/abaya-jibabs" element={<AbayaJibabs />} />
                    <Route path="/catalog/hijabs-scarves" element={<HijabsScarves />} />
                    <Route path="/catalog/niqabs" element={<Niqabs />} />
                    <Route path="/catalog/rings" element={<Rings />} />
                    
                    {/* Prayer Items */}
                    <Route path="/catalog/prayer-mats" element={<PrayerMats />} />
                    <Route path="/catalog/digital-tasbeeh" element={<DigitalTasbeeh />} />
                    <Route path="/catalog/miswaak" element={<Miswaak />} />
                    
                    {/* Admin Routes */}
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/dashboard" element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/products" element={
                      <ProtectedRoute>
                        <AdminProducts />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/orders" element={
                      <ProtectedRoute>
                        <AdminOrders />
                      </ProtectedRoute>
                    } />
                  </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
