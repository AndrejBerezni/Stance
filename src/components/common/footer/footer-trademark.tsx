import { useTranslations } from 'next-intl';

export default function FooterTrademark() {
  const translate = useTranslations('footer');
  return (
    <p className="text-ink-500 flex-1">
      © {new Date().getFullYear()} Stance, Inc. {translate('allRights')}
    </p>
  );
}
