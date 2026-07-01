import { useMemo } from 'react';

import { CustomButton } from '../../../components/ui/CustomButton';
import { CustomTypography } from '../../../components/ui/CustomTypography';

import { useSystem } from '../../../hooks/useSystem';
import AddToHomeScreenContainer from './AddToHomeScreenContainer';
import useAddToHomeConstants from './__hooks__/useAddToHomeConstants';
import { AddToHomeScreenMainContentTypes } from './types';

const AddToHomeScreenMainContent = ({ onClick, operatingSystem }: AddToHomeScreenMainContentTypes) => {
  const { appName } = useSystem();
  const { mainData } = useAddToHomeConstants();

  const data = useMemo(() => {
    return mainData[operatingSystem];
  }, [operatingSystem]);

  return (
    <AddToHomeScreenContainer className="pt-[200px]">
      <>
        <data.icon
          className={`
                      absolute 
                      -top-9 
                      left-4 
                      w-14 
                      h-auto 
                      -z-20 
                      ${appName === 'MEN_PWA' ? 'fill-impo_Blue_50' : 'fill-impo_Pink_50'}
                    `}
        />

        <CustomTypography
          fontSize="Title_Medium"
          className={`${appName === 'MEN_PWA' ? 'text-impo_Blue_700' : 'text-impo_Pink_700'} `}
        >
          {data.title}
        </CustomTypography>

        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground pt-2 pb-4">
          {data.subTitle}
        </CustomTypography>

        <div className="min-w-[215px] flex flex-col items-center gap-3 pb-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="w-full border-[1px] border-impo_Surface_OutlineVariant rounded-full flex justify-center p-1"
            >
              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                {item}
              </CustomTypography>
            </div>
          ))}
        </div>

        <CustomButton
          onClick={onClick}
          fontSize="Lable_Large"
          className={`
                      ${
                        appName === 'MEN_PWA'
                          ? '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan'
                          : '!bg-impo_Primary_Primary !border-impo_Primary_Primary'
                      }
                    `}
        >
          {data.btnScript}
        </CustomButton>
      </>
    </AddToHomeScreenContainer>
  );
};

export default AddToHomeScreenMainContent;
