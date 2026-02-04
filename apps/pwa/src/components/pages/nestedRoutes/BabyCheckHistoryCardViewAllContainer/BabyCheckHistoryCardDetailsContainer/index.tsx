'use client';

import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import MainPageLayout from '@components/MainPageLayout';

import useGetData from '../__hooks__/useGetData';
import TestGenerator from './TestGenerator/TestGenerator';
import { BabyCheckHistoryCardDetailsContainerProps } from './types';

const BabyCheckHistoryCardDetailsContainer = ({ detailsIndex }: BabyCheckHistoryCardDetailsContainerProps) => {
  const { data } = useGetData();

  const detailsList = data?.items[detailsIndex].details || [];

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript={data?.title}>
      <>
        {data && (
          <div className="w-full flex flex-col items-center px-4">
            <CustomImage src={data.icon} width={88} height={88} />

            <CustomTypography
              fontSize="Body_Medium"
              className="pt-3 pb-4 px-5 text-impo_Neutral_OnBackground text-center"
            >
              اینجا جزئیات تست‍هایی که توی این چرخه انجام دادی رو بهت نشون میدیم
            </CustomTypography>

            <div className="w-full flex flex-col items-center gap-2">
              {detailsList.map((item, index) => (
                <TestGenerator type={item.type} createTime={item.createTime} result={item.result} key={index} />
              ))}
            </div>
          </div>
        )}
      </>
    </MainPageLayout>
  );
};

export default BabyCheckHistoryCardDetailsContainer;
