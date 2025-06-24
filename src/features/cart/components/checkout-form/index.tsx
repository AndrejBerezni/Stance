'use client';
import { useState } from 'react';

import Separator from '@/components/ui/separator';

import ContactInformation from './contact-information';
import DeliveryMethod from './delivery-method';
import PaymentMethod from './payment-method';
import ShippingInformation from './shipping-information';

interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  state: string;
  zip: string;
  shipping: 'standard' | 'express';
  cardNumber: string;
  nameCard: string;
  expiry: string;
  cvv: string;
}

export interface CheckoutFormSectionProps {
  formData: CheckoutFormData;
  handleInput: (field: keyof CheckoutFormData, value: string) => void;
}

export default function CheckoutForm() {
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    firstName: '',
    lastName: '',
    addressLineOne: '',
    addressLineTwo: '',
    city: '',
    state: '',
    zip: '',
    shipping: 'standard',
    cardNumber: '',
    nameCard: '',
    expiry: '',
    cvv: '',
  });

  const handleInput = (field: keyof CheckoutFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form className="flex flex-col gap-10 xl:w-1/2">
      <ContactInformation formData={formData} handleInput={handleInput} />
      <Separator />
      <ShippingInformation formData={formData} handleInput={handleInput} />
      <Separator />
      <DeliveryMethod formData={formData} handleInput={handleInput} />
      <Separator />
      <PaymentMethod formData={formData} handleInput={handleInput} />
    </form>
  );
}
