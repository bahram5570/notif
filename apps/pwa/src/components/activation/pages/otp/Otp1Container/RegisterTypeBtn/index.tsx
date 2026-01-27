import { ACTIVATION_HEADING_SCRIPTS_ID } from '@components/activation/ActivationHeading/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { RegisterTypeBtnProps } from './types';

const RegisterTypeBtn = ({ isPhone, isPhoneToggleHandler }: RegisterTypeBtnProps) => {
  const script = isPhone ? 'ورود/ثبت نام با ایمیل' : 'ورود/ثبت نام با شماره همراه';

  return (
    <div
      id={ACTIVATION_HEADING_SCRIPTS_ID}
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed top-0 left-0 right-0 mx-auto cursor-pointer w-[100dvw] z-20"
    >
      <div onClick={isPhoneToggleHandler} className="mt-6 ml-4 w-fit px-4 py-2 rounded-full bg-impo_Pink_100 dark:bg-impo_Pink_800">
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Black">
          {script}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default RegisterTypeBtn;
