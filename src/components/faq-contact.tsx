import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function FaqContact() {
  return (
    <div className="container mx-auto bg-white my-6 rounded-md flex flex-col justify-center items-center p-10 gap-4">
      <div className="flex items-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-12 h-12 border border-white -mx-2 z-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="z-0">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <h3 className="text-xl mt-4">
        Still have questions?
      </h3>
      <p className="text-center text-lg text-gray-500">
        You can visit our FAQ page for more
        answers to your EB-5 visa questions, or
        schedule a call to speak with an expert
        from our team.
      </p>
      <Button size="lg" className="mt-4">
        Schedule a Call
      </Button>
    </div>
  );
}
