'use client';

import InviteGift from '@assets/icons/inviteGift.svg';
import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import CopyIdentifictionCodeSection from './CopyIdentifictionCodeSection';
import IdentificationCodeSkeleton from './IdentifictionCodeSkeleton';
import ShareIdentifictionCodeSection from './ShareIdentifictionCodeSection';
import useCopy from './__hooks__/useCopy';

const IdentifictionCodePage = () => {
  const { isCopied, copyToClipboard } = useCopy();
  const { data, isLoading } = useGetProfileData();

  return (
    <MainPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="کد معرف"
      className="bg-impo_Neutral_Background"
    >
      {isLoading && <IdentificationCodeSkeleton />}
      {!isLoading && data && (
        <div className="flex relative z-0 flex-col items-center gap-6  h-dvh justify-center bg-impo_Neutral_Background">
          <div className="flex flex-col justify-center items-center w-3/4 gap-9">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex flex-col items-center justify-center gap-7">
                <div className="flex flex-col items-center justify-center gap-6">
                  <InviteGift />
                  <CustomTypography fontSize="Body_Medium" className=" text-center text-impo_Surface_OnSurfaceVariant">
                    با معرفی ایمپو به بقیه، دوستانت رو هم ایمپویی کن
                  </CustomTypography>
                  <CopyIdentifictionCodeSection interfaceCode={'135413'} copyToClipboard={copyToClipboard} />
                </div>
                <ShareIdentifictionCodeSection interfaceShareText={'asdasdasd'} />
              </div>
            </div>
          </div>
        </div>
      )}
    </MainPageLayout>
  );
};

export default IdentifictionCodePage;
