'use client';

import Typography from '@components/ui/Typography';
import WidgetGenerator from '@components/women/Widgets/widgetGenerator';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import AvatarContainer from './AvatarContainer';
import Challenge from './Challenge';
import Memory from './Momery';
import PartnerCard from './PartnerCard';
import PartnerContainerSkeleton from './PartnerContainerSkeleton';
import PartnerModals from './PartnerModals';
import PartnerPageLayout from './PartnerPageLayout';
import RequestSection from './RequestSection';
import useGetData from './__hooks__/useGetData';

const PartnerPage = () => {
  const { data, isLoading } = useGetData();
  const { colors } = useTheme();

  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkTo = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'startPartnerPage',
      linkTo: '/protected/partnerStart',
    });
  };
  return (
    <>
      {isLoading && <PartnerContainerSkeleton />}
      {!isLoading && data && (
        <div className="pb-40" style={{ width: '100%', height: '100dvh' }}>
          <iframe
            src="https://websit-nine.vercel.app/webView/sympathy"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: isLoading ? 'none' : 'block',
              zIndex: 100,
            }}
            // onLoad={handleLoad}
          />
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
        </div>

        // <PartnerPageLayout isValid={data.valid} coverImage={data.coverImage}>
        //   <div
        //     className="flex flex-col items-center px-3 py-6  mx-4 rounded-[32px] relative"
        //     style={{ backgroundColor: colors.White }}
        //   >
        //     <AvatarContainer {...data} />

        //     <div className="flex justify-center items-center flex-col gap-9 relative">
        //       <div className="flex flex-col gap-4 xs:px-4">
        //         <Challenge card={data.card} valid={data.valid} button={data.button} />
        //         {!data.valid && <RequestSection />}

        //         {data.partner.cycleCard.title || data.partner.cycleCard.image ? (
        //           <PartnerCard partner={data.partner} valid={data.valid} />
        //         ) : null}

        //         {data.valid && (
        //           <div className="flex flex-col gap-6 p-4">
        //             {data.womanWidgets.map((widget, index) => (
        //               <WidgetGenerator {...widget} key={index} />
        //             ))}
        //           </div>
        //         )}

        //         <Memory memory={data.memory} valid={data.valid} />
        //       </div>
        //     </div>
        //   </div>

        //   <PartnerModals />
        // </PartnerPageLayout>
      )}
    </>
  );
};

export default PartnerPage;
