'use client';

import { useEffect, useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { gregorianFarsiScriptDate, jalaaliScriptDate } from '@repo/core/utils/dates';

import { useCulture } from '@repo/core/hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import moment from 'moment-jalaali';

import MemoryHeader from '../CreateMemoryPage/MemoryHeader';
import useGetPartnerName from '../MemoryPage/__hooks__/useGetPartnerName';
import Comment from './Comment';
import DeleteMemoryModal from './DeleteMemoryModal';
import MemoryDetailBtn from './MemoryDetailBtn';
import MemoryDetailSkeleton from './MemoryDetailSkeleton';
import useGetData from './__hooks__/useGetData';

const MemoryDetailPage = () => {
  const [currentDate, setCurrentDate] = useState('');
  const { culture } = useCulture();

  const { partnerName } = useGetPartnerName();

  const { memoryData, isLoading } = useGetData();

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

  if (!memoryData) {
    return;
  }

  const memoryImage = memoryData.fileName || '/assets/images/partner.webp';

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="مرور خاطرات">
      {isLoading && <MemoryDetailSkeleton />}
      {!isLoading && (
        <div className="flex flex-col relative z-0  gap-3 pb-16">
          <MemoryHeader currentDate={currentDate} />

          <div className="relative">
            <CustomImage src={memoryImage} />
            <div className="rounded-md py-1 px-4 absolute bottom-0 m-3 bg-impo_Pink_50 dark:bg-impo_Pink_900">
              <CustomTypography fontSize="Lable_Medium" className="text-impo_Primary_Primary">
                {`ایجاد شده توسط ${memoryData.fromMan ? partnerName?.name : 'شما'}`}
              </CustomTypography>
            </div>
          </div>

          <div className="flex flex-col justify-end items-end p-3">
            <div className="flex gap-2 items-center">
              <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
                {memoryData.title}
              </CustomTypography>

              <div className="w-2 h-2 rounded-full bg-impo_Primary_Primary" />
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
                partnerName={partnerName?.name}
              />
            </div>
          )}

          <MemoryDetailBtn
            memoryId={memoryData.id}
            fromMan={memoryData.fromMan}
            validPartner={memoryData.validPartner}
          />
        </div>
      )}

      <DeleteMemoryModal />
    </MainPageLayout>
  );
};

export default MemoryDetailPage;
