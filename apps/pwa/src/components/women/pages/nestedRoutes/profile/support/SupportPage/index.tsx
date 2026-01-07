'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';

import SupportLinkGenerator from './SupportLinkGenerator';
import { SUPPORT_LINK_LIST } from './constants';

const SupportPage = () => {
  return (
    <WomenPageLayout
      rightElement="BackButton"
      rightElementScript="پشتیبانی"
      className="flex flex-col gap-4 px-4 bg-impo_Grey_50"
    >
      {SUPPORT_LINK_LIST.map((link, index) => {
        return <SupportLinkGenerator {...link} key={index} />;
      })}
    </WomenPageLayout>
  );
};

export default SupportPage;
