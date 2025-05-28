import { Link } from "@tanstack/react-router";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function Header() {
  return (
    <header className="App-header">
      <Navbar fluid className="w-full">
        <NavbarBrand as={Link} href="/">
          <img
            src="images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Logo Los Cenizaros"
          />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} href="/">
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/menu">
            Menu
          </NavbarLink>
          <NavbarLink as={Link} href="/hosting">
            Hospedaje
          </NavbarLink>
          <NavbarLink as={Link} href="/contact">
            Contáctenos
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
