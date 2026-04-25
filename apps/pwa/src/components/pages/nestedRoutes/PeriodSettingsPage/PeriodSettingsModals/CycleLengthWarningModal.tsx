import { useEffect, useState } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { getUserInfoCookie } from '@actions/userCookies.actions';

import { CycleLengthWarningModalType } from './types';

const CycleLengthWarningModal = ({ acceptingChanges, values }: CycleLengthWarningModalType) => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserInfoCookie();
      if (userData) setUserName(userData.name);
    };

    fetchUser();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-2">
        {userName && (
          <CustomTypography
            fontSize="Title_Small"
            className="text-impo_Neutral_OnSurface"
          >{`${userName} عزیز`}</CustomTypography>
        )}

        <CustomTypography fontSize="Body_Small" className="text-center text-impo_Neutral_OnBackground">
          چون طول دوره‌ات در بازه 21 تا 35 روز نیست و زمان تخمک‌گذاری در این طول دوره قابل تشخیص نیست، ما فقط می‌تونیم
          PMS و پریودت رو پیش‌بینی کنیم
        </CustomTypography>
      </div>
      <CustomButton
        fontSize="Lable_Large"
        className="text-impo_Primary_OnPrimary mt-2"
        onClick={() => acceptingChanges(values)}
      >
        متوجه شدم
      </CustomButton>
    </div>
  );
};

export default CycleLengthWarningModal;
