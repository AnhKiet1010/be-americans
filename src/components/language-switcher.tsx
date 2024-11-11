'use client';

import { Button } from '@/components/ui/button';
import {
  useRouter,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import React from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const switchLanguage = (newLocale: string) => {
    const cleanedPathname = pathname.replace(
      /^\/(en|vi)/,
      ''
    );
    const newPathname = `/${newLocale}${cleanedPathname}`;

    const params = searchParams.toString();
    const newUrl = params
      ? `${newPathname}?${params}`
      : newPathname;

    router.push(newUrl);
  };

  return (
    <div className="xl:border xl:rounded-md border-gray-300 h-14 xl:max-h-min">
      <Button
        variant="ghost"
        onClick={() => switchLanguage('en')}
        disabled={pathname.startsWith('/en')}
        className="w-1/2 h-full xl:max-h-min xl:max-w-min border-none font-semibold xl:font-medium"
      >
        EN
      </Button>
      <Button
        variant="ghost"
        onClick={() => switchLanguage('vi')}
        disabled={pathname.startsWith('/vi')}
        className="w-1/2 h-full xl:max-h-min xl:max-w-min border-l rounded-none font-semibold xl:font-medium"
      >
        VI
      </Button>
    </div>
  );
}
