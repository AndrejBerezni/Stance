'use client';
import { useState } from 'react';

import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import TextInput from '@/components/ui/text-input';

//TO DO: implement subscribing to newsletter, this is just placeholder for now

export default function JoinNewsletter() {
  const translate = useTranslations('footer');
  const [email, setEmail] = useState<string>('');

  return (
    <div className="flex flex-col justify-between gap-5 lg:flex-row">
      <div>
        <h3 className="text-ink-900 text-xl font-semibold">
          {translate('newsHead')}
        </h3>
        <p className="text-ink-600">{translate('newsText')}</p>
      </div>
      <form className="flex flex-col items-start gap-4 sm:flex-row lg:w-auto">
        <TextInput
          id="email"
          name="email"
          type="email"
          value={email}
          onValueChange={setEmail}
          clearInput={() => setEmail('')}
          placeholder={translate('enterEmail')}
          className="min-w-[270px] flex-1"
        />
        <Button type="submit" className="h-[42px] w-full sm:w-auto">
          {translate('subscribe')}
        </Button>
      </form>
    </div>
  );
}
