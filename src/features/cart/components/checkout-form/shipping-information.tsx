import { useTranslations } from 'next-intl';

import TextInput from '@/components/ui/text-input';

import { CheckoutFormSectionProps } from '.';
import CheckoutFormSectionHeader from './checkout-form-section-header';

export default function ShippingInformation({
  formData,
  handleInput,
}: CheckoutFormSectionProps) {
  const translate = useTranslations('checkout');
  return (
    <div className="flex flex-col gap-6">
      <CheckoutFormSectionHeader header={translate('shippingInfo')} />
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <TextInput
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onValueChange={(value: string) => handleInput('firstName', value)}
          clearInput={() => handleInput('firstName', '')}
          placeholder={translate('firstNamePlaceholder')}
          label={translate('firstName')}
          required
        />
        <TextInput
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onValueChange={(value: string) => handleInput('lastName', value)}
          clearInput={() => handleInput('lastName', '')}
          placeholder={translate('lastNamePlaceholder')}
          label={translate('lastName')}
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <TextInput
          id="addressLineOne"
          type="text"
          name="addressLineOne"
          value={formData.addressLineOne}
          onValueChange={(value: string) =>
            handleInput('addressLineOne', value)
          }
          clearInput={() => handleInput('addressLineOne', '')}
          placeholder={translate('addressLineOnePlaceholder')}
          label={translate('address')}
          required
        />
        <TextInput
          id="addressLineTwo"
          type="text"
          name="addressLineTwo"
          value={formData.addressLineTwo}
          onValueChange={(value: string) =>
            handleInput('addressLineTwo', value)
          }
          clearInput={() => handleInput('addressLineTwo', '')}
          placeholder={translate('addressLineTwoPlaceholder')}
        />
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <TextInput
          id="city"
          type="text"
          name="city"
          value={formData.city}
          onValueChange={(value: string) => handleInput('city', value)}
          clearInput={() => handleInput('city', '')}
          placeholder={translate('cityPlaceholder')}
          label={translate('city')}
          required
        />
        <TextInput
          id="state"
          type="text"
          name="state"
          value={formData.state}
          onValueChange={(value: string) => handleInput('state', value)}
          clearInput={() => handleInput('state', '')}
          placeholder={translate('statePlaceholder')}
          label={translate('state')}
          required
        />
        <TextInput
          id="zip"
          type="text"
          name="zip"
          value={formData.zip}
          onValueChange={(value: string) => handleInput('zip', value)}
          clearInput={() => handleInput('zip', '')}
          placeholder={translate('zipPlaceholder')}
          label={translate('zip')}
          required
        />
      </div>
    </div>
  );
}
