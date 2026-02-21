import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const CategoryDrContent = () => {
  return (
    <section className="mt-6 mx-7">
      <CustomTypography fontSize="Lable_Large" tagType="p" className="!text-impo_Neutral_OnBackground">
        محتوای مربوط به پزشکان
      </CustomTypography>
      <span className="w-full block h-[1px] my-3 mx-0 bg-impo_Neutral_Surface" />
    </section>
  );
};

export default CategoryDrContent;
