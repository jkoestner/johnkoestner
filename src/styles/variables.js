import { css } from 'styled-components';

const variables = css`
  :root {
    /* New Color Scheme */
    --dark-navy: #2a3550;
    --navy: #3a4660;
    --light-navy: #4a5670;
    --lightest-navy: #5a6680;
    --navy-shadow: rgba(42, 53, 80, 0.7);
    --dark-slate: #9d8d7e;
    --slate: #c9af98;
    --light-slate: #d4c0ae;
    --lightest-slate: #e0d2c4;
    --white: #f0e8df;
    --green: #ed8a63;
    --green-tint: rgba(237, 138, 99, 0.1);
    --pink: #ed8a63;
    --blue: #3a4660;
    --accent: #ed8a63;
    --accent-tint: rgba(237, 138, 99, 0.1);
    --brown: #845007;
    --tan: #c9af98;
    --peach: #ed8a63;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
