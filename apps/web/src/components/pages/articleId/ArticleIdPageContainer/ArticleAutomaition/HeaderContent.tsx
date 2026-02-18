import autoArticleImg from '@assets/images/autoArticleImg.webp';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { HeaderContentProps } from './types';

const HeaderContent = ({ title, subtitle }: HeaderContentProps) => {
  return (
    <>
      <div className="grid gap-y-1">
        <CustomTypography fontSize="Title_Small" className="!text-white">
          {title}
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="!text-white">
          {subtitle}
        </CustomTypography>
      </div>
      <CustomImage alt="image" src={autoArticleImg} width={105} />
    </>
  );
};

export default HeaderContent;
