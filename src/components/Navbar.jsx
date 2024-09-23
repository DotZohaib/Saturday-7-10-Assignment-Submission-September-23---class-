// components/Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-center items-center gap-10 h-14 bg-slate-700 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/Apply">Apply</Link>
          </li>
          <li>
            <Link href="/Services">Services</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
