"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "./mode-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex gap-6 items-center">
        <span className="font-bold text-lg tracking-tight">HY Jo</span>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-colors px-2 py-1 rounded-md text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 ${pathname === item.href ? "bg-blue-200 dark:bg-blue-800/60" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
} 