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
      <link rel="canonical" href={seo.url} key="canonical" />
      <meta name="description" content={seo.description} key="description" />
      <meta name="image" content={seo.image} key="image" />

      {/* Open Graph */}
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={seo.title} key="og:title" />
      <meta property="og:description" content={seo.description} key="og:description" />
      <meta property="og:image" content={seo.image} key="og:image" />
      <meta property="og:url" content={seo.url} key="og:url" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} key="twitter:creator" />
      <meta name="twitter:title" content={seo.title} key="twitter:title" />
      <meta name="twitter:description" content={seo.description} key="twitter:description" />
      <meta name="twitter:image" content={seo.image} key="twitter:image" />
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
