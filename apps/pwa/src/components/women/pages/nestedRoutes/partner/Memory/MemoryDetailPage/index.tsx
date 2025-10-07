'use client';

import { useEffect, useState } from 'react';

import { gregorianFarsiScriptDate, jalaaliScriptDate } from '@utils/dates';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import useTheme from '@hooks/useTheme';
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
  const { colors } = useTheme();
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
    <WomenPageLayout rightElement="BackButton" rightElementScript="مرور خاطرات">
      {isLoading && <MemoryDetailSkeleton />}
      {!isLoading && (
        <div className="flex flex-col relative z-0  gap-3 pb-16">
          <MemoryHeader currentDate={currentDate} />

          <div className="relative">
            <CustomImage src={memoryImage} />
            <div className="rounded-md py-1 px-4 absolute bottom-0 m-3" style={{ background: colors.Pink_50 }}>
              <Typography scale="Lable" size="Medium" color="PrimaryWoman_Primary">
                {`ایجاد شده توسط ${memoryData.fromMan ? partnerName?.name : 'شما'}`}
              </Typography>
            </div>
          </div>

          <div className="flex flex-col justify-end items-end p-3">
            <div className="flex gap-2 items-center">
              <Typography scale="Lable" size="Large">
                {memoryData.title}
              </Typography>
              <div className="w-2 h-2 rounded-full" style={{ background: colors.PrimaryWoman_Primary }}></div>
            </div>

            <Typography scale="Body" size="Small" textAlign="justify">
              {memoryData.text}
            </Typography>
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
    </WomenPageLayout>
  );
};

export default MemoryDetailPage;
