import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { ctaBannerService } from '@services/ctaBannerServices';

import CustomLink from '@components/ui/CustomLink';

const CallToActionSticky = async ({ name }: { name: string }) => {
  const { ctaData } = await ctaBannerService(name);

  if (!ctaData) return;

  return (
    <div
      className="
                  fixed 
                  w-full 
                  h-[64px] 
                  grid grid-cols-[65%,33%] 
                  items-center 
                  justify-between 
                  px-4 
                  shadow-2xl 
                  z-10 
                  bg-impo_Primary_Primary
                  lg:hidden 
                  right-0
                  bottom-20
                "
      style={{ background: 'linear-gradient(127deg, rgb(245, 134, 158) 0%, rgb(250, 204, 212) 100%' }}
    >
      <CustomTypography className="!text-impo_Black" fontSize="Lable_Medium">
        {ctaData.title}
      </CustomTypography>

      <CustomLink
        target="_blank"
        href={ctaData.link}
        className="rounded-full w-fit px-4 py-3 h-[38px] flex items-center justify-self-end justify-center relative z-10 bg-impo_Primary_Primary"
      >
        <CustomTypography fontSize="Lable_Medium" className="!text-impo_White">
          نصب ایمپو
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default CallToActionSticky;
