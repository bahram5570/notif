import { useRef } from 'react';

import { RoutinBookmarked } from '@repo/core/components/Routin/RoutinBookmarked';

import { HEADER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import RoutinCommentList from './RoutinCommentList';
import RoutinHeading from './RoutinHeading';
import RoutinItemsTab from './RoutinItemsTab';
import RoutinTab from './RoutinTab';
import { RoutinTabNameEnum } from './RoutinTab/enum';
import useRoutinTab from './__hooks__/useRoutinTab';
import { RoutinItemsContainerPropsType } from './type';

const RoutinItemsContainer = (props: RoutinItemsContainerPropsType) => {
  const { tab, tabHandler } = useRoutinTab();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        className="fixed top-11 left-0 right-6 bottom-0  mx-auto pl-6 pb-[100px] z-40 pointer-events-none"
        style={{ maxWidth: MAX_SCREEN_WIDTH }}
      >
        <RoutinBookmarked isBookmarked={props.isbookmarked} programId={props.programId} />
      </div>
      <div
        className="relative w-full  px-4 pb-6 overflow-y-auto"
        style={{ paddingTop: HEADER_HEIGHT + 16, height: '100dvh' }}
        ref={scrollRef}
      >
        <div className="w-full h-[360px] absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FEE8E6] to-[#FEE8E600] -z-10 dark:bg-none" />

        <div className="relative z-10 h-full ">
          <RoutinHeading {...props} />

          <div className="w-full rounded-xl py-3   bg-impo_Neutral_Background  ">
            <RoutinTab
              commentTabName={props.commentTabName}
              itemsTabName={props.itemsTabName}
              tab={tab}
              tabHandler={tabHandler}
            />
            {tab === RoutinTabNameEnum.Items && <RoutinItemsTab {...props} />}
            {tab === RoutinTabNameEnum.Comments && (
              <RoutinCommentList
                programId={props.programId}
                commentPlaceholder={props.commentPlaceholder}
                scrollRef={scrollRef}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoutinItemsContainer;
