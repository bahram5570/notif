import { useState } from 'react';

import { useSignDateState } from '../../../../hooks/useSignDateState';
import { SignsItemTypes } from '../../../Widgets/WidgetGenerators/WidgetSignCard/types';
import { SelectedSignsHandlerTypes } from '../../types';

const useSelectedSigns = (initialSelectedSigns: SignsItemTypes[]) => {
  const [selectedSigns, setSelectedSigns] = useState(initialSelectedSigns);
  const { changeSignsStaus } = useSignDateState();

  const selectedSignsHandler: SelectedSignsHandlerTypes = (category, sign) => {
    const selectedIndex = selectedSigns.findIndex((item) => item.category === category && item.sign === sign);

    if (selectedIndex === -1) {
      const result = [...selectedSigns, { category, sign }];
      setSelectedSigns(result);
    } else {
      const result = selectedSigns.filter((_, itemIndex) => itemIndex !== selectedIndex);
      setSelectedSigns(result);
    }
    changeSignsStaus();
  };

  return { selectedSigns, selectedSignsHandler };
};

export default useSelectedSigns;
