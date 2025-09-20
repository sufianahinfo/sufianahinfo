import { useState, useEffect } from 'react'

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    lowStockProducts: 0
  })
  const [recentOrders, setRecentOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data - will be replaced with API calls
    setTimeout(() => {
      setStats({
        totalProducts: 8,
        totalOrders: 24,
        totalRevenue: 45600,
        lowStockProducts: 2
      })
      
      setRecentOrders([
        { id: 'ORD-001', customer: 'Ahmed Ali', total: 1780, status: 'Processing', date: '2024-01-15' },
        { id: 'ORD-002', customer: 'Fatima Khan', total: 2550, status: 'Shipped', date: '2024-01-14' },
        { id: 'ORD-003', customer: 'Hassan Ahmed', total: 890, status: 'Delivered', date: '2024-01-13' },
        { id: 'ORD-004', customer: 'Ayesha Malik', total: 3560, status: 'Processing', date: '2024-01-12' }
      ])
      
      setLoading(false)
    }, 1000)
  }, [])

  const formatPrice = (price) => {
    return `Rs.${price.toLocaleString()}.00 PKR`
  }

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="container">
          <div className="loading">Loading dashboard...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome back! Here's what's happening with your store.</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <div className="stat-content">
              <h3>Total Products</h3>
              <p className="stat-number">{stats.totalProducts}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <div className="stat-content">
              <h3>Total Orders</h3>
              <p className="stat-number">{stats.totalOrders}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div className="stat-content">
              <h3>Total Revenue</h3>
              <p className="stat-number">{formatPrice(stats.totalRevenue)}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"></path>
                <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"></path>
              </svg>
            </div>
            <div className="stat-content">
              <h3>Low Stock</h3>
              <p className="stat-number">{stats.lowStockProducts}</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Orders</h2>
            <a href="/admin/orders" className="view-all-link">View All</a>
          </div>
          
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{formatPrice(order.total)}</td>
                    <td>
                      <span className={`status-badge status-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <a href="/admin/products" className="action-card">
              <div className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <div className="action-content">
                <h3>Manage Products</h3>
                <p>Add, edit, or remove products</p>
              </div>
            </a>

            <a href="/admin/orders" className="action-card">
              <div className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <div className="action-content">
                <h3>View Orders</h3>
                <p>Process and track orders</p>
              </div>
            </a>

            <a href="/admin/products/new" className="action-card">
              <div className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div className="action-content">
                <h3>Add New Product</h3>
                <p>Create a new fragrance</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .admin-dashboard {
          padding: 2rem 0;
          min-height: 100vh;
          background-color: var(--gray-100);
        }

        .dashboard-header {
          margin-bottom: 2rem;
        }

        .dashboard-header h1 {
          color: var(--gray-800);
          margin-bottom: 0.5rem;
        }

        .dashboard-header p {
          color: var(--gray-600);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background-color: var(--white);
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          background-color: var(--primary-gold);
          color: var(--white);
          padding: 1rem;
          border-radius: 0.5rem;
          flex-shrink: 0;
        }

        .stat-content h3 {
          color: var(--gray-600);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-number {
          color: var(--gray-800);
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        }

        .dashboard-section {
          background-color: var(--white);
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-header h2 {
          color: var(--gray-800);
          margin: 0;
        }

        .view-all-link {
          color: var(--primary-gold);
          text-decoration: none;
          font-weight: 500;
        }

        .view-all-link:hover {
          color: var(--dark-gold);
        }

        .orders-table {
          overflow-x: auto;
        }

        .orders-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .orders-table th,
        .orders-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid var(--gray-200);
        }

        .orders-table th {
          background-color: var(--gray-100);
          color: var(--gray-700);
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .orders-table td {
          color: var(--gray-800);
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-processing {
          background-color: #fef3c7;
          color: #92400e;
        }

        .status-shipped {
          background-color: #dbeafe;
          color: #1e40af;
        }

        .status-delivered {
          background-color: #d1fae5;
          color: #065f46;
        }

        .quick-actions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .action-card {
          background-color: var(--gray-100);
          padding: 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          color: inherit;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .action-card:hover {
          background-color: var(--primary-gold);
          color: var(--white);
          transform: translateY(-2px);
        }

        .action-icon {
          background-color: var(--white);
          color: var(--primary-gold);
          padding: 0.75rem;
          border-radius: 0.5rem;
          flex-shrink: 0;
        }

        .action-card:hover .action-icon {
          background-color: var(--white);
          color: var(--primary-gold);
        }

        .action-content h3 {
          color: inherit;
          margin-bottom: 0.25rem;
        }

        .action-content p {
          color: inherit;
          opacity: 0.8;
          font-size: 0.875rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .quick-actions {
            grid-template-columns: 1fr;
          }

          .orders-table {
            font-size: 0.875rem;
          }

          .orders-table th,
          .orders-table td {
            padding: 0.75rem 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AdminDashboard
