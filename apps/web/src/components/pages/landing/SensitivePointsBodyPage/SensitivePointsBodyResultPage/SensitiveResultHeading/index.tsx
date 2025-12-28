import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { SensitiveResultHeadingPropsType } from './type';

const SensitiveResultHeading = ({ imageHeader, title }: SensitiveResultHeadingPropsType) => {
  return (
    <>
      <div
        className="relative flex justify-center items-end lg:[clip-path:ellipse(120%_80%_at_50%_100%)] [clip-path:ellipse(120%_90%_at_50%_100%)] min-h-[200px] lg:max-h-96 scale-y-[-1] !bg-repeat !bg-cover"
        style={{
          background:
            "url('/assets/images/sensitive/bg.webp'),linear-gradient(135deg, rgba(186, 39, 255, 0.2), rgba(133, 25, 218, 0.2))",
        }}
      >
        <CustomImage alt={title} src={imageHeader} height={0} width={500} className="scale-y-[-1]  pt-4 px-4" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-full lg:-translate-y-[144%]  w-full flex px-4 ">
        <div className="rounded-2xl border border-impo_Success_Success  flex flex-col justify-center items-center h-24 w-full px-4 bg-[#DEFAEB] z-10">
          <CustomTypography fontSize="Body_Medium">نتیجه تست شما:</CustomTypography>
          <div className="w-full h-0 border border-[#35353512] rotate-180 mt-2 mb-4 " />
          <CustomTypography fontSize="Title_Small">{title}</CustomTypography>
        </div>
      </div>
    </>
  );
};

export default SensitiveResultHeading;
