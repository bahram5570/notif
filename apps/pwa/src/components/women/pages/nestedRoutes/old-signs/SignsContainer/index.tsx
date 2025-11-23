import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import SignsLists from './SignsLists';
import SignsSelectDay from './SignsSelectDay';
import { SIGNS_SELECT_DAY_HEIGHT } from './SignsSelectDay/constants';
import useSignsSlide from './__hooks__/useSignsSlide';
import { SignsContainerProps } from './types';

const SignsContainer = ({ infoList }: SignsContainerProps) => {
  const { slide, slideHandler } = useSignsSlide({ infoList });
  const { colors } = useTheme();

  return (
    <>
      <div className="relative w-full pb-4 z-0" style={{ paddingTop: SIGNS_SELECT_DAY_HEIGHT }}>
        <SignsSelectDay slide={slide} slideHandler={slideHandler} infoList={infoList} />
        <SignsLists slide={slide} slideHandler={slideHandler} infoList={infoList} />
        <div
          className="fixed left-0 right-0 bottom-0 px-4 pb-4 mx-auto flex items-end z-40"
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
            onClick={() => console.log('mnjjkkkllk')}
            // isDisable={cta.action.actionType === ActionTypeEnum.None}
            className=" rounded-full px-6 py-2"
          >
            <Typography scale="Title" size="Small" color="White">
              ثبت نشانه‌ها
            </Typography>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignsContainer;
