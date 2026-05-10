'use client';

import { useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import LandingFaqGenerator from './LandingFaqGenerator';
import { LandingFaqTypes } from './types';

const LandingFaq = ({ title, list }: LandingFaqTypes) => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="w-full md:w-11/12 lg:w-7/12 px-4 md:px-0 mx-auto flex flex-col items-center">
      {title && (
        <CustomTypography tagType="h2" fontSize="Title_Medium" className="text-impo_Neutral_OnBackground mb-4 lg:mb-6">
          {title}
        </CustomTypography>
      )}

      <div className="w-full flex flex-col gap-4">
        {list.map((item, index) => (
          <LandingFaqGenerator
            key={index}
            title={item.title}
            description={item.description}
            isSelected={index === selectedItem}
            selectHandler={() => setSelectedItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingFaq;
