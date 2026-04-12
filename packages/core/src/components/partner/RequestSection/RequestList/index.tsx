import RequestGenerator from './RequestGenerator';
import { RequestListPropsType } from './type';

const RequestList = ({ list }: RequestListPropsType) => {
  return (
    <div className="divide-y">
      {list.map((part, index) => (
        <RequestGenerator item={part} key={index} />
      ))}
    </div>
  );
};

export default RequestList;
