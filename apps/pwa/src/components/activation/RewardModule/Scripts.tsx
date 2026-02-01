import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ScriptsProps } from './types';

const Scripts = ({ title, description, order, firstName }: ScriptsProps) => {
  const updateTitle = title.replace('@اسم', firstName || 'ایمپویی').replace('@', '');
  const updateDescription = description.replace('@اسم', firstName || 'ایمپویی').replace('@', '');

  return (
    <div
      style={{ order, padding: order <= 1 ? '40px 0' : '16px' }}
      className="flex flex-col items-center gap-1 pointer-events-none"
    >
      <div className="px-3 pt-3 pb-2">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground text-center">
          {updateTitle}
        </CustomTypography>
      </div>

      <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_InverseSurface text-center">
        {updateDescription}
      </CustomTypography>
    </div>
  );
};

export default Scripts;
