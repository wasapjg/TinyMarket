'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react'

const categories = [
  {
    name: "Clothing",
    subcategories: ["T-Shirts", "Hoodies", "Pants", "Dresses", "Jackets"]
  },
  {
    name: "Shoes",
    subcategories: ["Sneakers", "Boots", "Sandals", "Formal"]
  },
  {
    name: "Accessories",
    subcategories: ["Bags", "Watches", "Jewelry", "Hats", "Belts"]
  },
  {
    name: "Sale",
    subcategories: ["Clearance", "Last Chance", "Bundle Deals"]
  }
]

export function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            Monochrome
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {categories.map((category) => (
                <NavigationMenuItem key={category.name}>
                  <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="#"
                            >
                              <div className="text-sm font-medium leading-none">{subcategory}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            Monochrome
          </Link>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                {categories.map((category) => (
                  <div key={category.name} className="mb-4">
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory}>
                          <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
                            {subcategory}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" className="w-full">Login</Button>
                  <Button className="w-full">Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}