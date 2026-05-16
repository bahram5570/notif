'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { SharePartnerCode } from '@repo/core/components/SharePartnerCode';
import { RefreshPartnerCode } from '@repo/core/components/partner/RefreshPartnerCode';
import { StartPartnerInput } from '@repo/core/components/partner/StartPartnerInput';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useCreate from './__hooks__/useCreate';
import useGetData from './__hooks__/useGetdata';

const StartPageContainer = () => {
  const { isLoading, userCodeInfo, userCodeInfoHandler } = useGetData();
  const { createHandler, isLoading: createLoading } = useCreate();

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="شروع همدلی" paddingBottom={30}>
      <div className="relative w-full aspect-[16/9]">
        <CustomImage_NEW src="/assets/images/partner-start.webp" className="px-6 dark:hidden block" fill />
        <CustomImage_NEW src="/assets/images/partner-start-dark.webp" className="px-6 hidden dark:block" fill />
      </div>

      <div className="flex flex-col gap-4 items-center justify-center py-5 px-6">
        <CustomTypography fontSize="Body_Large" className="text-center text-impo_Neutral_OnBackground">
          شماره موبایل، ایمیل یا کد همدلی پارتنرت رو اینجا وارد کن تا درخواست همدلیت براش ارسال بشه.
        </CustomTypography>
        <StartPartnerInput createHandler={createHandler} isLoading={createLoading} />
        <div className="border-t-[1px] border-t-impo_Surface_SurfaceVariant p-4">
          <CustomTypography fontSize="Body_Large" className="text-center text-impo_Neutral_OnBackground ">
            روش دوم هم اینه که کد اختصاصیت رو برای پارتنرت بفرستی
          </CustomTypography>
        </div>

        <div className="flex justify-center flex-col gap-4">
          <RefreshPartnerCode
            isLoading={isLoading}
            partnerCode={userCodeInfo.code}
            callBackHandler={userCodeInfoHandler}
          />
          <SharePartnerCode shareText={userCodeInfo.shareText} text="ارسال کد برای همدل" />
        </div>
      </div>
    </MainPageLayout>
  );
};

export default StartPageContainer;
