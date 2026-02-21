import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';

const GenderDeterminationLink = () => {
  return (
    <div className="fixed left-0 right-0 bottom-[80px] lg:bottom-0 pt-4 lg:pb-6 px-4 mx-auto shadow-[0_-12px_8px_#00000003] z-20 bg-impo_White">
      <CustomLink
        href={''}
        className="w-full sm:max-w-[300px] h-[40px] mx-auto rounded-full flex items-center justify-center bg-impo_Primary_Primary"
      >
        <CustomTypography fontSize="Lable_Large" className="!text-impo_White">
          مشاوره اولیه رایگان
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default GenderDeterminationLink;
