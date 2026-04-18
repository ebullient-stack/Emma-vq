'use client';

import Image from 'next/image';
import { Star, MapPin, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  supplier: string;
  image: string;
  origin: string;
  quantity: number;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product?: Product;
  id?: string;
  name?: string;
  category?: string;
  price?: number;
  currency?: string;
  supplier?: string;
  image?: string;
  origin?: string;
  quantity?: number;
  rating?: number;
  reviews?: number;
}

export function ProductCard(props: ProductCardProps) {
  const {
    id = '',
    name = '',
    category = '',
    price = 0,
    currency = 'USD/unit',
    supplier = '',
    image = '',
    origin = '',
    quantity = 0,
    rating = 0,
    reviews = 0,
  } = props.product || props;
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
            {category}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 flex-1">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span>{origin}</span>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? 'fill-accent text-accent'
                  : 'text-muted'
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({reviews} reviews)
          </span>
        </div>
        <div className="bg-muted p-2 rounded mb-3">
          <div className="text-2xl font-bold text-primary">
            ${price}
            <span className="text-xs font-normal text-muted-foreground ml-1">
              /{currency && currency.includes('/') ? currency.split('/')[1] : 'unit'}
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          <span className="font-semibold">Supplier:</span> {supplier}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Zap className="w-3 h-3" />
          <span>{quantity.toLocaleString()} units available</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0 gap-2">
        <Button variant="outline" className="flex-1">
          Contact
        </Button>
        <Button className="flex-1">Buy Now</Button>
      </CardFooter>
    </Card>
  );
}
