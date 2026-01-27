import { createPortal } from 'react-dom';

import { MAX_SCREEN_WIDTH, PORTAL_ID } from '@constants/app.constants';
import useIsRendered from '@hooks/useIsRendered';

import Dark_Spinner from '../Dark_Spinner';

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
          <Dark_Spinner size={50} className="!border-[4px]" />
        </div>,
        document.getElementById(PORTAL_ID) as Element,
      )}
    </>
  );
};

export default Loading;
