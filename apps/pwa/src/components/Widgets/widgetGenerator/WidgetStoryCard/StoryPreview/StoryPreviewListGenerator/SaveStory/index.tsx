import { useEffect, useState } from 'react';

import SaveEmptyIcon from '@assets/icons/saveEmpty.svg';
import SaveFillIcon from '@assets/icons/saveFill.svg';

import { SaveStoryProps } from './types';

const SaveStory = ({ selectHandler, isBookmarked }: SaveStoryProps) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(isBookmarked);
  }, [isBookmarked]);

  const isSavedHandler = () => {
    selectHandler();
    setIsSaved((state) => !state);
  };

  return (
    <div
      className="absolute left-4 bottom-4 w-12 h-12 flex items-center justify-center cursor-pointer z-[30]"
      onClick={isSavedHandler}
      id="StoryBookMarked"
    >
      {!isSaved && <SaveEmptyIcon className="w-6 h-auto  stroke-impo_White" />}
      {isSaved && <SaveFillIcon className="w-6 h-auto fill-impo_White" />}
    </div>
  );
};

export default SaveStory;
