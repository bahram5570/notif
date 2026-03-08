import SubscriptionMenGenerator from './SubscriptionMenGenerator';
import { SubscriptionMenCardsTypes } from './types';

const SubscriptionMenCards = ({ packages, currentPackage, currentPackageHandler }: SubscriptionMenCardsTypes) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {packages.map((item, index) => (
        <SubscriptionMenGenerator
          {...item}
          key={index}
          isSelected={item.id === currentPackage.id}
          onSelect={() => currentPackageHandler(item)}
        />
      ))}
    </div>
  );
};

export default SubscriptionMenCards;
