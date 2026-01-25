import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

const NoComments = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3 pt-36">
      <CustomImage src="/assets/images/noComments.webp" width={120} height={50} />

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        نظری برای این دکتر ثبت نشده
      </Dark_Typography>
    </div>
  );
};

export default NoComments;
