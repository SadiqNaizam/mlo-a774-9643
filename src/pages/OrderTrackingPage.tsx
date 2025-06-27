import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LiveOrderTracker from '@/components/LiveOrderTracker';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PackageCheck, HelpCircle } from 'lucide-react';

const OrderTrackingPage = () => {
  console.log('OrderTrackingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main order tracker component */}
          <LiveOrderTracker />

          {/* Supplementary information section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Alert for key status updates */}
            <Alert>
              <PackageCheck className="h-4 w-4" />
              <AlertTitle>Order Status Update</AlertTitle>
              <AlertDescription>
                Your order has been confirmed! The restaurant is now preparing your delicious meal. We'll notify you as soon as it's out for delivery.
              </AlertDescription>
            </Alert>
            
            {/* Card for order details and help */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <span>Need Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If there's an issue with your order, or you need to make a change, please contact support.
                </p>
                <Button className="w-full">Contact Support</Button>
                <Button variant="outline" className="w-full">View Order Summary</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderTrackingPage;