import { Fragment } from 'react';

import { Breadcrumbs } from '@mui/material';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { BlogsBreadcrumbTypes } from './types';

const BlogsBreadcrumb = ({ breadcrumbList }: BlogsBreadcrumbTypes) => {
  return (
    <Breadcrumbs className="!text-impo_Surface_Outline">
      <CustomLink href="/">
        <CustomTypography className="pb-2 !text-impo_Surface_Outline" fontSize="Lable_Medium">
          خانه
        </CustomTypography>
      </CustomLink>

      {breadcrumbList.map((item, index) => (
        <Fragment key={index}>
          {typeof item.linkTo === 'undefined' ? (
            <CustomTypography className="pb-2 !text-impo_Surface_Outline" fontSize="Lable_Medium">
              {item.title}
            </CustomTypography>
          ) : (
            <CustomLink href={item.linkTo}>
              <CustomTypography className="pb-2 !text-impo_Surface_Outline" fontSize="Lable_Medium">
                {item.title}
              </CustomTypography>
            </CustomLink>
          )}
        </Fragment>
      ))}
    </Breadcrumbs>
  );
};

export default BlogsBreadcrumb;
