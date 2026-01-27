import { ChangeHandlerType } from '../../UserInfoPage/type';
import { UserInfoValueInputType } from '../type';

export type ModalPropsType = {
  value: UserInfoValueInputType;
  changeValueHandler: ChangeHandlerType;
};

export interface ChildBirthDateModalPropsType {
  childBirthDate: string;
  onCloseModal: () => void;
  changeValueHandler: ChangeHandlerType;
}
