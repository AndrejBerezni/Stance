import NavbarBrand from './navbar-brand';
import NavbarButtons from './navbar-buttons';

export default function Navbar() {
  return (
    <nav className="content-wrapper py-4 flex items-center">
      <NavbarBrand />
      <NavbarButtons />
    </nav>
  );
}
