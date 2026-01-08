import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

const EmptyList = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-[20dvh]">
      <CustomImage src="/assets/images/ticketsHistoryEmptyList.webp" width={105} />

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        شما تا به حال مشاوره فعالی نداشته‌اید
      </Dark_Typography>
    </div>
  );
};

export default EmptyList;
