import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/MenuItemCard';
import OrderCart from '@/components/OrderCart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, Clock, MapPin } from 'lucide-react';

// --- Placeholder Data ---

const restaurantDetails = {
  name: 'Pizzeria del Corso',
  cuisine: 'Italian',
  rating: 4.8,
  deliveryTime: '25-35 min',
  address: '123 Pizza Lane, Foodville',
  imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  logoUrl: 'https://placehold.co/100x100/E8590C/FFFFFF?text=PC',
};

const menuData = {
  'Pizzas': [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic delight with 100% real mozzarella cheese, fresh tomatoes, and basil.',
      price: 12.99,
      imageUrl: 'https://images.unsplash.com/photo-1594007654729-407eadc4eb65?auto=format&fit=crop&q=60&w=800',
      hasCustomizations: true,
    },
    {
      id: 2,
      name: 'Pepperoni Passion',
      description: 'A meat lover\'s dream. Loaded with savory pepperoni and extra cheese.',
      price: 14.99,
      imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=60&w=800',
      hasCustomizations: true,
    },
    {
      id: 3,
      name: 'Veggie Supreme',
      description: 'A garden-fresh pizza with bell peppers, onions, olives, and mushrooms.',
      price: 13.99,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=60&w=800',
      hasCustomizations: false,
    },
  ],
  'Sides': [
    {
      id: 4,
      name: 'Garlic Bread with Cheese',
      description: 'Toasted baguette with garlic butter and melted mozzarella.',
      price: 5.50,
      imageUrl: 'https://images.unsplash.com/photo-1627485786829-37a34455146c?auto=format&fit=crop&q=60&w=800',
      hasCustomizations: false,
    },
    {
      id: 5,
      name: 'Spicy Chicken Wings',
      description: '6 pieces of crispy wings tossed in our signature spicy sauce.',
      price: 8.99,
      imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=60&w=800',
      hasCustomizations: false,
    },
  ],
  'Drinks': [
    {
        id: 6,
        name: 'Coca-Cola',
        description: 'A classic 12 oz can of refreshing Coca-Cola.',
        price: 2.00,
        imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=60&w=800',
        hasCustomizations: false,
    }
  ]
};

const RestaurantMenuPage = () => {
  console.log('RestaurantMenuPage loaded');
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left/Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Restaurant Info */}
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                    <div className="h-64 w-full">
                        <img src={restaurantDetails.imageUrl} alt={`${restaurantDetails.name} banner`} className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <Avatar className="h-20 w-20 border-4 border-background">
                                <AvatarImage src={restaurantDetails.logoUrl} alt={restaurantDetails.name} />
                                <AvatarFallback>{restaurantDetails.name.substring(0,2)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <Badge>{restaurantDetails.cuisine}</Badge>
                                <h1 className="text-3xl font-bold mt-1">{restaurantDetails.name}</h1>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span className="font-semibold">{restaurantDetails.rating}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                <span>{restaurantDetails.deliveryTime}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" />
                                <span>{restaurantDetails.address}</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Menu Section */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Menu</h2>
              <div className="space-y-8">
                {Object.entries(menuData).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold mb-2">{category}</h3>
                    <Separator className="mb-6"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {items.map((item) => (
                        <MenuItemCard
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          description={item.description}
                          price={item.price}
                          imageUrl={item.imageUrl}
                          hasCustomizations={item.hasCustomizations}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right/Sidebar Column */}
          <div className="lg:col-span-1 lg:sticky top-24">
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl">Your Order</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <OrderCart />
                </CardContent>
             </Card>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantMenuPage;