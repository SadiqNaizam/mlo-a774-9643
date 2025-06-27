import React, { useState, useEffect } from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

// Icons
import { SlidersHorizontal } from 'lucide-react';

// Mock Data for Restaurants
const mockRestaurants = [
  {
    slug: 'pizza-palace',
    name: 'Pizza Palace',
    imageUrl: 'https://placehold.co/600x400/f44336/ffffff?text=Pizza',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: 25,
  },
  {
    slug: 'sushi-spot',
    name: 'The Sushi Spot',
    imageUrl: 'https://placehold.co/600x400/00bcd4/ffffff?text=Sushi',
    cuisine: 'Japanese',
    rating: 4.8,
    deliveryTime: 35,
  },
  {
    slug: 'burger-barn',
    name: 'Burger Barn',
    imageUrl: 'https://placehold.co/600x400/ff9800/ffffff?text=Burgers',
    cuisine: 'American',
    rating: 4.2,
    deliveryTime: 20,
  },
  {
    slug: 'taco-town',
    name: 'Taco Town',
    imageUrl: 'https://placehold.co/600x400/4caf50/ffffff?text=Tacos',
    cuisine: 'Mexican',
    rating: 4.6,
    deliveryTime: 30,
  },
  {
    slug: 'veggie-delight',
    name: 'Veggie Delight',
    imageUrl: 'https://placehold.co/600x400/8bc34a/ffffff?text=Vegan',
    cuisine: 'Vegan',
    rating: 4.9,
    deliveryTime: 40,
  },
  {
    slug: 'pho-king',
    name: 'Pho King',
    imageUrl: 'https://placehold.co/600x400/673ab7/ffffff?text=Pho',
    cuisine: 'Vietnamese',
    rating: 4.7,
    deliveryTime: 35,
  },
  {
    slug: 'curry-house',
    name: 'Curry House',
    imageUrl: 'https://placehold.co/600x400/ffc107/ffffff?text=Curry',
    cuisine: 'Indian',
    rating: 4.4,
    deliveryTime: 45,
  },
  {
    slug: 'bbq-pit',
    name: 'The BBQ Pit',
    imageUrl: 'https://placehold.co/600x400/795548/ffffff?text=BBQ',
    cuisine: 'American',
    rating: 4.3,
    deliveryTime: 50,
  },
];

const FilterSidebar = () => (
  <Card className="p-6">
    <h3 className="text-xl font-bold mb-4">Filters</h3>
    <div className="space-y-6">
      <div>
        <Label className="text-base font-semibold">Sort By</Label>
        <Select defaultValue="rating">
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rating</SelectItem>
            <SelectItem value="delivery_time">Fastest Delivery</SelectItem>
            <SelectItem value="recommended">Recommended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div>
        <h4 className="text-base font-semibold mb-2">Rating</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="rating-4.5" />
            <Label htmlFor="rating-4.5">4.5 Stars & Up</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="rating-4.0" />
            <Label htmlFor="rating-4.0">4.0 Stars & Up</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="rating-3.5" />
            <Label htmlFor="rating-3.5">3.5 Stars & Up</Label>
          </div>
        </div>
      </div>
      
      <Separator />

      <div>
        <h4 className="text-base font-semibold mb-2">Dietary</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="diet-vegetarian" />
            <Label htmlFor="diet-vegetarian">Vegetarian</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="diet-vegan" />
            <Label htmlFor="diet-vegan">Vegan</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="diet-gluten-free" />
            <Label htmlFor="diet-gluten-free">Gluten-Free</Label>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

const RestaurantListingPage = () => {
  console.log('RestaurantListingPage loaded');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50/50">
        <div className="container py-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Restaurants</h1>
              <p className="text-muted-foreground">Find your next meal from our curated list of restaurants.</p>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-full md:w-1/4 lg:w-1/5">
              <FilterSidebar />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {isLoading
                  ? Array.from({ length: 9 }).map((_, index) => (
                      <div key={index} className="space-y-4">
                        <Skeleton className="h-48 w-full rounded-lg" />
                        <div className="space-y-2">
                          <Skeleton className="h-6 w-3/4" />
                          <Skeleton className="h-4 w-1/2" />
                        </div>
                      </div>
                    ))
                  : mockRestaurants.map((restaurant) => (
                      <RestaurantCard key={restaurant.slug} {...restaurant} />
                    ))}
              </div>

              {/* Pagination */}
              {!isLoading && (
                <div className="mt-12">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantListingPage;