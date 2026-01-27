import { useState } from 'react';

import Dark_Spinner from '@components/ui/Dark_Spinner';

import { WebViewPropsType } from './type';

const WebView = ({ url }: WebViewPropsType) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ width: '100%', height: '100dvh' }}>
      {isLoading && (
        <div className="flex justify-center items-center w-full h-full ">
          <Dark_Spinner size={50} />
        </div>
      )}

      <iframe
        src={url}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: isLoading ? 'none' : 'block',
        }}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default WebView;
