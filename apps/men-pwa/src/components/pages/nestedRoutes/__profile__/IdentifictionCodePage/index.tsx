'use client';

import InviteGift from '@assets/icons/inviteGift.svg';
import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CopyIdentifictionCodeSection from './CopyIdentifictionCodeSection';
import IdentificationCodeSkeleton from './IdentifictionCodeSkeleton';
import ShareIdentifictionCodeSection from './ShareIdentifictionCodeSection';
import useCopy from './__hooks__/useCopy';
import useGetLoginInfo from './__hooks__/useGetLoginInfo';

const IdentifictionCodePage = () => {
  const { copyToClipboard } = useCopy();
  const { isLoading, loginInfo } = useGetLoginInfo();

  return (
    <MainPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="کد معرف"
      className="bg-impo_Neutral_Background"
    >
      {isLoading && <IdentificationCodeSkeleton />}
      {!isLoading && loginInfo && (
        <div className="flex relative z-0 flex-col items-center gap-6  h-dvh justify-center bg-impo_Neutral_Background">
          <div className="flex flex-col justify-center items-center w-3/4 gap-9">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex flex-col items-center justify-center gap-7">
                <div className="flex flex-col items-center justify-center gap-6">
                  <InviteGift />
                  <CustomTypography fontSize="Body_Medium" className=" text-center text-impo_Surface_OnSurfaceVariant">
                    با معرفی ایمپو به بقیه، دوستانت رو هم ایمپویی کن
                  </CustomTypography>
                  <CopyIdentifictionCodeSection
                    interfaceCode={loginInfo.interfaceCode}
                    copyToClipboard={copyToClipboard}
                  />
                </div>
                <ShareIdentifictionCodeSection interfaceShareText={loginInfo.interfaceText} />
              </div>
            </div>
          </div>
        </div>
      )}
    </MainPageLayout>
  );
};

export default IdentifictionCodePage;
