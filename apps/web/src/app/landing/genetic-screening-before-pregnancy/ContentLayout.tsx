import ContentGenetic from '@components/pages/landing/GeneticScreeningBeforePregnancy/ContentGenetic';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[500px] relative">
      <>{children}</>
      <ContentGenetic />
    </div>
  );
};

export default ContentLayout;
