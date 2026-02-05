import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

const siteMetadata = {
  title: 'John Koestner',
  description: 'John Koestner is an actuary and developer specializing in life insurance and financial applications.',
  siteUrl: 'https://johnkoestner.com',
  image: '/og.png',
  twitterUsername: '@jkstreamin',
};

const SEO = ({ title, description, image }) => {
  const router = useRouter();
  const pathname = router.pathname;

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
    url: `${siteMetadata.siteUrl}${pathname}`,
  };

  const fullTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel="canonical" href={seo.url} /> # preferred URL
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};
