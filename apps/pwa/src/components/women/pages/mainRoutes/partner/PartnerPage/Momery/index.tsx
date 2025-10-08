import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useAnalytics from '@hooks/useAnalytics';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import CustomLink from '../CustomLink';
import { MemeryPropsType } from './type';

const Memory = ({ memory, valid }: MemeryPropsType) => {
  const { callEvent } = useAnalytics();
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const link = valid ? '/protected/createMemory' : '/protected/partnerStart';

  const onClick = () => {
    pageNavigationHandler({ id: 'memoryList', showProgressBar: true, linkTo: '/protected/memory' });
  };

  return (
    <div
      className="flex flex-col gap-4 py-4 px-8 rounded-xl  items-end"
      style={{ border: `1px solid ${colors.Neutral_Surface}` }}
    >
      <div className="flex justify-between items-end ">
        <Typography scale="Title" size="Small">
          {memory.cardTitle}
        </Typography>
      </div>

      <div className="w-full relative" onClick={onClick}>
        <CustomImage
          src={memory.image || '/assets/images/partner.webp'}
          className="w-full object-cover rounded-xl"
          style={{ aspectRatio: '16/9' }}
        />
      </div>

      <div className="flex flex-col justify-end items-end">
        {valid && (
          <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
            {memory.title}
          </Typography>
        )}

        <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
          {textShorter(memory.description, 120)}
        </Typography>
      </div>

      <CustomLink
        lable={memory.buttonText}
        link={link}
        id="memory-link"
        onClick={() => callEvent('Pair_Memory_Card')}
      />
    </div>
  );
};

export default Memory;
