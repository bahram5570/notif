import Dark_Typography from '@components/ui/Dark_Typography';

const ProgressBar = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 px-5 pt-16">
      <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        چند لحظه صبر کنید
      </Dark_Typography>

      <div className="relative w-full h-2 rounded-full overflow-hidden bg-impo_Neutral_Surface">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full rounded-full animate-welcoming bg-impo_Primary_Primary" />
      </div>
    </div>
  );
};

export default ProgressBar;
