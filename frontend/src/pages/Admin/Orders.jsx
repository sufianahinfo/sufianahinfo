import { useState, useEffect } from 'react'

const AdminOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data
    const mockOrders = [
      {
        _id: 'ORD-001',
        customer: 'Ahmed Ali',
        total: 1780,
        status: 'Processing',
        date: '2024-01-15'
      },
      {
        _id: 'ORD-002',
        customer: 'Fatima Khan',
        total: 2550,
        status: 'Shipped',
        date: '2024-01-14'
      }
    ]

    setTimeout(() => {
      setOrders(mockOrders)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="admin-orders">
        <div className="container">
          <div className="loading">Loading orders...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-orders">
      <div className="container">
        <h1>Manage Orders</h1>
        <div className="orders-grid">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <h3>Order {order._id}</h3>
              <p>Customer: {order.customer}</p>
              <p>Total: Rs.{order.total}.00 PKR</p>
              <p>Status: {order.status}</p>
              <p>Date: {order.date}</p>
              <div className="actions">
                <button className="btn btn-primary">View Details</button>
                <button className="btn btn-outline">Update Status</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminOrders
