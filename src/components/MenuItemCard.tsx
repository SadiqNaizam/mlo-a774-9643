import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PlusCircle } from 'lucide-react';
import { toast } from "sonner";

interface MenuItemCardProps {
  id: string | number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  hasCustomizations?: boolean;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  hasCustomizations = false,
}) => {
  console.log('MenuItemCard loaded for:', name);

  const handleAddToCart = () => {
    toast.success(`${name} has been added to your cart!`);
    console.log(`Added product ${id} to cart with price ${price}.`);
    // In a real app, this would dispatch an action to a global state (e.g., Redux, Zustand)
  };

  const renderActionButton = () => {
    if (hasCustomizations) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Customize {name}</DialogTitle>
              <DialogDescription>
                Make your selections below. Click confirm when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* Placeholder for customization options */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="size-options">Size</Label>
                <RadioGroup defaultValue="medium" id="size-options">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="r1" />
                    <Label htmlFor="r1">Small</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="r2" />
                    <Label htmlFor="r2">Medium (+$2.00)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="r3" />
                    <Label htmlFor="r3">Large (+$4.00)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddToCart}>Confirm & Add to Cart</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }

    return (
      <Button className="w-full" onClick={handleAddToCart}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    );
  };

  return (
    <Card className="w-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageUrl || 'https://via.placeholder.com/400x225'}
            alt={name}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        <CardDescription className="mt-1 text-sm text-muted-foreground h-10 line-clamp-2">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
        <p className="text-xl font-extrabold text-gray-900 dark:text-gray-50">
          ${price.toFixed(2)}
        </p>
        <div className="w-1/2">
            {renderActionButton()}
        </div>
      </CardFooter>
    </Card>
  );
};

export default MenuItemCard;