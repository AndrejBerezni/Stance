import NextIntl from './next-intl-provider';
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
      <ThemeProvider>{children}</ThemeProvider>
    </NextIntl>
  );
}
