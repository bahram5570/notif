import { OverlayBayPropsType } from './type';

const OverlayBar = ({ children, btnTop, className, style }: OverlayBayPropsType) => {
  return (
    <div className={` fixed bottom-0   right-0 left-0  z-40 ${className}`} style={{ ...style, top: btnTop }}>
      {children}
    </div>
  );
};

export default OverlayBar;
