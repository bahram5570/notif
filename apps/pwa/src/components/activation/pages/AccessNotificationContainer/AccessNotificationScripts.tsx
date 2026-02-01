import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { AccessNotificationScriptsProps } from './types';

const AccessNotificationScripts = ({ title, description, firstName }: AccessNotificationScriptsProps) => {
  const updateTitle = title.replace('@اسم', firstName || 'ایمپویی').replace('@', '');
  const updateDescription = description.replace('@اسم', firstName || 'ایمپویی').replace('@', '');

  return (
    <div className="flex flex-col items-center gap-1 p-4 pointer-events-none">
      <div className="px-3 pt-3 pb-2">
        <CustomTypography fontSize="Headline_Small" className="text-impo_Neutral_OnBackground text-center">
          {updateTitle}
        </CustomTypography>
      </div>

      <CustomTypography fontSize="Headline_Small" className="text-impo_Surface_InverseSurface text-center">
        {updateDescription}
      </CustomTypography>
    </div>
  );
};

export default AccessNotificationScripts;
