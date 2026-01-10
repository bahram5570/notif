import { useEffect } from 'react';

import { chatFileTypeDetector } from '../__utils__';

import Dark_Spinner from '@components/ui/Dark_Spinner';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useDelayCallback from '@hooks/useDelayCallback';

import { SideTypeEnum } from '../../__hooks__/useGetData/enums';
import { CHAT_PAGE_ID } from '../../constants';
import ChatContainerMaker from '../MessageGenerator/ChatContainerMaker';
import { LoadingStatusTypes } from './types';

const FileLoading = () => {
  const { getQuery } = useCustomReactQuery();

  const { startDelay } = useDelayCallback(() => {
    const el = document.getElementById(CHAT_PAGE_ID);

    if (el) {
      const scrollHeight = el.scrollHeight;
      window.scroll({ top: scrollHeight + 1000, behavior: 'smooth' });
    }
  });

  const loadingStatus = getQuery<LoadingStatusTypes>({ queryKey: ['chatFileLoading'] });
  const isFileLoading = loadingStatus?.isLoading;
  const { isImageType } = chatFileTypeDetector(loadingStatus?.uploadingFileType || '');
  const dateTime = new Date() as unknown as string;

  useEffect(() => {
    if (isFileLoading) {
      startDelay(100);
    }
  }, [isFileLoading]);

  return (
    <>
      {isFileLoading && (
        <ChatContainerMaker dateTime={dateTime} sideType={SideTypeEnum.Patient} width="fit-content">
          {isImageType && (
            <div className="w-[260px] h-[240px] rounded-xl flex justify-center items-center animate-skeleton bg-impo_Neutral_Surface">
              <Dark_Spinner />
            </div>
          )}

          {!isImageType && (
            <div className="w-[240px] flex items-center gap-2">
              <div className="relative w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center bg-impo_Primary_Primary">
                <Dark_Spinner size={20} className="border-impo_Neutral_Surface" />
              </div>
            </div>
          )}
        </ChatContainerMaker>
      )}
    </>
  );
};

export default FileLoading;
