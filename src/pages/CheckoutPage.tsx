import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

// Icons
import { Home, Wallet, CreditCard, PackageCheck } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  console.log('CheckoutPage loaded');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // In a real app, this would trigger payment processing and order creation
    // On success, navigate to the tracking page
    console.log('Placing order...');
    navigate('/order-tracking');
  };

  const orderItems = [
    { name: 'Margherita Pizza', price: 14.99, quantity: 1 },
    { name: 'Garlic Bread', price: 5.49, quantity: 1 },
    { name: 'Coke (2L)', price: 3.0, quantity: 2 },
  ];

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = 2.5;
  const taxes = subtotal * 0.08; // 8% tax
  const total = subtotal + deliveryFee + taxes;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Checkout Steps */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5" />
                    Step 1: Delivery Address
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" defaultValue="Alex Johnson" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="123 Main St" defaultValue="456 Market Street" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Anytown" defaultValue="Metropolis" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input id="postal-code" placeholder="12345" defaultValue="54321" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Wallet className="h-5 w-5" />
                    Step 2: Payment Method
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  <RadioGroup defaultValue="card" className="space-y-4">
                    <Label
                      htmlFor="card"
                      className="flex items-center space-x-3 rounded-md border p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground"
                    >
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="h-5 w-5" />
                      <span>Credit or Debit Card</span>
                    </Label>
                    <Label
                      htmlFor="paypal"
                      className="flex items-center space-x-3 rounded-md border p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground"
                    >
                      <RadioGroupItem value="paypal" id="paypal" />
                      <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.png" alt="PayPal" className="h-6" />
                      <span>PayPal</span>
                    </Label>
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Review your items before placing the order.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {orderItems.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{item.name} (x{item.quantity})</span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full" onClick={handlePlaceOrder}>
                  <PackageCheck className="mr-2 h-5 w-5" />
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;