import { useEffect, useState } from 'react';

import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';
import Spinner from '@components/ui/Spinner';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { IFRAME_URL } from './constants';

const PartnerLandingWebView = () => {
  const [hideButton, setHideButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkTo = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'startPartnerPage',
      linkTo: '/protected/partnerStart',
    });
  };

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data?.type === 'dialog-open') {
        setHideButton(true);
      }
      if (event.data?.type === 'dialog-close') {
        setHideButton(false);
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <div className={`${!hideButton && 'pb-40'}`} style={{ width: '100%', height: '100dvh' }}>
      {isLoading && (
        <div className="flex justify-center items-center w-full h-full ">
          <Dark_Spinner size={50} />
        </div>
      )}

      <iframe
        src={IFRAME_URL}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: isLoading ? 'none' : 'block',
          zIndex: 100,
        }}
        onLoad={handleLoad}
      />

      {!hideButton && (
        <div
          className=" fixed right-0 left-0 mx-auto h-20 flex justify-center items-center px-4 bg-impo_Neutral_Background"
          style={{ maxWidth: MAX_SCREEN_WIDTH, bottom: FOOTER_HEIGTH }}
          onClick={linkTo}
        >
          <div className="w-full flex items-center justify-center h-12 rounded-[64px] z-10 bg-impo_Primary_Primary">
            <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              شروع همدلی با پارتنرت
            </Dark_Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerLandingWebView;
