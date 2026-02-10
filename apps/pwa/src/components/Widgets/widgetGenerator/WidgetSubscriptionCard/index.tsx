import { WidgetCardContainer } from '@repo/core/components/Widgets/WidgetCardContainer';

import SubscriptionGenerator from '@components/SubscriptionGenerator';

import WidgetSubscriptionHeadlineBtn from './WidgetSubscriptionHeadlineBtn';
import { WidgetSubscriptionCardProps } from './types';

const WidgetSubscriptionCard = ({ data }: WidgetSubscriptionCardProps) => {
  return (
    <WidgetCardContainer
      title={data.title}
      button={data.submitButton}
      classNameBtn="text-impo_White !bg-impo_Pink_500 !border-impo_Pink_500"
      titleElement={<WidgetSubscriptionHeadlineBtn {...data.headlineButton} />}
    >
      <SubscriptionGenerator {...data.package} />
    </WidgetCardContainer>
  );
};

export default WidgetSubscriptionCard;
