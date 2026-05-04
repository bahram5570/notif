import heicConvert from 'heic-convert';
import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const maxSize = Number(body?.maxSize || 600);
    const imageResponse = await fetch(body?.imageUrl);

    if (!imageResponse.ok) {
      return NextResponse.json('Failed to fetch the image!', { status: 500 });
    }

    let buffer = Buffer.from(await imageResponse.arrayBuffer()) as unknown as ArrayBuffer;
    buffer = await heicConvert({ buffer, format: 'JPEG' });

    const updatedImage = (await sharp(buffer)
      .rotate()
      .resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true })
      .webp()
      .toBuffer()) as unknown as ArrayBuffer;

    return new NextResponse(updatedImage, { headers: { 'Content-Type': 'image/webp' } });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
