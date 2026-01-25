'use client';

import WomenPageLayout from '@components/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';

import EditActivationQuestions from './EditActivationQuestions';
import EditActivationSkeleton from './EditActivationSkeleton';
import useGetData from './__hooks__/useGetData';

const EditActivationPage = () => {
  const { isLoading, data } = useGetData();

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="ویرایش اطلاعات هدف نصب" paddingTop={0}>
      <div
        style={{ paddingTop: HEADER_HEIGHT + 24 }}
        className="w-full min-h-[100dvh] flex flex-col gap-4 px-4 pb-6 bg-impo_Surface_SurfaceVariant dark:bg-impo_Neutral_Background"
      >
        {isLoading && <EditActivationSkeleton />}
        {!isLoading && data && <EditActivationQuestions questions={data.questions} />}
      </div>
    </WomenPageLayout>
  );
};

export default EditActivationPage;
