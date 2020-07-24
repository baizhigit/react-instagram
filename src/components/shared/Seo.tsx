import React from 'react';
import { Helmet } from 'react-helmet';

type SeoTypes = {
    title: string;
};

function SEO({ title }: SeoTypes): JSX.Element {
    const titleText = title ? `${title} • Instagram` : 'Instagram';
    return (
        <Helmet>
            <title>{titleText}</title>
        </Helmet>
    );
}

export default SEO;
