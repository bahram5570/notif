import { PartnerMemoryItem } from '@repo/core/components/partner/PartnerMemoryItem';

import { MemoryListPropsType } from './type';

const MemoryList = ({ memories, partName }: MemoryListPropsType) => {
  return (
    <div>
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="divide-y-2">
            <PartnerMemoryItem {...memory} isMan={true} partName={partName} />
          </div>
        );
      })}
    </div>
  );
};

export default MemoryList;
