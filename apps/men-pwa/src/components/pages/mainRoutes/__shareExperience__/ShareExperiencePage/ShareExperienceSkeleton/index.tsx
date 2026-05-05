import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

const list = [1, 2, 3, 4, 5, 6, 7, 8];

const ShareExperienceSkeleton = () => {
  return (
    <div className="w-full px-4 animate-pulse" style={{ direction: 'rtl', paddingTop: HEADER_HEIGHT }}>
      <div className="w-[100px] h-[20px] rounded-md mb-6 bg-impo_Surface_SurfaceVariant" />

      <div className="w-full max-w-full overflow-hidden flex gap-4">
        {list.map((i) => (
          <div key={i} className="min-w-[130px] min-h-[140px] rounded-xl bg-impo_Surface_SurfaceVariant" />
        ))}
      </div>

      <div className="flex gap-4 pt-4 pb-8">
        <div className="w-[60px] h-[40px] rounded-full bg-impo_Surface_SurfaceVariant" />
        <div className="w-[120px] h-[40px] rounded-full bg-impo_Surface_SurfaceVariant" />
        <div className="w-[140px] h-[40px] rounded-full bg-impo_Surface_SurfaceVariant" />
      </div>

      <div className="w-full flex flex-col gap-4">
        {list.map((i) => (
          <div className="w-full h-[20px] rounded-md bg-impo_Surface_SurfaceVariant" key={i} />
        ))}
      </div>
    </div>
  );
};

export default ShareExperienceSkeleton;
