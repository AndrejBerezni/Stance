import Brand from '../brand';
import NavigationLinks from '../navigation-links';
import NavbarButtons from './navbar-buttons';

export default function Navbar() {
  return (
    <header className="navbar-wrapper flex items-center py-4 lg:gap-26">
      <Brand />
      <NavigationLinks className="hidden lg:flex lg:items-center lg:gap-8" />
      <NavbarButtons />
    </header>
  );
}
