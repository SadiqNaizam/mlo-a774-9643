import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';

// Define the structure of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Mock initial cart data for demonstration
const initialCartItems: CartItem[] = [
  { id: 1, name: 'Margherita Pizza', price: 12.99, quantity: 1, image: 'https://placehold.co/100x100/FFC107/000000?text=Pizza' },
  { id: 2, name: 'Garlic Bread', price: 4.50, quantity: 2, image: 'https://placehold.co/100x100/FF9800/000000?text=Bread' },
];

const OrderCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [subtotal, setSubtotal] = useState(0);

  console.log('OrderCart loaded');

  // Recalculate subtotal whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [cartItems]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col h-full bg-white p-4 w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4">Your Order</h3>
      <Separator />

      {cartItems.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center text-gray-500">
          <ShoppingCart className="h-16 w-16 mb-4" />
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p>Add items from a restaurant's menu to get started.</p>
        </div>
      ) : (
        <>
          <ScrollArea className="flex-grow my-4 pr-4">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                  <div className="flex-grow">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.id, -1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.id, 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                   <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500" onClick={() => handleRemoveItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="mt-auto pt-4 border-t">
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Button asChild className="w-full text-lg py-6">
              <Link to="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderCart;