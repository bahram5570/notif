import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

const NotificationEmptyState = () => {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center h-full">
      <CustomImage src="/assets/images/noComment.svg" width={100} />
      <div className="flex justify-center items-center">
        <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
          هنوز نوتیفی برات ثبت نشده
        </Dark_Typography>
      </div>
    </div>
  );
};

export default NotificationEmptyState;
