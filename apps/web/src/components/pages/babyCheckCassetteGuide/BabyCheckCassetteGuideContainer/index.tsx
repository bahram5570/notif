'use client';

import { useState } from 'react';

import CustomTab from '@components/ui/CustomTab';

import BabyCheckCassetteGuide from './BabyCheckCassetteGuide';
import PhotoGuide from './PhotoGuide';
import { TAB_LIST } from './constants';
import { BabyCheckCassetteGuideTabEnum } from './enum';

const BabyCheckCassetteGuideContainer = () => {
  const [activeTab, setActiveTab] = useState(BabyCheckCassetteGuideTabEnum.PhotoGuide);

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab as BabyCheckCassetteGuideTabEnum);
  };

  return (
    <CustomTab activeTab={activeTab} handleActiveTab={handleActiveTab} tabList={TAB_LIST}>
      <>
        {activeTab === BabyCheckCassetteGuideTabEnum.PhotoGuide && <PhotoGuide />}
        {activeTab === BabyCheckCassetteGuideTabEnum.BabyCheckCassetteGuide && <BabyCheckCassetteGuide />}
      </>
    </CustomTab>
  );
};

export default BabyCheckCassetteGuideContainer;
