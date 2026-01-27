import Dark_Typography from '@components/ui/Dark_Typography';

import { AccessNotificationScriptsProps } from './types';

const AccessNotificationScripts = ({ title, description, firstName }: AccessNotificationScriptsProps) => {
  const updateTitle = title.replace('@اسم', firstName || 'ایمپویی').replace('@', '');
  const updateDescription = description.replace('@اسم', firstName || 'ایمپویی').replace('@', '');

  return (
    <div className="flex flex-col items-center gap-1 p-4 pointer-events-none">
      <div className="px-3 pt-3 pb-2">
        <Dark_Typography fontSize="Headline_Small" className="text-impo_Neutral_OnBackground text-center">
          {updateTitle}
        </Dark_Typography>
      </div>

      <Dark_Typography fontSize="Headline_Small" className="text-impo_Surface_InverseSurface text-center">
        {updateDescription}
      </Dark_Typography>
    </div>
  );
};

export default AccessNotificationScripts;
