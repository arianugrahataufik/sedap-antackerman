import ProductCard from "../../components-guest/ProductCard";
import products from "../../data/products.json";

export default function Product() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-poppins">
      <h2 className="text-3xl font-bold mb-8 text-center">Produk Unggulan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((products) => (
          <ProductCard key={products.id} products={products} />
        ))}
      </div>
    </div>
  );
}