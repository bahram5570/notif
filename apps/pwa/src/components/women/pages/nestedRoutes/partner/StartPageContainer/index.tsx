'use client';

import { useEffect, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';

import PartnerCode from './PartnerCode';
import PhoneNumberInput from './PhoneNumberInput/PhoneNumberInput';
import ShareTextBtn from './ShareTextBtn';
import useGetData from './__hooks__/useGetdata';
import useRefreshCode from './__hooks__/useRefreshCode';
import { UserCodeInfoType } from './type';

const StartPageContainer = () => {
  const { data, isLoading } = useGetData();
  const { onRefreshCodeHandler, refreshLoading, refreshCode } = useRefreshCode();
  const [userCodeInfo, setUserCodeInfo] = useState<UserCodeInfoType>({ code: '', shareText: '' });

  useEffect(() => {
    if (data) {
      setUserCodeInfo({ code: data.code, shareText: data.shareText });
    }
  }, [data]);

  useEffect(() => {
    if (refreshCode) {
      setUserCodeInfo({ code: refreshCode.code, shareText: refreshCode.shareText });
    }
  }, [refreshCode?.code]);

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="شروع همدلی" paddingBottom={30}>
      <CustomImage src="/assets/images/partner-start.webp" className="px-6 dark:hidden block" />
      <CustomImage src="/assets/images/partner-start-dark.webp" className="px-6 hidden dark:block" />
      <div className="flex flex-col gap-4 items-center justify-center py-5 px-6">
        <PhoneNumberInput />
        <div className="border-t-[1px] border-t-impo_Surface_SurfaceVariant p-4">
          <Dark_Typography fontSize="Body_Large" className="text-center text-impo_Neutral_OnBackground ">
            روش دوم هم اینه که کد اختصاصیت رو برای پارتنرت بفرستی
          </Dark_Typography>
        </div>

        <div className="flex justify-center flex-col gap-4">
          <PartnerCode
            partnerCode={userCodeInfo.code}
            isLoading={isLoading}
            refreshLoading={refreshLoading}
            onRefreshCodeHandler={onRefreshCodeHandler}
          />
          <ShareTextBtn shareText={userCodeInfo.shareText || ''} />
        </div>
      </div>
    </WomenPageLayout>
  );
};

export default StartPageContainer;
