module.exports = {
  email: 'johnkoestner@outlook.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jkoestner',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/johnkoestner',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jkstreamin',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jkoestner',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    blue: '#3a4660',        // French Laundry Blue
    tan: '#c9af98',         // Comfortably Tan
    peach: '#ed8a63',       // Peachy Kreme
    brown: '#845007',       // Brown Bonnet
    accent: '#ed8a63',      // Primary accent color (Peachy Kreme)
    darkBlue: '#2a3550',    // Darker variant of French Laundry Blue
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
