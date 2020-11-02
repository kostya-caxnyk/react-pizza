import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
    className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="130" cy="121" r="120" />
      <rect x="3" y="264" rx="6" ry="6" width="280" height="20" />
      <rect x="-1" y="299" rx="6" ry="6" width="280" height="84" />
      <rect x="2" y="413" rx="0" ry="0" width="100" height="28" />
      <rect x="122" y="403" rx="26" ry="26" width="148" height="51" />
    </ContentLoader>
  );
};

export default LoadingBlock;
