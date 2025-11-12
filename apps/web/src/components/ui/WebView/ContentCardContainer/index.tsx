import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { ContentCardContainerPropsType } from './type';

const ContentCardContainer = ({ bgUrl, imageUrl, title }: ContentCardContainerPropsType) => {
  const background = `url(${bgUrl})`;

  return (
    <div
      className="rounded-xl  bg-cover bg-center"
      style={{ backgroundColor: COLORS_LIST.Neutral_Background, backgroundImage: background }}
    >
      <CustomTypography fontSize="Body_Medium" color="Neutral_OnBackground" className="px-3 pt-4">
        {title}
      </CustomTypography>
      <CustomImage src={imageUrl} alt={title} width={984} height={1143} className="w-full h-auto p-4" />
    </div>
  );
};

export default ContentCardContainer;
