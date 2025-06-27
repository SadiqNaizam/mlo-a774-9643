import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

// Icons
import { Search, Pizza, Hamburger, Fish, Cake, Soup } from 'lucide-react';

const foodCategories = [
  { name: 'Pizza', icon: <Pizza className="h-8 w-8" />, slug: 'pizza' },
  { name: 'Burgers', icon: <Hamburger className="h-8 w-8" />, slug: 'burgers' },
  { name: 'Sushi', icon: <Fish className="h-8 w-8" />, slug: 'sushi' },
  { name: 'Desserts', icon: <Cake className="h-8 w-8" />, slug: 'desserts' },
  { name: 'Soups', icon: <Soup className="h-8 w-8" />, slug: 'soups' },
];

const featuredRestaurants = [
  {
    slug: 'the-pizza-place',
    name: 'The Pizza Place',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=870&auto=format&fit=crop',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: 25,
  },
  {
    slug: 'burger-barn',
    name: 'Burger Barn',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop',
    cuisine: 'American',
    rating: 4.7,
    deliveryTime: 20,
  },
  {
    slug: 'sushi-station',
    name: 'Sushi Station',
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=774&auto=format&fit=crop',
    cuisine: 'Japanese',
    rating: 4.8,
    deliveryTime: 35,
  },
  {
    slug: 'sweet-sensations',
    name: 'Sweet Sensations',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop',
    cuisine: 'Desserts',
    rating: 4.9,
    deliveryTime: 15,
  },
];

const Homepage = () => {
  console.log('Homepage loaded');
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/restaurant-listing?search=${searchQuery.trim()}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 md:py-32 bg-secondary">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')"}}></div>
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Your next meal, <span className="text-primary">delivered.</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Discover and order from the best local restaurants, all in one place.
            </p>
            <form
              onSubmit={handleSearchSubmit}
              className="mt-8 max-w-xl mx-auto flex gap-2"
            >
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you craving today?"
                className="h-12 text-base"
              />
              <Button type="submit" size="lg" className="h-12">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </form>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 sm:py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center">
              Browse by Category
            </h2>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {foodCategories.map((category) => (
                <Link
                  key={category.name}
                  to={`/restaurant-listing?category=${category.slug}`}
                  className="block group"
                >
                  <Card className="flex flex-col items-center justify-center p-6 aspect-square transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-0 flex flex-col items-center gap-3">
                      {category.icon}
                      <span className="font-semibold text-center">{category.name}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Restaurants Section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center">
              Popular Near You
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.slug} {...restaurant} />
              ))}
            </div>
             <div className="text-center mt-12">
                <Link to="/restaurant-listing">
                    <Button size="lg" variant="outline">
                        View All Restaurants
                    </Button>
                </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;