import autoArticleImg from '@assets/images/autoArticleImg.webp';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const HeaderContent = () => {
  return (
    <>
      <div className="grid gap-y-1">
        <CustomTypography fontSize="Title_Small" className="!text-white">
          راهنمای کامل بارداری سریع
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="!text-white">
          از زمان طلایی اقدام تا افزایش باروری
        </CustomTypography>
      </div>
      <CustomImage alt="image" src={autoArticleImg} width={105} />
    </>
  );
};

export default HeaderContent;
