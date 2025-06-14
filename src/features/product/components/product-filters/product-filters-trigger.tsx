import { Funnel } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import useIsDesktop from '@/hooks/useIsDesktop';

interface ProductFiltersTriggerProps {
  handleOpen: () => void;
  isOpen: boolean;
}

export default function ProductFiltersTrigger({
  handleOpen,
  isOpen,
}: ProductFiltersTriggerProps) {
  const translate = useTranslations('filterAndSort');
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return (
      <Button
        variant="secondary"
        size="sm"
        className="max-h-full gap-1.5 text-xs sm:text-sm xl:hidden"
        onClick={handleOpen}
        aria-expanded={!isDesktop && isOpen}
        aria-controls="filters"
      >
        <Funnel size={14} />
        {translate('filter')}
      </Button>
    );
  }
}
