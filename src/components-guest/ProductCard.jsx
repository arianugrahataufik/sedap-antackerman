export default function ProductCard({ products }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition font-poppins">
      <img src={products.image} alt={products.name} className="w-full h-80 object-cover rounded-xl" />
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{products.name}</h3>
      <p className="text-green-600 font-bold mt-1">Rp{products.price.toLocaleString()}</p>
    </div>
  );
}