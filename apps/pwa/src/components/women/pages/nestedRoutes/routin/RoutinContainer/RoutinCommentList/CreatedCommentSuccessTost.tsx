import { useEffect, useState } from 'react';

import TickIcon from '@assets/icons/tickIcon.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useCountDown from '@hooks/useCountDown';
import useTheme from '@hooks/useTheme';

import { SHOW_SUCCESS_CREATE_COMMENT } from './constants';

const CreatedCommentSuccessTost = () => {
  const { colors } = useTheme();
  const [showRoutinToast, setShowRoutinToast] = useState<boolean | null>(null);
  const showToast = localStorage.getItem(SHOW_SUCCESS_CREATE_COMMENT);

  const { startCounter: startShowMessage } = useCountDown({
    time: 9,
    onCallBack: () => {
      setShowRoutinToast(false);
    },
  });

  useEffect(() => {
    if (showToast) {
      const parsedResult = JSON.parse(showToast) as boolean;
      setShowRoutinToast(parsedResult);
      localStorage.removeItem(SHOW_SUCCESS_CREATE_COMMENT);

      setShowRoutinToast(true);
      startShowMessage();
    }
  }, [showToast]);

  return (
    <>
      {showRoutinToast && (
        <div
          className={`fixed left-0 right-0  px-5 w-full animate-createCommentToast mx-auto  mb-4  z-50 `}
          style={{
            maxWidth: MAX_SCREEN_WIDTH - 80,
          }}
        >
          <div
            style={{
              background: colors.Success_SuccessContainer,
              border: `1px solid ${colors.Success_Success}`,
            }}
            className="flex justify-center items-center gap-3 rounded-lg p-4"
          >
            <div className="border-r-[1px]">
              <Typography scale="Body" size="Small" className="px-2">
                نظر شما با موفقیت ثبت شد
              </Typography>
            </div>

            <div className="w-6 h-6 flex justify-center items-center">
              <TickIcon className="w-4 h-auto" style={{ fill: colors.Success_Success }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatedCommentSuccessTost;
