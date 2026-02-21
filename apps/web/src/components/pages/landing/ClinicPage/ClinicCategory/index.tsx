import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { clinicCategoryService } from '@services/clinicLandingServices';

import CategoryItem from './CategoryItem';

const ClinicCategory = async () => {
  const { categoryData } = await clinicCategoryService();

  return (
    <div className="mt-8">
      <CustomTypography fontSize="Title_Small" tagType="h4" className="text-center !text-impo_Neutral_OnBackground">
        دسته‌بندی کلینیک سلامت
      </CustomTypography>

      <section className="grid grid-cols-3 lg:grid-cols-5 gap-x-[25px] gap-y-[24px] mt-[16px] mx-[16px] px-[16px] py-[24px] lg:rounded-3xl rounded-[16px] [box-shadow:0px_4px_24px_0px_rgba(58,112,191,0.05)] !bg-impo_Neutral_Surface">
        {categoryData &&
          categoryData.map((item, index) => (
            <CategoryItem key={index} image={item.image} name={item.name} type={item.type} />
          ))}
      </section>
    </div>
  );
};
export default ClinicCategory;
