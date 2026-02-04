import { createPortal } from 'react-dom';

import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { MAX_SCREEN_WIDTH, PORTAL_ID } from '@repo/core/constants/app.contants';
import { useIsRendered } from '@repo/core/hooks/useIsRendered';

const Loading = () => {
  const { isRendered } = useIsRendered();

  if (!isRendered) {
    return <></>;
  }

  return (
    <>
      {createPortal(
        <div
          style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: '#000000AA' }}
          className="fixed top-0 left-0 right-0 bottom-0 mx-auto flex justify-center pt-[30dvh] z-[70]"
        >
          <CustomSpinner size={50} className="!border-[4px]" />
        </div>,
        document.getElementById(PORTAL_ID) as Element,
      )}
    </>
  );
};

export default Loading;
