import LinkedContent from '@components/ui/LinkedContent';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { TicketLinkGeneratorPropsType } from './type';

const TicketLinkGenerator = ({ id, title }: TicketLinkGeneratorPropsType) => {
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const handleGetData = (id: string) => {
    const custom = getQueryParams('id');
    const newQuery = custom ? `${custom}-${id}` : id;
    newQueryParamsHandler({ id: newQuery });
  };

  const clickHandler = () => {
    handleGetData(id);
    pageNavigationHandler({ showProgressBar: true, id: 'ticketLinkGenerator' });
  };

  return (
    <LinkedContent onClickHandler={clickHandler} discription={title} className="rounded-xl w-full cursor-pointer" />
  );
};

export default TicketLinkGenerator;
