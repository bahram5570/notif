import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

const ContentCardContainer = () => {
  return (
    <div className="rounded-xl" style={{ backgroundColor: COLORS_LIST.Neutral_Background }}>
      <CustomTypography fontSize="Body_Medium" color="Neutral_OnBackground">
        پیش‌بینی روزهای پریود و تخمک‌گذاری‌تو به پارتنرت میگیم تا بتونین با هماهنگی برنامه‌ریزی کنید
      </CustomTypography>
    </div>
  );
};

export default ContentCardContainer;
