import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { StoryItemPropsType } from './type';

const StoryItem = ({ title, imageUrl }: StoryItemPropsType) => {
  return (
    <div className="flex flex-col  items-center gap-2">
      <div className="w-16 h-16 rounded-full" style={{ border: `1px solid ${COLORS_LIST.Primary_Primary}` }}>
        <CustomImage src={imageUrl} alt={title} width={984} height={1143} className="w-full h-auto" />
      </div>

      <CustomTypography fontSize="Body_Small" color="Neutral_OnBackground">
        {title}
      </CustomTypography>
    </div>
  );
};

export default StoryItem;
