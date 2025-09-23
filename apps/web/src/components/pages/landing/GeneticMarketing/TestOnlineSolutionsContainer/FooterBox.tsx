import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { FooterBoxProps } from './types';

const FooterBox = ({ footer }: FooterBoxProps) => {
  return (
    <>
      <div
        className="p-3 rounded-xl mt-6 text-center mb-14"
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
    </>
  );
};

export default FooterBox;
