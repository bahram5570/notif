'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import AddPartner from './AddPartner';
import DeletePartner from './DeletePartner';
import DeletePartnerModal from './DeletePartnerModal';
import PartnerAvatar from './PartnerAvatar';
import PartnerSkeleton from './PartnetSkeleton';
import TypeRelationship from './TypeRelationship';
import useGetData from './__hooks__/useGetData';

const PartnerSettingPage = () => {
  const { data, isLoading } = useGetData();

  return (
    <>
      {isLoading && <PartnerSkeleton />}
      {!isLoading && (
        <WomenPageLayout
          rightElement="BackButton"
          rightElementScript="هم‌دل من"
          paddingTop={0}
          className="bg-impo_Neutral_Surface"
        >
          <div
            className="p-3 flex flex-col gap-4 min-h-screen bg-impo_Neutral_Surface"
            style={{ paddingTop: HEADER_HEIGHT + 16 }}
          >
            {}
            {data && data.valid ? (
              <div className="flex flex-col gap-4">
                <PartnerAvatar {...data} />
                <TypeRelationship distanceType={data.distanceType} />
                <DeletePartner />
              </div>
            ) : (
              <AddPartner />
            )}
          </div>
          <DeletePartnerModal />
        </WomenPageLayout>
      )}
    </>
  );
};

export default PartnerSettingPage;
