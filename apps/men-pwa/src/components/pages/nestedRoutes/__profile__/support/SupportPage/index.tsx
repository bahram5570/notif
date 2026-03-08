'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import SupportLinkGenerator from './SupportLinkGenerator';

const SupportPage = () => {
  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript="پشتیبانی"
      className="flex flex-col gap-4 px-4 bg-impo_Neutral_Surface"
    >
      <SupportLinkGenerator
        title="تماس تلفنی"
        discription="جهت ارائه شکایات و گزارش‌ها میتونید از ساعت 9 تا 21 تماس بگیرید"
        supportPhone={true}
        typeLink="external"
      />
    </MainPageLayout>
  );
};

export default SupportPage;
