import { useMemo } from 'react';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import AddToHomeScreenContainer from './AddToHomeScreenContainer';
import useAddToHomeConstants from './__hooks__/useAddToHomeConstants';
import { AddToHomeScreenMainContentTypes } from './types';

const AddToHomeScreenMainContent = ({ onClick, operatingSystem }: AddToHomeScreenMainContentTypes) => {
  const { colors } = useTheme();
  const { mainData } = useAddToHomeConstants();

  const data = useMemo(() => {
    return mainData[operatingSystem];
  }, [operatingSystem]);

  return (
    <AddToHomeScreenContainer className="pt-[200px]">
      <>
        <data.icon className="absolute -top-9 left-4 w-14 h-auto -z-20" style={{ fill: colors.Pink_50 }} />

        <Typography scale="Title" size="Medium" color="Pink_700">
          {data.title}
        </Typography>

        <Typography scale="Body" size="Medium" color="Neutral_OnBackground" className="pt-2 pb-4">
          {data.subTitle}
        </Typography>

        <div className="min-w-[215px] flex flex-col items-center gap-3 pb-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              style={{ borderColor: colors.Surface_OutlineVariant }}
              className="w-full border-[1px] rounded-full flex justify-center p-1"
            >
              <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
                {item}
              </Typography>
            </div>
          ))}
        </div>

        <Button color="primary" size="large" variant="fill" onClick={onClick}>
          {data.btnScript}
        </Button>
      </>
    </AddToHomeScreenContainer>
  );
};

export default AddToHomeScreenMainContent;
