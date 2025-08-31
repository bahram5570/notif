import CustomImage from '@components/ui/CustomImage';

const TestOnlineWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
                    sm:relative
                    w-full 
                    sm:min-h-[500px]
                    rounded-2xl 
                    px-4 
                    sm:px-6 
                    py-5 
                    sm:rounded-2xl 
                    sm:shadow-[0_0_8px_#00000022]
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
                    sm:overflow-visible
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

export default TestOnlineWrapper;
