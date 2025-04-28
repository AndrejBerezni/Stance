import { useTranslations } from 'next-intl';

export default function Shop() {
  const translate = useTranslations('navigation');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-row gap-[32px] row-start-2 justify-center items-center">
        <h1 className="capitalize font-bold text-7xl">
          {translate('shopAll')}
        </h1>
      </main>
    </div>
  );
}
