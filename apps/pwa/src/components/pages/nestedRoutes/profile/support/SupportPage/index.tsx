'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import SupportLinkGenerator from './SupportLinkGenerator';
import { SUPPORT_LINK_LIST } from './constants';

const SupportPage = () => {
  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript="پشتیبانی"
      className="flex flex-col gap-4 px-4 bg-impo_Neutral_Surface"
      paddingTop={HEADER_HEIGHT + 16}
    >
      {SUPPORT_LINK_LIST.map((link, index) => {
        return <SupportLinkGenerator {...link} key={index} />;
      })}
    </MainPageLayout>
  );
};

export default SupportPage;
