import React from "react";
import styles from "./Navbar.module.css";
import ActiveLink from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <nav className={styles.menuContainer}>
      {menuItems.map((routeItem) => (
        <ActiveLink
          key={routeItem.text}
          text={routeItem.text}
          href={routeItem.href}
        />
      ))}
    </nav>
  );
};

export default Navbar;
