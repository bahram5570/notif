import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

const NoteContainerSkeleton = () => {
  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="w-full h-[120px] rounded-md my-5 bg-impo_Surface_SurfaceVariant" />
      <div className="w-full h-[100px] rounded-md bg-impo_Surface_SurfaceVariant" />
      <div className="w-full h-[150px] rounded-md mt-5 bg-impo_Surface_SurfaceVariant" />
    </div>
  );
};

export default NoteContainerSkeleton;
