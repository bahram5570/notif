import roadmapVisit from '@assets/images/clinicLanding/roadmapVisit.webp';
import roadmapVisitDark from '@assets/images/clinicLanding/roadmapVisitDark.webp';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';

import VisitList from './VisitList';

const ClinicVisit = () => {
  return (
    <section className="mt-12">
      <CustomTypography
        fontSize="Title_Medium"
        tagType="h2"
        className="text-center mx-4 mb-[27px] !text-impo_Neutral_OnBackground"
      >
        چطور از ایمپو ویزیت آنلاین بگیرم؟
      </CustomTypography>
      <div className="flex mx-8 gap-x-[15px] items-center">
        {/* light */}
        <CustomImage
          alt="roadmapVisit"
          height={0}
          width={10000}
          src={roadmapVisit}
          className="w-[70px] h-auto dark:hidden block"
        />
        {/* dark */}
        <CustomImage
          alt="roadmapVisitDark"
          height={0}
          width={10000}
          src={roadmapVisitDark}
          className="w-[70px] h-auto dark:block hidden"
        />
        <VisitList />
      </div>
      <div className="mx-4 mt-9">
        <CustomLink
          href={PWA_LINK_WOMEN_URL}
          className="h-[40px] lg:h-[60px] p-6 flex items-center justify-center rounded-full !bg-impo_Primary_Primary"
        >
          <CustomTypography fontSize="Lable_Large" className="!text-impo_Primary_OnPrimary">
            دریافت ویزیت آنلاین
          </CustomTypography>
        </CustomLink>
      </div>
    </section>
  );
};

export default ClinicVisit;
