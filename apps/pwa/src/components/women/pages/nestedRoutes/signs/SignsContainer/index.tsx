import SignsLists from './SignsLists';
import SignsSelectDay from './SignsSelectDay';
import { SIGNS_SELECT_DAY_HEIGHT } from './SignsSelectDay/constants';
import SingsFooter from './SingsFooter';
import useSignsSlide from './__hooks__/useSignsSlide';
import useSingSelectedList from './__hooks__/useSingSelectedList';
import { SignsContainerProps } from './types';

const SignsContainer = ({ infoList }: SignsContainerProps) => {
  const { slide, slideHandler } = useSignsSlide({ infoList });
  const { updateSingSelectedList, singSelectedList, isDisableBtn } = useSingSelectedList({ info: infoList[slide] });

  const selectedDate = infoList[slide].gregorianDate;

  return (
    <>
      <div className="relative w-full pb-4 z-0" style={{ paddingTop: SIGNS_SELECT_DAY_HEIGHT }}>
        <SignsSelectDay slide={slide} slideHandler={slideHandler} infoList={infoList} />
        <SignsLists
          slide={slide}
          slideHandler={slideHandler}
          infoList={infoList}
          updateSingSelectedList={updateSingSelectedList}
        />

        <SingsFooter singSelectedList={singSelectedList} selectedDate={selectedDate} isDisableBtn={isDisableBtn} />
      </div>
    </>
  );
};

export default SignsContainer;
