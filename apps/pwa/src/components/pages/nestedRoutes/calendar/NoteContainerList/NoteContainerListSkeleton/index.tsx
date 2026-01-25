import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';

const NoteContainerListSkeleton = () => {
  return (
    <div
      data-testid={'note-list-skeleton'}
      style={{ paddingTop: HEADER_HEIGHT + 20 }}
      className="w-full h-[100dvh] flex flex-col items-center gap-3 px-4 animate-skeleton"
    >
      <div className="w-full h-[80px] rounded-md bg-impo_Surface_OutlineVariant" />
      <div className="w-full h-[80px] rounded-md bg-impo_Surface_OutlineVariant" />
      <div className="w-full h-[80px] rounded-md bg-impo_Surface_OutlineVariant" />
      <div className="w-full h-[80px] rounded-md bg-impo_Surface_OutlineVariant" />
    </div>
  );
};

export default NoteContainerListSkeleton;
