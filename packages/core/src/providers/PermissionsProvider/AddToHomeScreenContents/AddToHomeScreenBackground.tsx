import { CustomImage } from '../../../components/ui/CustomImage';

import { useSystem } from '../../../hooks/useSystem';

const AddToHomeScreenBackground = () => {
  const { appName } = useSystem();

  const src1 =
    appName === 'MEN_PWA' ? '/assets/shared/images/men-cover-hollow.png' : '/assets/shared/images/cover-hollow.png';

  const src2 =
    appName === 'MEN_PWA'
      ? '/assets/shared/images/men-cover-hollow_noBackground.png'
      : '/assets/shared/images/cover-hollow_noBackground.png';

  return (
    <div className="absolute top-0 left-0 right-0 flex justify-center items-start z-0 pointer-events-none">
      <CustomImage
        src={src1}
        alt="hollow"
        className={`w-full h-auto scale-[1.6] -translate-y-[20%] block dark:hidden`}
      />

      <CustomImage
        src={src2}
        alt="hollow"
        className={`w-full h-auto scale-[1.6] -translate-y-[20%] hidden dark:block`}
      />
    </div>
  );
};

export default AddToHomeScreenBackground;
