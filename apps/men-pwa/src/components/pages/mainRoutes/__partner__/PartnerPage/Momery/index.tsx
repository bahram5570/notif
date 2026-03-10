import { PartnerCustomLink } from '@repo/core/components/partner/PartnerCustomLink';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@repo/core/utils/scripts';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { MemeryPropsType } from './type';

const Memory = ({ memory, valid }: MemeryPropsType) => {
  const { callEvent } = useAnalytics();

  const { pageNavigationHandler } = usePageNavigationLoading();

  const link = valid ? '/protected/createMemory' : '/protected/startPartner';

  const onClick = () => {
    pageNavigationHandler({ id: 'memoryList', showProgressBar: true, linkTo: '/protected/memory' });
  };

  return (
    <div className="flex flex-col gap-4 py-4    items-end ">
      <div className="flex justify-between items-end ">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {memory.cardTitle}
        </CustomTypography>
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
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {memory.title}
          </CustomTypography>
        )}
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {textShorter(memory.description, 120)}
        </CustomTypography>
      </div>

      <PartnerCustomLink
        lable={memory.buttonText}
        link={link}
        id="memory-link"
        onClick={() => callEvent('Pair_Memory_Card')}
        className="!text-impo_PrimaryMan_PrimaryMan !bg-impo_PrimaryMan_PrimaryContainerMan"
      />
    </div>
  );
};

export default Memory;
