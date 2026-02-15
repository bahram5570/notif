import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const AssociationItemHeaderInfo = () => {
  return (
    <div className="flex flex-col items-end gap-1">
      <CustomTypography className="text-impo_Neutral_OnBackground " fontSize="Title_Small">
        مامان اولی‌ها
      </CustomTypography>

      <div className="flex flex-row-reverse gap-2">
        <CustomTypography className="text-impo_Surface_OnSurfaceVariant " fontSize="Body_Small">
          4 تجربه
        </CustomTypography>

        <CustomTypography className="text-impo_Surface_OnSurfaceVariant " fontSize="Body_Small">
          1200 دنبال کننده
        </CustomTypography>
      </div>
    </div>
  );
};

export default AssociationItemHeaderInfo;
