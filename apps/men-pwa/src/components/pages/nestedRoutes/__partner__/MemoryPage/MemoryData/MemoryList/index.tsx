import { PartnerMemoryItem } from '@repo/core/components/partner/PartnerMemoryItem';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';

import { MemoryListPropsType } from './type';

const MemoryList = ({ memories, partName }: MemoryListPropsType) => {
  return (
    <div>
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="divide-y-2" style={{ paddingBottom: FOOTER_HEIGHT }}>
            <PartnerMemoryItem {...memory} isMan={true} partName={partName} />
          </div>
        );
      })}
    </div>
  );
};

export default MemoryList;
