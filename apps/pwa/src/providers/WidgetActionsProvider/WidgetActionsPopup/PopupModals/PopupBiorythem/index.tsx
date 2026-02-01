import CrossIcon from '@assets/icons/plus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import BiorhythemItems from '@components/__Biorhythem__/BiorhythemItems';
import { useRouter } from 'next/navigation';

import { PopupBiorythemProps } from './type';

const PopupBiorythem = ({ data }: PopupBiorythemProps) => {
  const router = useRouter();

  return (
    <>
      <CrossIcon
        onClick={() => router.back()}
        className=" w-6 h-6 rotate-45 cursor-pointer  stroke-[2px] z-10 stroke-impo_Surface_OnSurfaceVariant"
      />
      <div className="flex flex-col gap-4 p-4 rounded-xl  items-end mt-5 border border-impo_Neutral_Surface dark:border-none">
        <div className="flex justify-between items-end ">
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Title_Small">
            {data.title}
          </CustomTypography>
        </div>
        <div className="rounded-2xl p-4 flex flex-col gap-3 bg-impo_Surface_SurfaceVariant">
          <BiorhythemItems {...data} />
        </div>
      </div>
    </>
  );
};

export default PopupBiorythem;
