import { handleAnchorStyling } from '../__utils__';

import style from './styles.module.css';

import CustomTypography from '@components/ui/CustomTypography';

const CategoryDoctorContents = ({ contents }: { contents: string }) => {
  const updatedContents = handleAnchorStyling(contents);

  return (
    <div className="mx-7 mb-12">
      <CustomTypography fontSize="Title_Small" tagType="h2" className="!text-impo_Neutral_OnBackground">
        راهنمای ویزیت آنلاین ایمپو
      </CustomTypography>

      <span className="w-full block h-[1px] my-3 mx-0 bg-impo_Neutral_Surface"></span>

      <div
        dangerouslySetInnerHTML={{ __html: updatedContents }}
        className={`${style.container} !text-impo_Neutral_OnBackground`}
      />
    </div>
  );
};

export default CategoryDoctorContents;
