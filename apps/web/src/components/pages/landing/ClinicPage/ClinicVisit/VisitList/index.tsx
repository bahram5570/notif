import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { VisitLevels } from './constants';

const VisitList = () => {
  return (
    <div className="grid gap-y-[24px]  lg:gap-y-9">
      {VisitLevels.map((item, i) => {
        return (
          <div key={i}>
            <div className="flex gap-x-[8px] items-center mb-2">
              <CustomTypography
                fontSize="Headline_Small"
                tagType="span"
                className="w-[24px] h-[24px] text-center rounded-full"
                style={{ color: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Pink_50 }}
              >
                {i + 1}
              </CustomTypography>
              <CustomTypography fontSize="Lable_Large" tagType="h5">
                {item.title}
              </CustomTypography>
            </div>
            <CustomTypography fontSize="Body_Small" tagType="p">
              {item.text}
            </CustomTypography>
          </div>
        );
      })}
    </div>
  );
};

export default VisitList;
