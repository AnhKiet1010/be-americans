import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

export default function ReadMore({
  text,
  maxLength = 100,
}) {
  const [isExpanded, setIsExpanded] =
    useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="text-lg text-gray-600">
        {isExpanded
          ? text
          : `${text.slice(0, maxLength)}...`}
      </p>
      <Button
        variant="link"
        onClick={toggleReadMore}
        className="text-md font-semibold mt-10"
      >
        {isExpanded ? (
          <ChevronUp size={32} />
        ) : (
          <ChevronRight size={32} />
        )}

        {isExpanded ? 'Read Less' : 'Read More'}
      </Button>
    </div>
  );
}
