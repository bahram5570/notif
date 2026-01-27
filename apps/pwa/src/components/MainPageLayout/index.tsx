import MainPageLayoutHeader from './MainPageLayoutHeader';
import { HEADER_HEIGHT } from './constants';
import { MainPageLayoutProps } from './types';

const MainPageLayout = (props: MainPageLayoutProps) => {
  const headerProps = { ...props };
  delete headerProps.headerClassName;
  delete headerProps.paddingBottom;
  delete headerProps.paddingTop;
  delete headerProps.className;
  delete headerProps.children;

  const paddingTop = typeof props.paddingTop === 'undefined' ? `${HEADER_HEIGHT + 16}px` : props.paddingTop;
  const paddingBottom = typeof props.paddingBottom === 'undefined' ? 0 : props.paddingBottom;

  return (
    <div
      style={{ paddingTop, paddingBottom }}
      className={`w-full min-h-[100dvh] flex flex-col ${props.className || {}}`}
    >
      <MainPageLayoutHeader {...headerProps} className={props.headerClassName} />

      <>{props.children}</>
    </div>
  );
};

export default MainPageLayout;
