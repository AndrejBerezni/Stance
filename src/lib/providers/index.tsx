import NextIntl from './next-intl-provider';
import QueryProvider from './query-provider';
import ThemeProvider from './theme-provider';

interface ProvidersWrapperProps {
  children: React.ReactNode;
  locale: string;
}

export default function ProvidersWrapper({
  children,
  locale,
}: ProvidersWrapperProps) {
  return (
    <NextIntl locale={locale}>
      <ThemeProvider>
        <QueryProvider>{children}</QueryProvider>
      </ThemeProvider>
    </NextIntl>
  );
}
