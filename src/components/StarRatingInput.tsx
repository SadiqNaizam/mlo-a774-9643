import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingInputProps {
  /**
   * The total number of stars to display.
   * @default 5
   */
  count?: number;
  /**
   * The current selected rating value.
   */
  value: number;
  /**
   * Callback function that is fired when a star is clicked.
   */
  onChange: (rating: number) => void;
  /**
   * The size of the star icons.
   * @default 24
   */
  size?: number;
  /**
   * Optional additional class names for the container.
   */
  className?: string;
}

const StarRatingInput: React.FC<StarRatingInputProps> = ({
  count = 5,
  value = 0,
  onChange,
  size = 24,
  className,
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  console.log('StarRatingInput loaded');

  const handleMouseEnter = (rating: number) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (rating: number) => {
    onChange(rating);
  };

  const stars = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className={`flex items-center gap-1 ${className || ''}`}>
      {stars.map((ratingValue) => {
        const isFilled = ratingValue <= (hoverRating || value);

        return (
          <button
            key={ratingValue}
            type="button"
            aria-label={`Rate ${ratingValue} out of ${count} stars`}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(ratingValue)}
            className="p-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Star
              size={size}
              className={`transition-colors duration-200 ${
                isFilled ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill={isFilled ? 'currentColor' : 'none'}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRatingInput;