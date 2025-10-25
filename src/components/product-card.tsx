import type { Product } from "../mock-data/types";

interface ProductCardProps {
  product: Product;
  onClose: () => void;
  onShop?: (productId: string) => void;
}

export function ProductCard({ product, onClose, onShop }: ProductCardProps) {
  const handleShopClick = () => {
    onShop?.(product.id);
  };

  return (
    <div
      className="bg-white rounded-t-2xl shadow-2xl overflow-hidden w-full max-w-md mx-auto pointer-events-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative aspect-square bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
          {product.brand}
        </p>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        <p className="text-2xl font-bold text-gray-900 mb-5">
          {product.currency === "USD" ? "$" : product.currency}
          {product.price.toFixed(2)}
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleShopClick}
            className="flex-1 bg-black text-white py-3.5 px-6 rounded-full font-semibold hover:bg-gray-800 active:bg-gray-900 transition-colors"
          >
            Shop Now
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3.5 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
