import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const payload = await req.json();
  const result = { valid: true };

  if (payload?.tag) {
    revalidateTag(payload.tag);
  } else {
    result.valid = false;
  }

  return NextResponse.json(result);
};
