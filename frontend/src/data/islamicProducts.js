// Islamic Shop Product Data Structure

export const fragranceFamilies = [
  'Floral',
  'Woody', 
  'Oriental',
  'Fresh / Citrus',
  'Sweet / Gourmand',
  'Spicy',
  'Aquatic'
];

export const seasons = [
  'Summer',
  'Winter', 
  'All Season'
];

export const fragranceTypes = [
  'Perfumes',
  'Attars / Oils',
  'Eau de Parfum',
  'Eau de Toilette',
  'Body Mists',
  'Deodorants'
];

export const miswaakTypes = [
  'Arak Miswak (peelu)',
  'Olive Miswak (Zaintoon)',
  'Neem Miswak',
  'Drumstick Miswak (Sukhchain)',
  'Moringa Tree Miswak'
];

export const islamicProducts = {
  // Men's Fragrances
  mensFragrances: {
    dailyWear: [
      {
        id: 'mens-daily-1',
        title: 'Oud Al Aswad',
        description: 'Premium black oud for daily wear - subtle and long-lasting',
        price: 450,
        originalPrice: 650,
        category: 'Men',
        subcategory: 'Daily Wear',
        fragranceFamily: 'Woody',
        season: 'All Season',
        type: 'Attars / Oils',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      },
      {
        id: 'mens-daily-2', 
        title: 'Rose Water Attar',
        description: 'Pure rose water attar - gentle and refreshing for daily use',
        price: 280,
        originalPrice: 380,
        category: 'Men',
        subcategory: 'Daily Wear',
        fragranceFamily: 'Floral',
        season: 'Summer',
        type: 'Attars / Oils',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ],
    officeWear: [
      {
        id: 'mens-office-1',
        title: 'Sandalwood Supreme',
        description: 'Professional sandalwood fragrance perfect for office environment',
        price: 520,
        originalPrice: 720,
        category: 'Men',
        subcategory: 'Office Wear',
        fragranceFamily: 'Woody',
        season: 'All Season',
        type: 'Eau de Parfum',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ],
    partyWear: [
      {
        id: 'mens-party-1',
        title: 'Amber Royal',
        description: 'Luxurious amber blend for special occasions and celebrations',
        price: 680,
        originalPrice: 950,
        category: 'Men',
        subcategory: 'Party Wear',
        fragranceFamily: 'Oriental',
        season: 'Winter',
        type: 'Eau de Parfum',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ],
    premium: [
      {
        id: 'mens-premium-1',
        title: 'Black Oud Collection',
        description: 'Exclusive black oud collection - the finest quality available',
        price: 1200,
        originalPrice: 1800,
        category: 'Men',
        subcategory: 'Premium',
        fragranceFamily: 'Woody',
        season: 'All Season',
        type: 'Attars / Oils',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ],
    islamic: [
      {
        id: 'mens-islamic-1',
        title: 'Makkah Attar',
        description: 'Sacred fragrance inspired by the holy city of Makkah',
        price: 350,
        originalPrice: 450,
        category: 'Men',
        subcategory: 'Islamic',
        fragranceFamily: 'Oriental',
        season: 'All Season',
        type: 'Attars / Oils',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ]
  },

  // Women's Fragrances
  womensFragrances: {
    dailyWear: [
      {
        id: 'womens-daily-1',
        title: 'Jasmine Delight',
        description: 'Subtle jasmine fragrance perfect for daily wear',
        price: 320,
        originalPrice: 420,
        category: 'Women',
        subcategory: 'Daily Wear',
        fragranceFamily: 'Floral',
        season: 'Summer',
        type: 'Eau de Toilette',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ],
    officeWear: [
      {
        id: 'womens-office-1',
        title: 'Lavender Breeze',
        description: 'Professional lavender scent for workplace',
        price: 380,
        originalPrice: 480,
        category: 'Women',
        subcategory: 'Office Wear',
        fragranceFamily: 'Fresh / Citrus',
        season: 'All Season',
        type: 'Eau de Toilette',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ],
    partyWear: [
      {
        id: 'womens-party-1',
        title: 'Rose Gold',
        description: 'Elegant rose and gold blend for special occasions',
        price: 580,
        originalPrice: 780,
        category: 'Women',
        subcategory: 'Party Wear',
        fragranceFamily: 'Floral',
        season: 'All Season',
        type: 'Eau de Parfum',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ],
    premium: [
      {
        id: 'womens-premium-1',
        title: 'White Musk Collection',
        description: 'Exclusive white musk collection for the discerning woman',
        price: 950,
        originalPrice: 1350,
        category: 'Women',
        subcategory: 'Premium',
        fragranceFamily: 'Oriental',
        season: 'All Season',
        type: 'Eau de Parfum',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ],
    islamic: [
      {
        id: 'womens-islamic-1',
        title: 'Madinah Rose',
        description: 'Sacred rose fragrance inspired by the blessed city of Madinah',
        price: 420,
        originalPrice: 520,
        category: 'Women',
        subcategory: 'Islamic',
        fragranceFamily: 'Floral',
        season: 'All Season',
        type: 'Attars / Oils',
        images: ['/placeholder-perfume.jpg'],
        inStock: true,
        isIslamic: true
      }
    ]
  },

  // Islamic Items
  islamicCaps: [
    {
      id: 'cap-1',
      title: 'Embroidered Kufi Cap',
      description: 'Traditional embroidered kufi cap in premium cotton',
      price: 45,
      originalPrice: 65,
      category: 'Islamic Items',
      subcategory: 'Islamic Caps',
      images: ['/placeholder-cap.jpg'],
      inStock: true,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy', 'Brown']
    },
    {
      id: 'cap-2',
      title: 'Turkish Style Cap',
      description: 'Elegant Turkish style cap with geometric patterns',
      price: 55,
      originalPrice: 75,
      category: 'Islamic Items',
      subcategory: 'Islamic Caps',
      images: ['/placeholder-cap.jpg'],
      inStock: true,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy', 'Brown']
    }
  ],

  abayaJibabs: [
    {
      id: 'abaya-1',
      title: 'Classic Black Abaya',
      description: 'Elegant classic black abaya with subtle embroidery',
      price: 120,
      originalPrice: 180,
      category: 'Islamic Items',
      subcategory: 'Abaya & Jibabs',
      images: ['/placeholder-abaya.jpg'],
      inStock: true,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Brown', 'Gray']
    }
  ],

  hijabsScarves: [
    {
      id: 'hijab-1',
      title: 'Premium Cotton Hijab',
      description: 'Soft and breathable cotton hijab in various colors',
      price: 25,
      originalPrice: 35,
      category: 'Islamic Items',
      subcategory: 'Hijabs & Scarves',
      images: ['/placeholder-hijab.jpg'],
      inStock: true,
      colors: ['White', 'Black', 'Navy', 'Brown', 'Gray', 'Pink', 'Blue']
    }
  ],

  // Prayer Items
  prayerMats: [
    {
      id: 'prayer-mat-1',
      title: 'Premium Prayer Mat',
      description: 'High-quality prayer mat with compass and soft padding',
      price: 35,
      originalPrice: 50,
      category: 'Prayer Items',
      subcategory: 'Prayer Mats',
      images: ['/placeholder-prayer-mat.jpg'],
      inStock: true,
      colors: ['Green', 'Blue', 'Red', 'Brown']
    }
  ],

  digitalTasbeeh: [
    {
      id: 'tasbeeh-1',
      title: 'Digital Tasbeeh Counter',
      description: 'Electronic tasbeeh counter with LED display and prayer times',
      price: 45,
      originalPrice: 65,
      category: 'Prayer Items',
      subcategory: 'Digital Tasbeeh',
      images: ['/placeholder-tasbeeh.jpg'],
      inStock: true
    }
  ],

  miswaak: [
    {
      id: 'miswaak-arak',
      title: 'Arak Miswaak (Peelu)',
      description: 'Natural Arak tree miswaak - traditional and effective',
      price: 8,
      originalPrice: 12,
      category: 'Prayer Items',
      subcategory: 'Miswaak',
      type: 'Arak Miswak (peelu)',
      images: ['/placeholder-miswaak.jpg'],
      inStock: true
    },
    {
      id: 'miswaak-olive',
      title: 'Olive Miswaak (Zaintoon)',
      description: 'Premium olive tree miswaak - gentle and effective',
      price: 10,
      originalPrice: 15,
      category: 'Prayer Items',
      subcategory: 'Miswaak',
      type: 'Olive Miswak (Zaintoon)',
      images: ['/placeholder-miswaak.jpg'],
      inStock: true
    },
    {
      id: 'miswaak-neem',
      title: 'Neem Miswaak',
      description: 'Neem tree miswaak - natural antibacterial properties',
      price: 7,
      originalPrice: 10,
      category: 'Prayer Items',
      subcategory: 'Miswaak',
      type: 'Neem Miswak',
      images: ['/placeholder-miswaak.jpg'],
      inStock: true
    },
    {
      id: 'miswaak-drumstick',
      title: 'Drumstick Miswaak (Sukhchain)',
      description: 'Drumstick tree miswaak - traditional and effective',
      price: 9,
      originalPrice: 13,
      category: 'Prayer Items',
      subcategory: 'Miswaak',
      type: 'Drumstick Miswak (Sukhchain)',
      images: ['/placeholder-miswaak.jpg'],
      inStock: true
    },
    {
      id: 'miswaak-moringa',
      title: 'Moringa Tree Miswaak',
      description: 'Moringa tree miswaak - rich in nutrients and minerals',
      price: 12,
      originalPrice: 18,
      category: 'Prayer Items',
      subcategory: 'Miswaak',
      type: 'Moringa Tree Miswaak',
      images: ['/placeholder-miswaak.jpg'],
      inStock: true
    }
  ],

  // Silver Jewelry
  rings: [
    {
      id: 'ring-men-1',
      title: 'Men\'s Silver Ring - Islamic Design',
      description: 'Elegant silver ring with Islamic calligraphy design',
      price: 85,
      originalPrice: 120,
      category: 'Islamic Items',
      subcategory: 'Rings (Silver)',
      gender: 'Men',
      images: ['/placeholder-ring.jpg'],
      inStock: true,
      sizes: ['6', '7', '8', '9', '10', '11']
    },
    {
      id: 'ring-women-1',
      title: 'Women\'s Silver Ring - Floral Pattern',
      description: 'Beautiful silver ring with delicate floral pattern',
      price: 75,
      originalPrice: 110,
      category: 'Islamic Items',
      subcategory: 'Rings (Silver)',
      gender: 'Women',
      images: ['/placeholder-ring.jpg'],
      inStock: true,
      sizes: ['5', '6', '7', '8', '9']
    }
  ],

  // Other Items
  qiblaCompass: [
    {
      id: 'qibla-1',
      title: 'Digital Qibla Compass',
      description: 'Accurate digital qibla compass with prayer times',
      price: 65,
      originalPrice: 90,
      category: 'Prayer Items',
      subcategory: 'Qibla Compass',
      images: ['/placeholder-compass.jpg'],
      inStock: true
    }
  ],

  keychains: [
    {
      id: 'keychain-1',
      title: 'Sufianah Keychain - Islamic Design',
      description: 'Premium keychain with Islamic geometric design',
      price: 15,
      originalPrice: 25,
      category: 'Prayer Items',
      subcategory: 'Sufianah Keychains',
      images: ['/placeholder-keychain.jpg'],
      inStock: true
    }
  ]
};

// Helper function to get all products
export const getAllProducts = () => {
  const allProducts = [];
  
  // Add men's fragrances
  Object.values(islamicProducts.mensFragrances).forEach(category => {
    allProducts.push(...category);
  });
  
  // Add women's fragrances
  Object.values(islamicProducts.womensFragrances).forEach(category => {
    allProducts.push(...category);
  });
  
  // Add other categories
  allProducts.push(...islamicProducts.islamicCaps);
  allProducts.push(...islamicProducts.abayaJibabs);
  allProducts.push(...islamicProducts.hijabsScarves);
  allProducts.push(...islamicProducts.prayerMats);
  allProducts.push(...islamicProducts.digitalTasbeeh);
  allProducts.push(...islamicProducts.miswaak);
  allProducts.push(...islamicProducts.rings);
  allProducts.push(...islamicProducts.qiblaCompass);
  allProducts.push(...islamicProducts.keychains);
  
  return allProducts;
};

// Helper function to get products by category
export const getProductsByCategory = (category, subcategory = null) => {
  const allProducts = getAllProducts();
  
  if (subcategory) {
    return allProducts.filter(product => 
      product.category === category && product.subcategory === subcategory
    );
  }
  
  return allProducts.filter(product => product.category === category);
};

// Helper function to get products by fragrance family
export const getProductsByFragranceFamily = (family) => {
  const allProducts = getAllProducts();
  return allProducts.filter(product => product.fragranceFamily === family);
};

// Helper function to get products by season
export const getProductsBySeason = (season) => {
  const allProducts = getAllProducts();
  return allProducts.filter(product => product.season === season);
};

// Helper function to get products by type
export const getProductsByType = (type) => {
  const allProducts = getAllProducts();
  return allProducts.filter(product => product.type === type);
};
