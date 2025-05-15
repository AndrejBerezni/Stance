import FooterBrand from './footer-brand';
import FooterLinks from './footer-links';
import FooterTrademark from './footer-trademark';
import JoinNewsletter from './join-newsletter';
import LanguageSwitcher from './language-switcher';

export default function Footer() {
  return (
    <footer className="bg-background flex w-full flex-col items-center rounded-b-lg shadow-xl">
      <div className="section-wrapper flex flex-col gap-12 md:gap-16">
        <JoinNewsletter />
        <div className="flex flex-col gap-8 md:gap-12 lg:flex-row lg:gap-16">
          <FooterBrand />
          <FooterLinks />
        </div>
        <div className="border-border flex w-full flex-col gap-8 border-t-[1px] pt-8 md:flex-row">
          <FooterTrademark />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
