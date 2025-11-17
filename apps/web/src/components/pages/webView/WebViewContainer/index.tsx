import { WEB_VIEW_MAX_WIDTH } from '@constants/app.constants';

import { WebViewContainerPropsType } from './type';

const WebViewContainer = ({ children }: WebViewContainerPropsType) => {
  return (
    <div className=" mx-auto" style={{ maxWidth: WEB_VIEW_MAX_WIDTH }}>
      <div className="flex flex-col gap-7 divide-y-2 p-6">{children}</div>
    </div>
  );
};

export default WebViewContainer;
