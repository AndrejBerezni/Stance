import { useTranslations } from 'next-intl';

import TextInput from '@/components/ui/text-input';

import { CheckoutFormSectionProps } from '.';
import CheckoutFormSectionHeader from './checkout-form-section-header';

export default function PaymentMethod({
  formData,
  handleInput,
}: CheckoutFormSectionProps) {
  const translate = useTranslations('checkout');
  return (
    <div className="flex flex-col gap-6">
      <CheckoutFormSectionHeader header={translate('paymentMethod')} />
      <TextInput
        id="cardNumber"
        type="text"
        name="cardNumber"
        value={formData.cardNumber}
        onValueChange={(value: string) => handleInput('cardNumber', value)}
        clearInput={() => handleInput('cardNumber', '')}
        placeholder="1234 1234 1234 1234"
        label={translate('cardNumber')}
        required
      />
      <TextInput
        id="nameCard"
        type="text"
        name="nameCard"
        value={formData.nameCard}
        onValueChange={(value: string) => handleInput('nameCard', value)}
        clearInput={() => handleInput('nameCard', '')}
        placeholder={translate('nameCardPlaceholder')}
        label={translate('nameCard')}
        required
      />
      <div className="flex gap-8">
        <TextInput
          id="expiry"
          type="text"
          name="expiry"
          value={formData.expiry}
          onValueChange={(value: string) => handleInput('expiry', value)}
          clearInput={() => handleInput('expiry', '')}
          placeholder={translate('expiryPlaceholder')}
          label={translate('expiry')}
          required
        />
        <TextInput
          id="cvv"
          type="text"
          name="cvv"
          value={formData.cvv}
          onValueChange={(value: string) => handleInput('cvv', value)}
          clearInput={() => handleInput('cvv', '')}
          placeholder={translate('cvvPlaceholder')}
          label={translate('cvv')}
          required
        />
      </div>
    </div>
  );
}
