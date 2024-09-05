"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import styles from "./Navigation.module.css";

interface LinkItem {
  href: string;
  label: string;
  lang?: string;
  hrefLang?: string;
}

interface NavigationProps {
  links: LinkItem[];
}

const Navigation = ({ links }: NavigationProps) => {
  const pathname = usePathname();

  const getLinkClass = useCallback(
    (href: string) =>
      `${styles["main-nav__link"]} ${
        pathname === href ? styles["main-nav__link--is-active"] : ""
      }`,
    [pathname]
  );

  return (
    <nav aria-label="Primary" className={styles["main-nav"]}>
      <ul className={styles["main-nav__ul"]}>
        {links.map(({ href, label, lang, hrefLang }) => (
          <li key={href} className={styles["main-nav__li"]}>
            <Link
              href={href}
              className={getLinkClass(href)}
              aria-current={pathname === href ? "page" : undefined}
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
