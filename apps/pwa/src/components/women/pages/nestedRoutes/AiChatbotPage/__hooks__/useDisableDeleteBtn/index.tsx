import { useEffect, useState } from 'react';

import { UseDisableDeleteBtnPropsType } from './type';

const useDisableDeleteBtn = ({ aiChatData }: UseDisableDeleteBtnPropsType) => {
  const [disableDeleteBtn, setDisableDeleteBtn] = useState(false);
  const disableDeleteBtnHandler = (v: boolean) => {
    setDisableDeleteBtn(v);
  };

  useEffect(() => {
    if (aiChatData) {
      if (aiChatData.chats.length > 0) {
        disableDeleteBtnHandler(true);
      } else {
        disableDeleteBtnHandler(false);
      }
    }
  }, [aiChatData]);

  return { disableDeleteBtn, disableDeleteBtnHandler };
};

export default useDisableDeleteBtn;
