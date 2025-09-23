import CrossIcon from '@assets/icons/plus.svg';

import BiorhythemItems from '@components/__Biorhythem__/BiorhythemItems';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { PopupBiorythemProps } from './type';

const PopupBiorythem = ({ data }: PopupBiorythemProps) => {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <>
      <CrossIcon
        onClick={() => router.back()}
        style={{ stroke: colors.Surface_OnSurfaceVariant }}
        className=" w-6 h-6 rotate-45 cursor-pointer  stroke-[2px] z-10"
      />
      <div
        className="flex flex-col gap-4 p-4 rounded-xl  items-end mt-5"
        style={{ border: `1px solid ${colors.Neutral_Surface}` }}
      >
        <div className="flex justify-between items-end ">
          <Typography scale="Title" size="Small">
            {data.title}
          </Typography>
        </div>
        <div style={{ backgroundColor: colors.Surface_SurfaceVariant }} className="rounded-2xl p-4 flex flex-col gap-3">
          <BiorhythemItems {...data} />
        </div>
      </div>
    </>
  );
};

export default PopupBiorythem;
