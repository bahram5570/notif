'use client';

import WidgetGenerator from '@components/women/Widgets/widgetGenerator';

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
import useGetRequestData from './__hooks__/useGetRequestData';

const PartnerPage = () => {
  const { data, isLoading } = useGetData();
  const { data: requestData, getData, isLoading: requestLoading } = useGetRequestData();

  const hasRequestList = requestData && requestData.list.length > 0;
  const showEmptyLanding = data?.show_partner_empathy_landing
    ? data.valid
      ? false
      : !hasRequestList
        ? true
        : false
    : true;

  return (
    <>
      {isLoading && <PartnerContainerSkeleton />}
      {!isLoading &&
        data &&
        (showEmptyLanding ? (
          <PartnerLandingWebView />
        ) : (
          <PartnerPageLayout isValid={data.valid} coverImage={data.coverImage}>
            <div className=" rounded-[32px] px-3 py-6  mx-4 relative bg-impo_Neutral_Background">
              <AvatarContainer {...data} />

              <div>
                <div className="flex flex-col gap-4 xs:px-4">
                  <Challenge card={data.card} valid={data.valid} button={data.button} />
                  {!data.valid && (
                    <RequestSection
                      getData={getData}
                      hasData={hasRequestList}
                      isLoading={requestLoading}
                      list={requestData?.list || []}
                    />
                  )}

                  {data.partner.cycleCard.title || data.partner.cycleCard.image ? (
                    <PartnerCard partner={data.partner} valid={data.valid} />
                  ) : null}

                  {data.valid && (
                    <div className="flex flex-col">
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
