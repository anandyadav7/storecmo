"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigation } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteNav() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);

  // Close the mobile menu after navigating; the header persists across routes.
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  const links = navigation.map((item) => (
    <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined}>
      {item.label}
    </Link>
  ));

  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        {links}
      </nav>
      <details className="nav-toggle" ref={menu}>
        <summary aria-label="Open menu">Menu</summary>
        <nav className="nav-toggle__panel" aria-label="Primary, mobile">
          {links}
        </nav>
      </details>
    </>
  );
}
