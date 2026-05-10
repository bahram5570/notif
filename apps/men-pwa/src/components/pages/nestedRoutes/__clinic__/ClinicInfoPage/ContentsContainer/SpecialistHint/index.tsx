import TickIcon from '@assets/shared/icons/selectedTick.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const SpecialistHint = () => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 w-full p-2 rounded-lg bg-impo_Neutral_Surface">
      <TickIcon className="w-6 h-auto !fill-impo_PrimaryMan_PrimaryMan" />

      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnSurface">
        امکان ثبت نسخه الکترونیک با توجه به نوع بیمه و تشخیص پزشک
      </CustomTypography>
    </div>
  );
};

export default SpecialistHint;
