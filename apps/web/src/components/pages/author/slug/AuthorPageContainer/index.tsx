import BlogsBreadcrumb from '@components/Articles/Blogs/BlogsBreadcrumb';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import CategoryMainTitle from '@components/pages/category/slug/CategoryPageContainer/CategoryMainTitle';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import AuthorProfile from './AuthorProfile';
import AuthorArticles from './AutorArticles';
import { AuthorPageContainerTypes } from './types';

const AuthorPageContainer = (props: AuthorPageContainerTypes) => {
  const breadcrumbList = [{ title: 'نویسنده', linkTo: '/blogs' }, { title: 'نویسنده' }];

  return (
    <HeaderFooterContainer>
      <div className="w-full pt-[100px] md:pt-[150px] md:w-11/12 lg:w-10/12 px-4 md:px-0">
        <BlogsBreadcrumb breadcrumbList={breadcrumbList} />
        <AuthorProfile authorName={props.authorName} authorPic={props.authorPic} />
        <CustomTypography tagType="p" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground mb-6">
          {props.description}
        </CustomTypography>
        <CustomLink href={props.linkedin} className="!text-impo_Primary_Primary">
          <CustomTypography tagType="p" fontSize="Body_Large" className=" mb-6">
            {`لینکدین: ${props.linkedin}`}
          </CustomTypography>
        </CustomLink>
        <div>
          <CustomTypography tagType="h3" fontSize="Headline_Medium" className="!text-impo_Primary_Primary mb-6">
            استانداردهای علمی مقالات ایمپو
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground mb-6">
            مقالات این نویسنده بر پایه منابع علمی معتبر نوشته می‌شوند و پیش از انتشار، توسط تیم پزشکی به‌صورت علمی
            بازبینی می‌گردند. لازم به تأکید است که این محتوا، جایگزین تشخیص و نظر پزشک متخصص نیست و صرفاً با هدف افزایش
            آگاهی عمومی، به‌ویژه در حوزه سلامت زنان منتشر می‌شود. برای آشنایی بیشتر، سایر
            <CustomLink href={'/content-integrity'} className="!text-impo_Primary_Primary">
              استاندارهای مقالات ایمپو
            </CustomLink>
            را هم می‌توانید مشاهده کنید.
          </CustomTypography>
        </div>
        <CategoryMainTitle title={props.authorName} />
        <AuthorArticles id={props.id} />
      </div>

      <div className="w-full py-12">
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default AuthorPageContainer;
