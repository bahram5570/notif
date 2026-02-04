import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useRouter } from 'next/navigation';

import { MAX_SCREEN_WIDTH, PORTAL_ID } from '../../../constants/app.contants';
import { useIsRendered } from '../../../hooks/useIsRendered';
import useModalStatus from './__hooks__/useModalStatus';
import { MODAL_BACKGROUND_ID, MODAL_DEFAULT_Z_INDEX, MODAL_MIN_SIZE } from './constants';
import { CustomModalProps } from './types';
import useModalRendered from './useModalRendered';

export const CustomModal = ({
  zIndex = MODAL_DEFAULT_Z_INDEX,
  isSlidingMode = false,
  isFullScreen = false,
  className,
  children,
  isOpen,
}: CustomModalProps) => {
  const router = useRouter();
  const { isRendered } = useIsRendered();
  const { isDelayPassed } = useModalRendered();
  const { isModalOpen, isSlidingModeTrue } = useModalStatus({ isOpen, isSlidingMode });

  const borderRadius = isFullScreen ? '0' : isSlidingModeTrue ? '0' : '12px';

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.height = '100dvh';
      body.style.overflow = 'hidden';
    } else {
      body.style.height = '';
      body.style.overflow = '';
    }
    return () => {
      body.style.height = '';
      body.style.overflow = '';
    };
  }, [isModalOpen]);

  const clickHandler = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement | undefined;

    if (el) {
      if (el.id === MODAL_BACKGROUND_ID) {
        router.back();
      }
    }
  };

  if (!isRendered) {
    return <></>;
  }

  return (
    <>
      {createPortal(
        <div
          onClick={clickHandler}
          id={MODAL_BACKGROUND_ID}
          className={`
                      fixed top-0 left-0 right-0 bottom-0 flex justify-center mx-auto  
                      ${isModalOpen ? 'animate-modalBackgroundOpen' : 'animate-modalBackgroundClose'}
                    `}
          style={{
            zIndex,
            maxWidth: MAX_SCREEN_WIDTH,
            pointerEvents: isModalOpen ? 'all' : 'none',
            opacity: isDelayPassed && isModalOpen ? '1' : '0',
            alignItems: isSlidingModeTrue ? 'flex-end' : 'center',
          }}
        >
          <div
            key={isModalOpen ? 'k1' : 'k2'}
            className={`
                px-4 pt-6 pb-10 rounded-xl bg-impo_Neutral_Background
                ${!isSlidingModeTrue && !isModalOpen && 'animate-modalCenterModeClose'}
                ${!isSlidingModeTrue && isModalOpen && 'animate-modalCenterModeOpen'}
                ${isSlidingModeTrue && !isModalOpen && 'animate-modalSlidingModeClose'}
                ${isSlidingModeTrue && isModalOpen && 'animate-modalSlidingModeOpen'}
                ${className}
            `}
            style={{
              borderRadius,
              minWidth: MODAL_MIN_SIZE,
              minHeight: MODAL_MIN_SIZE,
              height: isFullScreen ? '100%' : 'fit-content',
              width: isFullScreen || isSlidingModeTrue ? '100%' : 'fit-content',
            }}
          >
            <>{children}</>
          </div>
        </div>,
        document.getElementById(PORTAL_ID) as Element,
      )}
    </>
  );
};
