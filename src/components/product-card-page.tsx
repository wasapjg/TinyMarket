'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HeartIcon, ShoppingCartIcon, StarIcon } from 'lucide-react'
import Link from 'next/link'

export function ProductCardPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)

  const product = {
    id: 1,
    name: "Classic Black T-Shirt",
    price: 29.99,
    description: "A timeless black t-shirt made from 100% organic cotton. Perfect for any casual occasion.",
    image: "/placeholder.svg?height=400&width=400",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 128
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name} (Size: ${selectedSize}) to cart`)
    // Implement actual add to cart logic here
  }

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
    // Implement actual favorite toggle logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-gray-600 hover:underline mb-4 inline-block">
        ← Back to products
      </Link>
      <Card className="w-full max-w-4xl mx-auto">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
              <CardDescription className="text-gray-600 text-lg">${product.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-1">
                    Size
                  </label>
                  <Select onValueChange={setSelectedSize} value={selectedSize}>
                    <SelectTrigger id="size-select" className="w-full">
                      <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="quantity-select" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <Select onValueChange={(value) => setQuantity(Number(value))} value={quantity.toString()}>
                    <SelectTrigger id="quantity-select" className="w-full">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button onClick={handleAddToCart} disabled={!selectedSize}>
                <ShoppingCartIcon className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" onClick={handleToggleFavorite}>
                <HeartIcon className={`mr-2 h-4 w-4 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  )
}