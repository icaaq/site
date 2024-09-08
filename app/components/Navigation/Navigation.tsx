"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import styles from "./Navigation.module.css";

interface LinkItem {
  href: string;
  label: string;
}

interface NavigationProps {
  links: LinkItem[];
}

const Navigation = ({ links }: NavigationProps) => {
  const pathname = usePathname();

  const isActiveLink = useCallback(
    (href: string) => pathname === href || pathname === `${href}/`,
    [pathname]
  );

  const getLinkClass = useCallback(
    (href: string) =>
      `${styles["main-nav__link"]} ${
        isActiveLink(href) ? styles["main-nav__link--is-active"] : ""
      }`,
    [isActiveLink]
  );

  return (
    <nav aria-label="Primary" className={styles["main-nav"]}>
      <ul className={styles["main-nav__ul"]}>
        {links.map(({ href, label }) => (
          <li key={href} className={styles["main-nav__li"]}>
            <Link
              href={href}
              className={getLinkClass(href)}
              aria-current={isActiveLink(href) ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
