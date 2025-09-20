import { useState, useEffect } from 'react'

const AdminProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data
    const mockProducts = [
      {
        _id: '1',
        title: 'Blue Desert',
        category: 'Men',
        price: 890,
        stock: 50,
        isActive: true
      },
      {
        _id: '2',
        title: 'COFFICCO',
        category: 'Unisex',
        price: 890,
        stock: 30,
        isActive: true
      }
    ]

    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="admin-products">
        <div className="container">
          <div className="loading">Loading products...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-products">
      <div className="container">
        <h1>Manage Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <h3>{product.title}</h3>
              <p>Category: {product.category}</p>
              <p>Price: Rs.{product.price}.00 PKR</p>
              <p>Stock: {product.stock}</p>
              <div className="actions">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-outline">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminProducts