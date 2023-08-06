import { NextResponse } from "next/server";

import { getProducts } from "./data";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(getProducts());
}
