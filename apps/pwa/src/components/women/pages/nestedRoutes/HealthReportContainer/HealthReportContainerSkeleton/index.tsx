const HealthReportContainerSkeleton = () => {
  return (
    <div className="w-full animate-skeleton">
      <div className="w-[180px] h-[24px] rounded-lg ml-auto bg-impo_White" />

      <div className="flex gap-4 py-4">
        <div className="w-full h-[170px] rounded-2xl bg-impo_White" />
        <div className="w-full h-[170px] rounded-2xl bg-impo_White " />
      </div>

      <div className="w-full h-[260px] rounded-2xl bg-impo_White" />
    </div>
  );
};

export default HealthReportContainerSkeleton;
