import heicConvert from 'heic-convert';
import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const maxSize = Number(request.nextUrl.searchParams.get('maxSize')) || 600;

    if (!file) {
      throw new Error('Invalid image format!');
    }

    let buffer = Buffer.from(await file.arrayBuffer()) as unknown as ArrayBuffer;

    const isHeicFormat = file.name.toLowerCase().includes('.heic') || file.name.toLowerCase().includes('.heif');
    if (isHeicFormat) {
      buffer = await heicConvert({ buffer, format: 'JPEG', quality: 1 });
    }

    const updatedImage = (await sharp(buffer)
      .rotate()
      .resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 100 })
      .toBuffer()) as unknown as ArrayBuffer;

    return new NextResponse(updatedImage, { headers: { 'Content-Type': 'image/webp' } });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
