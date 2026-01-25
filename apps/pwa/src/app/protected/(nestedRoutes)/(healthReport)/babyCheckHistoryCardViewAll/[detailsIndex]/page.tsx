import BabyCheckHistoryCardDetailsContainer from '@components/pages/nestedRoutes/BabyCheckHistoryCardViewAllContainer/BabyCheckHistoryCardDetailsContainer';

const BabyCheckHistoryCardDetails = (props: { params: { detailsIndex: string } }) => {
  return <BabyCheckHistoryCardDetailsContainer detailsIndex={+props.params.detailsIndex} />;
};

export default BabyCheckHistoryCardDetails;
