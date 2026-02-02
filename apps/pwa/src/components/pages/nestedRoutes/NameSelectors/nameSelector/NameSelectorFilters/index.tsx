import { CustomButton } from '@repo/core/components/ui/CustomButton';

import CustomModal from '@components/ui/CustomModal';
import { useRouter } from 'next/navigation';

import useNameSelectorData from '../__hooks__/useNameSelectorData';
import GenderFilterGenerator from './GenderFilterGenerator';
import StylesFilterGenerator from './StylesFilterGenerator';
import useNameSelectorFiltersGender from './__hooks__/useNameSelectorFiltersGender';
import useNameSelectorFiltersStyles from './__hooks__/useNameSelectorFiltersStyles';
import { NameSelectorFiltersProps } from './types';

const NameSelectorFilters = (props: NameSelectorFiltersProps) => {
  const router = useRouter();
  const { applyFiltersHandler, setAllFilters } = useNameSelectorData();
  const { stylesValue, stylesValueHandler, isStylesDisable, stylesList } = useNameSelectorFiltersStyles(props.isOpen);
  const { genderValue, genderValuetHandler, isGenderDisable, genderList } = useNameSelectorFiltersGender(props.isOpen);

  const applyHandler = () => {
    applyFiltersHandler();

    if (props.inputType === 'gender') {
      setAllFilters((state) => ({ ...state, gender: genderValue }));
    }

    if (props.inputType === 'styles') {
      setAllFilters((state) => ({ ...state, styles: stylesValue }));
    }

    if (props.isOpen) {
      router.back();
    }
  };

  const isDisable =
    (props.inputType === 'gender' && isGenderDisable) || (props.inputType === 'styles' && isStylesDisable);

  return (
    <CustomModal isOpen={props.isOpen} isSlidingMode={true}>
      <div className="flex flex-col">
        <div className="w-[72px] h-[4px] rounded-full mx-auto mb-6 bg-impo_Surface_OutlineVariant" />

        <div className="flex flex-col items-end gap-2 h-fit max-h-[60vh] overflow-y-auto hideScrollbar">
          {props.inputType === 'gender' && genderList && (
            <GenderFilterGenerator list={genderList} value={genderValue} onSelect={genderValuetHandler} />
          )}

          {props.inputType === 'styles' && stylesList && (
            <StylesFilterGenerator list={stylesList} value={stylesValue} onSelect={stylesValueHandler} />
          )}
        </div>

        <div className="flex flex-col justify-end gap-3 h-[120px] bg-impo_Neutral_Background">
          <CustomButton
            fontSize="Lable_Large"
            onClick={() => router.back()}
            className="!bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnBackground"
          >
            انصراف
          </CustomButton>

          <CustomButton fontSize="Lable_Large" isDisable={isDisable} onClick={applyHandler}>
            اعمال فیلتر
          </CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default NameSelectorFilters;
