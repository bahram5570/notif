import { useCallback, useState } from 'react';

import { FeedbackOptions } from '@providers/ToastProvider/types';

const useFeedBackToast = () => {
  const [toastData, setToastData] = useState<FeedbackOptions | null>(null);
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const feedbackToastHandler = useCallback((data: FeedbackOptions) => {
    setToastData(data);
    setShouldRender(true);
    requestAnimationFrame(() => setVisible(true));

    setTimeout(() => {
      setVisible(false);
      setTimeout(() => setShouldRender(false), 500);
    }, data.duration || 3000);
  }, []);

  return { toastData, visible, shouldRender, feedbackToastHandler };
};

export default useFeedBackToast;
