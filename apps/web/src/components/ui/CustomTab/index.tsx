'use client';

import CustomButton2 from '../CustomButton2';
import { CustomTabPropsType } from './type';

const CustomTab = ({ children, handleActiveTab, tabList, activeTab }: CustomTabPropsType) => {
  return (
    <div className="w-full max-w-[500px] flex flex-col items-center mx-auto ">
      <div className="flex justify-center sticky top-0 p-[10px] w-full bg-impo_White">
        {tabList.map((tab) => (
          <CustomButton2
            fontSize={activeTab === tab.id ? 'Lable_Medium' : 'Body_Small'}
            onClick={() => handleActiveTab(tab.id)}
            className={`!rounded-none ${activeTab === tab.id ? '!text-impo_Pink_500 !border-b-impo_Primary_Primary' : '!text-impo_Grey_300'} !bg-impo_White !border-impo_White`}
            key={tab.id}
            style={{
              borderBottom: activeTab === tab.id ? `1px solid` : 'none',
            }}
          >
            {tab.label}
          </CustomButton2>
        ))}
      </div>

      {children}
    </div>
  );
};

export default CustomTab;
