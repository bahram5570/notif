import ArrowRightIcon from '@assets/icons/ArrowRight.svg';

import Dark_Spinner from '@components/ui/Dark_Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

const AiChatbotBackBtn = () => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const id = `AiChatbotHeaderRouteBack`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      pageNavigationHandler({ showProgressBar: false, linkTo: -1, id });
    }
  };
  return (
    <div
      className="cursor-pointer flex justify-center items-center  w-12 h-12 rounded-full glass-card  !bg-white/70 dark:!bg-white/5  dark:!bg-white/5shadow-sm"
      onClick={clickHandler}
    >
      {pageNavigationLoading === id && <Dark_Spinner className="!border-impo_Surface_Outline" size={28} />}
      {pageNavigationLoading !== id && (
        <ArrowRightIcon className="w-6 h-full stroke-2 fill-impo_Surface_InverseSurface" />
      )}
    </div>
  );
};

export default AiChatbotBackBtn;
