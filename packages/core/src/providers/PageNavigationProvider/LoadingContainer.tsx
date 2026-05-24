import { MAX_SCREEN_WIDTH } from '../../constants/app.constants';

const LoadingContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed top-0 left-0 right-0 bottom-0 mx-auto overflow-hidden z-[80]"
    >
      {children}
    </div>
  );
};

export default LoadingContainer;
