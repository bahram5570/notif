'use client';

import { useEffect, useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { DateHeaderSection } from '@repo/core/components/partner/DateHeaderSection';
import { MemoryDetailOptions } from '@repo/core/components/partner/MemoryDetailOptions';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { gregorianFarsiScriptDate, jalaaliScriptDate } from '@repo/core/utils/dates';

import { useCulture } from '@repo/core/hooks/useCulture';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import moment from 'moment-jalaali';

import { PartnerDetailResponsePropsType } from '../MemoryPage/__hooks__/useGetPartnerName/type';
import Comment from './Comment';
import useGetData from './__hooks__/useGetData';

const MemoryDetailPage = () => {
  const { getQuery } = useCustomReactQuery(['partnerDetail']);

  const partnerDetail = getQuery<PartnerDetailResponsePropsType>({ queryKey: ['partnerDetail'] });
  const [currentDate, setCurrentDate] = useState('');
  const { memoryData, resteMemory } = useGetData();
  const { culture } = useCulture();

  useEffect(() => {
    if (memoryData) {
      const gregorianMoment = moment(memoryData.time, 'YYYY-MM-DD');

      if (culture.calendarType === CalendarTypeEnum.Gregorian) {
        const gregorianDate = gregorianMoment.format('YYYY-MM-DD');
        const gregorianFarsMonth = gregorianFarsiScriptDate(gregorianDate);

        setCurrentDate(gregorianFarsMonth);
      }

      if (culture.calendarType === CalendarTypeEnum.Jalali) {
        const jalaaliMoment = gregorianMoment.format('jYYYY/jMM/jDD');
        const jalaaliMonth = jalaaliScriptDate(jalaaliMoment);

        setCurrentDate(jalaaliMonth);
      }
    }
  }, [culture.calendarType, memoryData]);

  const memoryImage = memoryData?.fileName || '/assets/shared/images/partner.webp';

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="مرور خاطرات" leftElement1="Profile">
      {memoryData && (
        <>
          <DateHeaderSection currentDate={currentDate} />
          <div className="relative">
            <CustomImage src={memoryImage} />
            <div className="rounded-md py-1 px-4 absolute bottom-0 m-3 bg-impo_Blue_50 dark:bg-impo_Blue_900">
              <CustomTypography fontSize="Lable_Medium" className="text-impo_PrimaryMan_PrimaryMan">
                {`ایجاد شده توسط ${!memoryData.fromMan ? partnerDetail?.name : 'شما'}`}
              </CustomTypography>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end p-3">
            <div className="flex gap-2 items-center">
              <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
                {memoryData.title}
              </CustomTypography>

              <div className="w-2 h-2 rounded-full bg-impo_PrimaryMan_PrimaryMan" />
            </div>
            <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground text-justify">
              {memoryData.text}
            </CustomTypography>
          </div>
          {memoryData.textPartner && (
            <div className=" p-3">
              <Comment
                textPartner={memoryData.textPartner}
                fromMan={memoryData.fromMan}
                partnerName={partnerDetail?.name}
              />
            </div>
          )}

          <MemoryDetailOptions
            memoryId={memoryData.id}
            fromMan={memoryData.fromMan}
            validPartner={memoryData.validPartner}
            callBack={resteMemory}
            isMan={true}
          />
        </>
      )}
    </MainPageLayout>
  );
};

export default MemoryDetailPage;
