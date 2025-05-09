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
        <div>
          <FooterBrand />
          <FooterLinks />
        </div>
        <div>
          <FooterTrademark />
          <FooterSocialMedia />
        </div>
      </div>
    </footer>
  );
}
