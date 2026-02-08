import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { AuthorProfileProps } from './type';

const AuthorProfile = (props: AuthorProfileProps) => {
  return (
    <CustomLink href={props.url} className="flex gap-3 mb-12">
      <div className="relative lg:top-0 top-[17px] lg:w-16 lg:h-16 !w-14 !h-14">
        <CustomImage
          fill={true}
          sizes="64px"
          alt={props.name}
          src={props.imageUrl}
          className="rounded-full object-cover lg:w-16 lg:h-16 !w-14 !h-14"
        />
      </div>

      <div className="flex flex-col gap-2 justify-center items-center">
        <CustomTypography
          fontSize="Lable_Large"
          className="!text-impo_Neutral_OnBackground"
        >{`نویسنده:${props.name}`}</CustomTypography>
      </div>
    </CustomLink>
  );
};

export default AuthorProfile;
