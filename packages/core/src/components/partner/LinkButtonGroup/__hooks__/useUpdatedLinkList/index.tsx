import { PARTNER_LINK_LIST } from '../../LinkGenerator/constants';
import { ButtonType } from './type';

const useUpdateLinkList = (button: ButtonType) => {
  const updatePartnerLinkListNames = () => {
    const buttonNames = [button.b1, button.b2, button.b3];
    return PARTNER_LINK_LIST.map((item, index) => ({
      ...item,
      name: buttonNames[index],
    }));
  };
  const updatedPartnerLinkList = updatePartnerLinkListNames();
  return { updatedPartnerLinkList };
};

export default useUpdateLinkList;
