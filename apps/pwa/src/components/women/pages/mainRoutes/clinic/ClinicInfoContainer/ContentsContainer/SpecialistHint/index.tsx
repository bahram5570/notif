import TickIcon from '@assets/icons/selectedTick.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

const SpecialistHint = () => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 w-full p-2 rounded-lg bg-impo_Surface_SurfaceVariant">
      <TickIcon className="w-6 h-auto" />

      <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnSurface">
        امکان ثبت نسخه با توجه به نوع بیمه و تشخیص پزشک
      </Dark_Typography>
    </div>
  );
};

export default SpecialistHint;
