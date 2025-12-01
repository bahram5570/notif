import { useEffect, useState } from 'react';

const usePopUpCompleteAction = (isPopupModalOpen: boolean, actionCompleteHandler: () => void) => {
  const [isPopUpActionCommplete, setIsPopUpActionCommplete] = useState(false);

  const isPopUpActionCommpleteHandler = () => {
    setIsPopUpActionCommplete(true);
  };

  useEffect(() => {
    if (!isPopupModalOpen) {
      setIsPopUpActionCommplete(false);

      if (isPopUpActionCommplete) {
        actionCompleteHandler();
      }
    }
  }, [isPopupModalOpen, isPopUpActionCommplete]);

  return { isPopUpActionCommpleteHandler };
};

export default usePopUpCompleteAction;
