import { UserTrackingInfoTypes } from '@providers/UserTrackingProvider/types';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const ip = req.headers.get('x-forwarded-for')?.split(',')?.[0].trim() || '';
  const userAgent = req.headers.get('user-agent') || '';

  const result: UserTrackingInfoTypes = { ip, userAgent };
  return NextResponse.json(result);
};
