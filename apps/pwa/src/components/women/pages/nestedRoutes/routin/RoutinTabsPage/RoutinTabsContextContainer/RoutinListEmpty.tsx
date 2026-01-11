import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

const RoutinListEmpty = ({ title }: { title?: string }) => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="w-full flex flex-col justify-center items-center gap-4 pt-10">
        <CustomImage src="/assets/images/emptyStateRoutinTab.webp" width={168} height={123} />
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {title || 'هنوز برنامه ای برای نمایش وجود نداره'}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default RoutinListEmpty;
