import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { PageIconsProps } from './types';

const PageIcons = ({ Icon, title, isSelected, selectedHandler }: PageIconsProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={selectedHandler}>
      <Icon
        className={`w-7 h-auto ${isSelected ? 'stroke-impo_Neutral_OnBackground' : 'stroke-impo_Surface_Outline'}`}
      />

      <CustomTypography
        fontSize="Body_Small"
        className={`select-none ${isSelected ? 'text-impo_Neutral_OnBackground' : 'text-impo_Surface_Outline'}`}
      >
        {title}
      </CustomTypography>
    </div>
  );
};

export default PageIcons;
