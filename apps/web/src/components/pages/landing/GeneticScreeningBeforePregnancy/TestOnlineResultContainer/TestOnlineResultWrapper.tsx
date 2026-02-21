import CustomImage from '@components/ui/CustomImage';
import { useSystem } from '@repo/core/hooks/useSystem';

const TestOnlineResultWrapper = ({ children }: { children: React.ReactNode }) => {
  const { breakPoint } = useSystem();
  return (
    <div
      className="
                    rounded-3xl
                    sm:relative
                    w-full 
                    px-4 
                    sm:px-6 
                    py-5 
                    flex
                    flex-col
                    items-center
                    overflow-hidden
                    lg:!bg-no-repeat 
                    lg:!bg-top
                "
      style={{
        background: breakPoint.desktop
          ? `url(/assets/images/genetic-bg.webp),linear-gradient( #C9B3F750 15%,#FFFFFF, #FFFFFF , #FFFFFF)`
          : undefined,
      }}
    >
      <div
        className="
                    absolute 
                    -top-[60px] 
                    sm:top-[0px] 
                    left-0 
                    right-0 
                    w-full 
                    h-[380px]
                    lg:h-screen 
                    pointer-events-auto 
                    -z-10 
                    overflow-hidden 
                    sm:overflow-visible lg:hidden
                  "
      >
        <CustomImage
          src="/assets/images/genetic/coverHollow.webp"
          alt="coverHollow"
          fill={true}
          className="object-cover"
        />
      </div>

      <>{children}</>
    </div>
  );
};

export default TestOnlineResultWrapper;
