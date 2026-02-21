import { handleBodyUpdate } from '@components/pages/articleId/ArticleIdPageContainer/__utils__';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import style from '../../../../pages/articleId/ArticleIdPageContainer/ArticleIdContents/styles.module.css';

const CategoryDoctorContents = async ({ contents }: { contents: string }) => {
  const { abstractBody, articleBody } = await handleBodyUpdate(contents);

  return (
    <div className="mx-7 mb-12">
      <CustomTypography fontSize="Title_Small" tagType="h2" className="!text-impo_Neutral_OnBackground">
        راهنمای ویزیت آنلاین ایمپو
      </CustomTypography>

      <span className="w-full block h-[1px] my-3 mx-0 bg-impo_Neutral_Surface"></span>

      <div
        dangerouslySetInnerHTML={{ __html: abstractBody + articleBody }}
        className={`${style.container} !text-impo_Neutral_OnBackground`}
      />
    </div>
  );
};

export default CategoryDoctorContents;
