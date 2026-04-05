'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import SupportLinkGenerator from './SupportLinkGenerator';
import useGetSupportInfo from './SupportLinkGenerator/__hooks__/useGetSupportInfo';
import SupportPageSkeleton from './SupportPageSkeleton';

const SupportPage = () => {
  const { supportInfo } = useGetSupportInfo();

  if (!supportInfo) return <SupportPageSkeleton />;

  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript="پشتیبانی"
      className="flex flex-col gap-4 px-4 bg-impo_Neutral_Surface"
    >
      <SupportLinkGenerator title={supportInfo.description} description={supportInfo.title} items={supportInfo.items} />
      <SupportLinkGenerator
        title="تماس تلفنی"
        description="جهت ارائه شکایات و گزارش‌ها میتونید از ساعت 9 تا 21 تماس بگیرید"
        phone={supportInfo.phone}
      />
    </MainPageLayout>
  );
};

export default SupportPage;
