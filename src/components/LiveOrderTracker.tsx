import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ChefHat, Bike, Home, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the structure for each stage of the order process
interface OrderStage {
  name: string;
  icon: React.ElementType;
}

// An array of all possible order stages
const stages: OrderStage[] = [
  { name: 'Order Confirmed', icon: CheckCircle2 },
  { name: 'Preparing Food', icon: ChefHat },
  { name: 'Out for Delivery', icon: Bike },
  { name: 'Delivered', icon: Home },
];

const LiveOrderTracker: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  console.log('LiveOrderTracker loaded');

  // Simulate live order progress
  useEffect(() => {
    if (currentStageIndex < stages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStageIndex(prevIndex => prevIndex + 1);
      }, 3000); // Advance to the next stage every 3 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [currentStageIndex]);

  const progressPercentage = ((currentStageIndex + 1) / stages.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Track Your Order</CardTitle>
        <CardDescription>Order #QB12345 - Estimated Arrival: 7:30 PM</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {/* Stepper UI */}
        <div className="flex justify-between items-start mb-4 relative">
          {/* Dashed line connecting steps */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 transform -translate-y-1/2" style={{top: '20px'}}>
             <div className="h-full bg-green-500" style={{ width: `${(currentStageIndex / (stages.length - 1)) * 100}%`, transition: 'width 0.5s ease-in-out' }}></div>
          </div>
          
          {stages.map((stage, index) => {
            const isActive = index === currentStageIndex;
            const isCompleted = index < currentStageIndex;
            const Icon = stage.icon;

            return (
              <div key={stage.name} className="flex flex-col items-center z-10 w-1/4">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    isCompleted ? "bg-green-500 border-green-500 text-white" : "",
                    isActive ? "bg-green-100 border-green-500 text-green-600 scale-110" : "bg-white border-gray-300",
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <p
                  className={cn(
                    "text-center text-sm mt-2 transition-colors duration-300",
                    isActive || isCompleted ? "font-semibold text-gray-800" : "text-gray-500"
                  )}
                >
                  {stage.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Overall Progress Bar */}
        <div className="mt-8">
            <Progress value={progressPercentage} className="w-full h-2" />
            <p className="text-right text-sm text-gray-600 mt-1">
                {currentStageIndex < stages.length - 1 
                    ? `Status: ${stages[currentStageIndex].name}`
                    : "Your order has been delivered!"
                }
            </p>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center h-64">
          <MapPin className="w-12 h-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700">Live Delivery Map</h3>
          <p className="text-gray-500">Real-time location will be available once the driver is on the way.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveOrderTracker;