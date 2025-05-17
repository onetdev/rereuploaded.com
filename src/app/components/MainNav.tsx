import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';

export default function MainNav() {
  return (
    <Navbar shouldHideOnScroll isBordered maxWidth='full'>
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-2" color="foreground">
          <span className="font-bold text-inherit">RE:RE: Uploaded [<span title="Antic Impersonation">AI</span> Edition]</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive>
          <Link href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="https://themostannoyingwebsite.com?utm_source=rereuploaded" isExternal>
            The MAW
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
