const ShareExperienceSkeleton = () => {
  return (
    <div className="relative w-full px-4" style={{ direction: 'rtl' }}>
      <div className="w-full h-14 flex items-center justify-between">
        <div className="w-10 h-10 rounded-full shimmer" />
      </div>

      <div className="w-20 h-5 rounded-md mb-4 mt-2 shimmer" />

      <div className="w-full flex justify-between">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full shimmer" />
          <div className="w-16 h-4 rounded-md shimmer" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full shimmer" />
          <div className="w-16 h-4 rounded-md shimmer" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full shimmer" />
          <div className="w-16 h-4 rounded-md shimmer" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full shimmer" />
          <div className="w-16 h-4 rounded-md shimmer" />
        </div>
      </div>

      <div className="w-full flex gap-2 my-6">
        <div className="w-20 h-11 rounded-full shimmer" />
        <div className="w-16 h-11 rounded-full shimmer" />
        <div className="w-28 h-11 rounded-full shimmer" />
      </div>

      <div className="w-full h-40 rounded-xl mb-4 shimmer" />
      <div className="w-full h-40 rounded-xl mb-4 shimmer" />
    </div>
  );
};

export default ShareExperienceSkeleton;
