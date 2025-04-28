import Brand from '../brand';
import NavigationLinks from '../navigation-links';
import NavbarButtons from './navbar-buttons';

export default function Navbar() {
  return (
    <nav className="content-wrapper py-4 flex items-center lg:gap-26">
      <Brand />
      <NavigationLinks className="hidden lg:flex lg:items-center lg:gap-8" />
      <NavbarButtons />
    </nav>
  );
}
