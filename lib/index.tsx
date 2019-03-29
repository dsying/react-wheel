import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e)
  console.log(e.currentTarget)
  console.log((e.currentTarget as SVGUseElement).href)// 断言
}
ReactDOM.render(<div>
  <Icon name='weixin'
        onClick={fn}
        onMouseEnter={() => console.log('enter')}
        onMouseLeave={() => console.log('leave')}
  />
</div>, document.querySelector('#root'));
