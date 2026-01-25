import { ICONS_WIDTH } from '@components/SignGenerator/constants';

const SignsSkeleton = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="w-full px-4 animate-skeleton" style={{ paddingTop: 100 }}>
      <div className="w-full rounded-xl px-4 pb-4 pt-6 mt-4 flex flex-col items-end bg-impo_White">
        <div className="w-20 h-3 rounded-md bg-impo_Surface_OutlineVariant" />
        <div className="w-full h-[1px] block mt-2 mb-3 bg-impo_Neutral_Surface" />

        <div className="w-full grid grid-cols-4 justify-between gap-4">
          {list.map((item) => (
            <div className="flex flex-col items-center gap-2" key={item}>
              <div
                className="w-9 h-9 rounded-full bg-impo_Surface_OutlineVariant"
                style={{ width: ICONS_WIDTH, height: ICONS_WIDTH }}
              />

              <div className="w-14 h-3 rounded-md bg-impo_Surface_OutlineVariant" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignsSkeleton;
