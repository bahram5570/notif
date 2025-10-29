import RefreshIcon from '@assets/icons/refresh.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const ErrorMessage = () => {
  const { colors } = useTheme();

  const onError = () => {};

  return (
    <div style={{ minHeight: `calc(100dvh - 360px )` }} className="mr-auto">
      <div
        className=" p-4 flex flex-row-reverse items-center  gap-3  bg-white/50"
        style={{
          border: `0.25px solid ${colors.Grey_300}`,
          borderRadius: '32px 32px 32px 4px',
        }}
      >
        <Typography scale="Lable" size="Medium">
          ظاهرا ارتباط با ایمپو قطع شده. میتونی دوباره تلاش کنی.
        </Typography>

        <Button size="medium" variant="fill" fullWidth color="surface" onClick={onError} className="!w-fit  py-3">
          <div className="flex flex-row-reverse w-full">
            <RefreshIcon />
            <Typography scale="Lable" size="Medium" color="Surface_InverseSurface">
              تلاش مجدد
            </Typography>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ErrorMessage;
