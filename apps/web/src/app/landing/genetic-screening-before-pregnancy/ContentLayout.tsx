import ContentGenetic from '@components/pages/landing/GeneticScreeningBeforePregnancy/ContentGenetic';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="w-full max-w-[500px] relative  landing_container">
    <div className="w-full  relative  landing_container">
      <>{children}</>
      <ContentGenetic />
    </div>
  );
};

export default ContentLayout;
