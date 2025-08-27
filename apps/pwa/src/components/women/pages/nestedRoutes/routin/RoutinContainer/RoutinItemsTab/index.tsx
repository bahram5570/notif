import RoutinDiets from '../RoutinDiets';
import { RoutinItemsTabPropsType } from './type';

const RoutinItemsTab = ({ items, name }: RoutinItemsTabPropsType) => {
  return <RoutinDiets name={name} items={items} />;
};

export default RoutinItemsTab;
