import { useEffect, useRef } from 'react';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const ApprovedCodeToast = () => {
  const { colors } = useTheme();
  const myDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (myDivRef.current) {
      myDivRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, []);

  return (
    <div
      className="py-3 px-4 rounded-lg flex flex-row-reverse w-full justify-between items-center"
      style={{ border: `1px solid ${colors.Success_Success}`, background: colors.Success_SuccessContainer }}
      ref={myDivRef}
    >
      <Typography scale="Lable" size="SmallProminet" color="Success_Success">
        کد تخفیف با موفقیت اعمال شد
      </Typography>

      <div>
        <Typography scale="Lable" size="Medium" color="Error_Error">
          لغو کد تخفیف
        </Typography>
      </div>
    </div>
  );
};

export default ApprovedCodeToast;
