import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const BannerSupport = () => {
  return (
    <CustomLink
      href={'tel:09157097500'}
      className="flex items-center justify-center w-full h-20 py-4 px-3 bg-impo_Pink_500 !text-impo_White z-10 text-center fixed left-0 right-0 bottom-0"
    >
      <CustomTypography fontSize="Lable_Large">
        در صورت مشکل در فرآیند ورود یا ثبت نام از ساعت ۸ الی ۲۲ با شماره 09157097500 تماس بگیرید
      </CustomTypography>
    </CustomLink>
  );
};

export default BannerSupport;
