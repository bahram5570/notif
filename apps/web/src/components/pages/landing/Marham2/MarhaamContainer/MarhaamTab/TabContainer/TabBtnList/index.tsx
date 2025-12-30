import CustomButton2 from '@components/ui/CustomButton2';

import { TAB_LIST } from '../constants';
import { TabBtnListPropsType } from './type';

const TabBtnList = ({ activeTab, handleActiveTab }: TabBtnListPropsType) => {
  return (
    <div className="flex sticky top-[70px] z-20 sm:relative sm:top-0 flex-wrap  gap-2 p-[10px] w-full bg-impo_White">
      {TAB_LIST.map((tab, index) => (
        <CustomButton2
          // fontSize={activeTab === tab.id ? 'Lable_Large' : 'Body_Medium'}
          key={index}
          fontSize="Body_Medium"
          onClick={() => handleActiveTab(tab.id)}
          className={`!px-6 !py-3 !h-12 !w-fit !rounded-[100px] ${activeTab === tab.id ? '!text-impo_Primary_Primary !bg-impo_Primary_PrimaryContainer border-impo_White' : '!text-impo_Neutral_OnSurface !bg-impo_White border-impo_Surface_OutlineVariant'} `}
          style={{
            border: `1px solid `,
          }}
        >
          {tab.label}
        </CustomButton2>
      ))}
    </div>
  );
};

export default TabBtnList;
