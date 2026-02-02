'use client';

import { useState } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import moment from 'moment-jalaali';
import { useRouter } from 'next/navigation';

import useCalendarDateFormat from '../../__hooks__/useCalendarDateFormat';
import MemoryHeader from './MemoryHeader';
import TextareaInput from './TextareaInput';
import UploadInput from './UploadInput';
import UploadModal from './UploadModal';
import useFileUpload from './__hooks__/useFileUpload';
import useSubmit from './__hooks__/useSubmit';
import { initialValue } from './constants';
import { InputValueType } from './type';

const CreateMemoryPage = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<InputValueType>(initialValue);
  const { createMemoryHandler, isLoading } = useSubmit();
  const gregorianMoment = moment(new Date().toISOString(), 'YYYY-MM-DD');
  const { currentDate } = useCalendarDateFormat({ date: gregorianMoment.format('YYYY-MM-DD') });

  const onChangeHandler = (v: string, name: string) => {
    setInputValue({ ...inputValue, [name]: v });
  };

  const successHandler = (v: string) => {
    onChangeHandler(v, 'fileName');
    router.back();
  };

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v) => successHandler(v),
    api: 'file/private/',
    method: 'PUT',
  });

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="ثبت خاطره" paddingTop={0}>
      <div
        className="flex relative z-0 flex-col  gap-3 pb-6 min-h-screen px-3"
        style={{ paddingTop: HEADER_HEIGHT + 16 }}
      >
        <div className="flex items-center w-full justify-center">
          <CustomTypography fontSize="Title_Small" className="text-impo_Primary_Primary text-center">
            ایجاد خاطره جدید
          </CustomTypography>
        </div>

        <MemoryHeader currentDate={`امروز ${currentDate} `} />

        <UploadInput
          fileName={inputValue.fileName}
          valuesHandler={onChangeHandler}
          uploadImageLoading={uploadImageLoading}
        />
        <TextareaInput onchange={onChangeHandler} value={inputValue} />

        <footer className="mt-auto">
          <CustomButton
            className="px-6 py-2 "
            onClick={() => createMemoryHandler(inputValue)}
            isDisable={!inputValue.title}
            isLoading={isLoading}
          >
            <CustomTypography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
              ثبت خاطره
            </CustomTypography>
          </CustomButton>
        </footer>
      </div>
      <UploadModal fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
    </MainPageLayout>
  );
};

export default CreateMemoryPage;
