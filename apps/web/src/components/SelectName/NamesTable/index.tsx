import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { TITLE_LIST } from './constant';
import { NamesTableProps } from './type';

const NamesTable = ({ list, bgColor1, bgColor2, borderColor, titleBgColor }: NamesTableProps) => {
  return (
    <div className="w-full mx-auto rounded-xl overflow-hidden">
      <table className="w-full border-collapse text-center font-sans text-[1.45rem] mobile:text-[1.25rem]">
        <thead>
          <tr style={{ color: COLORS_LIST.White, backgroundColor: COLORS_LIST[titleBgColor] }}>
            {TITLE_LIST.map((title, index) => {
              return (
                <th
                  className="py-3 px-4 uppercase tracking-wider font-bold"
                  key={index}
                  style={{ border: `1px solid ${COLORS_LIST[borderColor]}` }}
                >
                  <CustomTypography fontSize="Title_Small" color={'Primary_OnPrimary'}>
                    {title}
                  </CustomTypography>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {list.map((item, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? COLORS_LIST[bgColor2] : COLORS_LIST[bgColor1] }}
            >
              <td className="py-3 px-4 " style={{ border: `1px solid ${COLORS_LIST[borderColor]}` }}>
                <CustomTypography fontSize="Body_Medium" color={'Neutral_OnBackground'}>
                  {item.title}
                </CustomTypography>
              </td>
              <td className="py-3 px-4 " style={{ border: `1px solid ${COLORS_LIST[borderColor]}` }}>
                <CustomTypography fontSize="Body_Medium" color={'Neutral_OnBackground'}>
                  {item.description}
                </CustomTypography>
              </td>
              <td className="py-3 px-4 " style={{ border: `1px solid ${COLORS_LIST[borderColor]}` }}>
                <CustomTypography fontSize="Body_Medium" color={'Neutral_OnBackground'}>
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
