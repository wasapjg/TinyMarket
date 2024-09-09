'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card1"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2Icon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export function FavoritesPage() {
  const [favorites, setFavorites] = useState<Product[]>([
    { id: 1, name: "Black T-Shirt", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "White Sneakers", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Gray Hoodie", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Black Jeans", price: 59.99, image: "/placeholder.svg?height=200&width=200" },
  ])

  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id))
    setSelectedItems(selectedItems.filter(item => item !== id))
  }

  const toggleSelectItem = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const removeSelectedItems = () => {
    setFavorites(favorites.filter(item => !selectedItems.includes(item.id)))
    setSelectedItems([])
  }

  const addToCart = (id: number) => {
    // Implement add to cart functionality here
    console.log(`Added item ${id} to cart`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your favorites list is empty</p>
          <Link href="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="select-all"
                checked={selectedItems.length === favorites.length}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedItems(favorites.map(item => item.id))
                  } else {
                    setSelectedItems([])
                  }
                }}
              />
              <label htmlFor="select-all" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Select All
              </label>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={removeSelectedItems}
              disabled={selectedItems.length === 0}
            >
              <Trash2Icon className="mr-2 h-4 w-4" />
              Remove Selected
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <Card key={item.id} className="flex flex-col">
                <CardHeader>
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                    <Checkbox
                      id={`select-${item.id}`}
                      className="absolute top-2 left-2"
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => toggleSelectItem(item.id)}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle>{item.name}</CardTitle>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => addToCart(item.id)}>
                    <ShoppingCartIcon className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="ghost" onClick={() => removeFromFavorites(item.id)}>
                    <Trash2Icon className="mr-2 h-4 w-4" />
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}