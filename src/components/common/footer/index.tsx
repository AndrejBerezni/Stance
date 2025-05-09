import FooterBrand from './footer-brand';
import FooterLinks from './footer-links';
import FooterSocialMedia from './footer-social-media';
import FooterTrademark from './footer-trademark';
import JoinNewsletter from './join-newsletter';

export default function Footer() {
  return (
    <footer className="w-full rounded-b-lg shadow-xl bg-background flex items-center flex-col">
      <div className="section-wrapper flex flex-col gap-12 md:gap-16">
        <JoinNewsletter />
        <div className="flex lg:flex-row flex-col lg:gap-16 md:gap-12 gap-8">
          <FooterBrand />
          <FooterLinks />
        </div>
        <div className="w-full gap-8 flex pt-8 flex-col md:flex-row border-t-[1px] border-border">
          <FooterTrademark />
          <FooterSocialMedia />
        </div>
      </div>
    </footer>
  );
}
