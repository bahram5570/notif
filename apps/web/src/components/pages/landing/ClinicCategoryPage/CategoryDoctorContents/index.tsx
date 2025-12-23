import style from './styles.module.css';

import CustomTypography from '@components/ui/CustomTypography';

const CategoryDoctorContents = ({ contents }: { contents: string }) => {
  return (
    <div className="mx-7 mb-12">
      <CustomTypography fontSize="Title_Small" tagType="h2">
        راهنمای ویزیت آنلاین ایمپو
      </CustomTypography>

      <span className="w-full block h-[1px] my-3 mx-0 bg-impo_Neutral_Surface" />
      <div dangerouslySetInnerHTML={{ __html: contents }} className={style.container}></div>
    </div>
  );
};

export default CategoryDoctorContents;
