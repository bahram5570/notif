import CustomImage from '@components/ui/CustomImage';

const TestOnlineWrapper = ({ children }: { children: React.ReactNode }) => {
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
                "
    >
      <div
        className="
                    absolute 
                    -top-[60px] 
                    sm:top-[0px] 
                    left-0 
                    right-0 
                    w-full 
                    h-[400px] 
                    pointer-events-auto 
                    -z-10 
                    overflow-hidden 
                    sm:overflow-visible  lg:h-full
                  "
      >
        <CustomImage
          src="/assets/images/genetic/coverHollow.webp"
          alt="coverHollow"
          fill={true}
          className="object-cover dark:hidden block"
        />
        <CustomImage
          src="/assets/images/genetic/coverHollowDark.webp"
          alt="coverHollowDark"
          fill={true}
          className="object-cover dark:block hidden"
        />
      </div>

      <>{children}</>
    </div>
  );
};

export default TestOnlineWrapper;
