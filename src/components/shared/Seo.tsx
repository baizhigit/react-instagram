import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

type SeoProps = {
  title: string;
};

function SEO({ title }: SeoProps): ReactElement {
  const titleText = title ? `${title} • Instagram` : 'Instagram';
  return (
    <Helmet>
      <title>{titleText}</title>
    </Helmet>
  );
}

export default SEO;
