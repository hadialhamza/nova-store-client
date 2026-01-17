import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 group ring-1 ring-border/50">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          <Badge
            variant="secondary"
            className="backdrop-blur-md bg-white/80 dark:bg-black/60 shadow-sm border-0"
          >
            {product.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 pt-1 flex-1"></CardContent>

      <CardFooter className="p-4 flex items-center justify-between border-t bg-muted/20">
        <p className="text-xl font-bold text-primary">${product.price}</p>
        <Link href={`/items/${product._id}`}>
          <Button
            size="sm"
            variant="default"
            className="shadow-lg shadow-primary/20"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
