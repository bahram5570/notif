import { useMemo } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Button from '@components/ui/Dark_Button';

import AddToHomeScreenContainer from './AddToHomeScreenContainer';
import useAddToHomeConstants from './__hooks__/useAddToHomeConstants';
import { AddToHomeScreenMainContentTypes } from './types';

const AddToHomeScreenMainContent = ({ onClick, operatingSystem }: AddToHomeScreenMainContentTypes) => {
  const { mainData } = useAddToHomeConstants();

  const data = useMemo(() => {
    return mainData[operatingSystem];
  }, [operatingSystem]);

  return (
    <AddToHomeScreenContainer className="pt-[200px]">
      <>
        <data.icon className="absolute -top-9 left-4 w-14 h-auto -z-20 fill-impo_Pink_50" />

        <CustomTypography fontSize="Title_Medium" className="text-impo_Pink_700">
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

        <Dark_Button onClick={onClick} fontSize="Lable_Large">
          {data.btnScript}
        </Dark_Button>
      </>
    </AddToHomeScreenContainer>
  );
};

export default AddToHomeScreenMainContent;
