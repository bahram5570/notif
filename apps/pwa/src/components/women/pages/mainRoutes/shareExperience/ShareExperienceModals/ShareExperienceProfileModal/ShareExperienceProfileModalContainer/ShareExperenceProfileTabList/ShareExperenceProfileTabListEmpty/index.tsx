import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

const ShareExperenceProfileTabListEmpty = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16">
      <CustomImage src="/assets/images/noComment.svg" width={100} />

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        هنوز هیچ فعالیتی ثبت نشده
      </Dark_Typography>
    </div>
  );
};

export default ShareExperenceProfileTabListEmpty;
