import { NextRequest, NextResponse } from "next/server";
import { getProduct, updateProduct } from "../data";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  // Add this to engage the Suspense to make sure that the
  // tests pass when when the product state is slow to load

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const product = getProduct(+id);

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  if (!getProduct(+id))
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const updates = await request.json();
  updateProduct(+id, updates);

  return NextResponse.json(getProduct(+id));
}
