'use client';

import inviteGift from '@assets/lottie/inviteGift.json';

import Dark_Typography from '@components/ui/Dark_Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { LottieJson } from '@lib/LottieJson';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import CopyIdentifictionCodeSection from './CopyIdentifictionCodeSection';
import IdentificationCodeSkeleton from './IdentifictionCodeSkeleton';
import ShareIdentifictionCodeSection from './ShareIdentifictionCodeSection';
import useCopy from './__hooks__/useCopy';

const IdentifictionCodePage = () => {
  const { isCopied, copyToClipboard } = useCopy();
  const { data, isLoading } = useGetProfileData();

  return (
    <WomenPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="کد معرف"
      className="bg-impo_Surface_InverseOnSurface"
    >
      {isLoading && <IdentificationCodeSkeleton />}
      {!isLoading && data && (
        <div className="flex relative z-0 flex-col items-center gap-6  h-dvh justify-center bg-impo_Surface_InverseOnSurface">
          <div className="flex flex-col justify-center items-center w-3/4 gap-9">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex flex-col items-center justify-center gap-7">
                <div className="flex flex-col items-center justify-center gap-6">
                  <LottieJson
                    animationData={inviteGift}
                    style={{ maxWidth: '200px' }}
                    loop={isCopied}
                    className="pointer-events-none w-full"
                  />
                  <Dark_Typography fontSize="Body_Medium" className=" text-center text-impo_Surface_OnSurfaceVariant">
                    {`${data?.name} عزیز،با معرفی ایمپو به دوستانت و هر نصب اپلیکیشن با کد معرف تو،10 روز اشتراک رایگان از ایمپو
                هدیه بگیر`}
                  </Dark_Typography>
                  <CopyIdentifictionCodeSection interfaceCode={data.interfaceCode} copyToClipboard={copyToClipboard} />
                </div>
                <ShareIdentifictionCodeSection interfaceShareText={data.interfaceShareText} />
              </div>
            </div>
          </div>
        </div>
      )}
    </WomenPageLayout>
  );
};

export default IdentifictionCodePage;
