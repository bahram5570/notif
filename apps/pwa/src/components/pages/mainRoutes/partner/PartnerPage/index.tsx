'use client';

import { WidgetGenerators } from '@repo/core/components/Widgets/WidgetGenerators';
import { PartnerPageLayout } from '@repo/core/components/partner/PartnerPageLayout';
import { RequestSection } from '@repo/core/components/partner/RequestSection';

import AvatarContainer from './AvatarContainer';
import Challenge from './Challenge';
import Memory from './Momery';
import PartnerCard from './PartnerCard';
import PartnerContainerSkeleton from './PartnerContainerSkeleton';
import PartnerLandingWebView from './PartnerLandingWebView';
import PartnerModals from './PartnerModals';
import NotRequestData from './RequestSection/NotRequestData';
import useGetData from './__hooks__/useGetData';
import useGetRequestData from './__hooks__/useGetRequestData';

const PartnerPage = () => {
  const { data, isLoading } = useGetData();
  const { data: requestData } = useGetRequestData();

  const hasRequestList = requestData && requestData.list.length > 0;
  const showEmptyLanding = data?.show_partner_empathy_landing
    ? data.valid
      ? false
      : !hasRequestList
        ? true
        : false
    : false;

  return (
    <>
      {isLoading && <PartnerContainerSkeleton />}
      {!isLoading &&
        data &&
        (showEmptyLanding ? (
          <PartnerLandingWebView />
        ) : (
          <PartnerPageLayout
            isValid={data.valid}
            coverImage={data.coverImage}
            defaultCoverImage="/assets/images/backgroundHamdel.webp"
          >
            <div className=" rounded-[32px] px-3 py-6  mx-4 relative bg-impo_Neutral_Background">
              <AvatarContainer {...data} />

              <div>
                <div className="flex flex-col gap-4 xs:px-4">
                  <Challenge card={data.card} valid={data.valid} button={data.button} />
                  {!data.valid && <RequestSection element={<NotRequestData />} />}

                  {data.partner.cycleCard.title || data.partner.cycleCard.image ? (
                    <PartnerCard partner={data.partner} valid={data.valid} />
                  ) : null}

                  {data.valid && (
                    <div className="flex flex-col">
                      {data.womanWidgets.map((widget, index) => (
                        <WidgetGenerators {...widget} key={index} />
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
