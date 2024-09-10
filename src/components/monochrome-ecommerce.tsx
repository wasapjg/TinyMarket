'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartIcon, ShoppingCartIcon, UserIcon, MenuIcon, SearchIcon } from 'lucide-react'

export function MonochromeEcommerce() {
  const [favorites, setFavorites] = useState<number[]>([])

  const products = [
    { id: 1, name: "Black T-Shirt", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "White Sneakers", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Gray Hoodie", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Black Jeans", price: 59.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "White Watch", price: 129.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Black Backpack", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
            <h1 className="text-2xl font-bold text-gray-700">Monochrome</h1>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className=''>Home</Button>
            <Button variant="ghost" className=''>Shop</Button>
            <Button variant="ghost" className=''>About</Button>
            <Button variant="ghost" className=''>Contact</Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="outline" size="icon">
              <HeartIcon className="h-4 w-4" />
              <span className="sr-only">Favorites</span>
            </Button>
            <Button variant="outline" size="icon">
              <ShoppingCartIcon className="h-4 w-4" />
              <span className="sr-only">Cart</span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Categories</h2>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <Checkbox id="category-1" />
                    <span>T-Shirts</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <Checkbox id="category-2" />
                    <span>Shoes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <Checkbox id="category-3" />
                    <span>Accessories</span>
                  </label>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                <Slider defaultValue={[0, 100]} max={200} step={1} />
                <div className="flex justify-between mt-2">
                  <span>$0</span>
                  <span>$200</span>
                </div>
              </div>
            </div>
          </aside>
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="flex flex-col">
                  <CardHeader>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle>{product.name}</CardTitle>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Add to Cart</Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <HeartIcon
                        className={`h-4 w-4 ${favorites.includes(product.id) ? 'fill-current text-red-500' : ''}`}
                      />
                      <span className="sr-only">Add to favorites</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">&copy; 2023 Monochrome. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost">Privacy Policy</Button>
              <Button variant="ghost">Terms of Service</Button>
              <Button variant="ghost">Contact Us</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}