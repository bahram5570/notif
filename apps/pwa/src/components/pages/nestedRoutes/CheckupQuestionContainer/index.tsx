'use client';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import CheckListCheckupQuestion from './CheckListCheckupQuestion';
import CheckupQuestionContainerSkeleton from './CheckupQuestionContainerSkeleton';
import DateCheckupQuestion from './DateCheckupQuestion';
import InformationCheckupQestion from './InformationCheckupQestion';
import QuestionCheckup from './QuestionCheckup';
import useGetData from './__hooks__/useGetData';

const CheckupQuestionContainer = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const pregnancyWeek = getQueryParams('week');
  const pregnancyTitle = getQueryParams('title');
  const pregnancyCheckupType = getQueryParams('checkupType');

  const { data, isLoading } = useGetData({ type: Number(pregnancyCheckupType), week: Number(pregnancyWeek) });

  const hasData = data && data.data;

  return (
    <MainPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript={pregnancyTitle || ''}
      className="px-4 bg-impo_Neutral_Surface"
    >
      {isLoading && <CheckupQuestionContainerSkeleton />}

      {!isLoading && hasData && (
        <div className="flex flex-col gap-3 min-h-[100dvh] pb-6" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
          <InformationCheckupQestion information={data.data.information} />
          <DateCheckupQuestion from={data.data.from} to={data.data.to} />
          <CheckListCheckupQuestion checkList={data.data.checkList} />
          <QuestionCheckup question={data.data.question} />
        </div>
      )}
    </MainPageLayout>
  );
};

export default CheckupQuestionContainer;
