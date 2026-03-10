import { RequestSectionPropsType } from '../type';

export type PartnerModalsPropsType = Pick<RequestSectionPropsType, 'isMan'>;

export type CommanPropsType = Pick<PartnerModalsPropsType, 'isMan'>;

export type ModalPropsType = CommanPropsType & {
  onCloseModal: () => void;
};
