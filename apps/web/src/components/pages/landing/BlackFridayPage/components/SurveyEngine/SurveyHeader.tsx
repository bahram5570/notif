'use client';

import { FC } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

import GoBack from '../GoBack';

type Props = {
  step: number;
  back: () => void;
  title: string;
};

const SurveyHeader: FC<Props> = ({ step, back, title }) => {
  return (
    <>
      {step > 0 ? <GoBack onClick={back} /> : <GoBack />}
      <CustomTypography className="mt-9 mb-7 text-center" tagType="h3" fontSize="Title_Small">
        {title}
      </CustomTypography>
    </>
  );
};

export default SurveyHeader;
