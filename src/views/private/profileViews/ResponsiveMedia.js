//setup for responsive screen sizing



/* define breakpoints */

const screenSize = {
    smallMobile: '320px',
    mediumMobile: '375px',
    largeMobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    largeLaptop: '1440px',
    desktop: '2560px'
  };

  export const deviceType = {
    smallMobile: `(min-width:${screenSize.smallMobile})`,
    mediumMobile: `(min-width:${screenSize.mediumMobile})`,
    largeMobile: `(min-width: ${screenSize.largeMobile})`,
    tablet: `(min-width: ${screenSize.tablet})`,
    laptop: `(min-width:${screenSize.laptop})`,
    largeLaptop:`(min-width${screenSize.largeLaptop})`,
    desktop: `(min-width:${screenSize.desktop})`
  };