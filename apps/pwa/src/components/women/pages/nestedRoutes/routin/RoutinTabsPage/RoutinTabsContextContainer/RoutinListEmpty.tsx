import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

const RoutinListEmpty = ({ title }: { title?: string }) => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="w-full flex flex-col justify-center items-center gap-4 pt-10">
        <CustomImage src="/assets/images/emptyStateRoutinTab.webp" width={168} height={123} />

        <Typography scale="Lable" size="Medium">
          {title || 'هنوز برنامه ای برای نمایش وجود نداره'}
        </Typography>
      </div>
    </div>
  );
};

export default RoutinListEmpty;
