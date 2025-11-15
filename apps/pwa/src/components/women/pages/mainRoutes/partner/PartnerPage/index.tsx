'use client';

import WidgetGenerator from '@components/women/Widgets/widgetGenerator';
import useTheme from '@hooks/useTheme';

import AvatarContainer from './AvatarContainer';
import Challenge from './Challenge';
import Memory from './Momery';
import PartnerCard from './PartnerCard';
import PartnerContainerSkeleton from './PartnerContainerSkeleton';
import PartnerLandingWebView from './PartnerLandingWebView';
import PartnerModals from './PartnerModals';
import PartnerPageLayout from './PartnerPageLayout';
import RequestSection from './RequestSection';
import useGetData from './__hooks__/useGetData';

const PartnerPage = () => {
  const { data, isLoading } = useGetData();
  const { colors } = useTheme();

  return (
    <>
      {isLoading && <PartnerContainerSkeleton />}
      {!isLoading &&
        data &&
        (data.show_partner_empathy_landing ? (
          <PartnerLandingWebView />
        ) : (
          <PartnerPageLayout isValid={data.valid} coverImage={data.coverImage}>
            <div
              className="flex flex-col items-center px-3 py-6  mx-4 rounded-[32px] relative"
              style={{ backgroundColor: colors.White }}
            >
              <AvatarContainer {...data} />

              <div className="flex justify-center items-center flex-col gap-9 relative">
                <div className="flex flex-col gap-4 xs:px-4">
                  <Challenge card={data.card} valid={data.valid} button={data.button} />
                  {!data.valid && <RequestSection />}

                  {data.partner.cycleCard.title || data.partner.cycleCard.image ? (
                    <PartnerCard partner={data.partner} valid={data.valid} />
                  ) : null}

                  {data.valid && (
                    <div className="flex flex-col gap-6 p-4">
                      {data.womanWidgets.map((widget, index) => (
                        <WidgetGenerator {...widget} key={index} />
                      ))}
                    </div>
                  )}

                  <Memory memory={data.memory} valid={data.valid} />
                </div>
              </div>
            </div>

            <PartnerModals />
          </PartnerPageLayout>
        ))}
    </>
  );
};

export default PartnerPage;
