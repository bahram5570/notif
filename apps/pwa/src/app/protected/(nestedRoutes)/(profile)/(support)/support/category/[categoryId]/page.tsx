import SupportContentsPage from '@components/pages/nestedRoutes/profile/Support/SupportContentsPage';

const SupportContents = (props: { params: { categoryId: string } }) => {
  return <SupportContentsPage categoryId={props.params.categoryId} />;
};

export default SupportContents;
