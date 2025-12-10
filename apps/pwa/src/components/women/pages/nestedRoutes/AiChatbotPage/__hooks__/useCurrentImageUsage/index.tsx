import { useEffect, useState } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

const useCurrentImageUsage = () => {
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);

  const [imagesCount, setImageCount] = useState(0);

  const updateImageCountHandler = (count: number) => {
    setImageCount(count);
  };

  // useEffect(() => {
  //   updateQuery({
  //     queryKey: ['historyAiChat'],
  //     payload: {
  //       ...historyAiChat,
  //       currentImageUsage: historyAiChat?.currentImageUsage
  //         ? historyAiChat.currentImageUsage + imagesCount
  //         : imagesCount,
  //     },
  //   });
  // }, [imagesCount]);

  return { updateImageCountHandler, imagesCount };
};

export default useCurrentImageUsage;
