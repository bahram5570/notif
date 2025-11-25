import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import useSignSelected from './__hooks__/useSignSelected';
import { SingsFooterPropsType } from './type';

const SingsFooter = ({ singSelectedList, selectedDate, isDisableBtn }: SingsFooterPropsType) => {
  const { colors } = useTheme();
  const { addSingHandler, isLoading } = useSignSelected({ singSelectedList, selectedDate });

  return (
    <div
      className="fixed  left-0 right-0 bottom-0 px-4 pb-4 mx-auto flex flex-col items-end z-40"
      style={{
        backgroundColor: colors.Surface_SurfaceVariant,
        height: FOOTER_HEIGTH,
        maxWidth: MAX_SCREEN_WIDTH,
      }}
    >
      <Button
        size="medium"
        variant="fill"
        color="primary"
        fullWidth={true}
        onClick={addSingHandler}
        isDisable={isDisableBtn}
        isLoading={isLoading}
        className=" rounded-full px-6 py-2"
      >
        <Typography scale="Title" size="Small" color="White">
          ثبت نشانه‌ها
        </Typography>
      </Button>
    </div>
  );
};

export default SingsFooter;
