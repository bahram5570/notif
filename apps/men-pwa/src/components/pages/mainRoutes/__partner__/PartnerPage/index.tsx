'use client';

import { WidgetGenerators } from '@repo/core/components/Widgets/WidgetGenerators';
import { PartnerPageLayout } from '@repo/core/components/partner/PartnerPageLayout';
import { RequestSection } from '@repo/core/components/partner/RequestSection';

import AvatarContainer from './AvatarContainer';
import Biorhythm from './Biorhythm';
import Challenge from './Challenge';
import HintCard from './HintCard';
import Memory from './Momery';
import NotRequestData from './NotRequestData';
import PartnerCard from './PartnerCard';
import PartnerContainerSkeleton from './PartnerContainerSkeleton';
import PartnerModals from './PartnerModals';
import useGetPartnerData from './__hooks__/useGetPartnerData';

const PartnerPage = () => {
  const { data, isLoading } = useGetPartnerData();

  return (
    <>
      {isLoading && !data && <PartnerContainerSkeleton />}
      {!isLoading && data && (
        <PartnerPageLayout
          coverImage={data.coverImage}
          isValid={data.valid}
          defaultCoverImage="/assets/images/hamdelBg.webp"
        >
          <div className="flex flex-col gap-6">
            <div className=" rounded-3xl  relative bg-impo_Neutral_Background">
              <AvatarContainer {...data} />
              <Challenge button={data.button} card={data.card} valid={data.valid} />
            </div>

            {!data.valid && <RequestSection element={<NotRequestData />} isMan={true} />}

            {data.partner.cycleCard.title || data.partner.cycleCard.image ? (
              <PartnerCard partner={data.partner} valid={data.valid} />
            ) : null}

            {}

            {data.valid && (
              <>
                {data.partner.hints.length > 0 && (
                  <HintCard hintTitle={data.partner.hintTitle} hints={data.partner.hints} />
                )}
                <div className="flex flex-col">
                  {data.manWidgets.map((widget, index) => (
                    <WidgetGenerators {...widget} key={index} />
                  ))}
                </div>
                {data.bioRhythemWidget && <Biorhythm bioRhythemWidget={data.bioRhythemWidget} />}
              </>
            )}

            <Memory memory={data.memory} valid={data.valid} />
          </div>

          <PartnerModals />
        </PartnerPageLayout>
      )}
    </>
  );
};

export default PartnerPage;
