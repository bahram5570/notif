import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { TITLE_LIST } from './constant';
import { NamesTableProps } from './type';

const NamesTable = ({ list, bgColor1, bgColor2, borderColor, titleBgColor, titleColor }: NamesTableProps) => {
  return (
    <div className="w-full mx-auto rounded-xl overflow-hidden">
      <table className="w-full border-collapse text-center font-sans text-[1.45rem] mobile:text-[1.25rem]">
        <thead>
          <tr className={`text-impo_White ${titleBgColor}`}>
            {TITLE_LIST.map((title, index) => {
              return (
                <th className={`py-3 px-4 uppercase tracking-wider font-bold border-[1px] ${borderColor}`} key={index}>
                  <CustomTypography fontSize="Title_Small" className={titleColor}>
                    {title}
                  </CustomTypography>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {list.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? bgColor2 : bgColor1}`}>
              <td className={`py-3 px-4 border-[1px] ${borderColor}`}>
                <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
                  {item.title}
                </CustomTypography>
              </td>
              <td className={`py-3 px-4 border-[1px] ${borderColor}`}>
                <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
                  {item.description}
                </CustomTypography>
              </td>
              <td className={`py-3 px-4 border-[1px] ${borderColor}`}>
                <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
                  {item.rootName || '-'}
                </CustomTypography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NamesTable;
