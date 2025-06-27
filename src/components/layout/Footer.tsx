import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand and Socials */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-foreground">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">QuickBites</span>
            </Link>
            <p className="text-sm">
              Your favorite food, delivered fast.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Company</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
              <Link to="/press" className="hover:text-primary transition-colors">Press</Link>
            </nav>
          </div>

          {/* Support Links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Support</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link>
              <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              <Link to="/restaurants" className="hover:text-primary transition-colors">For Restaurants</Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">
            &copy; {currentYear} QuickBites Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;