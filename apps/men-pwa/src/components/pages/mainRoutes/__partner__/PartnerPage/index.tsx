'use client';

import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';
import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { WidgetGenerators } from '@repo/core/components/Widgets/WidgetGenerators';
import { RequestSection } from '@repo/core/components/partner/RequestSection';
import { CustomImage } from '@repo/core/components/ui/CustomImage';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import AvatarContainer from './AvatarContainer';
import Challenge from './Challenge';
import Memory from './Momery';
import NotRequestData from './NotRequestData';
import PartnerCard from './PartnerCard';
import PartnerContainerSkeleton from './PartnerContainerSkeleton';
import useGetPartnerData from './__hooks__/useGetPartnerData';

const PartnerPage = () => {
  const { data, isLoading } = useGetPartnerData();
  const backgroundImage = '/assets/images/hamdelBg.webp';

  return (
    <>
      <MainPageLayoutHeader leftElement1="Profile" className="bg-impo_Transparent backdrop-blur-none" />
      {isLoading && !data && <PartnerContainerSkeleton />}
      {!isLoading && data && (
        <div
          className="w-full  px-4 min-h-[100dvh] flex flex-col gap-3"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(59, 130, 246, 0.2) 0%, rgba(31, 72, 137, 0.1) 100%),url(${backgroundImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            paddingTop: HEADER_HEIGHT + 50,
          }}
        >
          {data.valid && (
            <div
              className="mb-9"
              // onClick={onClick}
            >
              <div
                className="w-8 h-8 flex justify-center items-center rounded-full cursor-pointer bg-impo_Neutral_Background"
                style={{
                  opacity: 50,
                }}
              >
                {data.coverImage ? (
                  <EditIcon className="w-4 h-4 fill-impo_Neutral_OnBackground" />
                ) : (
                  <UploadIcon className="w-4 h-4 fill-impo_Neutral_OnBackground" />
                )}
              </div>
            </div>
          )}

          <div className=" rounded-3xl  relative bg-impo_Neutral_Background">
            <AvatarContainer {...data} />
            <Challenge button={data.button} card={data.card} valid={data.valid} />
          </div>

          {!data.valid && <RequestSection element={<NotRequestData />} isMan={true} />}

          {data.partner.cycleCard.title || data.partner.cycleCard.image ? (
            <PartnerCard partner={data.partner} valid={data.valid} />
          ) : null}

          {data.valid && (
            <div className="flex flex-col">
              {data.manWidgets.map((widget, index) => (
                <WidgetGenerators {...widget} key={index} />
              ))}
            </div>
          )}

          <Memory memory={data.memory} valid={data.valid} />
        </div>
      )}
    </>
  );
};

export default PartnerPage;
