import { useState } from 'react';

import InfoIcon from '@assets/icons/info.svg';
import CloseIcon from '@assets/icons/plus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ShareExperienceToastPropsType } from './type';

const ShareExperienceToast = ({ toastMessage, showCloseBtn }: ShareExperienceToastPropsType) => {
  const [showToast, setShowToast] = useState(true);

  if (!showToast) {
    return null;
  }
  return (
    <div
      className={`p-4 bg-impo_Warning_WarininContainer   rounded-2xl flex items-center ${showCloseBtn ? 'justify-between' : 'justify-end'}`}
    >
      {showCloseBtn && (
        <div onClick={() => setShowToast(false)} className="w-6 h-6 rounded-full flex items-center justify-center ">
          <CloseIcon className="w-4 h-auto rotate-45 stroke-impo_Grey_200 dark:stroke-impo_Grey_700" />
        </div>
      )}

      <div className="flex flex-row-reverse  items-center gap-1">
        <InfoIcon className="w-5 h-5 stroke-impo_Warning_Warning" />
        <CustomTypography fontSize="Lable_SmallProminet">{toastMessage}</CustomTypography>
      </div>
    </div>
  );
};

export default ShareExperienceToast;
