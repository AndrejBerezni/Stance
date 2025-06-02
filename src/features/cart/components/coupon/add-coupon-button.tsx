import { TicketPercent } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

interface AddCouponButtonProps {
  addFirstCoupon: () => void;
}

export default function AddCouponButton({
  addFirstCoupon,
}: AddCouponButtonProps) {
  const translate = useTranslations('cart');

  return (
    <Button
      variant="link"
      size="md"
      className="self-end max-[392px]:text-xs"
      onClick={addFirstCoupon}
    >
      <TicketPercent className="max-[392px]:h-4" />
      {translate('addCoupon')}
    </Button>
  );
}
