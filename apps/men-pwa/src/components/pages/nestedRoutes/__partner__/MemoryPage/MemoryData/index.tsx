import PlusIcon from '@assets/shared/icons/plus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import MemoryList from './MemoryList';
import { HasDataMemoryPropsType } from './type';

const MemoryData = ({ memories, partName }: HasDataMemoryPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ id: 'newMemory', navigationType: 'logo', linkTo: '/protected/createMemory' });
  };

  return (
    <>
      <CustomTypography fontSize="Lable_Large" className="text-impo_PrimaryMan_PrimaryMan text-right w-full">
        خاطره‌ بازی
      </CustomTypography>

      <MemoryList memories={memories} partName={partName} />
      <div onClick={onClick} className="mt-auto mb-4 fixed bottom-0 left-0 right-0 z-40">
        <div className="flex flex-row items-center gap-1 justify-center">
          <div className="pl-6 pr-4 py-3 flex justify-end items-center rounded-full gap-1 bg-impo_PrimaryMan_PrimaryMan">
            <CustomTypography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
              خاطره جدید
            </CustomTypography>

            <PlusIcon className="w-5 h-5 stroke-impo_White" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoryData;
