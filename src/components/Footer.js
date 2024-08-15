"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="max-w-xs mt-4 text-sm">
              At Foresight, Our commitment to quality and innovation ensures that every vehicle we offer is built to last,
              combining cutting-edge technology with unmatched reliability.
            </p>

          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/about"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>
                <Link
                  href="/cars"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  cars
                </Link>
                <Link
                  href="/services"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Services
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/contact"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm">© Foresight - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
