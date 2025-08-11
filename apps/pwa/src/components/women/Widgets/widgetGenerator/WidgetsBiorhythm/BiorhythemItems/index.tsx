import BiorhythemItem from './BiorhythemItem';
import { BiorhythmItemsPropsType } from './type';

const BiorhythemItems = ({ items }: BiorhythmItemsPropsType) => {
  return (
    <>
      {items.map((item, index) => {
        return <BiorhythemItem key={index} {...item} />;
      })}
    </>
  );
};

export default BiorhythemItems;
