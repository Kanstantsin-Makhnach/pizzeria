import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletLoad = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#edd9d9"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="100" cy="100" r="100" />
    <rect x="4" y="210" rx="5" ry="5" width="191" height="39" />
    <rect x="5" y="260" rx="5" ry="5" width="191" height="39" />
    <rect x="5" y="305" rx="5" ry="5" width="90" height="29" />
    <rect x="112" y="304" rx="19" ry="19" width="90" height="29" />
  </ContentLoader>
);

export default SkeletLoad;
