import { CustomButton } from '../../../components/ui/CustomButton';
import { CustomTypography } from '../../../components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '../../../constants/app.constants';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { BlockMessageToastProps } from './type';

const BlockMessageToast = ({ textMessage, btnText }: BlockMessageToastProps) => {
  const { pageNavigationLoading, pageNavigationHandler } = usePageNavigationLoading();
  const id = 'BlockMessageToast';
  const onClick = () => {
    pageNavigationHandler({
      showProgressBar: false,
      id,
      linkTo: '/',
    });
  };

  const isLoading = pageNavigationLoading === id;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center mx-auto  transition-all duration-500 ease-in-out z-[999999] px-6 opacity-100 pointer-events-auto"
      style={{
        background: 'rgba(0, 0, 0, 0.16)',
        backdropFilter: 'blur(2.5px)',
        maxWidth: MAX_SCREEN_WIDTH,
      }}
    >
      <div className="bg-impo_Neutral_Background w-4/5 p-4 rounded-2xl">
        <div className="flex flex-col justify-center items-center gap-2">
          <CustomTypography className=" text-center text-impo_Neutral_OnBackground">{textMessage}</CustomTypography>
          <CustomButton onClick={onClick} isLoading={isLoading}>
            {btnText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BlockMessageToast;
