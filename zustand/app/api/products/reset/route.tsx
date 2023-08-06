import { NextResponse } from "next/server";

import { reset } from "../data";

export const dynamic = "force-dynamic";

export function POST() {
  reset();
  return NextResponse.json({ ok: true });
}
