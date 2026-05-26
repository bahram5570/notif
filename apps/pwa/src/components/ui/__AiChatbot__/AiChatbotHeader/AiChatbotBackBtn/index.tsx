import ArrowRightIcon from '@assets/shared/icons/ArrowRight.svg';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

const AiChatbotBackBtn = () => {
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();
  const id = `AiChatbotHeaderRouteBack`;

  const clickHandler = () => {
    if (!navigationLoadingId) {
      pageNavigationHandler({ linkTo: -1, id });
    }
  };
  return (
    <div
      className="cursor-pointer flex justify-center items-center  w-12 h-12 rounded-full glass-card  !bg-white/70    shadow-sm"
      onClick={clickHandler}
    >
      {navigationLoadingId === id && <CustomSpinner className="!border-impo_Surface_Outline" size={28} />}
      {navigationLoadingId !== id && (
        <ArrowRightIcon className="w-6 h-full stroke-2 fill-impo_Surface_InverseSurface" />
      )}
    </div>
  );
};

export default AiChatbotBackBtn;
