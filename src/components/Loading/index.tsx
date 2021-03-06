import React from 'react';
import darkSVG from '../../assets/dust-1s-1084px.png';
import lightSVG from '../../assets/point-1s-1084px.png';
import './Loading.scss';

interface Props {
    theme: string;
    className: string| null;
}

const index: React.FC<Props> = ({ theme, className, children }) => (
  <div className={`loading ${theme || 'dark'} ${className}`}>
    <div>
      <div style={{ backgroundImage: theme === 'dark' ? `url(${darkSVG})` : `url(${lightSVG})` }} />
      {children}
    </div>
  </div>
);

export default index;
