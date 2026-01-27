const CalendarSkeleton = () => {
  const list1 = [1, 2, 3, 4, 5, 6, 7];
  const list2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <div className="w-full flex flex-col items-center animate-skeleton">
      <div className="w-20 h-4 rounded-md bg-impo_Surface_SurfaceVariant" />

      <div className="flex justify-center gap-4 mb-3 mt-6">
        {list1.map((item) => (
          <div className="w-9 h-4 rounded-md bg-impo_Surface_SurfaceVariant" key={item} />
        ))}
      </div>

      <div className="w-fit grid grid-cols-7 justify-center gap-x-4 gap-y-3">
        {list2.map((item) => (
          <div className="w-9 h-9 rounded-lg bg-impo_Surface_SurfaceVariant" key={item} />
        ))}
      </div>
    </div>
  );
};

export default CalendarSkeleton;
