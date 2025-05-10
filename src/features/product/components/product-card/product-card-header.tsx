import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ProductCardHeaderProps {
  displayedColor: string;
  name: string;
  href: string;
}

export default function ProductCardHeader({
  displayedColor,
  name,
  href,
}: ProductCardHeaderProps) {
  const translate = useTranslations('colors');
  return (
    <Link href={href} className="group">
      <h4>
        <span className="capitalize block text-xs text-ink-600">
          {translate(displayedColor)}
        </span>
        <span className="font-medium text-lg group-hover:underline">
          {name}
        </span>
      </h4>
    </Link>
  );
}
