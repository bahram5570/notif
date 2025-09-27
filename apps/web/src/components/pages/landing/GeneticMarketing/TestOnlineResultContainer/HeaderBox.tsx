import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { HeaderBoxProps } from './types';

const HeaderBox = ({ header, color }: HeaderBoxProps) => {
  return (
    <div className="rounded-[12px]" style={{ border: `1px solid ${COLORS_LIST[color as keyof typeof COLORS_LIST]}` }}>
      <div
        style={{ backgroundColor: COLORS_LIST[color as keyof typeof COLORS_LIST] }}
        className="rounded-t-[10px] !text-white"
      >
        <CustomTypography fontSize="Body_Medium" className="!text-center !text-white py-2">
          نتیجه تست شما:
        </CustomTypography>
      </div>
      <div className="bg-white rounded-b-[11px]">
        <CustomTypography fontSize="Title_Small" tagType="h2" className="py-2 text-center">
          {header.title}
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="!text-center pb-3">
          {header.description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default HeaderBox;
