import Dark_Typography from '@components/ui/Dark_Typography';

const NoSigns = () => {
  return (
    <div className="flex flex-col items-end pr-4">
      <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        هنوز نشانه ای برای امروز ثبت نکردی
      </Dark_Typography>

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface">
        برای ثبت نشانه روی علامت + بزن
      </Dark_Typography>
    </div>
  );
};

export default NoSigns;
