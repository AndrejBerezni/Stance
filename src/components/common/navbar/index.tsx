import NavbarBrand from './navbar-brand';
import NavbarButtons from './navbar-buttons';
import NavbarLinks from './navbar-links';

export default function Navbar() {
  return (
    <nav className="content-wrapper py-4 flex items-center lg:gap-26">
      <NavbarBrand />
      <NavbarLinks />
      <NavbarButtons />
    </nav>
  );
}
