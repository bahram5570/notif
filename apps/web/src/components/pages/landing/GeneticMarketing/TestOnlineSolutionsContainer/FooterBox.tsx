import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { FooterBoxProps } from './types';

const FooterBox = ({ footer }: FooterBoxProps) => {
  return (
    <>
      <div className="p-3 rounded-xl mt-6 text-center mb-14 border !border-impo_Warning_Warning !bg-impo_Yellow_200">
        <CustomTypography fontSize="Lable_Large">{footer.title}</CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="mt-2 !text-impo_Neutral_OnBackground dark:!text-impo_Black">
          {footer.text}
        </CustomTypography>
      </div>
    </>
  );
};

export default FooterBox;
