import type { MenuItem } from '../context/CartContext';

export const menuData: MenuItem[] = [
  // Makanan Berat
  {
    id: 1,
    name: 'Nasi Gudeg Yogya',
    price: 15000,
    description: 'Nasi gudeg khas Yogyakarta dengan ayam, telur, dan sambal krecek yang autentik',
    category: 'makanan-berat',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop&crop=center',
    emoji: '🍛'
  },
  {
    id: 2,
    name: 'Soto Ayam Lamongan',
    price: 12000,
    description: 'Soto ayam hangat dengan bumbu rempah pilihan, dilengkapi kerupuk dan sambal',
    category: 'makanan-berat',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&h=400&fit=crop&crop=center',
    emoji: '🍲'
  },
  {
    id: 3,
    name: 'Nasi Pecel Madiun',
    price: 10000,
    description: 'Nasi dengan sayuran rebus dan sambal pecel khas Madiun yang pedas gurih',
    category: 'makanan-berat',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=400&fit=crop&crop=center',
    emoji: '🍚'
  },
  {
    id: 4,
    name: 'Rawon Surabaya',
    price: 18000,
    description: 'Rawon daging sapi dengan kuah hitam khas Surabaya, disajikan dengan nasi putih',
    category: 'makanan-berat',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop&crop=center',
    emoji: '🍜'
  },
  {
    id: 5,
    name: 'Nasi Liwet Solo',
    price: 14000,
    description: 'Nasi liwet gurih dengan lauk ayam suwir, telur, dan sayuran',
    category: 'makanan-berat',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=400&fit=crop&crop=center',
    emoji: '🍛'
  },
  {
    id: 6,
    name: 'Gado-Gado Jakarta',
    price: 12000,
    description: 'Sayuran segar dengan bumbu kacang yang lezat, dilengkapi kerupuk dan lontong',
    category: 'makanan-berat',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop&crop=center',
    emoji: '🥗'
  },
  {
    id: 7,
    name: 'Ayam Penyet',
    price: 16000,
    description: 'Ayam goreng yang dipenyet dengan sambal terasi pedas dan lalapan segar',
    category: 'makanan-berat',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop&crop=center',
    emoji: '🍗'
  },
  {
    id: 8,
    name: 'Nasi Padang',
    price: 20000,
    description: 'Nasi putih dengan rendang, ayam gulai, dan sayur nangka khas Padang',
    category: 'makanan-berat',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&h=400&fit=crop&crop=center',
    emoji: '🍛'
  },

  // Makanan Ringan
  {
    id: 9,
    name: 'Pisang Goreng',
    price: 5000,
    description: 'Pisang goreng crispy dengan taburan gula halus dan keju parut',
    category: 'makanan-ringan',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=400&fit=crop&crop=center',
    emoji: '🍌'
  },
  {
    id: 10,
    name: 'Tahu Isi',
    price: 4000,
    description: 'Tahu goreng isi sayuran dengan saus kacang dan kerupuk',
    category: 'makanan-ringan',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=400&fit=crop&crop=center',
    emoji: '🧈'
  },
  {
    id: 11,
    name: 'Bakwan Jagung',
    price: 3000,
    description: 'Bakwan jagung crispy dengan bumbu rempah yang gurih',
    category: 'makanan-ringan',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=400&fit=crop&crop=center',
    emoji: '🌽'
  },
  {
    id: 12,
    name: 'Tempe Mendoan',
    price: 6000,
    description: 'Tempe goreng tepung khas Banyumas dengan sambal kecap',
    category: 'makanan-ringan',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=400&fit=crop&crop=center',
    emoji: '🟤'
  },
  {
    id: 13,
    name: 'Kerupuk Udang',
    price: 8000,
    description: 'Kerupuk udang segar yang renyah, cocok untuk camilan',
    category: 'makanan-ringan',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=400&fit=crop&crop=center',
    emoji: '🦐'
  },
  {
    id: 14,
    name: 'Lumpia Semarang',
    price: 7000,
    description: 'Lumpia basah isi rebung dan telur dengan kuah kaldu hangat',
    category: 'makanan-ringan',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=500&h=400&fit=crop&crop=center',
    emoji: '🌯'
  },
  {
    id: 15,
    name: 'Martabak Mini',
    price: 10000,
    description: 'Martabak manis mini dengan topping coklat, keju, dan kacang',
    category: 'makanan-ringan',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop&crop=center',
    emoji: '🥞'
  },
  {
    id: 16,
    name: 'Klepon',
    price: 5000,
    description: 'Klepon tradisional dengan isian gula merah dan taburan kelapa parut',
    category: 'makanan-ringan',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop&crop=center',
    emoji: '🍡'
  },

  // Minuman
  {
    id: 17,
    name: 'Es Teh Manis',
    price: 3000,
    description: 'Minuman segar es teh manis yang menyegarkan',
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=400&fit=crop&crop=center',
    emoji: '🧊'
  },
  {
    id: 18,
    name: 'Kopi Tubruk',
    price: 5000,
    description: 'Kopi tubruk tradisional yang nikmat dengan gula batu',
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop&crop=center',
    emoji: '☕'
  },
  {
    id: 19,
    name: 'Es Jeruk Nipis',
    price: 4000,
    description: 'Es jeruk nipis segar dengan gula aren dan sedikit garam',
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&h=400&fit=crop&crop=center',
    emoji: '🍋'
  },
  {
    id: 20,
    name: 'Wedang Jahe',
    price: 6000,
    description: 'Minuman hangat jahe dengan gula merah dan serai',
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&h=400&fit=crop&crop=center',
    emoji: '🫖'
  },
  {
    id: 21,
    name: 'Es Cendol',
    price: 8000,
    description: 'Es cendol dengan santan, gula merah, dan es serut',
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=400&fit=crop&crop=center',
    emoji: '🍧'
  },
  {
    id: 22,
    name: 'Jus Alpukat',
    price: 10000,
    description: 'Jus alpukat segar dengan susu kental manis dan es batu',
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500&h=400&fit=crop&crop=center',
    emoji: '🥑'
  },
  {
    id: 23,
    name: 'Es Kelapa Muda',
    price: 7000,
    description: 'Air kelapa muda segar langsung dari buahnya',
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=500&h=400&fit=crop&crop=center',
    emoji: '🥥'
  },
  {
    id: 24,
    name: 'Bandrek',
    price: 6000,
    description: 'Minuman hangat bandrek dengan jahe, gula merah, dan santan',
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=400&fit=crop&crop=center',
    emoji: '🍵'
  }
];

export const getMenuByCategory = (category: string) => {
  if (category === 'semua') return menuData;
  return menuData.filter(item => item.category === category);
};

export const searchMenu = (query: string) => {
  return menuData.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
};