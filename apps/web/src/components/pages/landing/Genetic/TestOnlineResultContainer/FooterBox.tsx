import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';

import { FooterBoxProps } from './types';

const FooterBox = ({ footer }: FooterBoxProps) => {
  return (
    <>
      <div className="p-3 rounded-xl mt-6 text-center border !border-impo_Warning_Warning !bg-impo_Yellow_200">
        <CustomTypography fontSize="Lable_Large" className="!text-impo_Neutral_OnBackground dark:!text-impo_Black">
          {footer.title}
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="mt-2 !text-impo_Neutral_OnBackground dark:!text-impo_Black">
          {footer.text}
        </CustomTypography>
      </div>

      <div className="mt-6 w-fit mx-auto my-5 flex">
        <CustomLink
          href="/landing/genetic/lastPage"
          className="w-fit px-[62px] py-[12px] rounded-full flex justify-center !bg-impo_Primary_Primary"
        >
          <CustomTypography fontSize="Lable_Medium" className="!text-impo_Primary_OnPrimary">
            متوجه شدم
          </CustomTypography>
        </CustomLink>
      </div>
    </>
  );
};

export default FooterBox;
