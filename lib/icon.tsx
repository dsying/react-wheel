import React from 'react';
import './importIcons'
import icon from './icon.scss'
import classes from './helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string,
  // onClick: React.MouseEventHandler<SVGElement>,// SVG元素的鼠标事件处理函数
}

const Icon: React.FunctionComponent<IconProps> = ({ name, className, ...others }) => {
  console.log(className)
  return (
    <svg className={classes(icon.size,className)} {...others}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;