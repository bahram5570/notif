import ImpoIcon from '@assets/images/questionsImpo.svg';

import useTheme from '@hooks/useTheme';

const ICON_WIDTH = 64;

const AddToHomeScreenContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { colors } = useTheme();

  return (
    <div className={`relative w-full px-8 z-10 ${className || ''}`} style={{ direction: 'rtl' }}>
      <div
        style={{ borderColor: colors.PrimaryWoman_Primary }}
        className="relative w-full px-4 pb-6 pt-12 border-[1px] rounded-3xl flex flex-col items-center"
      >
        <div
          style={{ top: -ICON_WIDTH / 2 }}
          className="absolute left-0 right-0 flex justify-center pointer-events-none z-10"
        >
          <ImpoIcon style={{ height: ICON_WIDTH, width: ICON_WIDTH }} />
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
