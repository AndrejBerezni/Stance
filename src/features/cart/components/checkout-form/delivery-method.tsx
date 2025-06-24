import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { formatPrice } from '@/features/product/utils';
import { cn } from '@/lib/utils/cn';

import { CheckoutFormSectionProps } from '.';
import CheckoutFormSectionHeader from './checkout-form-section-header';

interface DeliveryMethodOptionProps {
  selected: boolean;
  handleSelect: () => void;
  name: string;
  duration: string;
  price?: number;
}

function DeliveryMethodOption({
  selected,
  handleSelect,
  name,
  duration,
  price,
}: DeliveryMethodOptionProps) {
  const translate = useTranslations('checkout');
  return (
    <button
      type="button"
      className={cn(
        'relative flex h-30 w-full flex-col justify-between rounded-xl border-2 p-4 text-start hover:cursor-pointer',
        {
          'border-primary': selected,
        }
      )}
      onClick={handleSelect}
    >
      {selected && (
        <div className="bg-primary text-background absolute top-4 right-4 flex aspect-square h-6 w-6 items-center justify-center rounded-[100%]">
          <Check size={16} />
        </div>
      )}
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-ink-600 text-sm">
          {duration} {translate('businessDays')}
        </p>
      </div>
      <p className="font-medium">
        {price ? formatPrice(price) : translate('free')}
      </p>
    </button>
  );
}

export default function DeliveryMethod({
  formData,
  handleInput,
}: CheckoutFormSectionProps) {
  const translate = useTranslations('checkout');

  const options = [
    {
      id: 'standard-delivery',
      selected: formData.shipping === 'standard',
      handleSelect: () => handleInput('shipping', 'standard'),
      name: translate('standard'),
      duration: '4-10',
    },
    {
      id: 'expresss-delivery',
      selected: formData.shipping === 'express',
      handleSelect: () => handleInput('shipping', 'express'),
      name: translate('express'),
      duration: '2-5',
      price: 15,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <CheckoutFormSectionHeader header={translate('deliveryMethod')} />
      <div className="flex flex-col gap-4 md:flex-row">
        {options.map((option) => (
          <DeliveryMethodOption
            key={option.id}
            selected={option.selected}
            handleSelect={option.handleSelect}
            name={option.name}
            duration={option.duration}
            price={option.price}
          />
        ))}
      </div>
    </div>
  );
}
