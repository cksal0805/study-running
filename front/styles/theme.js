const color = {
  red: '#D65353',
  yellow: '#FBB45C',
  blue: '#04558A',
  pink: '#F9637C',
  black: '#28364A',
  lightBlue: '#D4F0F0',
  lightGrey: '#e5e5e5',
  purple: '#9155e5',
};

const size = {
  mobile: '770px',
  tabletS: '1023px',
  tabletM: '1220px',
  tabletL: '1280px',
  laptop: '1460px',
  desktop: '1700px',
};

const theme = {
  color,
  mobile: `max-width: ${size.mobile}`,
  tabletS: `max-width: ${size.tabletS}`,
  tabletM: `max-width: ${size.tabletM}`,
  tabletL: `max-width: ${size.tabletL}`,
  laptop: `max-width: ${size.laptop}`,
  desktop: `max-width: ${size.desktop}`,
};

export default theme;
