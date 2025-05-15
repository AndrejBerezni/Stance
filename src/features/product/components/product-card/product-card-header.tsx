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
        <span className="text-ink-600 block text-xs capitalize">
          {translate(displayedColor)}
        </span>
        <span className="text-lg font-medium group-hover:underline">
          {name}
        </span>
      </h4>
    </Link>
  );
}
