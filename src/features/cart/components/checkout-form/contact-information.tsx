import { useTranslations } from 'next-intl';

import TextInput from '@/components/ui/text-input';

import { CheckoutFormSectionProps } from '.';
import CheckoutFormSectionHeader from './checkout-form-section-header';

export default function ContactInformation({
  formData,
  handleInput,
}: CheckoutFormSectionProps) {
  const translate = useTranslations('checkout');
  return (
    <div className="flex flex-col gap-6">
      <CheckoutFormSectionHeader header={translate('contactInfo')} />
      <TextInput
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onValueChange={(value: string) => handleInput('email', value)}
        clearInput={() => handleInput('email', '')}
        placeholder={translate('emailPlaceholder')}
        label={translate('email')}
      />
    </div>
  );
}
