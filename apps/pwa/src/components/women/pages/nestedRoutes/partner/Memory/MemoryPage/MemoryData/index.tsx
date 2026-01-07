import PlusIcon from '@assets/icons/plus.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import MemoryList from './MemoryList';
import { HasDataMemoryPropsType } from './type';

const MemoryData = ({ memories }: HasDataMemoryPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ id: 'newMemory', showProgressBar: true, linkTo: '/protected/createMemory' });
  };

  return (
    <div className="p-4">
      <Dark_Typography fontSize="Lable_Large" className="text-impo_Primary_Primary text-right w-full">
        خاطره‌ بازی
      </Dark_Typography>

      <MemoryList memories={memories} />
      <div onClick={onClick} className="mt-auto mb-4 fixed bottom-0 left-0 right-0 z-40">
        <div className="flex flex-row items-center gap-1 justify-center">
          <div className="pl-6 pr-4 py-3 flex justify-end items-center rounded-full gap-1 bg-impo_Primary_Primary">
            <Dark_Typography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
              خاطره جدید
            </Dark_Typography>

            <PlusIcon className="w-5 h-5 stroke-impo_White" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryData;
