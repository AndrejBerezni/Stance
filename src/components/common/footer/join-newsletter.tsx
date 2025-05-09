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
    <div className="flex flex-col lg:flex-row justify-between gap-5">
      <div>
        <h3 className="text-xl font-semibold text-ink-900">
          {translate('newsHead')}
        </h3>
        <p className="text-ink-600">{translate('newsText')}</p>
      </div>
      <form className="flex items-start sm:gap-4 flex-col sm:flex-row lg:w-auto">
        <TextInput
          id="email"
          name="email"
          type="email"
          value={email}
          onValueChange={setEmail}
          clearInput={() => setEmail('')}
          placeholder={translate('enterEmail')}
          className="flex-1 min-w-[270px]"
        />
        <Button type="submit" className="h-[42px] w-full sm:w-auto">
          {translate('subscribe')}
        </Button>
      </form>
    </div>
  );
}
