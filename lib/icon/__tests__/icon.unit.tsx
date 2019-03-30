import * as renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme'
import Icon from '../icon'

describe('icon', () => {
  it('是个icon', () => {
    const json = renderer.create(<Icon name="weixin"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('icon click event test', () => {
    // jest声明一个 函数
    const fn = jest.fn()
    //const fn2 = jest.fn()

    // enzyme 生成一个Icon组件
    const component = mount(<Icon name="weixin" onClick={fn}/>)
    // 找到Icon组件的svg元素，并模拟 svg元素的 click 事件
    component.find('svg').simulate('click')
    // 期望 jest声明的函数 fn 被调用
    expect(fn).toBeCalled()
  })
})