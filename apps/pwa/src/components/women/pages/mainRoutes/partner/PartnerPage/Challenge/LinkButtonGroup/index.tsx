import LinkGenerator from './LinkGenerator';
import useGetNotReadMessage from './__hooks__/useGetNotReadMessage';
import useUpdateLinkList from './__hooks__/useUpdatedLinkList';
import { LinkButtonGroupPropsType } from './type';

const LinkButtonGroup = ({ button, valid }: LinkButtonGroupPropsType) => {
  const { updatedPartnerLinkList } = useUpdateLinkList(button);
  const { MessageNumber } = useGetNotReadMessage({ valid });

  return (
    <div className="flex flex-row-reverse justify-center items-center gap-3">
      {updatedPartnerLinkList.map((link, index) => {
        return (
          <LinkGenerator {...link} MessageNumber={(MessageNumber && MessageNumber.count) || undefined} key={index} />
        );
      })}
    </div>
  );
};

export default LinkButtonGroup;
