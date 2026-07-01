import ImpoIcon from '@assets/shared/icons/impoLogo.svg';
import MenImpoIcon from '@assets/shared/icons/men-impoLogo.svg';

import { useSystem } from '../../../hooks/useSystem';

const ICON_WIDTH = 64;

const AddToHomeScreenContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { appName } = useSystem();

  const headingIcon =
    appName === 'MEN_PWA' ? (
      <MenImpoIcon style={{ height: ICON_WIDTH, width: ICON_WIDTH }} />
    ) : (
      <ImpoIcon style={{ height: ICON_WIDTH, width: ICON_WIDTH }} />
    );

  return (
    <div className={`relative w-full px-8 z-10 ${className || ''}`} style={{ direction: 'rtl' }}>
      <div
        className={`
                    relative 
                    w-full 
                    px-4 
                    pb-6 
                    pt-12 
                    border-[1px] 
                    rounded-3xl 
                    flex 
                    flex-col 
                    items-center
                    ${appName === 'MEN_PWA' ? 'border-impo_PrimaryMan_PrimaryMan' : 'border-impo_Primary_Primary'}
                  `}
      >
        <div
          style={{ top: -ICON_WIDTH / 2 }}
          className="absolute left-0 right-0 flex justify-center pointer-events-none z-10"
        >
          {headingIcon}
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl overflow-hidden -z-10">
          <div className="w-full h-full backdrop-blur-3xl" />
        </div>

        <>{children}</>
      </div>
    </div>
  );
};

export default AddToHomeScreenContainer;
