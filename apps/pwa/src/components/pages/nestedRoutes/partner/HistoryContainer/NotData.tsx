import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

const NotData = () => {
  return (
    <div className="flex relative z-0 flex-col items-center gap-6  min-h-[100dvh] justify-center">
      <CustomImage src="/assets/images/ticketsHistoryEmptyList.webp" width={106} height={140} />
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        هنوز چالشی رو با پارتنرت انجام ندادی
      </Dark_Typography>
    </div>
  );
};

export default NotData;
