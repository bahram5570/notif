'use client';

import CustomButton from '../CustomButton';
import { CustomTabPropsType } from './type';

const CustomTab = ({ children, handleActiveTab, tabList, activeTab }: CustomTabPropsType) => {
  return (
    <div>
      <div className="w-full max-w-[500px] flex flex-col items-center mx-auto pt-4">
        <div className="flex justify-center sticky top-0 p-[10px] w-full bg-impo_White">
          {tabList.map((tab) => (
            <CustomButton
              textColor=""
              fontSize={activeTab === tab.id ? 'Lable_Medium' : 'Body_Small'}
              onClick={() => handleActiveTab(tab.id)}
              backgroundColor=""
              borderColor=""
              className={`!rounded-none ${activeTab === tab.id ? 'text-impo_Primary_Primary border-b-impo_Primary_Primary' : 'text-impo_Surface_Outline'} bg-impo_White border-impo_White`}
              varient="FREE_COLORS"
              key={tab.id}
              style={{
                borderBottom: activeTab === tab.id ? `1px solid` : 'none',
              }}
            >
              {tab.label}
            </CustomButton>
          ))}
        </div>

        {children}
      </div>
    </div>
  );
};

export default CustomTab;
