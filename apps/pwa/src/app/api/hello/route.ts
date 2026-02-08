import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from your own API!',
    time: new Date().toISOString(),
  });
}
