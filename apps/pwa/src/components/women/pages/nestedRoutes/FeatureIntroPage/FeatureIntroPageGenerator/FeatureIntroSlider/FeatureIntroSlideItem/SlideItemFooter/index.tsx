import ArrowIcon from '@assets/icons/arrow.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { SlideItemFooterPropsType } from './type';

const SlideItemFooter = ({ clickHandler, currentIndex, data }: SlideItemFooterPropsType) => {
  const { colors } = useTheme();
  const lastIndex = currentIndex === data.slides.length - 1;

  return (
    <div className="flex justify-center items-center mt-4 fixed bottom-0 p-4 mx-auto w-full">
      <div className={`mt-4 flex ${lastIndex ? 'gap-8' : 'gap-20'}   justify-between items-center`}>
        <Button
          onClick={() => {
            clickHandler(currentIndex - 1);
          }}
          variant="fill"
          size="medium"
          color="onBackground"
          className="!w-10 h-10 px-0 flex justify-center items-center rounded-full"
          style={{ backgroundColor: colors.Black }}
          fullWidth={false}
          isDisable={currentIndex === 0}
        >
          <ArrowIcon className="w-4 h-4" style={{ stroke: colors.White }} />
        </Button>
        <Button
          onClick={() => clickHandler(currentIndex + 1)}
          variant="fill"
          size="medium"
          color="onBackground"
          className={`${lastIndex ? '!w-[276px] !h-12' : '!w-10 h-10'}  px-0 flex justify-center items-center rounded-full`}
          style={{ backgroundColor: colors.Neutral_OnSurface }}
          fullWidth={false}
        >
          {lastIndex ? (
            <Typography size="Large" scale="Lable" color="PrimaryMan_OnPrimaryMan">
              {data.textBtn}
            </Typography>
          ) : (
            <ArrowIcon className="w-4 h-4 transform rotate-180" style={{ stroke: colors.White }} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default SlideItemFooter;
