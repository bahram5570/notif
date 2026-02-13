import { LottieRefCurrentProps as Types } from 'lottie-react';
import dynamic from 'next/dynamic';

export const LottieJson = dynamic(() => import('lottie-react').then((mod) => mod.default), {
  ssr: false,
});
export type LottieRefCurrentProps = Types;
