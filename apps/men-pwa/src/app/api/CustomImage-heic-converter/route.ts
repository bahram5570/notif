import heicConvert from 'heic-convert';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const imageResponse = await fetch(body?.imageUrl);

    if (!imageResponse.ok) {
      return NextResponse.json('Failed to fetch the image!', { status: 500 });
    }

    let buffer = Buffer.from(await imageResponse.arrayBuffer()) as unknown as ArrayBuffer;
    buffer = await heicConvert({ buffer, format: 'JPEG', quality: 1 });

    return new NextResponse(buffer, { headers: { 'Content-Type': 'image/jpeg' } });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
