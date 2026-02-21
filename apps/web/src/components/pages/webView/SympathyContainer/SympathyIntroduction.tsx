import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const SympathyIntroduction = () => {
  return (
    <div className="flex flex-col gap-3">
      <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
        تو همدلی ایمپو چه خبره؟ 👀
      </CustomTypography>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover rounded-[30px]"
        webkit-playsinline="true"
      >
        <source src="/assets/images/webView/sympathy/Comp 1_2.mov" />
      </video>
    </div>
  );
};

export default SympathyIntroduction;
