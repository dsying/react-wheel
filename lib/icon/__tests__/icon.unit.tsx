import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('icon', () => {
  it('是个icon', () => {
    const json = renderer.create(<Icon name="weixin"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})