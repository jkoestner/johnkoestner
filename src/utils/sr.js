const isSSR = typeof window === 'undefined';

let sr = null;

if (!isSSR) {
  const ScrollReveal = require('scrollreveal').default;
  sr = ScrollReveal();
}

export default sr;
