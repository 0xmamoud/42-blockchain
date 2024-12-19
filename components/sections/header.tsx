"use client";

import { logo } from "@/assets/index";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Menu } from 'lucide-react';
import { navLinks } from "@/lib/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export function Header() {

  return (
    <header className="sticky inset-0 bg-black/30 backdrop-blur-sm border-b border-white/10 z-50">

      <div className="container mx-auto px-4 py-4 max-md:py-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="42 Blockchain logo"
            width={120}
            height={53}
            priority
          />
        </Link>
        <Navbar className="max-md:hidden" />
        <div className="md:hidden">
          <Sheet >
            <SheetTrigger asChild>
              <Menu size={32} />
            </SheetTrigger>
            <SheetContent className="bg-black/30">
              <SheetHeader>
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href={"/"}>
                      <Image
                        src={logo}
                        alt="42 Blockchain logo"
                        width={120}
                        height={53}
                        priority
                        className="mx-auto mb-8"
                      />
                    </Link>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {
                  navLinks.map((link, index) => (
                    <SheetClose key={index} asChild>
                      <Link href={link.href}
                        className="hover:text-light-blue active:text-light-blue transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))
                }
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div>
      </div>
    </header>
  )
}
