'use client';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';

const DoctorVisitAction = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="px-4 pt-4 pb-6 md:mb-10 fixed md:relative md:top-4 bottom-20 left-0 right-0 z-10 bg-impo_Neutral_Background md:bg-transparent [box-shadow:0px_-2px_8px_0px_rgba(108,_35,_55,_0.10)] md:shadow-none">
      <CustomLink
        href={PWA_LINK_WOMEN_URL}
        className={`h-[40px] lg:h-[60px] !bg-impo_Primary_Primary p-6 flex items-center justify-center rounded-full ${!isActive && 'pointer-events-none opacity-20'}`}
      >
        <CustomTypography fontSize="Lable_Large" className="!text-impo_Primary_OnPrimary">
          دریافت ویزیت آنلاین
        </CustomTypography>
      </CustomLink>
    </div>
  );
};
export default DoctorVisitAction;
