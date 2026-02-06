import { useEffect, useState } from 'react';

import CloseIcon from '@assets/shared/icons/plus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ItemPropsType } from '../MessageListContainer/Message/type';

const WarningMessage = ({ messageList }: { messageList: ItemPropsType[] }) => {
  const storedValue = localStorage.getItem('showWarningMessage');
  const isVisible: boolean = storedValue ? JSON.parse(storedValue) : true;
  const [showWarningMessage, setShowWarningMessage] = useState(isVisible);

  const showWarningMessageHandler = () => {
    setShowWarningMessage(false);
    localStorage.setItem('showWarningMessage', 'false');
  };

  useEffect(() => {
    if (messageList.length > 0) {
      showWarningMessageHandler();
    }
  }, [messageList]);

  return (
    <>
      {showWarningMessage && (
        <div className=" py-5 mx-5 flex  justify-start items-start gap-2 px-2 rounded-xl bg-impo_Surface_SurfaceVariant">
          <CloseIcon
            className="w-5 h-auto rotate-45 ml-3 stroke-impo_Neutral_OnBackground"
            onClick={showWarningMessageHandler}
          />

          <CustomTypography fontSize="Lable_Large" className="w-full text-center text-impo_Neutral_OnBackground">
            برای استفاده از این پیام‌رسان لازمه پارتنرت هم آخرین نسخه ایمپو رو نصب کنه. این امکان فعلا برای گوشی‌های ios
            فراهم نیست
          </CustomTypography>
        </div>
      )}
    </>
  );
};

export default WarningMessage;
