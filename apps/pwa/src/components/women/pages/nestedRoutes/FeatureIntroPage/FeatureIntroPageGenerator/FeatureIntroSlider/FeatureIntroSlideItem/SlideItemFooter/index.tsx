import ArrowIcon from '@assets/icons/arrow.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { SlideItemFooterPropsType } from './type';

const SlideItemFooter = ({ clickHandler, currentIndex, data }: SlideItemFooterPropsType) => {
  const lastIndex = currentIndex === data.slides.length - 1;

  return (
    <div className="flex justify-center items-center mt-4 fixed bottom-0 p-4 mx-auto w-full">
      <div className={`mt-4 flex ${lastIndex ? 'gap-8' : 'gap-20'}   justify-between items-center`}>
        <div
          onClick={() => {
            clickHandler(currentIndex - 1);
          }}
          className={`!w-10 h-10 px-0 flex justify-center items-center rounded-full !bg-impo_Black !border-impo_Black ${currentIndex === 0 && 'pointer-events-none'}`}
        >
          <ArrowIcon className="w-4 h-4 stroke-impo_White" />
        </div>
        <div
          onClick={() => clickHandler(currentIndex + 1)}
          className={`${lastIndex ? '!w-[276px] !h-12' : '!w-10 h-10'}  px-0 flex justify-center items-center rounded-full !bg-impo_Black !border-impo_Black`}
        >
          {lastIndex ? (
            <Dark_Typography fontSize="Lable_Large" className="text-impo_PrimaryMan_OnPrimaryMan">
              {data.textBtn}
            </Dark_Typography>
          ) : (
            <ArrowIcon className="w-4 h-4 transform rotate-180 stroke-impo_White" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideItemFooter;
