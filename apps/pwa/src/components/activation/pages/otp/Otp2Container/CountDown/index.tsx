import { useEffect } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useCountDown } from '@repo/core/hooks/useCountDown';

import { CountDownProps } from './types';

const CountDown = ({ resetCodeHandler, waitMessage, waitTime }: CountDownProps) => {
  const { count, startCounter } = useCountDown({ time: waitTime });

  useEffect(() => {
    startCounter();
  }, []);

  const resetHandler = () => {
    resetCodeHandler();
    startCounter();
  };

  const sec = String(count % 60).padStart(2, '0');
  const min = Math.floor(count / 60);
  const time = count > 0 ? `(${min}:${sec})` : '';
  const script = ` ${waitMessage} ${time}`;

  const isTimeOut = count === 0;

  return (
    <div className=" p-4" style={{ cursor: isTimeOut ? 'pointer' : 'not-allowed' }} onClick={resetHandler}>
      <CustomTypography
        fontSize="Body_Medium"
        className={`${isTimeOut ? 'text-impo_Primary_Primary' : 'text-impo_Neutral_OnBackground'}`}
      >
        {script}
      </CustomTypography>
    </div>
  );
};

export default CountDown;
