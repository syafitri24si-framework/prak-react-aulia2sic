const products = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Produk ${i + 1}`,
  code: `PRD${1000 + i}`,
  category: ["Elektronik", "Fashion", "Makanan", "Minuman", "Alat Rumah Tangga"][i % 5],
  brand: ["Brand A", "Brand B", "Brand C", "Brand D"][i % 4],
  price: Math.floor(Math.random() * 500000) + 50000,
  stock: Math.floor(Math.random() * 100),
}));

export default products;