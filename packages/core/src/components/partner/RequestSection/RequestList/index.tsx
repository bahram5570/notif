import RequestGenerator from './RequestGenerator';
import { RequestListPropsType } from './type';

const RequestList = ({ list, isMan }: RequestListPropsType) => {
  return (
    <div className="divide-y">
      {list.map((part, index) => (
        <RequestGenerator item={part} key={index} isMan={isMan} />
      ))}
    </div>
  );
};

export default RequestList;
