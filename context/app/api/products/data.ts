import { type Product } from "@/app/types";

const ORIGINAL_PRODUCTS: Product[] = [
  {
    id: 1,
    sku: "1234",
    name: "Product 1",
  },
  {
    id: 2,
    sku: "3546",
    name: "Product 2",
  },
  {
    id: 3,
    sku: "7891",
    name: "Product 3",
  },
];

let products: Product[] = structuredClone(ORIGINAL_PRODUCTS);

export function getProducts() {
  return products;
}

export function getProduct(id: number) {
  return products.find((p) => p.id === id);
}

export function updateProduct(id: number, product: Partial<Product>) {
  products = products.map((p) =>
    p.id === id ? { ...p, ...product } : p
  ) as Product[];
}

export function reset() {
  products = structuredClone(ORIGINAL_PRODUCTS);
}
