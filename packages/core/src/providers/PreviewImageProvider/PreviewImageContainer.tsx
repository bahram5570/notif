import { useEffect } from 'react';

import CrossIcon from '@assets/shared/icons/cross.svg';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import { MAX_SCREEN_WIDTH } from '../../constants/app.constants';
import { useOverflowHandler } from '../../hooks/useOverflowHandler';
import { PreviewImageContainerProps } from './types';

const PreviewImageContainer = ({ src, shape = 'full' }: PreviewImageContainerProps) => {
  useOverflowHandler();
  const router = useRouter();

  useEffect(() => {
    // # Disable touch events for IOS
    const touchMoveListener = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.addEventListener('touchmove', touchMoveListener, { passive: false });

    return () => {
      document.removeEventListener('touchmove', touchMoveListener);
    };
  }, []);

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed top-0 left-0 right-0 bottom-0 mx-auto bg-impo_Black backdrop-blur-sm z-[500]"
    >
      <div
        onClick={() => router.back()}
        className="
                    absolute 
                    top-9 
                    right-4 
                    w-10 
                    h-10 
                    rounded-full 
                    bg-impo_Surface_InverseSurface 
                    dark:bg-impo_Surface_InverseOnSurface 
                    cursor-pointer 
                    z-10
                  "
      >
        <CrossIcon className="w-full h-auto fill-impo_White" />
      </div>

      <div className="relative w-full h-full flex justify-center">
        {shape === 'full' && <Image src={src} alt="" fill={true} className="object-contain" />}

        {shape === 'circle' && (
          <div
            className="relative w-[90vw] h-[90vw] rounded-full overflow-hidden border-4 mt-[20vh]"
            style={{ maxWidth: MAX_SCREEN_WIDTH * 0.9, maxHeight: MAX_SCREEN_WIDTH * 0.9 }}
          >
            <Image alt="" fill={true} src={src} className="object-cover object-center" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewImageContainer;
