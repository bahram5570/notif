import Image from 'next/image';

import useActivationIsLargeScreen from '@hooks/__activation__/useActivationIsLargeScreen';
import { LottieCanvas } from '@repo/core/lib/LottieCanvas';

import { HeadingImageProps } from './types';

const HeadingImage = ({ backgroundColor, image, doRepeat, order }: HeadingImageProps) => {
  const { isLargeScreen } = useActivationIsLargeScreen();

  const isLottie = image.includes('.lottie');

  return (
    <div
      style={{ backgroundColor, order }}
      className={`
                  relative 
                  w-full 
                  flex 
                  pointer-events-none 
                  dark:!bg-impo_Neutral_Surface
                  ${isLargeScreen ? 'h-[55dvh]' : 'h-[45dvh]'}
                `}
    >
      {isLottie && <LottieCanvas src={image} autoplay={true} loop={doRepeat} />}

      {!isLottie && <Image src={image} alt={image} fill={true} priority={true} sizes="100dvw" objectFit="contain" />}
    </div>
  );
};

export default HeadingImage;
