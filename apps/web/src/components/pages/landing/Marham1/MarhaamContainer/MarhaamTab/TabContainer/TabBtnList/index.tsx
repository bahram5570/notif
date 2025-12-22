import CustomButton from '@components/ui/CustomButton';

import { TAB_LIST } from '../constants';
import { TabBtnListPropsType } from './type';

const TabBtnList = ({ activeTab, handleActiveTab }: TabBtnListPropsType) => {
  return (
    <div className="flex sticky top-[70px] sm:relative z-20 sm:top-0 flex-wrap  gap-2 p-[10px] w-full bg-impo_White">
      {TAB_LIST.map((tab, index) => (
        <CustomButton
          varient="FREE_COLORS"
          // fontSize={activeTab === tab.id ? 'Lable_Large' : 'Body_Medium'}
          fontSize="Body_Medium"
          key={index}
          onClick={() => handleActiveTab(tab.id)}
          textColor=""
          backgroundColor=""
          borderColor=""
          className={`!px-6 !py-3 !h-12 !w-fit !rounded-[100px] ${activeTab === tab.id ? 'bg-impo_Primary_PrimaryContainer text-impo_Primary_Primary border-impo_White' : 'bg-impo_White text-impo_Neutral_OnSurface border-impo_Surface_OutlineVariant'} `}
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
