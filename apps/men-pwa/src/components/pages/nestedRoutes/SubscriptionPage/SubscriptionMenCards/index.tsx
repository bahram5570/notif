import SubscriptionMenGenerator from './SubscriptionMenGenerator';
import { SubscriptionMenCardsTypes } from './types';

const SubscriptionMenCards = ({ packages, currentPackageId, currentPackageHandler }: SubscriptionMenCardsTypes) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {packages.map((item, index) => (
        <SubscriptionMenGenerator
          {...item}
          key={index}
          isSelected={item.id === currentPackageId}
          onSelect={() => currentPackageHandler(item.id)}
        />
      ))}
    </div>
  );
};

export default SubscriptionMenCards;
