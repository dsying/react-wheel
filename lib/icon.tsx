import React from 'react';
import './importIcons'
import icon from './icon.scss'

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string,
  // onClick: React.MouseEventHandler<SVGElement>,// SVG元素的鼠标事件处理函数
}

const Icon: React.FunctionComponent<IconProps> = ({ name, ...others }) => {
  return (
    <svg className={icon.size} {...others}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;