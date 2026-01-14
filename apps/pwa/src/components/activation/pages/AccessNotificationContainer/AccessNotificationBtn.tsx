// import { notificationPermission } from '@utils/system';
import Dark_Button from '@components/ui/Dark_Button';

// import { firebaseToken } from '@lib/firebaseConfig';
import { AccessNotificationBtnProps } from './types';

const AccessNotificationBtn = ({ btnLabel, onComplete }: AccessNotificationBtnProps) => {
  // const onCompleteHandler = async () => {
  //   if (onComplete) {
  //     onComplete();
  //   }
  // };

  const clickHandler = () => {
    // notificationPermission(async (status) => {
    //   if (onComplete) {
    //     if (status === 'granted') {
    //       await firebaseToken();
    //     }
    //     await onCompleteHandler();
    //   }
    // });
  };

  return (
    <div className="w-full flex flex-col mt-auto px-4 pb-9 pt-1">
      <div className="flex mx-auto w-[204px] min-w-fit">
        <Dark_Button fontSize="Lable_Large" onClick={clickHandler} navigationLoadingId="AccessNotificationBtn">
          {btnLabel}
        </Dark_Button>
      </div>
    </div>
  );
};

export default AccessNotificationBtn;
