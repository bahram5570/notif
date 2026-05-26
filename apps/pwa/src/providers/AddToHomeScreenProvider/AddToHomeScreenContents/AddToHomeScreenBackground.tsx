import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';

const AddToHomeScreenBackground = () => {
  return (
    <div className="absolute top-0 left-0 right-0 flex items-start z-0 pointer-events-none">
      <div className="relative w-full block dark:hidden">
        <CustomImage_NEW
          width={0}
          height={0}
          alt="hollow"
          sizes="100vw"
          src="/assets/images/coverHollow.png"
          className={`w-full h-auto scale-[1.6] -translate-y-[20%]`}
        />
      </div>

      <div className="relative w-full hidden dark:block">
        <CustomImage_NEW
          width={0}
          height={0}
          alt="hollow"
          sizes="100vw"
          src="/assets/images/coverHollow_noBackground.png"
          className={`w-full h-auto scale-[1.6] -translate-y-[20%]`}
        />
      </div>
    </div>
  );
};

export default AddToHomeScreenBackground;
