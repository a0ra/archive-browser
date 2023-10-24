import React from 'react';
import Head from 'next/head';

const K_SITE_NAME = 'Arkiv';
const K_SITE_DESCRIPTION = 'Immortalizing your existence';

type DefaultHeadProps = {
  title?: string;
};

const DefaultHead = (props: DefaultHeadProps) => (
  <Head>
    <title>
      {props.title ? props.title + ' - ' : ''}
      {K_SITE_NAME}
    </title>
    <meta name="title" content={K_SITE_NAME} />
    <meta name="description" content={K_SITE_DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vt.arkiv.in/" />
    <meta property="og:title" content={K_SITE_NAME} />
    <meta
      property="og:image"
      content="https://vt.arkiv.in/favicon.png"
    />
    <meta property="og:description" content={K_SITE_DESCRIPTION} />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:url" content="https://vt.arkiv.in/" />
    <meta property="twitter:title" content={K_SITE_NAME} />
    <meta
      property="twitter:image"
      content="https://vt.arkiv.in/favicon.png"
    />
    <meta property="twitter:description" content={K_SITE_DESCRIPTION} />
    <meta property="twitter:creator" content="@arkivin" />
  </Head>
);

export default DefaultHead;
