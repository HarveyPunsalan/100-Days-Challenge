type Product = {
    id: number
    name: string
    price: number
    image: string
    description: string
}

const products: Product[] = [
  { id: 1, name: "Wireless Mouse", price: 29.99, image: "https://picsum.photos/seed/1/400/300", description: "Ergonomic wireless mouse" },
  { id: 2, name: "Mechanical Keyboard", price: 59.99, image: "https://picsum.photos/seed/2/400/300", description: "Clicky tactile keys" },
  { id: 3, name: "USB-C Hub", price: 39.99, image: "https://picsum.photos/seed/3/400/300", description: "7-in-1 ports" },
  { id: 4, name: "27-inch Monitor", price: 199.99, image: "https://picsum.photos/seed/4/400/300", description: "IPS 1440p display" },
  { id: 5, name: "Webcam HD", price: 44.99, image: "https://picsum.photos/seed/5/400/300", description: "1080p with mic" },
  { id: 6, name: "Desk Lamp", price: 24.99, image: "https://picsum.photos/seed/6/400/300", description: "Dimmable LED" },
  { id: 7, name: "Mouse Pad XL", price: 14.99, image: "https://picsum.photos/seed/7/400/300", description: "Stitched edges" },
  { id: 8, name: "Laptop Stand", price: 34.99, image: "https://picsum.photos/seed/8/400/300", description: "Aluminum, adjustable" },
]

export function getProducts(): Product[] {
    return products
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}