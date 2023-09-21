import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

//we did not add any restrictions for authenticated users
//even if you change that, it will still work with authenticated users
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({
    req,
    res,
  });

  await supabase.auth.getSession();
  return res;
}
