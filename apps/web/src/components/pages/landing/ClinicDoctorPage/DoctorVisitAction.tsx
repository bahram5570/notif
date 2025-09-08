'use client';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';
import { COLORS_LIST } from '@theme/colors';

const DoctorVisitAction = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="px-4 pt-4 pb-6 md:mb-10 fixed md:relative md:top-4 bottom-20 left-0 right-0 z-10 bg-white md:bg-transparent [box-shadow:0px_-2px_8px_0px_rgba(108,_35,_55,_0.10)] md:shadow-none">
      <CustomLink
        href={PWA_LINK_WOMEN_URL}
        className={`h-[40px] lg:h-[60px] p-6 flex items-center justify-center rounded-full ${!isActive && 'pointer-events-none opacity-20'}`}
        style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
      >
        <CustomTypography fontSize="Lable_Large" color="Primary_OnPrimary">
          دریافت ویزیت آنلاین
        </CustomTypography>
      </CustomLink>
    </div>
  );
};
export default DoctorVisitAction;
