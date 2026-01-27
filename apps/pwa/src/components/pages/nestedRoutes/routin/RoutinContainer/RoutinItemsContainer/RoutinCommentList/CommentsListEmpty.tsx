import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

const CommentsListEmpty = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-10">
      <CustomImage src="/assets/images/noComment.svg" width={100} />
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        هنوز نظری برای این برنامه ثبت نشده
      </Dark_Typography>
    </div>
  );
};

export default CommentsListEmpty;
