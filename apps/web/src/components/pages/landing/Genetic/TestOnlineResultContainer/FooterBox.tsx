import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { FooterBoxProps } from './types';

const FooterBox = ({ footer }: FooterBoxProps) => {
  return (
    <>
      <div
        className="p-3 rounded-xl mt-6 text-center"
        style={{
          border: `1px solid ${COLORS_LIST.Warning_Warning}`,
          background: `${COLORS_LIST.Warning_Warning}20`,
        }}
      >
        <CustomTypography fontSize="Lable_Large">{footer.title}</CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="mt-2">
          {footer.text}
        </CustomTypography>
      </div>

      <div className="mt-6 w-fit mx-auto my-5 flex">
        <CustomLink
          href="/landing/genetic/lastPage"
          className="w-fit px-[62px] py-[12px] rounded-full flex justify-center"
          style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
        >
          <CustomTypography fontSize="Lable_Medium" className="!text-impo_White">
            متوجه شدم
          </CustomTypography>
        </CustomLink>
      </div>
    </>
  );
};

export default FooterBox;
