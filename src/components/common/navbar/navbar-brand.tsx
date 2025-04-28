import Image from 'next/image';
import Link from 'next/link';

export default function NavbarBrand() {
  return (
    <Link href="/" className="link-focus">
      <Image
        src="/stylenest.svg"
        alt="Brand logo with text"
        width={105}
        height={32}
      />
    </Link>
  );
}
