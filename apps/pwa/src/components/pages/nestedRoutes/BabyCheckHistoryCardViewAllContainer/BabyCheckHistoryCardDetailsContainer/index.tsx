'use client';

import WomenPageLayout from '@components/WomenPageLayout';
import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import useGetData from '../__hooks__/useGetData';
import TestGenerator from './TestGenerator/TestGenerator';
import { BabyCheckHistoryCardDetailsContainerProps } from './types';

const BabyCheckHistoryCardDetailsContainer = ({ detailsIndex }: BabyCheckHistoryCardDetailsContainerProps) => {
  const { data } = useGetData();

  const detailsList = data?.items[detailsIndex].details || [];

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript={data?.title}>
      <>
        {data && (
          <div className="w-full flex flex-col items-center px-4">
            <CustomImage src={data.icon} width={88} height={88} />

            <Dark_Typography
              fontSize="Body_Medium"
              className="pt-3 pb-4 px-5 text-impo_Neutral_OnBackground text-center"
            >
              اینجا جزئیات تست‍هایی که توی این چرخه انجام دادی رو بهت نشون میدیم
            </Dark_Typography>

            <div className="w-full flex flex-col items-center gap-2">
              {detailsList.map((item, index) => (
                <TestGenerator type={item.type} createTime={item.createTime} result={item.result} key={index} />
              ))}
            </div>
          </div>
        )}
      </>
    </WomenPageLayout>
  );
};

export default BabyCheckHistoryCardDetailsContainer;
