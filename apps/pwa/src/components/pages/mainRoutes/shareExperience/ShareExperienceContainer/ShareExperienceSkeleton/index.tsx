const ShareExperienceSkeleton = () => {
  return (
    <div className="relative w-full px-4 animate-pulse z-50 " style={{ direction: 'rtl' }}>
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

    // <div className="w-full px-4 animate-pulse" style={{ direction: 'rtl', paddingTop: HEADER_HEIGHT }}>
    //   <div className="w-[100px] h-[20px] rounded-md mb-6 bg-impo_Surface_SurfaceVariant" />

    //   <div className="w-full max-w-full overflow-hidden flex gap-4">
    //     {list.map((i) => (
    //       <div key={i} className="min-w-[130px] min-h-[140px] rounded-xl bg-impo_Surface_SurfaceVariant" />
    //     ))}
    //   </div>

    //   <div className="flex gap-4 pt-4 pb-8">
    //     <div className="w-[60px] h-[40px] rounded-full bg-impo_Surface_SurfaceVariant" />
    //     <div className="w-[120px] h-[40px] rounded-full bg-impo_Surface_SurfaceVariant" />
    //     <div className="w-[140px] h-[40px] rounded-full bg-impo_Surface_SurfaceVariant" />
    //   </div>

    //   <div className="w-full flex flex-col gap-4">
    //     {list.map((i) => (
    //       <div className="w-full h-[20px] rounded-md bg-impo_Surface_SurfaceVariant" key={i} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default ShareExperienceSkeleton;
