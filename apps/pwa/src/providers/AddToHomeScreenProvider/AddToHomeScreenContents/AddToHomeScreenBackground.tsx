import { CustomImage } from '@repo/core/components/ui/CustomImage';

const AddToHomeScreenBackground = () => {
  return (
    <div className="absolute top-0 left-0 right-0 flex justify-center items-start z-0 pointer-events-none">
      <CustomImage
        alt="hollow"
        src="/assets/images/coverHollow.png"
        className={`w-full h-auto scale-[1.6] -translate-y-[20%] block dark:hidden`}
      />

      <CustomImage
        alt="hollow"
        src="/assets/images/coverHollow_noBackground.png"
        className={`w-full h-auto scale-[1.6] -translate-y-[20%] hidden dark:block`}
      />
    </div>
  );
};

export default AddToHomeScreenBackground;
