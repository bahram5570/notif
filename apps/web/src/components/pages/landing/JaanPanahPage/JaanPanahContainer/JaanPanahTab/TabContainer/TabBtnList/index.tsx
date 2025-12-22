import { useEffect, useState } from 'react';

import { JaanPanahCityConditionEnum } from '@components/pages/landing/JaanPanahPage/enum';
import CustomButton from '@components/ui/CustomButton';

import { TAB_LIST_DANGER, TAB_LIST_NORMAL } from '../constants';
import { TabBtnListPropsType } from './type';

const TabBtnList = ({ activeTab, handleActiveTab, cityCondition }: TabBtnListPropsType) => {
  const [tabList, setTabList] = useState(TAB_LIST_NORMAL);

  useEffect(() => {
    if (cityCondition === JaanPanahCityConditionEnum.Danger) {
      setTabList(TAB_LIST_DANGER);
    } else {
      setTabList(TAB_LIST_NORMAL);
    }
  }, [cityCondition]);

  return (
    <div className="flex  flex-wrap  gap-2 p-[10px] w-full bg-impo_White">
      {tabList.map((tab, index) => (
        <CustomButton
          key={index}
          varient="FREE_COLORS"
          fontSize="Body_Medium"
          onClick={() => handleActiveTab(tab.id)}
          textColor=""
          backgroundColor=""
          borderColor=""
          className={`!px-6 !py-3 !h-12 !w-fit !rounded-[100px] ${activeTab === tab.id ? 'bg-impo_Primary_PrimaryContainer text-impo_Primary_Primary border-impo_White' : 'bg-impo_White text-impo_Neutral_OnSurface border-impo_Surface_OutlineVariant'}`}
          style={{
            border: `1px solid `,
          }}
        >
          {tab.label}
        </CustomButton>
      ))}
    </div>
  );
};

export default TabBtnList;
