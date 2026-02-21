import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { StoryItemPropsType } from './type';

const StoryItem = ({ title, coverImage, isOpenHandler, currentIndexHandler, index }: StoryItemPropsType) => {
  const onClick = () => {
    isOpenHandler(true);
    currentIndexHandler(index);
  };

  return (
    <div className="flex flex-col  items-center gap-2" onClick={onClick}>
      <div className="w-16 h-16 rounded-full border-impo_Primary_Primary" style={{ border: `1px solid ` }}>
        <CustomImage src={coverImage} alt={title} width={984} height={1143} className="w-full h-auto" />
      </div>

      <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
        {title}
      </CustomTypography>
    </div>
  );
};

export default StoryItem;
