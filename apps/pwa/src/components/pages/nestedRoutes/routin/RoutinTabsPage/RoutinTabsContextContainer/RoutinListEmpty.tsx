import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const RoutinListEmpty = ({ title }: { title?: string }) => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="w-full flex flex-col justify-center items-center gap-4 pt-10">
        <CustomImage src="/assets/images/emptyStateRoutinTab.webp" width={168} height={123} />
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {title || 'هنوز برنامه ای برای نمایش وجود نداره'}
        </CustomTypography>
      </div>
    </div>
  );
};

export default RoutinListEmpty;
