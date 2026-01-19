import CustomImage from '@components/ui/CustomImage';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

const ErrorPage = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 min-h-[90dvh] max-h-[90dvh] w-full flex flex-col justify-end m-auto px-4 py-5 z-20"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="flex flex-col items-center my-auto">
        <CustomImage className="w-[200px] h-auto" src="/assets/images/serverError.webp" />

        <Dark_Typography fontSize="Title_Medium" className="pt-8 pb-2 text-center text-impo_Neutral_OnBackground">
          ارتباط با ایمپو امکان پذیر نیست
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Medium" className="px-5 text-impo_Surface_Outline text-center">
          مشکلی برامون پیش اومده که در حال بررسی و حلش هستیم. لطفا چند دقیقه دیگه دوباره امتحان کن
        </Dark_Typography>
      </div>

      <Dark_Button onClick={() => window.location.reload()}>تلاش مجدد</Dark_Button>
    </div>
  );
};

export default ErrorPage;
