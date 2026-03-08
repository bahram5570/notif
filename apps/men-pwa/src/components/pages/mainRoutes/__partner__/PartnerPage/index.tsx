'use client';

import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { CustomImage } from '@repo/core/components/ui/CustomImage';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

const PartnerPage = () => {
  const backgroundImage = '/assets/images/hamdelBg.webp';
  return (
    <>
      <MainPageLayoutHeader leftElement1="Profile" className="bg-impo_Transparent backdrop-blur-none" />
      <div
        className="w-full  px-4 h-[100dvh]"
        style={{
          backgroundImage: ` linear-gradient(180deg, rgba(59, 130, 246, 0.2) 0%, rgba(31, 72, 137, 0.1) 100%),url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          paddingTop: HEADER_HEIGHT + 20,
        }}
      >
        <div className="bg-impo_White rounded-[32px] h-28  relative">
          <div className="flex justify-center items-center gap-2 absolute">
            <div
              className="overflow-hidden rounded-full flex bg-impo_White w-24 h-24"
              style={{ border: '4px solid #f2eeee' }}
            >
              <CustomImage
                src="/assets/images/hamdelBg.webp"
                width={96}
                height={96}
                className="!object-cover"
                hasPreviewImage
                previewImageShape="circle"
              />
            </div>
            <div
              className="overflow-hidden rounded-full flex bg-impo_White w-24 h-24"
              style={{ border: '4px solid #f2eeee' }}
            >
              <CustomImage
                src="/assets/images/hamdelBg.webp"
                width={96}
                height={96}
                className="!object-cover"
                hasPreviewImage
                previewImageShape="circle"
              />
            </div>
          </div>
        </div>
        <div className="bg-impo_White rounded-[32px] ">div</div>
        <div className="bg-impo_White rounded-[32px] ">div</div>{' '}
        <div className="bg-impo_White rounded-[32px] ">div</div>
      </div>
    </>
  );
};

export default PartnerPage;
