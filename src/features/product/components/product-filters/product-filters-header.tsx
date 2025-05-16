import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

export default function ProductFiltersHeader({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const translate = useTranslations('filterAndSort');
  return (
    <div className="flex items-center justify-between border-b-[1px] pb-6 xl:hidden">
      <h2 className="text-xl font-medium">{translate('filter')}</h2>
      <Button variant="ghost" iconOnly onClick={handleClose}>
        <X className="text-ink-600 hover:text-ink-900" />
      </Button>
    </div>
  );
}
