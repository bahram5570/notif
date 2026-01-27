import RefreshIcon from '@assets/icons/refresh.svg';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';

import { ErrorMessagePropsType } from './type';

const ErrorMessage = ({ onErrorHandler }: ErrorMessagePropsType) => {
  return (
    <div style={{ minHeight: `calc(100dvh - 360px )` }} className="mr-auto">
      <div
        className=" p-4 flex flex-row-reverse items-center  gap-3  bg-white/50 dark:!bg-white/5 border border-impo_Grey_300"
        style={{
          borderRadius: '32px 32px 32px 4px',
        }}
      >
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          ظاهرا ارتباط با ایمپو قطع شده. میتونی دوباره تلاش کنی.
        </Dark_Typography>

        <Dark_Button
          onClick={onErrorHandler}
          className="!w-52  py-3 !bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnSurface"
        >
          <div className="flex flex-row-reverse w-full justify-center items-center">
            {/* <RefreshIcon /> */}
            <Dark_Typography fontSize="Lable_Medium" className="text-impo_Surface_InverseSurface">
              تلاش مجدد
            </Dark_Typography>
          </div>
        </Dark_Button>
      </div>
    </div>
  );
};

export default ErrorMessage;
