const ProfileSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 pt-4 animate-skeleton" dir="rtl">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 pb-4">
          <div className="w-14 h-14 rounded-full shimmer" />

          <div className="flex flex-col gap-2">
            <div className="w-10 h-5 rounded-md shimmer" />
            <div className="w-20 h-5 rounded-md shimmer" />
          </div>
        </div>

        <div className="w-28 h-6 rounded-full shimmer" />
      </div>

      <div className="w-full grid grid-cols-3 gap-2 pb-3">
        <div className="w-full h-[120px] rounded-2xl shimmer" />
        <div className="w-full h-[120px] rounded-2xl shimmer" />
        <div className="w-full h-[120px] rounded-2xl shimmer" />
      </div>

      <div className="w-full h-[72px] rounded-xl shimmer mb-5" />

      <div className="w-20 h-6 rounded-md ml-auto mt-2 shimmer mb-2" />

      <div className="w-full h-10 flex gap-2 overflow-hidden">
        <div className="min-w-[140px] h-full rounded-full shimmer" />
        <div className="min-w-[160px] h-full rounded-full shimmer" />
        <div className="min-w-[160px] h-full rounded-full shimmer" />
      </div>
    </div>
  );
};

export default ProfileSkeleton;
