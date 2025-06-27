import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, Clock } from 'lucide-react';

interface RestaurantCardProps {
  slug: string;
  name: string;
  imageUrl: string;
  cuisine: string;
  rating: number;
  deliveryTime: number; // in minutes
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  slug,
  name,
  imageUrl,
  cuisine,
  rating,
  deliveryTime,
}) => {
  console.log('RestaurantCard loaded for:', name);

  return (
    <Link to="/restaurant-menu" aria-label={`View menu for ${name}`} className="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <Card className="w-full overflow-hidden transition-all duration-300 group-hover:shadow-xl border">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl}
              alt={`Photo of ${name}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-bold tracking-tight">{name}</h3>
            <Badge variant="outline" className="flex-shrink-0">{cuisine}</Badge>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime} min</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;