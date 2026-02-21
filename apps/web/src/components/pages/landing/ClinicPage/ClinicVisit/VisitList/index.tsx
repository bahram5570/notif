import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

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
                className="w-[24px] h-[24px] text-center rounded-full !text-impo_Primary_OnPrimary !bg-impo_Primary_OnPrimaryContainer"
              >
                {i + 1}
              </CustomTypography>
              <CustomTypography fontSize="Lable_Large" tagType="h5" className="!text-impo_Neutral_OnBackground">
                {item.title}
              </CustomTypography>
            </div>
            <CustomTypography fontSize="Body_Small" tagType="p" className="!text-impo_Neutral_OnBackground">
              {item.text}
            </CustomTypography>
          </div>
        );
      })}
    </div>
  );
};

export default VisitList;
