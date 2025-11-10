import ArrowRightIcon from '@assets/icons/ArrowRight.svg';

import Spinner from '@components/ui/Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

const AiChatbotBackBtn = () => {
  const { colors } = useTheme();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const id = `AiChatbotHeaderRouteBack`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      pageNavigationHandler({ showProgressBar: false, linkTo: -1, id });
    }
  };
  return (
    <div
      className="cursor-pointer flex justify-center items-center  w-12 h-12 rounded-full glass-card  !bg-white/70 shadow-sm"
      onClick={clickHandler}
    >
      {pageNavigationLoading === id && <Spinner color="outline" width={28} />}
      {pageNavigationLoading !== id && (
        <ArrowRightIcon className="w-6 h-full stroke-2" style={{ fill: colors.Surface_InverseSurface }} />
      )}
    </div>
  );
};

export default AiChatbotBackBtn;
