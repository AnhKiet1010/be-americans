import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'vi'];

export default getRequestConfig(
  async ({ locale }: { locale: string }) => {
    if (!locales.includes(locale as string)) {
      notFound();
    }

    return {
      messages: (
        await import(`@/locales/${locale}.json`)
      ).default,
    };
  }
);
