import InfoIcon from '@assets/icons/info.svg';
import MockupDrDownload from '@assets/images/mockupDrDownload.webp';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const DrDownloadPage = () => {
  const androidDownloadLink = 'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/apk/doctor_v1_1_0.apk';
  const iosWebAppLink = 'https://impodoctor.liara.run';

  return (
    <div className="w-full max-w-[500px] h-dvh px-4 relative dark:bg-none bg-gradient-to-b !from-[#EBC4F0] to-[#FFFFF]">
      <div className="mb-1 mt-10">
        <CustomTypography
          fontSize="Headline_Medium"
          tagType="h2"
          className="text-center !text-impo_Neutral_OnBackground"
        >
          متخصص عزیز ایمپو
        </CustomTypography>

        <CustomTypography
          fontSize="Body_Large"
          tagType="p"
          className="text-center mb-2 !text-impo_Neutral_OnBackground"
        >
          برای دسترسی به اپلیکیشن ایمپو دکتر، لطفا با توجه به نوع گوشیت یکی از موارد زیر رو انتخاب کن
        </CustomTypography>
      </div>
      <div className="mt-6 flex gap-x-4">
        <CustomLink
          href={androidDownloadLink}
          className="hover:opacity-80 duration-200 rounded-full w-full h-12 lg:h-[50px] flex items-center justify-center gap-2 bg-impo_Black"
        >
          <CustomTypography
            fontSize="Lable_Large"
            tagType="p"
            className="dark:!text-impo_Neutral_OnBackground !text-impo_Neutral_Surface"
          >
            دانلود مستقیم اندروید
          </CustomTypography>
        </CustomLink>
        <CustomLink
          href={iosWebAppLink}
          className="hover:opacity-80 duration-200 rounded-full w-full h-12 lg:h-[50px] flex items-center justify-center gap-2 bg-impo_Black"
        >
          <CustomTypography
            fontSize="Lable_Large"
            tagType="p"
            className="dark:!text-impo_Neutral_OnBackground !text-impo_Neutral_Surface"
          >
            نسخه وب اپ(iOS)
          </CustomTypography>
        </CustomLink>
      </div>
      <div className="mt-4 rounded-xl p-3 grid grid-flow-col align-top gap-x-1 dark:bg-impo_Neutral_Surface dark:border-none bg-[#FFF1E3] border border-[#FFC400]">
        <InfoIcon />
        <CustomTypography fontSize="Body_Large" tagType="p" className="text-right !text-impo_Neutral_OnBackground">
          <strong>نکته:</strong> اگر متخصص نیستی و یا قبلا در ایمپو ثبت‌نام نشدی، نمی‌تونی از اپلیکیشن ایمپو دکتر
          استفاده کنی
        </CustomTypography>
      </div>
      <CustomImage src={MockupDrDownload} alt="MockupDrDownload" className="mt-6" />
    </div>
  );
};

export default DrDownloadPage;
