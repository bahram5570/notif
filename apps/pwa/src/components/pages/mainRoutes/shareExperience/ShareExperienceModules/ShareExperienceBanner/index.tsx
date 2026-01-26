import CustomImage from '@components/ui/CustomImage';

const ShareExperienceBanner = ({ bannerMedia }: { bannerMedia: string }) => {
  return (
    <div className="px-4 pt-4">
      <CustomImage src={bannerMedia} className="rounded-2xl pb-[2px]" />
    </div>
  );
};

export default ShareExperienceBanner;
