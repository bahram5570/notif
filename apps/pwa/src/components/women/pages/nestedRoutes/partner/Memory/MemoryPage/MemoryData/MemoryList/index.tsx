import MemoryItem from './MemoryItem';
import { MemoryListPropsType } from './type';

const MemoryList = ({ memories }: MemoryListPropsType) => {
  return (
    <div>
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="divide-y-2">
            <MemoryItem {...memory} currentPage={0} />
          </div>
        );
      })}
    </div>
  );
};

export default MemoryList;
