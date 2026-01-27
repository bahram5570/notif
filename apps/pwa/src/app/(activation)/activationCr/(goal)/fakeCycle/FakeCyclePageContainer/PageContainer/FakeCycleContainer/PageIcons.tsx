import Dark_Typography from '@components/ui/Dark_Typography';

import { PageIconsProps } from './types';

const PageIcons = ({ Icon, title, isSelected, selectedHandler }: PageIconsProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={selectedHandler}>
      <Icon
        className={`w-7 h-auto ${isSelected ? 'stroke-impo_Neutral_OnBackground' : 'stroke-impo_Surface_Outline'}`}
      />

      <Dark_Typography
        fontSize="Body_Small"
        className={`select-none ${isSelected ? 'text-impo_Neutral_OnBackground' : 'text-impo_Surface_Outline'}`}
      >
        {title}
      </Dark_Typography>
    </div>
  );
};

export default PageIcons;
