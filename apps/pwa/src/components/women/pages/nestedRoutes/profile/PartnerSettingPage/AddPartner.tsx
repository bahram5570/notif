import PlusIcon from '@assets/icons/plus.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

const AddPartner = () => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ id: 'PartnerProfile', showProgressBar: true, linkTo: '/protected/partnerStart' });
  };

  return (
    <>
      <Dark_Typography fontSize="Body_Medium" className="w-full text-right text-impo_Neutral_OnBackground">
        برای شروع همدلی، پارتنرت رو اضافه کن
      </Dark_Typography>
      <div onClick={onClick} className="flex flex-row items-center justify-end w-full p-1">
        <div className="flex flex-row items-center gap-1 justify-end w-full  p-2 rounded-xl  bg-impo_Neutral_Background">
          <div className={`  p-2 w-full flex justify-end items-center`}>
            <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
              اضافه کردن همدل
            </Dark_Typography>
          </div>
          <PlusIcon className="w-6 h-6 stroke-impo_Surface_Outline" />
        </div>
      </div>
    </>
  );
};

export default AddPartner;
