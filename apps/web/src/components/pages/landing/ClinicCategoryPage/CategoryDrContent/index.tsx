import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

const CategoryDrContent = () => {
  return (
    <section className="mt-6 mx-7">
      <CustomTypography fontSize="Lable_Large" tagType="p" style={{ color: COLORS_LIST.Neutral_OnBackground }}>
        محتوای مربوط به پزشکان
      </CustomTypography>
      <span className="w-full block h-[1px] my-3 mx-0" style={{ background: COLORS_LIST.Neutral_Surface }}></span>
    </section>
  );
};

export default CategoryDrContent;
