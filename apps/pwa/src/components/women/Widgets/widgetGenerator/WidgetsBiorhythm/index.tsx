import { colorFormatConverter } from '@utils/scripts';

import BiorhythemItems from '@components/__Biorhythem__/BiorhythemItems';
import Typography from '@components/ui/Typography';

import { BiorhythmPropsType } from './type';

const WidgetsBiorhythm = ({ data }: BiorhythmPropsType) => {
  return (
    <div
      className="flex flex-col gap-4 p-4 rounded-xl  items-end"
      // style={{ border: `1px solid ${colors.Neutral_Surface}` }}
    >
      <div className="flex justify-between items-end ">
        <Typography scale="Title" size="Small">
          {data.title}
        </Typography>
      </div>
      <div
        style={{ backgroundColor: colorFormatConverter(data.backgroundColour) }}
        className="rounded-2xl p-4 flex flex-col gap-3"
      >
        <BiorhythemItems {...data} />
      </div>
    </div>
  );
};

export default WidgetsBiorhythm;
