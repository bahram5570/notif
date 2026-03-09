'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { Loading } from '@repo/core/components/ui/Loading';

import SupportLinkGenerator from './SupportLinkGenerator';
import useGetSupportInfo from './SupportLinkGenerator/__hooks__/useGetSupportInfo';

const SupportPage = () => {
  const { supportInfo, isLoading } = useGetSupportInfo();

  if (!supportInfo) return;

  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript="پشتیبانی"
      className="flex flex-col gap-4 px-4 bg-impo_Neutral_Surface"
    >
      {isLoading && <Loading />}

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
