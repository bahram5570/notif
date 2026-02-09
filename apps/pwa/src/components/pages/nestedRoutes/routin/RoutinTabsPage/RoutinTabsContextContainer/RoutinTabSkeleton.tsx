import ChatIcon from '@assets/icons/message-icon.svg';
import StarIcon from '@assets/icons/star-1.svg';
import BookmarkIcon from '@assets/shared/icons/saveEmpty.svg';

const RoutinTabSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 px-5">
      <div className="w-full flex flex-col items-center gap-4 my-5">
        <div className="flex flex-row-reverse  items-center gap-2 w-full justify-between">
          <div className="w-6 h-6 min-w-6 min-h-6 rounded-full bg-impo_Neutral_Surface" />
          <div className="w-64 h-1 rounded-full bg-impo_Neutral_Surface" />
          <BookmarkIcon className="w-5 h-auto stroke-impo_Surface_OutlineVariant" />
        </div>
        <div className="flex flex-row-reverse  gap-3 w-full">
          <div className="w-14 h-14 rounded-2xl bg-impo_Neutral_Surface" />
          <div className="flex flex-col justify-center items-end gap-2">
            <div className="w-[238px] h-[10px] rounded-full bg-impo_Neutral_Surface" />
            <div className="w-[135px] h-[10px] rounded-full bg-impo_Neutral_Surface" />
          </div>
        </div>

        <div className="w-full border-[1px] bg-impo_Neutral_Surface border-impo_Neutral_Surface" />
        <div className="flex flex-row-reverse w-full justify-between px-4">
          <div className="flex flex-row-reverse items-center gap-2">
            <div className="w-[33px] h-[33px] rounded-full bg-impo_Neutral_Surface" />
            <div className="flex flex-col gap-2 items-end">
              <div className="w-[97px] h-[6px] rounded-full bg-impo_Neutral_Surface" />
              <div className="w-[79px] h-[6px] rounded-full bg-impo_Neutral_Surface" />
            </div>
          </div>

          <div className="flex flex-row-reverse items-center justify-center gap-2">
            <div className="flex flex-row-reverse items-center gap-2">
              <StarIcon className="w-5 h-auto fill-impo_Surface_OutlineVariant" />
              <div className="w-[22px] h-[5px] rounded-full bg-impo_Neutral_Surface" />
            </div>
            <div className="flex flex-row-reverse items-center gap-2">
              <ChatIcon className="w-5 h-5" />
              <div className="w-[22px] h-[5px] rounded-full bg-impo_Neutral_Surface" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-4 my-5 ">
        <div className="flex flex-row-reverse  items-center gap-2 w-full justify-between">
          <div className="w-6 h-6 min-w-6 min-h-6 rounded-full bg-impo_Neutral_Surface" />
          <div className="w-64 h-1 rounded-full bg-impo_Neutral_Surface" />
          <BookmarkIcon className="w-5 h-auto stroke-impo_Surface_OutlineVariant" />
        </div>
        <div className="flex flex-row-reverse  gap-3 w-full">
          <div className="w-14 h-14 rounded-2xl bg-impo_Neutral_Surface" />
          <div className="flex flex-col justify-center items-end gap-2">
            <div className="w-[238px] h-[10px] rounded-full bg-impo_Neutral_Surface" />
            <div className="w-[135px] h-[10px] rounded-full bg-impo_Neutral_Surface" />
          </div>
        </div>

        <div className="w-full border bg-impo_Neutral_Surface border-impo_Neutral_Surface" />
        <div className="flex flex-row-reverse w-full justify-between px-4">
          <div className="flex flex-row-reverse items-center gap-2">
            <div className="w-[33px] h-[33px] rounded-full bg-impo_Neutral_Surface" />
            <div className="flex flex-col gap-2 items-end">
              <div className="w-[97px] h-[6px] rounded-full bg-impo_Neutral_Surface" />
              <div className="w-[79px] h-[6px] rounded-full bg-impo_Neutral_Surface" />
            </div>
          </div>

          <div className="flex flex-row-reverse items-center justify-center gap-2">
            <div className="flex flex-row-reverse items-center gap-2">
              <StarIcon className="w-5 h-auto fill-impo_Surface_OutlineVariant" />
              <div className="w-[22px] h-[5px] rounded-full bg-impo_Neutral_Surface" />
            </div>
            <div className="flex flex-row-reverse items-center gap-2">
              <ChatIcon className="w-5 h-5" />
              <div className="w-[22px] h-[5px] rounded-full bg-impo_Neutral_Surface" />
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="w-full flex flex-col items-center gap-4  my-5">
        <div className="flex flex-row-reverse  items-center gap-2 w-full justify-between">
          <div className="w-6 h-6 min-w-6 min-h-6 rounded-full bg-impo_Neutral_Surface" />
          <div className="w-64 h-1 rounded-full bg-impo_Neutral_Surface" />
          <BookmarkIcon className="w-5 h-auto stroke-impo_Surface_OutlineVariant" />
        </div>
        <div className="flex flex-row-reverse  gap-3 w-full">
          <div className="w-14 h-14 rounded-2xl bg-impo_Neutral_Surface" />
          <div className="flex flex-col justify-center items-end gap-2">
            <div className="w-[238px] h-[10px] rounded-full bg-impo_Neutral_Surface" />
            <div className="w-[135px] h-[10px] rounded-full bg-impo_Neutral_Surface" />
          </div>
        </div>

        <div className="w-full border bg-impo_Neutral_Surface border-impo_Neutral_Surface" />
        <div className="flex flex-row-reverse w-full justify-between px-4">
          <div className="flex flex-row-reverse items-center gap-2">
            <div className="w-[33px] h-[33px] rounded-full bg-impo_Neutral_Surface" />
            <div className="flex flex-col gap-2 items-end">
              <div className="w-[97px] h-[6px] rounded-full bg-impo_Neutral_Surface" />
              <div className="w-[79px] h-[6px] rounded-full bg-impo_Neutral_Surface" />
            </div>
          </div>

          <div className="flex flex-row-reverse items-center justify-center gap-2">
            <div className="flex flex-row-reverse items-center gap-2">
              <StarIcon className="w-5 h-auto fill-impo_Surface_OutlineVariant" />
              <div className="w-[22px] h-[5px] rounded-full bg-impo_Neutral_Surface" />
            </div>
            <div className="flex flex-row-reverse items-center gap-2">
              <ChatIcon className="w-5 h-5" />
              <div className="w-[22px] h-[5px] rounded-full bg-impo_Neutral_Surface" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutinTabSkeleton;
