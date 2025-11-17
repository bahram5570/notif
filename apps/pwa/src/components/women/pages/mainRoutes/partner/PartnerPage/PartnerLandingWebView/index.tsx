import { useEffect, useState } from 'react';

import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

const PartnerLandingWebView = () => {
  const { colors } = useTheme();
  const [hideButton, setHideButton] = useState(false);

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
      <iframe
        src="https://websit-nine.vercel.app/webView/sympathy"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          zIndex: 100,
        }}
        // onLoad={handleLoad}
      />
      {!hideButton && (
        <div
          className=" fixed right-0 left-0 mx-auto h-20 flex justify-center items-center px-4"
          style={{ maxWidth: MAX_SCREEN_WIDTH, bottom: FOOTER_HEIGTH, background: colors.Neutral_Background }}
          onClick={linkTo}
        >
          <div
            style={{ background: colors.PrimaryWoman_Primary }}
            className="w-full flex items-center justify-center h-12 rounded-[64px] z-10 "
          >
            <Typography size="Small" scale="Title" color="Neutral_Background">
              شروع همدلی با پارتنرت
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerLandingWebView;
