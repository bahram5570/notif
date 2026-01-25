import OvulationHistoryCardDetailsContainer from '@components/pages/nestedRoutes/OvulationHistoryCardViewAllContainer/OvulationHistoryCardDetailsContainer';

const OvulationHistoryCardDetails = (props: { params: { detailsIndex: string } }) => {
  return <OvulationHistoryCardDetailsContainer detailsIndex={+props.params.detailsIndex} />;
};

export default OvulationHistoryCardDetails;
