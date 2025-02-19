"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";

import Logo from "../public/logos/logo.svg";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="sticky z-50 w-full border-b flex items-center justify-center">
        <div className="container flex h-16 items-center justify-between">
          {/* Left Side: Logo and Urdu Text */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} width={50} height={50} alt="Logo" />
              <span className="hidden font-semibold sm:inline-block text-xl">
                مدرسہ عبداللہ بن مسعود
              </span>
            </Link>
          </div>

          {/* Center: Navlinks */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="flex items-center space-x-6 text-base font-medium -translate-x-12">
              <Link href="/" className="hover:text-green-300">
                Home
              </Link>
              <Link href="/about" className="hover:text-green-300">
                About
              </Link>
              <Link href="/services" className="hover:text-green-300">
                Services
              </Link>
              <Link href="/contact" className="hover:text-green-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Side: Donate Button */}
          <div className="flex items-center justify-end">
            <Button
              variant="secondary"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/" className="hover:text-green-300">
        Home
      </Link>
      <Link href="/about" className="hover:text-green-300">
        About
      </Link>
      <Link href="/services" className="hover:text-green-300">
        Services
      </Link>
      <Link href="/contact" className="hover:text-green-300">
        Contact
      </Link>
    </div>
  );
}
