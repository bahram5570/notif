'use client';

import { useEffect, useState } from 'react';

import { SchemaLoaderTypes } from './types';

const SchemaLoader = (props: SchemaLoaderTypes) => {
  const [isRendered, setIsRendered] = useState(false);

  const id = `SchemaLoader_${props.id}`;

  useEffect(() => {
    if (document?.getElementById(id)) {
      setIsRendered(true);
    }
  }, [id]);

  return (
    <>
      {!isRendered && (
        <script type="application/ld+json" id={id} dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema) }} />
      )}
    </>
  );
};

export default SchemaLoader;
