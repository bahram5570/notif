import { useEffect, useState } from 'react';

// @ts-ignore
import * as actions from '@actions/userCookies.actions';
import { useRouter } from 'next/navigation';

import { useQueryParamsHandler } from '../../../../../hooks/useQueryParamsHandler';
import { CustomButton } from '../../../../ui/CustomButton';
import { CustomModal } from '../../../../ui/CustomModal';
import { CustomTypography } from '../../../../ui/CustomTypography';

const PredictModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const modalName = getQueryParams('name') as string | null;
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  const isOpen = modalName !== null;

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await actions.getUserInfoCookie();
      setUserName(userData.name);
    };

    fetchUser();
  }, []);

  return (
    <CustomModal isSlidingMode className="!min-h-fit" isOpen={isOpen}>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2">
          {userName && <CustomTypography fontSize="Lable_Large">{`${userName} عزیز`}</CustomTypography>}

          <CustomTypography fontSize="Body_Medium" className="text-center">
            در دوره‌های کمتر از 21 روز و بیشتر از 35 روز، زمان باروری و تخمک‌گذاری مشخص و قابل محاسبه نیست. به همین دلیل
            در ایمپو امکان نمایش اون وجود نداره. اما شاید توجه بیشتر به علائم بدن یا استفاده از کیت تخمک‌گذاری بتونه بهت
            کمک کنه
          </CustomTypography>
        </div>
        <CustomButton fontSize="Lable_Large" className="text-impo_Primary_OnPrimary mt-3" onClick={() => router.back()}>
          متوجه شدم
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default PredictModal;
