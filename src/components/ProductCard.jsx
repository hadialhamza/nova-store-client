import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-card flex flex-col h-full">
      <div className="aspect-video relative bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg line-clamp-1">{product.name}</h3>
          <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
            {product.category}
          </span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-primary font-bold text-lg">${product.price}</p>
          <Link
            href={`/items/${product._id}`}
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
